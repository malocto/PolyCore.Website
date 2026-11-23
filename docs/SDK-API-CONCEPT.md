# C# Core and WinUI 3 Architecture Concept

## Target architecture

```text
PolyCore.Desktop (WinUI 3 / Windows)
  ├─ Views, ViewModels, Commands
  ├─ Viewport host and scene explorer
  └─ Import / Convert / Batch / Export UI
        ↓
PolyCore.Framework (C# application services)
  ├─ File orchestration and jobs
  ├─ Format capability registry
  ├─ Conversion profiles and diagnostics
  └─ Plugin/module lifecycle
        ↓
PolyCore.Core (C# domain and data model)
  ├─ Scene, nodes, geometry, materials, metadata
  ├─ Capability contracts
  └─ Validation and common errors
        ↓
Format adapters / modules
  ├─ JT adapter (existing parser integration)
  ├─ Mesh/asset readers and writers (planned/evaluated)
  └─ CAD / engineering modules (roadmap, fidelity varies)
```

## JT parser integration status
The existing C#/.NET 10 JT parser is integrated source-first as `PolyCore.Formats.JT`, behind the
`PolyCore.Core` contracts. The adapter is currently read-only; it buffers the input stream into
memory. It maps the full LSG hierarchy into the neutral document model, including world transforms,
instance fan-out and optional opaque source payloads.

**SDK-API-CONCEPT review (2026-11-23)** — findings recorded in `../PolyCore/docs/archive/Hardening_Plan.md`:

- **x86/x64/ARM64 support** — the reader has no architecture-specific code or intrinsics (only
  portable `unchecked` bit reinterpretation); public CI runs the `windows-latest` (x64) runner.
  Recommendation: add an ARM64 runner leg when a compatible runner becomes available.
- **Large-file spooling** — `JtFile.Parse` reads the whole file via `File.ReadAllBytes`; the
  inflate/ZLIB and XZ paths allocate full payload buffers. Roadmap: spool oversized files to
  temp storage instead of holding the entire file in memory.
- **Thread-safety** — verified and now enforced: `JtFile` caches decoded segments in a
  `ConcurrentDictionary` (`TryGetSegment` uses `GetOrAdd`, so concurrent loads cannot race the
  former `Dictionary.Add` duplicate-key exception) and `JtFile.Scene` is guarded by a lock.
- **Cancellation depth** — the reader API is synchronous (`JtFile.Parse`, `JtSegment.Read`,
  element decoding); cancellation is the caller's business. Roadmap: expose long-running reads as
  `Task`/`CancellationToken` operations via `PolyCore.Framework` jobs.
- **Error-handling conventions** — `InvalidDataException` for malformed/truncated input,
  `EndOfStreamException` on short buffers, `KeyNotFoundException` for unknown IDs,
  `ArgumentOutOfRangeException`/`ArgumentException` for invalid arguments — enforced by the
  fuzz/malformed tests (`MalformedInputTests`, `MalformedCorpusFuzzTests`, `Int32CodecTests`
  fuzz additions).
- **Logging** — the reader throws without emitting logs; diagnostics live in the Framework
  (`PolyCore.Framework` job diagnostics). Recommendation: optional structured log hook for
  malformed-input events in a later phase.
- **Versioning and package/deployment** — `VersionPrefix 0.2.0`, SourceLink, PDBs/snupkg and README
  packed for packages; public CI (restore → build → test → `dotnet list package --vulnerable
  --include-transitive`) has no publish workflow (decision: publish when 1.0.0/legal terms are
  ready); the vulnerability scan is green today.

## Adapter contract (illustrative)
```csharp
public interface IFormatAdapter
{
    FormatDescriptor Descriptor { get; }
    Task<ImportResult> ImportAsync(Stream input, ImportOptions options, CancellationToken cancellationToken);
    Task<ExportResult> ExportAsync(SceneDocument document, Stream output, ExportOptions options, CancellationToken cancellationToken);
}
```

The JT adapter may expose read-only inspection initially, with write support only if the parser/serializer supports it. Do not infer capability from extension alone.

## Data model
A shared scene document may contain nodes, transforms, mesh geometry, materials, textures, cameras, lights, animation data, metadata and source-specific payloads. Unsupported or untranslatable properties should be reported explicitly.

## UI architecture
Use WinUI 3 with MVVM separation: view state and commands in ViewModels; import/export/job orchestration in services; scene and format capabilities in Core. Keep format-specific implementation out of UI code.

## Prototype status
Website code samples are illustrative, not a committed API. Naming, async patterns and contracts should be validated against the actual repository and parser.

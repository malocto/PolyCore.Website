# Release Notes (Concept — Not a Released Product)

## State

Concept documentation only. There is no publicly released PolyCore desktop product, no subscription and no support offering. All statements below describe the tested internal/unreleased state, not a release commitment.

Current reality (2026-11-25): public packages are version 0.3.0 in the local feed; the WinUI 3 x64 desktop app is internal and unreleased; NuGet publication, licensing terms and support SLAs remain deferred by owner decision.

## Version lineage

| Version | State | Notes |
| --- | --- | --- |
| 0.3.0 | Tested (local feed) | Apache-2.0 open core, JT 9.5/10.5 read adapter, OBJ/STL/PLY/glTF read-write adapters, Framework jobs and registry, CLI tooling. |
| 0.3.1+ | Planned | Only with a real public contract change; no version bump without one. No 0.4.0 or 1.0.0 claim. |

## Tested capability boundaries

- JT reader: 9.5 and 10.5 only, tessellated geometry, hierarchy, transforms and optional opaque payloads; no JT writer.
- Read/write adapters: OBJ (geometry with per-corner UVs; MTL/textures unsupported), STL (ASCII/binary geometry), PLY (vertices/normals/colors), glTF 2.0/GLB (embedded buffers only).
- Default test suite is precondition-gated on gitignored fixtures: 72/72 without fixtures; full solution with the partial canonical set reports 165 passed, 3 named skips, 0 failed (168 total); 168/168 only with the complete fixture set via `-WithFixtures`. No fabricated pass counts.
- Bulk corpus decode gate: scan-within-budget passes; golden-baseline gate is fixture-aware: 20 rows verified and 6 explicit `SKIP-FIXTURE` diagnostics in the partial set; 26/26 only with the complete fixture set; not auto-refreshed.

## Desktop app (internal, unreleased)

- WinUI 3 x64, Windows App SDK 2.6.5, .NET 10; unpackaged standalone build only.
- Batch queue with progress, cancel, retry and JSON persistence; watched folders with settled-file debounce and diagnostics; clean window-close exit.
- No MSIX, Store packaging, signing, ARM64 build or public download of the desktop app.

## Links

- [Product brief](PRODUCT-BRIEF.md)
- [Format matrix](FORMAT-MATRIX.md)
- [Platform compatibility](PLATFORM-COMPATIBILITY.md)
- [Security and licensing concept](SECURITY-LICENSING.md)
- [API concept](SDK-API-CONCEPT.md)
- [Support placeholder](SUPPORT.md)
- [Legal placeholder](LEGAL-PLACEHOLDER.md)

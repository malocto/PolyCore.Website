# Format Capability Roadmap

The website matrix is a planning view; statements here distinguish verified implementation from roadmap items. State labels: concept (unbuilt), internal (desktop app), tested (verified adapters), planned (not yet built). Capability is determined by the specific adapter and tested file variants.

Current reality (2026-11-25): desktop app = internal, not publicly released; JT 9.5/10.2/10.5 reader = tested; OBJ/STL/PLY/glTF read-write = tested; FBX/USD/STEP/IGES/IFC and JT writer = planned.

## Verified adapters
- **JT read (state: tested):** C#/.NET 10 JT 9.5/10.2/10.5 reader in `PolyCore.Formats.JT`, with hierarchy, transforms,
  tessellation, mapped enterprise metadata keys and a PMI presence/version census; payload bytes stay raw.
  Semantic PMI/GD&T and exact B-Rep decode are roadmap items. No JT writer (state: planned).
- **OBJ read/write (state: tested):** `PolyCore.Formats.Obj`, geometry with per-corner UVs (`v/vt`, `v/vt/vn`, negative indices); file-path imports expose sibling MTL values as metadata (traversal rejected); textures and MTL export unsupported.
- **STL read/write (state: tested):** `PolyCore.Formats.Stl`, ASCII and binary; geometry only.
- **PLY read/write (state: tested):** `PolyCore.Formats.Ply`, ASCII and binary; vertices, normals and colors.
- **glTF 2.0/GLB read/write (state: tested):** `PolyCore.Formats.Gltf`, embedded buffers and relative external buffers on file-path imports (absolute paths and traversal rejected); PBR factors exposed as metadata;
  no textures, Draco/meshopt, animation, skinning or morph targets.

## Capability-specific matrix

State labels: `tested` = verified by tests; `internal` = implemented in the internal desktop app (not publicly released); `planned` = on the roadmap but not built; `research` = feasibility not yet confirmed. Read/write support does not imply full fidelity for every feature.

| Format family | Read | Write | Scene/assembly | Materials/textures | State |
| --- | --- | --- | --- | --- | --- |
| JT 9.5 / 10.2 / 10.5 | tested | unsupported (planned) | tested (hierarchy, transforms) | opaque payloads only | tested |
| OBJ | tested | tested | unsupported | per-corner UVs; no MTL/textures | tested |
| STL | tested | tested | unsupported | unsupported | tested |
| PLY | tested | tested | unsupported | colors only | tested |
| glTF 2.0 / GLB | tested | tested | basic geometry/transforms | embedded buffers only | tested |
| FBX | planned | planned | research | research | planned |
| USD / USDZ | planned | planned | research | research | planned |
| STEP | research | research | research | unsupported | research |
| IGES | research | research | research | unsupported | research |
| IFC | research | research | research | unsupported | research |
| JT writer | unsupported | research | research | unsupported | planned |

## Priority groups
- **Common mesh/asset candidates:** STL, glTF/GLB, PLY (state: tested); FBX, 3MF (state: planned).
- **Scene and interchange candidates:** USD/USDZ, DAE (state: planned).
- **Engineering candidates:** STEP, IGES, IFC (state: research — feasibility not yet confirmed). These require separate evaluation of geometry, topology, metadata and semantic fidelity.

For every format, track: read, write, preview, geometry, materials, textures, animation, metadata, scene hierarchy, units, coordinate systems, tested variants, known limitations, dependency/licensing and edition entitlement.

## JT acceptance plan
1. Inventory parser features and supported JT versions/variants.
2. Establish a representative corpus and expected outputs.
3. ~~Measure load time and memory on small/medium/large files.~~ Done: see public `docs/BENCHMARKING.md`.
4. Validate hierarchy, transforms, tessellation, metadata and assembly structure.
5. Test cancellation, malformed files and error reporting.
6. Source integration is decided (source-first adapter); redistribution obligations remain open.

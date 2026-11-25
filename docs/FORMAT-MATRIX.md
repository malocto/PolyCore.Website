# Format Capability Roadmap

The website matrix is a planning view; statements here distinguish verified implementation from roadmap items. State labels: concept (unbuilt), internal (desktop app), tested (verified adapters), planned (not yet built). Capability is determined by the specific adapter and tested file variants.

Current reality (2026-11-25): desktop app = internal, not publicly released; JT 9.5/10.5 reader = tested; OBJ/STL/PLY/glTF read-write = tested; FBX/USD/STEP/IGES/IFC and JT writer = planned.

## Verified adapters
- **JT read (state: tested):** C#/.NET 10 JT 9.5/10.5 reader in `PolyCore.Formats.JT`, with hierarchy, transforms,
  tessellation and optional opaque payloads. No JT writer (state: planned).
- **OBJ read/write (state: tested):** `PolyCore.Formats.Obj`, geometry subset only; MTL/textures unsupported.
- **STL read/write (state: tested):** `PolyCore.Formats.Stl`, ASCII and binary; geometry only.
- **PLY read/write (state: tested):** `PolyCore.Formats.Ply`, ASCII and binary; vertices, normals and colors.
- **glTF 2.0/GLB read/write (state: tested):** `PolyCore.Formats.Gltf`, embedded buffers only; no external URIs,
  Draco/meshopt, animation, skinning or morph targets.

## Priority groups
- **Common mesh/asset candidates:** STL, glTF/GLB, PLY (state: tested); FBX, 3MF (state: planned).
- **Scene and interchange candidates:** USD/USDZ, DAE (state: planned).
- **Engineering candidates:** STEP, IGES, IFC (state: planned). These require separate evaluation of geometry, topology, metadata and semantic fidelity.

For every format, track: read, write, preview, geometry, materials, textures, animation, metadata, scene hierarchy, units, coordinate systems, tested variants, known limitations, dependency/licensing and edition entitlement.

## JT acceptance plan
1. Inventory parser features and supported JT versions/variants.
2. Establish a representative corpus and expected outputs.
3. ~~Measure load time and memory on small/medium/large files.~~ Done: see public `docs/BENCHMARKING.md`.
4. Validate hierarchy, transforms, tessellation, metadata and assembly structure.
5. Test cancellation, malformed files and error reporting.
6. Source integration is decided (source-first adapter); redistribution obligations remain open.

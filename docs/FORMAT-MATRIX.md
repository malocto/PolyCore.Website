# Format Capability Roadmap

The website matrix is a planning view; statements here distinguish verified implementation from roadmap items. Capability is determined by the specific adapter and tested file variants.

## Verified adapters
- **JT read:** C#/.NET 10 JT 9.5/10.5 reader in `PolyCore.Formats.JT`, with hierarchy, transforms,
  tessellation and optional opaque payloads. No JT writer.
- **OBJ read/write:** `PolyCore.Formats.Obj`, geometry subset only; MTL/textures unsupported.
- **STL read/write:** `PolyCore.Formats.Stl`, ASCII and binary; geometry only.
- **PLY read/write:** `PolyCore.Formats.Ply`, ASCII and binary; vertices, normals and colors.
- **glTF 2.0/GLB read/write:** `PolyCore.Formats.Gltf`, embedded buffers only; no external URIs,
  Draco/meshopt, animation, skinning or morph targets.

## Priority groups
- **Common mesh/asset candidates:** STL, glTF/GLB, FBX, 3MF, PLY.
- **Scene and interchange candidates:** USD/USDZ, DAE.
- **Engineering candidates:** STEP, IGES, IFC. These require separate evaluation of geometry, topology, metadata and semantic fidelity.

For every format, track: read, write, preview, geometry, materials, textures, animation, metadata, scene hierarchy, units, coordinate systems, tested variants, known limitations, dependency/licensing and edition entitlement.

## JT acceptance plan
1. Inventory parser features and supported JT versions/variants.
2. Establish a representative corpus and expected outputs.
3. Measure load time and memory on small/medium/large files.
4. Validate hierarchy, transforms, tessellation, metadata and assembly structure.
5. Test cancellation, malformed files and error reporting.
6. Determine source integration vs DLL wrapper and redistribution obligations.

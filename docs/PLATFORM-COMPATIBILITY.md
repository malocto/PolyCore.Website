# Platform Compatibility (Concept — Tested Boundaries)

## State

Concept documentation describing the tested internal/unreleased state. No released product or support promise is implied. Current reality (2026-11-25): public packages 0.3.0, desktop app internal/unreleased, publish and legal deferred.

## Tested platform matrix

| Component | State | Tested / supported environment |
| --- | --- | --- |
| Public core/framework packages (0.3.0) | Tested | .NET 10 (`net10.0`), cross-platform library code; CI on GitHub Actions. |
| JtFormat CLI | Tested | .NET 10; Windows x64 verification workstation. |
| Desktop app | Internal / Tested | Windows 10/11 x64, WinUI 3 (`net10.0-windows10.0.26100.0`), Windows App SDK 2.6.5, unpackaged standalone build. |
| Desktop app on ARM64 | Planned | No ARM64 build or CI; requires a release decision. |
| Desktop app via MSIX/Store | Planned / Deferred | No manifest, signing or packaging; requires a release decision. |

## Format coverage summary

See the [format matrix](FORMAT-MATRIX.md) for capability-specific tested, planned and research labels. JT 9.5/10.2/10.5 read (10.2 partial geometry) and OBJ/STL/PLY/glTF read-write are tested; FBX/USD/STEP/IGES/IFC and the JT writer are planned/research, not implemented.

## Known boundaries

- JT versions other than 9.5/10.2/10.5 are unsupported; 10.2 is tested with partial geometry.
- Native Helix viewport resources are disposed on window close for a clean exit; verified on the x64 Release surface only.
- Repeated-import lifecycle smoke covers three local fixtures with clean exit and unchanged crash log (see internal QA evidence).

## Links

- [Release notes](RELEASE-NOTES.md)
- [Format matrix](FORMAT-MATRIX.md)
- [Product brief](PRODUCT-BRIEF.md)
- [Security and licensing concept](SECURITY-LICENSING.md)

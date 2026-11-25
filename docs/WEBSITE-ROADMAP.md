# Website Roadmap

## Current concept pages
Home, Features, Formats, Developers, Pricing.

## Architecture update
Present PolyCore as a C#/.NET 10 core/framework with an internal WinUI 3 Windows desktop app (state: internal, not publicly released). Feature language should reflect proposed capability, not claim implemented behavior. State labels: concept (unbuilt pages), internal (desktop app), tested (JT 9.5/10.5 reader, OBJ/STL/PLY/glTF read-write), planned (FBX/USD/STEP/IGES/IFC, JT writer). Mention the existing C# JT reader and read-only `PolyCore.Formats.JT` adapter as the implemented technical foundation.

Current reality (2026-11-25): desktop app = internal, not publicly released; JT 9.5/10.5 reader = tested; OBJ/STL/PLY/glTF read-write = tested; FBX/USD/STEP/IGES/IFC and JT writer = planned.

## Professionalization priorities
1. Replace concept illustrations with real screenshots as UI implementation matures.
2. ~~Publish JT capability details only after parser validation.~~ Done: validated reader and
   committed compatibility matrix in the public repo.
3. Create release notes, supported Windows/.NET versions, compatibility table and security/licensing pages.
4. ~~Add benchmark methodology and reproducible test results.~~ Done: `docs/BENCHMARKING.md` in the
   public repo; link from this site when publishing is allowed.
5. Add documentation navigation, API reference and support/contact workflows.
6. Make format matrix capability-specific and mark planned, tested and released states separately.
7. Ensure transparent image assets have real alpha channels and optimize file size.

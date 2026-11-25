# PolyCore Product Concept Website

Responsive multi-page concept website for PolyCore, a planned Windows-first 3D file-format library/toolkit. Technical positioning: **C# core/framework + internal WinUI 3 Windows desktop app (state: internal, not publicly released)**. The JT reader in the sibling `../PolyCore/` workspace is the working technical foundation. The desktop app and additional format support are roadmap items. This folder is an independent git repository, extracted from the public repo during the 2026-11-23 restructure.

Current reality (2026-11-25): desktop app state = internal, not publicly released; JT 9.5/10.5 reader state = tested; OBJ/STL/PLY/glTF read-write state = tested; FBX/USD/STEP/IGES/IFC and JT writer state = planned.

## Pages
- `index.html` — landing page
- `features.html` — feature showcase
- `formats.html` — capability planning matrix
- `developers.html` — architecture and illustrative C# SDK concept
- `pricing.html` — proposed editions

## Run
Open `index.html` in a modern browser. Static site; no build system required.

## Assets
`assets/` contains both concept illustrations and three real, unmodified screen captures of the internal x64 Release desktop app: `polycore-viewer-jt95-real.png`, `polycore-batch-mixed-statuses-real.png` and `polycore-watched-folders-real.png`. Source fixtures, exact capture commands and observed states are recorded in `assets/SCREENSHOT-MANIFEST.txt`. The 12 concept PNGs remain for unbuilt/planning sections only. `polycore-studio-ui-transparent.png` is a transparent-background composite concept visual; verify the alpha channel when reusing it. No `.jt` or `.pdf` fixture is stored in this repository.

## Status
Website and UI imagery are design concepts, not shipped software. Format support, API examples, pricing and feature availability require implementation and validation. See `docs/`.

## Visual asset integration

The homepage now includes a responsive product visual gallery using the existing concept artwork. Transparent PNG cutouts (`polycore-engine-cutout.png` and `polycore-studio-ui-transparent.png`) are composited over CSS backgrounds, while interface concept images remain framed in dark panels. The gallery includes alt text and a concept disclaimer.

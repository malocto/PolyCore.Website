# PolyCore Product Concept Website

Responsive multi-page concept website for PolyCore, a planned Windows-first 3D file-format library/toolkit. Technical positioning: **C# core/framework + planned WinUI 3 Windows client**. The JT reader in the sibling `../PolyCore/` workspace is the working technical foundation; no DLL acquisition is pending. The desktop client and additional format support are roadmap items. This folder is an independent git repository, extracted from the public repo during the 2026-11-23 restructure.

## Pages
- `index.html` — landing page
- `features.html` — feature showcase
- `formats.html` — capability planning matrix
- `developers.html` — architecture and illustrative C# SDK concept
- `pricing.html` — proposed editions

## Run
Open `index.html` in a modern browser. Static site; no build system required.

## Assets
`assets/` contains concept illustrations. `polycore-studio-ui-transparent.png` is a transparent-background composite concept visual. Verify the alpha channel when reusing assets.

## Status
Website and UI imagery are design concepts, not shipped software. Format support, API examples, pricing and feature availability require implementation and validation. See `docs/`.

## Visual asset integration

The homepage now includes a responsive product visual gallery using the existing concept artwork. Transparent PNG cutouts (`polycore-engine-cutout.png` and `polycore-studio-ui-transparent.png`) are composited over CSS backgrounds, while interface concept images remain framed in dark panels. The gallery includes alt text and a concept disclaimer.

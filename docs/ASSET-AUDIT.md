# Asset Audit (2026-11-25)

## Real screenshots

All three real captures are unmodified screen recordings of the standalone x64 Release app, with a manifest at `assets/SCREENSHOT-MANIFEST.txt` naming the source fixture and capture command.

| File | Dimensions | Pixel format | Real alpha | Size |
| --- | --- | --- | --- | --- |
| polycore-viewer-jt95-real.png | 1120x760 | 32bpp ARGB | yes | 101.6 KB |
| polycore-batch-mixed-statuses-real.png | 1120x760 | 32bpp ARGB | yes | 99.5 KB |
| polycore-watched-folders-real.png | 1120x760 | 32bpp ARGB | yes | 102.2 KB |

## Concept art transparency

| File | Dimensions | Pixel format | Real alpha | Size |
| --- | --- | --- | --- | --- |
| polycore-engine-cutout.png | 1536x1024 | 32bpp ARGB | yes | 2636.6 KB |
| polycore-studio-ui-transparent.png | 1536x1024 | 32bpp ARGB | yes | 2162.2 KB |

Both transparent concept assets have real alpha channels (not placeholder transparency) and are pixel-identical to the reviewed originals after lossless PNG re-encoding: 2696.7 KB to 2636.6 KB and 2247.6 KB to 2162.2 KB (see evidence task-1).

## Verification

Dimensions and pixel format measured with `System.Drawing.Image.FromFile` and `PixelFormat`; sizes from `FileInfo.Length`. Lossless optimization verified with Pillow RGBA byte equality, dimensions and alpha extrema (evidence task-1). No screenshot is composited or edited. No fixture or generated export is committed to the website repository.

## Links

- [Website roadmap](WEBSITE-ROADMAP.md)
- [Product brief](PRODUCT-BRIEF.md)
- [Format matrix](FORMAT-MATRIX.md)

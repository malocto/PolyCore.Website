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
| polycore-engine-cutout.png | 1536x1024 | 32bpp ARGB | yes | 2696.7 KB |
| polycore-studio-ui-transparent.png | 1536x1024 | 32bpp ARGB | yes | 2247.6 KB |

Both transparent concept assets have real alpha channels (not placeholder transparency). Their file sizes remain large; lossless optimization is a deferred hygiene item and is not applied here to avoid altering reviewed concept art.

## Verification

Measured with `System.Drawing.Image.FromFile` and `PixelFormat`; sizes from `FileInfo.Length`. No screenshot is composited or edited. No fixture or generated export is committed to the website repository.

## Links

- [Website roadmap](WEBSITE-ROADMAP.md)
- [Product brief](PRODUCT-BRIEF.md)
- [Format matrix](FORMAT-MATRIX.md)

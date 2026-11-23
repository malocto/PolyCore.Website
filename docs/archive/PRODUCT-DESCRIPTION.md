# PolyCore — Produktbeschreibung

> **Historisches Dokument** — archiviert 2026-11-23. Aktuelle Produktbeschreibung:
> `../PRODUCT-BRIEF.md` (EN) und `../../README.md`.

## Zusammenfassung
PolyCore ist ein geplantes Windows-first Produkt zur Verarbeitung, Inspektion und Konvertierung von 3D-Dateien. Die Software soll aus einem C# Core und C# Framework bestehen. Als Windows GUI ist ein WinUI 3 Client auf Basis eines Windows Client Templates vorgesehen.

Der bereits vorhandene C#/.NET 10 JT Parser ist die technische Basis und ist quellseitig über `PolyCore.Core` und den lesenden `PolyCore.Formats.JT` Adapter integriert. Eine DLL- oder Fremdintegration ist nicht erforderlich.

## Produktmodule
- **PolyCore.Core:** gemeinsames Datenmodell, Scene/Node/Geometry, Metadaten, Validierung, Capability Contracts.
- **PolyCore.Framework:** Import/Export Orchestrierung, Format Registry, Job Queue, Diagnostics, Conversion Profiles.
- **PolyCore.Formats:** modulare Formatadapter; JT ist der erste zu evaluierende Adapter.
- **PolyCore.Desktop:** WinUI 3 Client mit Viewport, Scene Explorer, Properties, Import/Export, Conversion und Batch Queue.
- **PolyCore.Tools (Roadmap):** Optimierung, Automatisierung, Performance Diagnostics und Enterprise Funktionen.

## JT Integration
Vor Integration: Parser capabilities und JT Varianten inventarisieren; Testkorpus aufbauen; Geometrie, Assembly-Struktur, Transformationshierarchie, Metadaten, Einheiten und Tesselierung validieren; Performance und Fehlerfälle messen. Source integration wird bevorzugt, sofern Lizenz und Wartbarkeit passen. DLL reuse ist möglich, wenn API, ABI/Architektur, Dependencies und Deployment stabil sind.

## Formatstrategie
JT zuerst. Danach nach Kundenbedarf und Aufwand Common mesh/asset formats (OBJ, STL, glTF/GLB, FBX, PLY, 3MF), scene interchange (USD/USDZ, DAE) und engineering formats (STEP, IGES, IFC). Die Unterstützung ist je Format und Datenkategorie zu spezifizieren; keine pauschale Lossless-Kompatibilität versprechen.

## Commercial Editions (Hypothese)
Free: Lesen/Inspektion ausgewählter Formate. Pro: zusätzliche Adapter, Conversion und Editing. Studio: Batch, Automation, Optimizer und Teamwork. Enterprise: Deployment-/Lizenzmodelle, Integration, Support und SLA. Preise, Feature-Bundles und Lizenzmechanik müssen durch Marktvalidierung konkretisiert werden.

## Designsystem
Midnight/Graphite als Oberflächen; Signal Yellow `#FFD84D` für Primäraktionen; Cyan `#35D9F4` für technische Daten; Violet `#9B7BFF` für Premium; Mint für Erfolg. Feature-Bilder sind Konzeptvisualisierungen und sollten transparent compositing-fähige PNGs nutzen.

## Status
Produkt, Website, API-Snippets, Pricing und Feature-Visuals sind Konzeptentwürfe. Die echte Implementierung und Format-Fidelity müssen anhand des vorhandenen JT Parsers und eines Testkorpus validiert werden.

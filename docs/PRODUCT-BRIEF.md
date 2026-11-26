# PolyCore Product Brief

## Product definition
PolyCore is a Windows-first 3D file-format library and desktop toolkit. The planned backend is a C# core and C# framework; the desktop GUI is based on a WinUI 3 Windows client template. It provides a unified model for reading, inspecting, processing and (where supported) writing 3D data.

## Technical foundation
- **Core & framework:** C# / .NET
- **Desktop GUI:** WinUI 3, Windows client
- **Architecture:** modular format adapters, shared scene/data model, service layer, job orchestration, diagnostics
- **Existing asset:** a working C#/.NET 10 JT 9.5/10.2/10.5 reader in the sibling `../PolyCore/` repository, already integrated source-first behind `PolyCore.Core` contracts through a read-only JT adapter.

## Product goals
1. Reliable 3D file access and inspection.
2. A consistent data model across format-specific capabilities.
3. Desktop workflows for preview, metadata, conversion and batch jobs.
4. Commercially tiered optional tools and enterprise capabilities.
5. Clear capability reporting rather than unsupported blanket format claims.

## Proposed editions
- **Free:** selected read/inspect capabilities, sample workflows.
- **Pro:** additional format modules, editing tools and conversion options.
- **Studio:** batch jobs, automation, advanced processing and team workflows.
- **Enterprise:** custom deployment/licensing, integration support, policy controls and SLA options. Pricing and entitlements are hypotheses to validate.

## Initial scope
Prioritize JT integration and inspection, common mesh/asset formats, a consistent import/export abstraction, viewport preview, scene hierarchy, metadata/property inspection, conversion profiles and a batch queue. Advanced CAD semantics and format fidelity must be evaluated per format.

## Non-goals for initial prototype
- Claiming full fidelity for all formats.
- Replacing full-featured CAD authoring applications.
- Shipping every format writer before capability and licensing review.
- Presenting the concept website or UI mockups as implemented software.

## Success measures
Format-specific test coverage, successful import rates on representative corpora, data fidelity checks, load/export performance, crash-free jobs, usability of workflows and customer validation.

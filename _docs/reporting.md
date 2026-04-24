---
title: Reporting & AI Insights
description: How SPECTRA generates analytical reports with LLM-assisted summaries and analyst approval.
category: Features
order: 4
---

## The Report Workflow

SPECTRA's reporting module bridges the gap between statistical analysis and regulatory-ready documentation. The workflow has three stages:

### 1. Select Graphs for the Report

As you work through the analysis modules (batch profiling, process charts, PCA, PLS, correlation), each chart has a "Add to Report" action. Selected graphs are queued with their derived statistics — control limits, violation counts, PCA loadings, and regression coefficients.

### 2. AI-Generated Insights

For each selected graph, SPECTRA feeds the derived statistics into an LLM that generates a plain-language analytical summary. For example, a process parameter analysis chart might produce:

> "The parameter pH showed 4 violations across 12 batches analyzed at ±3σ, affecting 2 unique batches (16.7% violation rate). All violations were UCL breaches classified as major. Batch B-0042 had the worst deviation at +4.2σ above centerline."

The analyst then reviews each AI-generated summary and can:

- **Accept** — the text is marked as "Verified by Analyst" in the final report
- **Reject** — the text is excluded or shown as unverified
- **Add notes** — free-text field for the analyst's own interpretation

This workflow ensures AI assists but never replaces human judgment.

### 3. Export to Word (.docx)

The final report is generated as a Word document containing:

- **Cover page** — project name, date, analyst name
- **Table of contents** — auto-generated Word field codes that update when opened
- **Per-insight sections** — each with the chart image, derived statistics, analyst notes, and AI summary (if approved)
- **Page numbers** — "Page X of Y" in the footer

The document uses Word-native heading styles, so the table of contents resolves automatically in Microsoft Word or Google Docs.

## Why Not Just PDF?

Word format was chosen deliberately. Regulated environments often require documents to pass through review and approval workflows where reviewers add comments, tracked changes, or stamps. A .docx supports this; a static PDF does not. PDF export may be added in a future release for final archival.

## Data in the Report

The report includes only the statistics and parameters you selected — no raw data is dumped into the document. Each insight section records:

- Module slug and page label (e.g. "ppa — Process Parameter Analysis")
- Graph title and summary text
- All derived stats (sigma multiplier, UCL/LCL values, violation counts, severity breakdown)
- Dropdown states and filter selections at the time of capture
- Analyst notes and AI text with approval status

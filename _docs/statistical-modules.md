---
title: Statistical Modules
description: The analysis modules in SPECTRA — from batch profiling through to full multivariate modelling.
category: Features
order: 2
---

SPECTRA includes a growing suite of analysis modules. Each runs as a background job on your uploaded batch data and produces interactive Plotly charts you can include in your final report. More modules are in development — see the [roadmap](/#roadmap).

## Current Modules

### BPO — Batch Profiling Overview

The natural starting point for any analysis. Upload your batch CSV and BPO immediately shows the distribution of your selected outcome metric across all batches: histogram, box plot, and summary statistics (mean, std, min, max, quartiles). Outlier batches are highlighted before you drill deeper.

### PPA — Process Parameter Analysis

Select any process parameter and overlay all batches on a single time-series chart. SPECTRA computes a reference baseline from your selected batches and draws ±σ control bands (configurable: 1σ, 2σ, 3σ).

- **Violation detection** — any batch segment that crosses the control limits is flagged automatically
- **Severity classification** — critical (>5σ), major (3–5σ), minor (<3σ)
- **Color by outcome** — switch from coloring by batch ID to coloring by average outcome value using a blue→red gradient, so failing batches stand out immediately

### BCT — Batch Comparison Tool

Select two or more batches and overlay their parameter trajectories directly. Useful for root-cause work after BPO or PPA identifies an outlier — compare a failing batch against a reference run, parameter by parameter.

### QAA — Quality Attribute Analysis

Map Critical Process Parameters (CPPs) to Critical Quality Attributes (CQAs) without building a full multivariate model. QAA produces scatter plots and statistical summaries showing how individual parameters correlate with your outcome metric — a quick triage step before running BLM.

### BLM — Batch Level Modelling

Full multivariate analysis. BLM covers three complementary techniques on the same dataset:

**PCA (Principal Component Analysis)** — reduces your parameter space to 2–3 principal components. The scores plot shows each batch as a point; clusters mean similar process behavior, outliers mean anomalous runs. The loadings plot shows which parameters drive each component.

**PLS (Partial Least Squares)** — links CPPs to your outcome metric via latent variables. Output: variable importance in projection (VIP) scores, predicted vs. actual scatter, and regression coefficients per parameter.

**Correlation Matrix** — pairwise Pearson correlation heatmap across all numeric variables. Click any cell to open the scatter plot for that pair.

---

## More modules coming

SPECTRA is expanding. Planned additions include fault detection, design of experiments (DoE) integration, and real-time monitoring hooks. Follow the [roadmap](/#roadmap) for current status.

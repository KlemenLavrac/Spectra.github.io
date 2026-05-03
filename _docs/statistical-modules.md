---
title: Statistical Modules
description: The analysis modules in SPECTRA — from batch profiling through to full multivariate modelling.
category: Features
order: 2
---

SPECTRA includes a growing suite of analysis modules. Each runs as a background job on your uploaded batch data and produces interactive charts you can include in your final report. More modules are in development — see the [roadmap](/#roadmap).

## Current Modules

### BPO — Batch Profiling Overview

The natural starting point for any analysis. Upload your batch CSV and BPO immediately shows the distribution of your selected outcome metric across all batches. Outlier batches are highlighted before you drill deeper.

### PPA — Process Parameter Analysis

Select any process parameter and overlay all batches on a single time-series chart. SPECTRA computes a reference baseline from your selected batches and draws ±σ control bands (configurable: 1σ, 2σ, 3σ).

- **Violation detection** — any batch segment that crosses the control limits is flagged automatically
- **Severity classification** — critical (>5σ), major (3–5σ), minor (<3σ)
- **Color by outcome** — switch from coloring by batch ID to coloring by average outcome value using a blue→red gradient, so failing batches stand out immediately

### BCT — Batch Comparison Tool

PLS (Partial Least Squares): reduces your parameter space to 2-3 principal components. The scores plot shows each batch as a point. Clusters mean similar process behavior; outliers mean anomalous runs. The feature contribution plot and contribution trends over time shows which parameters drive the overall process.

### QAA — Quality Attribute Analysis

Analyze the process capability of selected outcome metric by displaying a control chart with ±σ control bands (configurable: 1σ, 2σ, 3σ) to understand the potential of your process and estimate the risk of out-of-specification results.

### BLM — Batch Level Modelling

Full multivariate analysis. BLM covers three complementary techniques on the same dataset:

**PCA (Principal Component Analysis)** — links process parameters to your outcome metric via latent variables. Output: feature importance and time-wise contribution by Parameter shows if there is impact on outcome metric .

**PLS (Partial Least Squares)** — links CPPs to your outcome metric via latent variables. Output: variable importance in projection (VIP) scores, predicted vs. actual scatter, and regression coefficients per parameter.

**Correlation Matrix** — pairwise Pearson correlation heatmap across all numeric variables. Click any cell to open the scatter plot for that pair.

---

## More modules coming

SPECTRA is expanding. Planned additions include fault detection, design of experiments (DoE) integration, and real-time monitoring hooks. Follow the [roadmap](/#roadmap) for current status.

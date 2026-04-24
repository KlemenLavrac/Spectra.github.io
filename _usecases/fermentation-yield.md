---
title: "Fermentation Batch Yield Optimization"
description: How a biotech startup used SPECTRA to reduce batch-to-batch variability and identify the process parameters driving yield loss.
industry: Biotech / Fermentation
---

## The Problem

A biotech company producing recombinant proteins via fed-batch fermentation was experiencing 15–20% batch-to-batch variability in final yield. Their process engineers tracked pH, dissolved oxygen, temperature, feed rate, and agitation speed in spreadsheets — but couldn't pinpoint which parameters were driving the inconsistency.

They had data from 80+ batches in CSV exports from their bioreactor control system. No dedicated data scientist on staff. Previous attempts with Excel pivot tables and scatter plots were inconclusive.

## What They Did with SPECTRA

### Step 1 — Upload and Profile

They uploaded their CSV containing all 80 batches with 12 process parameters and one outcome metric (yield in mg/L). The **Batch Profiling Overview** immediately showed a bimodal distribution — about 30% of batches clustered around a significantly lower yield.

### Step 2 — Process Parameter Analysis

Using the process chart module, they overlaid all 80 batches for each parameter with ±3σ control limits. The **"Color by outcome metric"** feature revealed a striking pattern: low-yield batches (red lines) consistently showed dissolved oxygen dipping below the lower control limit between hours 8–12 of the fermentation.

### Step 3 — PCA Confirmation

PCA on all 12 parameters confirmed two distinct batch clusters in the scores plot. The loadings showed dissolved oxygen and feed rate as the dominant contributors to PC1, which explained 42% of total variance.

### Step 4 — PLS Regression

PLS linking all process parameters to yield identified dissolved oxygen and feed rate as having the highest VIP scores (>1.5), confirming them as Critical Process Parameters.

### Step 5 — AI-Assisted Report

The team generated a report with all four analyses. The AI summary flagged the dissolved oxygen correlation and recommended tighter control limits for the DO controller during the critical 8–12 hour window. The lead process engineer reviewed, approved the AI text, added her own notes about the feed strategy, and exported the .docx for inclusion in their process validation package.

## The Outcome

After adjusting their DO controller setpoint and narrowing the feed rate ramp, batch-to-batch variability dropped to under 5% over the next quarter. The entire analysis — from CSV upload to final report — took one afternoon. The equivalent analysis with their previous Excel-based workflow would have taken two weeks.

## Why SPECTRA Fit

- No need to hire a data scientist or license SIMCA
- CSV upload from existing bioreactor exports — no integration work
- AI report saved hours of manual write-up
- Compliance-ready documentation for their process validation file

---
title: "Plant-Based Protein Texture Consistency"
description: How a food manufacturer used multivariate analysis to stabilize product texture across production batches.
industry: Food Manufacturing
---

## The Problem

A plant-based meat startup was scaling from pilot to commercial production. Their signature product — a structured protein with a specific fibrous texture — was inconsistent between batches. Customer complaints about texture variation were increasing, but the QC team couldn't isolate the cause using their existing single-parameter control charts.

They tracked extrusion temperature, screw speed, moisture content, protein blend ratio, cooling rate, and die pressure across 45 production batches.

## What They Did with SPECTRA

### Upload and Explore

The team uploaded their production CSV. Batch profiling showed that texture score (their outcome metric, measured by a trained sensory panel) had a wide spread with no obvious outliers — the problem was systemic variability, not individual bad batches.

### Correlation Matrix

The correlation heatmap revealed a strong negative correlation (-0.72) between cooling rate and texture score that the team hadn't noticed in their univariate analysis. It also showed that moisture content and extrusion temperature were highly correlated with each other (+0.85), meaning they were effectively measuring the same underlying variation.

### PLS Regression

PLS confirmed cooling rate as the highest-VIP parameter. The predicted vs. actual plot showed the model could explain 68% of texture variation using just cooling rate and screw speed — the other four parameters added minimal predictive value.

### Actionable Report

The AI summary recommended focusing process control efforts on cooling rate standardization rather than the extrusion temperature monitoring the team had been prioritizing. The report was exported and shared with the production engineering team.

## The Outcome

The team invested in a more precise cooling system and implemented tighter SPC limits on cooling rate. Texture consistency improved measurably within three weeks of the change. The analysis redirected engineering effort away from a parameter (extrusion temperature) that had been consuming attention but wasn't driving the problem.

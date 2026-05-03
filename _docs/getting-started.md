---
title: Getting Started
description: Set up SPECTRA and run your first analysis in under an hour.
category: Setup
order: 1
---

## What You'll Need

- Your batch data as a `.csv` file — one row per time point, one column per process parameter, with a batch ID column and a timestamp column
- A SPECTRA account (contact us at [info@spectra-analytics.com](mailto:info@spectra-analytics.com) to get access)

That's it. No software to install if you're using the hosted version.

---

## Step 1 — Create Your First Project

After logging in, click **New Project**. Give it a name that makes sense to your team (e.g. "Fermentation Line A — Q1 2026") and optionally add a description.

Projects are your containers. Each project holds its own uploads, analysis runs, and reports. You can invite other team members to a project without giving them access to your other projects.

---

## Step 2 — Upload Your Batch Data

Click **Upload Data** and drag in your CSV file. SPECTRA will:

1. Detect all numeric columns automatically
2. Ask you to confirm which column is your **batch ID** and which is your **timestamp**
3. Ask you to select your **outcome metric** — the variable you're trying to optimise (e.g. yield, purity, potency)

Once confirmed, your data is validated and ready for analysis.

**Tips for your CSV:**
- Include all batches in a single file — one file per upload, covering as many runs as you have
- More batches = better statistical results. Aim for at least 20–30 runs for meaningful patterns
- Column names can be anything; SPECTRA doesn't require a specific format

---

## Step 3 — Run an Analysis

Navigate to the **Analysis** tab and pick a module:

| Module | Best first question to answer |
|--------|-------------------------------|
| **Batch Profiling (BPO)** | Which batches had unusually high or low outcomes? |
| **Process Parameter Analysis (PPA)** | Which parameters deviated from normal in my worst batches? |
| **Batch Comparison (BCT)** | How does my worst batch compare to my best, parameter by parameter? |
| **Quality Attribute Analysis (QAA)** | Which parameters correlate most strongly with my outcome? |
| **Batch Level Modelling (BLM)** | What does a full multivariate model tell me about my process? |

Most teams start with **BPO** to get a feel for the data, then move to **PPA** to investigate specific parameters.

---

## Step 4 — Build Your Report

As you work through each analysis, click **Add to Report** on any chart that tells part of your story. When you're ready:

1. Go to the **Report** tab
2. SPECTRA's AI assistant will have written a plain-language summary for each chart
3. Read each summary — approve what's accurate, add your own notes, reject anything you disagree with
4. Click **Export** to download a Word (.docx) document with all selected charts, summaries, and your notes included

The exported report includes a cover page, table of contents, and page numbers — ready to go into a process validation file or deviation investigation package.

---

## Inviting Your Team

Go to **Project Settings → Members** to invite colleagues. You can assign each person a role:

- **Owner** — full access, can manage members and delete the project
- **Analyst** — can upload data, run analyses, and build reports
- **Viewer** — read-only access to results and reports


---
title: "Compliance & 21 CFR Part 11"
description: How SPECTRA supports regulated manufacturers working under FDA and EU GMP requirements.
category: Compliance
order: 3
---

If you work in pharma, biotech, or food manufacturing under regulatory oversight, you've heard the question: *"Is the software validated?"* This page explains what SPECTRA does — and what you're responsible for — so you can answer that question confidently.

---

## What SPECTRA Provides

### A complete, tamper-proof audit trail

Every action a user takes in SPECTRA is recorded automatically — who uploaded the data, who ran the analysis, who approved an AI insight, who exported the report, and when. These records cannot be edited or deleted by any user, including administrators.

This covers the 21 CFR Part 11 §11.10(e) requirement for audit trails without any additional configuration.

### Role-based access control

Users only see and interact with projects they've been added to. Within a project, roles are clearly defined: owners manage membership, analysts run studies, viewers read results. Permissions are enforced at every action — not just in the UI.

This supports §11.10(d) and §11.10(g) requirements for system access controls.

### Analyst approval on every AI-generated insight

SPECTRA's AI assistant writes the first draft of every analytical summary — but nothing goes into the final report without an analyst explicitly approving it. Approval is tied to the authenticated user's identity, with a timestamp. Rejected or unapproved text is clearly flagged in the document.

This provides a meaningful electronic record under §11.50 and §11.100.

### Data integrity by design

Uploaded datasets and analysis results are stored with version history. Nothing is silently overwritten. If a re-analysis is run, it creates a new record alongside the original — not on top of it.

This supports §11.10(c) record retention requirements.

### Validation documentation

IQ/OQ template documentation is available on request. These templates cover installation verification, operational qualification tests, and functional acceptance criteria — ready for your validation team to adapt and execute.

---

## What You're Responsible For

Full compliance is a shared responsibility between the software and your organisation's SOPs. SPECTRA provides the technical controls above, but your organisation is responsible for:

- Establishing SOPs for system use and user training
- Periodic user access reviews
- Change control procedures when the system is updated
- Backup and disaster recovery validation

---

## EU GMP Annex 11

SPECTRA's audit trail, access controls, and data integrity features also map to the key requirements of EU GMP Annex 11. If you're preparing for an EMA inspection or MHRA audit, the same features apply.

---

## ICH Q8 / Q10

SPECTRA's analysis modules — particularly Batch Level Modelling with PCA and PLS — directly support the ICH Q8 concept of Design Space. The reporting output is suitable for inclusion in regulatory submissions and process validation packages under the Q8/Q10 framework.

---

## Questions?

If you need specific compliance documentation, validation support, or a call with your QA team, [contact us](mailto:info@spectra-analytics.com).

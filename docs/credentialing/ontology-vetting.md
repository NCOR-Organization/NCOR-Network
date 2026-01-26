---
title: Ontology Vetting and Certification
---

NCOR operates an independent ontology vetting and certification program grounded in formal ontology and international standards.

## Principles

NCOR certification is guided by the following principles:

- **Independent, nonprofit evaluation**
- **Scientific rigor**, grounded in formal ontology
- **Transparency and auditability**
- **Expert human review**, not automated heuristics alone

NCOR provides specialty certification tracks, including:

- Alignment with **Basic Formal Ontology (BFO)**, including ISO/IEC 21838-2
- Alignment with the **Common Core Ontologies (CCO)**
- Ontology engineering best practices beyond any single framework

## Certification Process

NCOR certification follows a structured, multi-stage process designed to support scientific rigor, transparency, and long-term reuse. The stages below provide a high-level overview of the certification workflow.

## Certification Process Overview

<div class="ncorFlow">
  <div class="ncorFlowStep">
    <div class="ncorFlowIcon">🧾</div>
    <div class="ncorFlowTitle">1. Submission</div>
    <div class="ncorFlowText">Ontology artifact + brief documentation describing scope and intent.</div>
  </div>

  <div class="ncorFlowArrow">→</div>

  <div class="ncorFlowStep">
    <div class="ncorFlowIcon">🔍</div>
    <div class="ncorFlowTitle">2. Validation</div>
    <div class="ncorFlowText">Automated checks where applicable to support consistency review.</div>
  </div>

  <div class="ncorFlowArrow">→</div>

  <div class="ncorFlowStep">
    <div class="ncorFlowIcon">👥</div>
    <div class="ncorFlowTitle">3. Expert Review</div>
    <div class="ncorFlowText">Multi-expert panel evaluates modeling choices and showing-of-work.</div>
  </div>
</div>

<div class="ncorCards">
  <div class="ncorCard">
    <div class="ncorCardHeader"><span class="ncorBadge">4</span> Feedback & Remediation</div>
    <div class="ncorCardBody">Findings are documented; developers may revise and resubmit for re-evaluation.</div>
  </div>

  <div class="ncorCard">
    <div class="ncorCardHeader"><span class="ncorBadge">5</span> Certification & Registry Entry</div>
    <div class="ncorCardBody">Successful ontologies receive certification, a registry identifier, and documented outcomes.</div>
  </div>

  <div class="ncorCard">
    <div class="ncorCardHeader"><span class="ncorBadge">6</span> Renewal & Ongoing Review</div>
    <div class="ncorCardBody">Certification is time-bound and may be renewed as the ontology evolves.</div>
  </div>
</div>

<div class="ncorNote">
  <strong>Note:</strong> Automated checks support — but do not replace — expert review.
</div>

## Why this works

<div class="ncorMiniGrid">
  <div class="ncorMini">
    <div class="ncorMiniTitle">Independence</div>
    <div class="ncorMiniText">Certification is conducted by NCOR, not ontology implementers.</div>
  </div>
  <div class="ncorMini">
    <div class="ncorMiniTitle">Scientific rigor</div>
    <div class="ncorMiniText">Grounded in formal ontology rather than informal heuristics.</div>
  </div>
  <div class="ncorMini">
    <div class="ncorMiniTitle">Traceability</div>
    <div class="ncorMiniText">Decisions are documented and auditable.</div>
  </div>
  <div class="ncorMini">
    <div class="ncorMiniTitle">Reusability</div>
    <div class="ncorMiniText">Supports confident reuse across teams and organizations.</div>
  </div>
</div>


### 1. Ontology Submission

Ontology developers submit:

- The ontology artifact (e.g., OWL, RDF)
- Documentation describing scope, intended use, classes, and relations
- Relevant implementation context

### 2. Automated Structural Validation

Where applicable, ontologies undergo automated structural checks, such as:

- OWL2 conformance
- Structural consistency using established APIs and tooling

These checks support — but do not replace — expert human review.

### 3. Expert Review

Each submission is reviewed by a **three-member NCOR expert panel** with relevant domain and formal ontology expertise.

Review focuses on:

- Conceptual soundness
- Alignment with stated standards (e.g., BFO, CCO)
- Modeling decisions and their justifications
- Ontology engineering quality and maintainability

### 4. Remediation and Resubmission

Developers receive detailed feedback and may revise and resubmit their ontology to address identified issues.

### 5. Certification and Registry Entry

Ontologies that meet certification criteria receive:

- A formal NCOR certificate
- A registry identifier
- A documented audit trail of the evaluation

Certification is valid for **12 months**.

### 6. Renewal and Continuous Audit

Certified ontologies may be renewed annually to reflect:

- Ontology evolution
- Updates to relevant standards
- Ongoing alignment with best practices

This process supports long-term trust, reuse, and sustainability across ontology-based systems.



import React from 'react';
import Layout from '@theme/Layout';
import ApplicationSection from '../components/ApplicationSection';

export default function Collaborators() {
  return (
    <Layout
      title="Collaborators | NCOR"
      description="Engage in structured ontology research initiatives, grants, and applied projects"
    >
      <div className="container margin-top--xl margin-bottom--xl">
        <h1>Collaborators</h1>

        <p>
          Collaborators are institutions, labs, companies, or structured research teams
          seeking deeper engagement in applied ontology initiatives.
        </p>

        <h2>Structured Collaboration</h2>
        <ul>
          <li>Grant-based research partnerships</li>
          <li>Corporate applied ontology initiatives</li>
          <li>Government-funded projects</li>
          <li>Focused technical development efforts</li>
        </ul>

        <p>
          Collaborators are expected to identify a specific project, research objective,
          or strategic goal aligned with NCOR’s mission.
        </p>

        <p style={{ opacity: 0.8 }}>
          Formal collaboration does not automatically confer authority to act
          on behalf of NCOR in contractual or governmental contexts.
          Additional agreements may be required for restricted or government-funded work.
        </p>

        <ApplicationSection />
      </div>
    </Layout>
  );
}

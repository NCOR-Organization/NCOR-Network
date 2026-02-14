import React from 'react';
import Layout from '@theme/Layout';
import ApplicationSection from '../components/JoinPage/ApplicationSection';

export default function Collaborators() {
  return (
    <Layout
      title="Collaborators | NCOR"
      description="Structured collaboration for grants and applied ontology initiatives"
    >
      <div className="container margin-top--xl margin-bottom--xl">
        <h1>Collaborators</h1>

        <p>
          Collaborators are institutions, labs, companies, or structured research teams
          seeking formal engagement in applied ontology initiatives.
        </p>

        <h2>Application Requirements</h2>
        <ul>
          <li>Identify a specific project, grant, or initiative</li>
          <li>Describe intended outcomes and timeline</li>
          <li>Indicate funding source (if applicable)</li>
          <li>Demonstrate alignment with NCOR’s mission</li>
          <li>Be prepared for additional review and agreement if required</li>
        </ul>

        <p style={{ opacity: 0.8 }}>
          Collaboration involving grants, corporate relationships, or government-funded
          work may require additional agreements and compliance review.
        </p>

        <hr style={{ margin: '3rem 0' }} />

        <ApplicationSection mode="collaborator" />
      </div>
    </Layout>
  );
}

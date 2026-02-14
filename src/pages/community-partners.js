import React from 'react';
import Layout from '@theme/Layout';
import ApplicationSection from '../components/ApplicationSection';

export default function CommunityPartners() {
  return (
    <Layout
      title="Community Partners | NCOR"
      description="Engage in NCOR’s open scholarly working groups and public ontology initiatives"
    >
      <div className="container margin-top--xl margin-bottom--xl">
        <h1>Community Partners</h1>

        <p>
          Community Partners participate in NCOR’s open scholarly ecosystem,
          including public working groups, seminars, and research discussions.
        </p>

        <h2>How You Can Engage</h2>
        <ul>
          <li>Join existing public working groups</li>
          <li>Propose a new public working group</li>
          <li>Participate in ontology research discussions</li>
          <li>Contribute to open technical initiatives</li>
        </ul>

        <p style={{ opacity: 0.8 }}>
          Community participation does not constitute legal membership in the nonprofit
          corporation nor authorization to represent NCOR in contractual or governmental matters.
        </p>

        <ApplicationSection />
      </div>
    </Layout>
  );
}

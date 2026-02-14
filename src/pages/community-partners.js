import React from 'react';
import Layout from '@theme/Layout';
import ApplicationSection from '../components/JoinPage/ApplicationSection';

export default function CommunityPartners() {
  return (
    <Layout
      title="Community Partners | NCOR"
      description="Participate in NCOR’s open scholarly working groups"
    >
      <div className="container margin-top--xl margin-bottom--xl">
        <h1>Community Partners</h1>

        <p>
          Community Partners engage in NCOR’s open scholarly ecosystem,
          including public working groups, seminars, and research discussions.
        </p>

        <h2>Application Requirements</h2>
        <ul>
          <li>Select one or more existing public working groups, or</li>
          <li>Propose a new public working group idea</li>
          <li>Describe how you would like to contribute</li>
          <li>Agree to participate in open, non-restricted collaboration</li>
        </ul>

        <p style={{ opacity: 0.8 }}>
          Community participation does not confer authority to represent NCOR
          in contractual, governmental, or restricted contexts.
        </p>

        <hr style={{ margin: '3rem 0' }} />

        <ApplicationSection mode="community" />
      </div>
    </Layout>
  );
}

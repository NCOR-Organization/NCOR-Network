import React from 'react';
import Layout from '@theme/Layout';
import ApplicationSection from '../components/JoinPage/ApplicationSection';

export default function CommunityPartners() {
  return (
    <Layout
      title="Community Partners | NCOR"
      description="Participate in NCOR’s open scholarly working groups"
    >
      <main className="community-partners-page">

        <div className="community-narrow-container">

          <header className="community-partners-header">
            <h1 className="community-partners-title">
              Community Partners
            </h1>

            <p className="community-partners-subtitle">
              Community Partners engage in NCOR’s open scholarly ecosystem,
              including public working groups, seminars, and research discussions.
            </p>
          </header>

          <div className="community-grid">

            <div className="community-card">
              <h2 className="community-partners-h2">Application Requirements</h2>

              <ul>
                <li>Select one or more existing public working groups, or</li>
                <li>Propose a new public working group idea</li>
                <li>Describe how you would like to contribute</li>
                <li>Agree to participate in open, non-restricted collaboration</li>
              </ul>

              <div className="community-alert">
                Community participation does not confer authority to represent NCOR
                in contractual, governmental, or restricted contexts.
              </div>
            </div>

            <div className="community-card small">
              <h3>What this pathway supports</h3>
              <ul>
                <li>Open scholarly collaboration</li>
                <li>Public working groups</li>
                <li>Research discussions and seminars</li>
              </ul>
            </div>

          </div>
        </div>

        <section className="community-form-section">
          <div className="community-narrow-container form-tight">
            <ApplicationSection mode="community" />
          </div>
        </section>

      </main>
    </Layout>
  );
}

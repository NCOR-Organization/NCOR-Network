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

        {/* Top content */}
        <div className="container margin-vert--lg">
          <header className="community-partners-header">
            <h1 className="community-partners-title">Community Partners</h1>

            <p className="community-partners-subtitle">
              Community Partners engage in NCOR’s open scholarly ecosystem,
              including public working groups, seminars, and research discussions.
            </p>
          </header>

          <div className="row">
            <div className="col col--8">
              <div className="card community-partners-card">
                <div className="card__body">
                  <h2 className="community-partners-h2">Application Requirements</h2>

                  <ul className="community-partners-list">
                    <li>Select one or more existing public working groups, or</li>
                    <li>Propose a new public working group idea</li>
                    <li>Describe how you would like to contribute</li>
                    <li>Agree to participate in open, non-restricted collaboration</li>
                  </ul>

                  <div className="alert alert--info community-partners-alert" role="alert">
                    Community participation does not confer authority to represent NCOR
                    in contractual, governmental, or restricted contexts.
                  </div>
                </div>
              </div>
            </div>

            <div className="col col--4">
              <div className="card community-partners-card">
                <div className="card__body">
                  <h3 className="community-partners-h3">What this pathway supports</h3>
                  <ul className="community-partners-list margin-bottom--none">
                    <li>Open scholarly collaboration</li>
                    <li>Public working groups</li>
                    <li>Research discussions and seminars</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom contrast section */}
        <section className="community-form-section">
          <div className="container padding-vert--xl">
            <ApplicationSection mode="community" />
          </div>
        </section>

      </main>
    </Layout>
  );
}

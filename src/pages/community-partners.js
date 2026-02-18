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

        {/* HERO */}
        <section className="cp-hero">
          <div className="container cp-container">
            <h1 className="cp-title">Community Partners</h1>

            <p className="cp-subtitle">
              Community Partners engage in NCOR’s open scholarly ecosystem,
              including public working groups, seminars, and research discussions.
            </p>
          </div>
        </section>

        {/* TOP CONTENT */}
        <section className="cp-top">
          <div className="container cp-container">
            <div className="cp-grid">
              <div className="card cp-card">
                <div className="card__body">
                  <h2 className="cp-h2">Application Requirements</h2>

                  <ul className="cp-list">
                    <li>Select one or more existing public working groups, or</li>
                    <li>Propose a new public working group idea</li>
                    <li>Describe how you would like to contribute</li>
                    <li>Agree to participate in open, non-restricted collaboration</li>
                  </ul>

                  <div className="cp-alert" role="alert">
                    Community participation does not confer authority to represent NCOR
                    in contractual, governmental, or restricted contexts.
                  </div>
                </div>
              </div>

              <div className="card cp-card cp-card--aside">
                <div className="card__body">
                  <h3 className="cp-h3">What this pathway supports</h3>
                  <ul className="cp-list cp-list--tight">
                    <li>Open scholarly collaboration</li>
                    <li>Public working groups</li>
                    <li>Research discussions and seminars</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* APPLICATION (contrast band) */}
        <section className="cp-form-band">
          <div className="container cp-container cp-form-container">
            <ApplicationSection mode="community" />
          </div>
        </section>

      </main>
    </Layout>
  );
}

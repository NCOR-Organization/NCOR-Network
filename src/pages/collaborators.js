import React from 'react';
import Layout from '@theme/Layout';
import ApplicationSection from '../components/JoinPage/ApplicationSection';

export default function Collaborators() {
  return (
    <Layout
      title="Collaborators | NCOR"
      description="Structured collaboration for grants and applied ontology initiatives"
    >
      <main className="collaborators-page">

        {/* HERO */}
        <section className="col-hero">
          <div className="container col-container">
            <h1 className="col-title">Collaborators</h1>

            <p className="col-subtitle">
              Collaborators are institutions, labs, companies, or structured research teams
              seeking formal engagement in applied ontology initiatives.
            </p>
          </div>
        </section>

        {/* TOP CONTENT */}
        <section className="col-top">
          <div className="container col-container">
            <div className="col-grid">

              <div className="card col-card">
                <div className="card__body">
                  <h2 className="col-h2">Application Requirements</h2>

                  <ul className="col-list">
                    <li>Identify a specific project, grant, or initiative</li>
                    <li>Describe intended outcomes and timeline</li>
                    <li>Indicate funding source (if applicable)</li>
                    <li>Demonstrate alignment with NCOR’s mission</li>
                    <li>Be prepared for additional review and agreement if required</li>
                  </ul>

                  <div className="col-alert" role="alert">
                    Collaboration involving grants, corporate relationships, or government-funded
                    work may require additional agreements and compliance review.
                  </div>
                </div>
              </div>

              <div className="card col-card">
                <div className="card__body">
                  <h3 className="col-h3">What this pathway supports</h3>

                  <ul className="col-list col-list--tight">
                    <li>Structured applied ontology collaboration</li>
                    <li>Grant and project alignment</li>
                    <li>Formal engagement pathways</li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* APPLICATION SECTION */}
        <section className="col-form-band">
          <div className="container col-container col-form-container">
            <ApplicationSection mode="collaborator" />
          </div>
        </section>

      </main>
    </Layout>
  );
}

import React, { useState } from 'react';
import Layout from '@theme/Layout';
import JoinHero from './JoinHero';
import BenefitsSection from './BenefitsSection';
import ApplicationSection from './ApplicationSection';
import ContactSection from './ContactSection';
import styles from './JoinPage.module.css';

const JoinPage = () => {
  const [initialParticipantType, setInitialParticipantType] = useState(null);

  const goToApplication = (type) => {
    setInitialParticipantType(type);
    requestAnimationFrame(() => {
      const el = document.getElementById('participation-application');
      el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  };

  return (
    <Layout
      title="Participate in NCOR"
      description="Engage with the National Center for Ontological Research (NCOR) community and collaborate on ontology research and applications"
    >
      <JoinHero />

      <div className="container margin-top--xl margin-bottom--xl">
        <div className="row">
          <div className="col col--10 col--offset-1">

            {/* Participation Options */}
            <div style={{ marginBottom: '2rem' }}>
              <h2>Ways to Engage</h2>
              <p>
                NCOR maintains an open scholarly community as well as structured collaboration pathways.
                Choose the option that best reflects how you would like to engage.
              </p>

              <div className="row">

                {/* Community Partner */}
                <div className="col col--6">
                  <div className="card">
                    <div className="card__body">
                      <h3>Community Partner</h3>
                      <p>
                        Community Partners participate in NCOR’s open scholarly ecosystem,
                        including public working groups, seminars, and discussions.
                        This pathway is designed for researchers, students, and practitioners
                        who wish to engage in open collaboration.
                      </p>
                      <p style={{ fontSize: '0.9rem', opacity: 0.8 }}>
                        Community participation does not constitute legal membership in the nonprofit
                        corporation nor authorization to represent NCOR in contractual or governmental matters.
                      </p>
                      <button
                        className={`button ${styles.ncorButton}`}
                        type="button"
                        onClick={() => goToApplication('individual')}
                      >
                        Apply as an Individual Participant
                      </button>
                    </div>
                  </div>
                </div>

                {/* Collaborator */}
                <div className="col col--6">
                  <div className="card">
                    <div className="card__body">
                      <h3>Collaborator (Organization or Lab)</h3>
                      <p>
                        Collaborators are institutions, labs, companies, or structured research teams
                        that seek deeper engagement in applied ontology initiatives.
                        Collaborators may participate in formal projects and coordinated research efforts.
                      </p>
                      <p style={{ fontSize: '0.9rem', opacity: 0.8 }}>
                        Formal collaboration does not automatically confer authority to act
                        on behalf of NCOR in contractual or governmental contexts.
                        Additional agreements may be required for restricted or government-funded work.
                      </p>
                      <button
                        className={`button ${styles.ncorButton}`}
                        type="button"
                        onClick={() => goToApplication('organization')}
                      >
                        Apply as an Organizational Participant
                      </button>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            <BenefitsSection />
            <ApplicationSection initialParticipantType={initialParticipantType} />
            <ContactSection />

          </div>
        </div>
      </div>
    </Layout>
  );
};

export default JoinPage;

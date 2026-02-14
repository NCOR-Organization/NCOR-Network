import React from 'react';
import Layout from '@theme/Layout';
import JoinHero from './JoinHero';
import BenefitsSection from './BenefitsSection';
import ContactSection from './ContactSection';
import Link from '@docusaurus/Link';
import styles from './JoinPage.module.css';

const JoinPage = () => {
  return (
    <Layout
      title="Participate in NCOR"
      description="Engage with the National Center for Ontological Research (NCOR) community and collaborate on ontology research and applications"
    >
      <JoinHero />

      <div className="container margin-top--xl margin-bottom--xl">
        <div className="row">
          <div className="col col--10 col--offset-1">

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
                        including public working groups and seminars.
                      </p>
                      <p style={{ fontSize: '0.9rem', opacity: 0.8 }}>
                        Community participation does not constitute legal membership in the nonprofit
                        corporation nor authorization to represent NCOR.
                      </p>

                      <Link
                        to="/community-partners"
                        className={`button button--primary ${styles.ncorButton}`}
                      >
                        Apply to be a Community Partner
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Collaborator */}
                <div className="col col--6">
                  <div className="card">
                    <div className="card__body">
                      <h3>Collaborator</h3>
                      <p>
                        Collaborators are institutions, labs, or companies seeking structured engagement
                        in applied ontology initiatives and funded projects.
                      </p>
                      <p style={{ fontSize: '0.9rem', opacity: 0.8 }}>
                        Formal collaboration does not automatically confer authority to act
                        on behalf of NCOR.
                      </p>

                      <Link
                        to="/collaborators"
                        className={`button button--primary ${styles.ncorButton}`}
                      >
                        Apply to be a Collaborator
                      </Link>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            <BenefitsSection />
            <ContactSection />

          </div>
        </div>
      </div>
    </Layout>
  );
};

export default JoinPage;

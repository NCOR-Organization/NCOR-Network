import React, { useState } from 'react';
import Layout from '@theme/Layout';
import JoinHero from './JoinHero';
import BenefitsSection from './BenefitsSection';
import ApplicationSection from './ApplicationSection';
import ContactSection from './ContactSection';
import styles from './JoinPage.module.css';

const JoinPage = () => {
    const [initialMembershipType, setInitialMembershipType] = useState(null);

  const goToApplication = (type) => {
    setInitialMembershipType(type);
    requestAnimationFrame(() => {
      const el = document.getElementById('membership-application');
      el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  };
  
  return (
    <Layout
      title="Join NCOR"
      description="Join the National Center for Ontological Research (NCOR) network to collaborate on ontology research and applications"
    >
      <JoinHero />
      
      <div className="container margin-top--xl margin-bottom--xl">
  <div className="row">
    <div className="col col--10 col--offset-1">
      {/* Membership options at the top */}
      <div style={{ marginBottom: '2rem' }}>
        <h2>Membership Options</h2>
        <p>
          Choose the membership type that best fits you.
        </p>

        <div className="row">
          <div className="col col--6">
            <div className="card">
              <div className="card__body">
                <h3>Individual Membership</h3>
                <p>
                  Join as an individual researcher or practitioner. GitHub is optional and
                  only needed for participation in certain technical working groups.
                </p>
                <button
                  className={`button ${styles.ncorButton}`}
                  type="button"
                  onClick={() => goToApplication('individual')}
                >
                  Apply as an Individual
                </button>
              </div>
            </div>
          </div>

            <div className="col col--6">
            <div className="card">
              <div className="card__body">
                <h3>Organizational Membership</h3>
                <p>
                  Join as a lab, company, institute, or project. Organizational membership
                  does not require GitHub.
                </p>
                <button
                  className={`button ${styles.ncorButton}`}
                  type="button"
                  onClick={() => goToApplication('organization')}
                >
                  Apply as an Organization
                </button>
              </div>
            </div>
          </div>
  </div>
</div>
            <BenefitsSection />
            <ApplicationSection initialMembershipType={initialMembershipType} />
            <ContactSection />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default JoinPage; 

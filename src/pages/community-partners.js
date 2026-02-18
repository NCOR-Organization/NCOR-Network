import React from 'react';
import Layout from '@theme/Layout';
import ApplicationSection from '../components/JoinPage/ApplicationSection';

export default function CommunityPartners() {
  return (
    <Layout
      title="Community Partners | NCOR"
      description="Participate in NCOR’s open scholarly working groups"
    >
      <main className="container margin-vert--xl">

        {/* Header */}
        <header className="margin-bottom--lg">
          <h1>Community Partners</h1>
          <p className="hero__subtitle">
            Community Partners engage in NCOR’s open scholarly ecosystem,
            including public working groups, seminars, and research discussions.
          </p>
        </header>

        <div className="row">
          <div className="col col--8">

            {/* Requirements Card */}
            <div className="card margin-bottom--lg">
              <div className="card__body">
                <h2 className="margin-top--none">Application Requirements</h2>
                <ul>
                  <li>Select one or more existing public working groups, or</li>
                  <li>Propose a new public working group idea</li>
                  <li>Describe how you would like to contribute</li>
                  <li>Agree to participate in open, non-restricted collaboration</li>
                </ul>

                <div className="alert alert--info margin-top--md" role="alert">
                  Community participation does not confer authority to represent NCOR
                  in contractual, governmental, or restricted contexts.
                </div>
              </div>
            </div>

          </div>

          {/* Optional right-side spacing column for breathing room */}
          <div className="col col--4">
            <div className="card">
              <div className="card__body">
                <h3 className="margin-top--none">What this pathway supports</h3>
                <ul className="margin-bottom--none">
                  <li>Open scholarly collaboration</li>
                  <li>Public working groups</li>
                  <li>Research discussions and seminars</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <hr className="margin-vert--xl" />

        {/* Application Section (unchanged) */}
        <ApplicationSection mode="community" />

      </main>
    </Layout>
  );
}

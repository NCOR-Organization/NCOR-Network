import React, {useMemo, useState} from 'react';
import Head from '@docusaurus/Head';
import styles from './candidate-pool.module.css';

const ADMIN_EMAIL = 'info@ncor-network.org';

const EXPERTISE_AREAS = [
  'Ontology engineering',
  'BFO and upper-level ontology',
  'Common Core Ontologies',
  'OWL, RDF, and SPARQL',
  'Knowledge graphs',
  'Semantic interoperability',
  'AI and machine learning',
  'Biomedical and health informatics',
  'Government, defense, and intelligence',
  'Industrial and enterprise applications',
];

const OPPORTUNITY_TYPES = [
  'Full-time employment',
  'Part-time employment',
  'Internship',
  'Consulting or contract work',
  'Funded research',
];

export default function CandidatePool() {
  const [expertise, setExpertise] = useState([]);
  const [opportunityTypes, setOpportunityTypes] = useState([]);
  const [consent, setConsent] = useState(false);

  const toggleValue = (value, setter) => {
    setter((current) =>
      current.includes(value)
        ? current.filter((item) => item !== value)
        : [...current, value],
    );
  };

  const mailtoHref = useMemo(() => {
    const subject = 'NCOR Candidate Pool — Expression of Interest';
    const body = [
      'NCOR CANDIDATE POOL — EXPRESSION OF INTEREST',
      '',
      'Name: [enter your name]',
      'Email: [enter your preferred email]',
      'Current role or affiliation: [enter your response]',
      '',
      'Areas of expertise:',
      ...(expertise.length ? expertise.map((item) => `- ${item}`) : ['- [select on the webpage]']),
      '',
      'Opportunities of interest:',
      ...(opportunityTypes.length
        ? opportunityTypes.map((item) => `- ${item}`)
        : ['- [select on the webpage]']),
      '',
      'Availability or other relevant constraints: [enter your response]',
      '',
      'I confirm that the information I provide is accurate and authorize NCOR to contact me about relevant opportunities and, after obtaining my interest in a specific opportunity, to provide my name and contact information to the relevant organization.',
    ].join('\n');

    return `mailto:${ADMIN_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }, [expertise, opportunityTypes]);

  return (
    <>
      <Head>
        <title>NCOR Candidate Pool</title>
        <meta
          name="description"
          content="Private-link intake page for the NCOR Applied Ontology Candidate Pool."
        />
        <meta name="robots" content="noindex, nofollow, noarchive, nosnippet" />
        <meta name="googlebot" content="noindex, nofollow, noarchive, nosnippet" />
      </Head>

      <main className={styles.page}>
        <header className={styles.header}>
          <div className={styles.headerInner}>
            <img
              className={styles.logo}
              src="/img/ncor-network-logo.png"
              alt="NCOR"
            />
            <div>
              <span className={styles.eyebrow}>National Center for Ontological Research</span>
              <h1>NCOR Candidate Pool</h1>
              <p className={styles.intro}>
                Join NCOR’s pool of applied ontology candidates for nomination-based
                employment, internship, consulting, and research opportunities.
              </p>
            </div>
          </div>
        </header>

        <div className={styles.content}>
          <section className={styles.summary} aria-labelledby="how-it-works">
            <h2 id="how-it-works">How the pool works</h2>
            <ol>
              <li>Submit a brief expression of interest to the NCOR administrator.</li>
              <li>NCOR may contact you when your reported background aligns with an opportunity.</li>
              <li>You decide whether to be considered for that specific opportunity.</li>
              <li>If nominated, you send your CV and other materials directly to the employer.</li>
            </ol>
            <p className={styles.note}>
              NCOR does not collect or maintain CVs through this page. Inclusion in the
              pool does not guarantee referral, nomination, a personal recommendation,
              an interview, or employment. Employers make all hiring decisions.
            </p>
          </section>

          <section className={styles.formCard} aria-labelledby="interest-form">
            <div className={styles.formHeading}>
              <p className={styles.stepLabel}>Expression of interest</p>
              <h2 id="interest-form">Tell NCOR what you’re looking for</h2>
              <p>
                Select the areas that apply. When you continue, your email application
                will open with a short template to complete and send.
              </p>
            </div>

            <fieldset>
              <legend>Areas of expertise or experience</legend>
              <div className={styles.optionsGrid}>
                {EXPERTISE_AREAS.map((area) => (
                  <label className={styles.option} key={area}>
                    <input
                      type="checkbox"
                      checked={expertise.includes(area)}
                      onChange={() => toggleValue(area, setExpertise)}
                    />
                    <span>{area}</span>
                  </label>
                ))}
              </div>
            </fieldset>

            <fieldset>
              <legend>Opportunities of interest</legend>
              <div className={styles.optionsGrid}>
                {OPPORTUNITY_TYPES.map((type) => (
                  <label className={styles.option} key={type}>
                    <input
                      type="checkbox"
                      checked={opportunityTypes.includes(type)}
                      onChange={() => toggleValue(type, setOpportunityTypes)}
                    />
                    <span>{type}</span>
                  </label>
                ))}
              </div>
            </fieldset>

            <label className={styles.consent}>
              <input
                type="checkbox"
                checked={consent}
                onChange={(event) => setConsent(event.target.checked)}
              />
              <span>
                I authorize NCOR to contact me about relevant opportunities and, after
                confirming my interest in a specific opportunity, to provide my name and
                contact information to the relevant organization.
              </span>
            </label>

            <a
              className={`${styles.submitButton} ${!consent ? styles.disabled : ''}`}
              href={consent ? mailtoHref : undefined}
              aria-disabled={!consent}
              onClick={(event) => {
                if (!consent) event.preventDefault();
              }}
            >
              Continue in email
            </a>
            <p className={styles.emailNote}>
              Your response will be addressed to <strong>{ADMIN_EMAIL}</strong>. Please
              do not attach a CV; an employer will request application materials directly.
            </p>
          </section>

          <section className={styles.policy} aria-labelledby="selection-policy">
            <h2 id="selection-policy">Nomination policy</h2>
            <p>
              NCOR identifies nominees according to the requirements of each opportunity,
              the candidate information available to NCOR, demonstrated qualifications,
              availability, and other professionally relevant considerations. NCOR may
              nominate some, all, or none of the candidates who express interest in a
              particular opportunity.
            </p>
            <p>
              Candidate-pool participation and NCOR nomination decisions are administered
              solely by NCOR. Questions about this process should be directed to the NCOR
              administrator. Questions about a position, application materials, interviews,
              or hiring decisions should be directed to the employer.
            </p>
          </section>
        </div>

        <footer className={styles.footer}>
          © {new Date().getFullYear()} National Center for Ontological Research
        </footer>
      </main>
    </>
  );
}

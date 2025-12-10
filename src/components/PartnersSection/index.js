import React from 'react';
import styles from './styles.module.css';

const partners = [
  {
    name: 'TotalEnergies',
    logo: '/img/partners/totalenergies.png',
    url: 'https://totalenergies.com/',
  },
  {
    name: 'NaasAI',
    logo: '/img/partners/naasai.png',
    url: 'https://naas.ai/',
  },
  {
    name: 'Webworld Technologies (WTI)',
    logo: '/img/partners/wti.png',
    url: 'https://wti-solutions.com/',
  },
  {
    name: 'Acacia Knowledge Systems',
    logo: '/img/partners/acacia.png',
    url: 'https://acaciaks.com/',
  },
  {
    name: 'Summit Knowledge Solutions',
    logo: '/img/partners/sks.png',
    url: 'https://sks.ai/',
  },
  {
    name: 'KaDSci',
    logo: '/img/partners/kadsci.png',
    url: 'https://kadsci.com/',
  },
  {
    name: 'Crown Point Technologies',
    logo: '/img/partners/crownpoint.png',
    url: 'https://crownpoint.tech/',
  },
  {
    name: 'CUBRC',
    logo: '/img/partners/cubrc.png',
    url: 'https://www.cubrc.org/',
  },
];

export default function PartnersSection() {
  return (
    <section className={styles.partnersSection}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>
            Our <span className={styles.highlight}>Partners</span>
          </h2>
          <p className={styles.subtitle}>
            NCOR collaborates with industry and research organizations that are advancing
            ontology-driven AI, data engineering, and decision support.
          </p>
        </div>

        <div className={styles.grid}>
          {partners.map((partner) => (
            <a
              key={partner.name}
              href={partner.url}
              className={styles.card}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={styles.logoWrapper}>
                <img
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  className={styles.logo}
                />
              </div>
              <div className={styles.name}>{partner.name}</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

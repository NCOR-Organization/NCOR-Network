import React from 'react';
import styles from './styles.module.css';

const partners = [
  {
    name: 'TotalEnergies',
    logo: '/img/partners/Total Energies .jpeg',
    url: 'https://totalenergies.com/',
  },
  {
    name: 'NaasAI',
    logo: '/img/partners/NasasAI.png',
    url: 'https://naas.ai/',
  },
  {
    name: 'Webworld Technologies (WTI)',
    logo: '/img/partners/WTI-logo-type.png',
    url: 'https://wti-solutions.com/',
  },
  {
    name: 'Acacia Knowledge Systems',
    logo: '/img/partners/acaciaks_logo.png',
    url: 'https://acaciaks.com/',
  },
  {
    name: 'Summit Knowledge Solutions',
    logo: '/img/partners/sks logo.jpeg.webp',
    url: 'https://sks.ai/', // or correct URL
  },
  {
    name: 'KaDSci',
    logo: '/img/partners/kadsci-logo.png',
    url: 'https://kadsci.com/',
  },
  {
    name: 'Crown Point Technologies',
    logo: '/img/partners/crown_white.png.webp',
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

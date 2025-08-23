import React from 'react';
import styles from './styles.module.css';

export default function CallForPapers() {
  const topics = [
    {
      title: 'Semantic technologies for federated and distributed data ecosystems',
      icon: (
        <svg className={styles.topicIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
        </svg>
      )
    },
    {
      title: 'Symbolic AI for intelligence and defense',
      icon: (
        <svg className={styles.topicIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 12a9 9 0 11-9-9c2.52 0 4.85.83 6.72 2.24"/>
          <path d="M21 3v6h-6"/>
        </svg>
      )
    },
    {
      title: 'Integration of semantic technologies with machine learning and advanced analytics',
      icon: (
        <svg className={styles.topicIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/>
          <path d="M3.3 7l8.7 5 8.7-5M12 22V12"/>
        </svg>
      )
    },
    {
      title: 'Benchmarks and metrics for evaluating semantic interoperability',
      icon: (
        <svg className={styles.topicIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3"/>
          <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z"/>
        </svg>
      )
    },
    {
      title: 'Trustworthy AI and explainable reasoning in national security contexts',
      icon: (
        <svg className={styles.topicIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        </svg>
      )
    },
    {
      title: 'Semantic technologies for data or ontology governance, lineage, and accountability',
      icon: (
        <svg className={styles.topicIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"/>
        </svg>
      )
    },
    {
      title: 'Use cases demonstrating operational impact of semantic technologies in defense and security',
      icon: (
        <svg className={styles.topicIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
          <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8"/>
        </svg>
      )
    },
    {
      title: 'Demonstrations of applications of semantic technologies in support of national security missions',
      icon: (
        <svg className={styles.topicIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7"/>
        </svg>
      )
    },
    {
      title: 'Predictive analytics',
      icon: (
        <svg className={styles.topicIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M23 6l-9.5 9.5-5-5L1 18"/>
          <path d="M17 6h6v6"/>
        </svg>
      )
    },
    {
      title: 'Ontology in Artificial Intelligence',
      icon: (
        <svg className={styles.topicIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2a5 5 0 105 5 5 5 0 00-5-5zM3 12h18M12 22a5 5 0 105-5 5 5 0 00-5 5z"/>
        </svg>
      )
    },
    {
      title: 'Infrastructure: defense, exploitation, and counter-attack',
      icon: (
        <svg className={styles.topicIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 12V8H6a2 2 0 01-2-2c0-1.1.9-2 2-2h12v4"/>
          <path d="M4 6v12c0 1.1.9 2 2 2h14v-4"/>
          <path d="M18 12a2 2 0 000 4h4v-4h-4z"/>
        </svg>
      )
    }
  ];

  return (
    <div className={styles.section} style={{ background: 'var(--ifm-background-surface-color)' }}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Call for Papers</h2>
        <p className={styles.sectionSubtitle}>
          Thirteenth International Conference on Semantic Technology for Intelligence, Defense, and Security (STIDS) 2025
        </p>
        
        <div className={styles.card}>
          <h3>Submission Guidelines</h3>
          <p>
            We invite submissions of original, unpublished research and application papers that
            address innovative solutions, architectures, and methodologies integrating semantic
            technologies with advanced computing in support of national security objectives. We
            particularly welcome papers that advance the state of the art in semantic interoperability
            and machine reasoning for data-intensive systems, supporting enhanced situational
            awareness, predictive analytics, and decision-making capabilities in complex,
            distributed environments.
          </p>
          <ul>
            <li>Extended abstracts must be <b>no more than 3 pages</b></li>
            <li>Short papers must be between <b>5-9 pages</b></li>
            <li>Long papers must be between <b>10-14 pages</b></li>
            <li>Must follow CEUR-WS conference proceedings format</li>
            <li>Papers must be original and not under review elsewhere</li>
            <li>At least one author must register and present at the conference</li>
          </ul>
        </div>

        <div className={styles.topicsSection}>
          <div className={styles.topicsHeader}>
            <h3>Topics of Interest</h3>
            <p>
              We invite submissions addressing the following topics and related areas in semantic technology, 
              intelligence, defense, and security
            </p>
          </div>
          <div className={styles.topicsGrid}>
            {topics.map((topic, index) => (
              <div key={index} className={styles.topicItem}>
                {topic.icon}
                <span className={styles.topicText}>{topic.title}</span>
              </div>
            ))}
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <div style={{ marginBottom: '1rem' }}>
            <a href="https://ceur-ws.org/Vol-XXX/CEUR-Template-1col.odt" 
              download
              className={`${styles.button} ${styles.buttonSecondary}`}
              style={{ marginRight: '1rem' }}>
              Doc Template
            </a>
            <a href="https://www.overleaf.com/latex/templates/template-for-submissions-to-ceur-workshop-proceedings-ceur-ws-dot-org/wqyfdgftmcfw"
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.button} ${styles.buttonSecondary}`}>
              Latex Template
            </a>
          </div>
          <a href="https://easychair.org/conferences/?conf=stids2025"
            className={`${styles.button} ${styles.buttonPrimary}`}>
            Submit Paper
          </a>
        </div>
      </div>
    </div>
  );
}

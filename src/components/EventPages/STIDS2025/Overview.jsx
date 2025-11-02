import React from 'react';
import styles from './styles.module.css';

export default function Overview() {
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Conference Overview</h2>
        <div className={styles.card}>
          <p>The Thirteenth International Conference on Semantic Technology for Intelligence,
Defense, and Security (STIDS 2025) has been postponed owing to the US government shutdown. The event will be held during the first quarter of 2026.</p>

<p>STIDS provides a forum for academia, government, and industry to share the latest
applied research, development, and application of semantic technology for defense,
intelligence, and security applications. Semantic technology is a fundamental enabler of
greater flexibility, precision, timeliness, and automation of analysis and response to
rapidly evolving threats.</p>

<p>National security increasingly hinges on our ability to integrate artificial intelligence with
semantic technologies, knowledge graphs, and data fabrics. The STIDS 2025 theme
centers on applying semantic technologies to support trustworthy and explainable
reasoning across data ecosystems.</p>
          <div style={{ marginTop: '2rem' }}>
            <ul><strong>Unclassified Session:</strong> TBD</ul>
            <ul><strong>Classified Session:</strong> TBD</ul>
          </div>
        </div>
      </div>
    </div>
  );
} 

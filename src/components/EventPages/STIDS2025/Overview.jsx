import React from 'react';
import styles from './styles.module.css';

export default function Overview() {
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Conference Overview</h2>
        <div className={styles.card}>
          <p>The Thirteenth International Conference on Semantic Technology for Intelligence,
Defense, and Security (STIDS 2025) will be held on the 17th through the 19th of
November 2025. November 19th, a classified session will be held on NGA's campus.</p>

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
            <ul><strong>Unclassified Session:</strong> November 17-18, 2025</ul>
            <ul><strong>Classified Session:</strong> November 19, 2025</ul>
          </div>
        </div>
      </div>
    </div>
  );
} 

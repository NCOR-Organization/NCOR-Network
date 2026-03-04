import React from 'react';
import styles from './styles.module.css';

export default function Overview() {
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Conference Overview</h2>
        <div className={styles.card}>
          <p>The Thirteenth International Conference on Semantic Technology for Intelligence,
Defense, and Security (STIDS 2026) will be held May 27-28, 2026 at the George Mason University FUSE Center in Arlington, VA.</p>

<p>STIDS provides a forum for academia, government, and industry to share the latest
applied research, development, and application of semantic technology for defense,
intelligence, and security applications. Semantic technology is a fundamental enabler of
greater flexibility, precision, timeliness, and automation of analysis and response to
rapidly evolving threats.</p>

<p>National security increasingly hinges on our ability to integrate artificial intelligence with
semantic technologies, knowledge graphs, and data fabrics. The STIDS 2026 theme
centers on applying semantic technologies to support trustworthy and explainable
reasoning across data ecosystems.</p>
          <div style={{ marginTop: '2rem' }}>
            <ul><strong>Unclassified Session:</strong> May 27-28, 2026</ul>
            <ul><strong>Classified Session:</strong> May 29, 2026</ul>
          </div>
        </div>
      </div>
    </div>
  );
} 

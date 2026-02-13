import React from 'react';
import styles from './styles.module.css';

export default function ContactInfo() {
  return (
    <div className={styles.section} style={{ background: 'var(--ifm-background-surface-color)' }}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Contact Us</h2>
        <p className={styles.sectionSubtitle}>
          Have questions about STIDS 2025? We're here to help.
        </p>

        <div style={{ 
          marginTop: '2rem',
          textAlign: 'center',
          color: 'var(--ifm-color-emphasis-700)',
          fontSize: '1.1rem'
        }}>
          <a 
            href="mailto:info@ncornetwork.org?subject=STIDS%202025%20Inquiry" 
            className={`${styles.button} ${styles.buttonPrimary}`}
          >
            Email Us
          </a>
        </div>

        <div style={{ 
          marginTop: '3rem',
          textAlign: 'center',
          color: 'var(--ifm-color-emphasis-700)'
        }}>
          <p><strong>Location:</strong></p>
          <p>
            Fuse at Mason Square (George Mason University)<br />
            3351 Fairfax Drive, Arlington, VA 22201
          </p>
        </div>
      </div>
    </div>
  );
}

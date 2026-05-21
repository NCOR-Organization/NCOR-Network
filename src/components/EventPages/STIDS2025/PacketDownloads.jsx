import React from 'react';
import styles from './styles.module.css';

export default function PacketDownloads() {
  return (
    <section id="downloads" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Conference Downloads</h2>
        <p className={styles.sectionSubtitle}>
          Download attendee and presenter materials for STIDS 2026.
        </p>

        <div className={styles.packetDownloadGrid}>
          <a
            className={styles.packetDownloadCard}
            href="/downloads/STIDS-2026-Attendee-Packet.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={styles.packetDownloadIcon}>PDF</div>
            <div>
              <h3>Attendee Information Packet</h3>
              <p>
                Venue details, parking, meals, local logistics, and general information for registered attendees.
              </p>
            </div>
          </a>

          <a
            className={styles.packetDownloadCard}
            href="/downloads/STIDS-2026-Presenter-Packet.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={styles.packetDownloadIcon}>PDF</div>
            <div>
              <h3>Presenter Information Packet</h3>
              <p>
                Presentation guidance, timing, room information, and instructions for speakers and session chairs.
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
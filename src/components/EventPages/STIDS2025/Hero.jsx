import React, { useEffect, useRef } from 'react';
import styles from './styles.module.css';

export default function Hero() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5;
    }
  }, []);

  return (
    <>
      <div className={styles.hero}>
        <video
          ref={videoRef}
          className={styles.videoBackground}
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/videos/stids-landing-hero-video-bg.mp4" type="video/mp4" />
        </video>
<div className={styles.heroOverlay} />
<div className={`${styles.container} ${styles.heroContent}`}>
  <div className={styles.warningBanner}>
    <svg
      className={styles.warningIcon}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
      <line x1="12" y1="9" x2="12" y2="13" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
    Placeholder Data - Not Final Content
  </div>
  <h1 className={styles.heroTitle}>
    Semantic Technology for Intelligence, Defense, and Security Conference (STIDS) 2025
  </h1>
  <p className={styles.heroSubtitle}>STIDS Conference 2025</p>
  <div className={styles.heroDate}>October 21–23, 2025</div>
  <div className={styles.heroLocation}>
    George Mason University, Potomac Science Center<br />
    650 Mason Ferry Avenue, Woodbridge VA 22191
  </div>
  <div className={styles.heroDate}>November 17–18, 2025</div>
  <div className={styles.heroDate}>November 19, 2025</div>
  <div className={styles.heroLocation}>
    National Geospatial-Intelligence Agency (NGA)<br />
    7500 GEOINT Dr, Springfield VA 22150
  </div>
</div>
          <div style={{ marginTop: '2rem' }}>
            <a
              href="#registration"
              className={`${styles.button} ${styles.buttonPrimary}`}
            >
              Register Now
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

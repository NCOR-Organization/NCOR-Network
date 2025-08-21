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

        <div className={styles.heroOverlay}></div>
        <div className={`${styles.container} ${styles.heroContent}`}>

          <h1 className={styles.heroTitle}>
            Semantic Technology for Intelligence, Defense, and Security Conference (STIDS) 2025
          </h1>

          <div className={styles.heroDate}>November 17–19, 2025</div>
          <div style={{
  marginTop: '1.5rem',
  display: 'flex',
  justifyContent: 'center',
  gap: '1rem',
  flexWrap: 'wrap'
}}>
  <a
    href="#unclassified-registration"
    className={`${styles.button} ${styles.buttonPrimary}`}>
    Unclassified Registration
  </a>
  <a
    href="#classified-registration"
    className={`${styles.button} ${styles.buttonPrimary}`}>
    Classified Registration
  </a>
</div>

          <div className={styles.heroLocation}>
            Fuse at Mason Square (George Mason University)<br />
            3351 Fairfax Drive, Arlington, VA 22201
          </div>

          
        </div>
      </div>
    </>
  );
}

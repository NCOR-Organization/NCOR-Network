import React from 'react';
import styles from './styles.module.css';

export default function ImportantDates() {
  const dates = [
    {
      title: 'Paper Submission Deadline',
      date: 'Sept 8, 2025',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
        </svg>
      )
    },
    {
      title: 'Notification of Acceptance',
      date: 'September 22, 2025',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
        </svg>
      )
    },
    {
      title: 'Camera-Ready Submission Deadline',
      date: 'November 3, 2025',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 16H7v-2h10v2zm0-4H7v-2h10v2zm0-4H7V9h10v2z"/>
        </svg>
      )
    },
    {
      title: 'Conference Dates',
      date: 'November 17-19, 2025',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7-1c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z"/>
        </svg>
      )
    }
  ];

  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Important Dates</h2>
        <div className={styles.grid} style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
          {dates.map((item, index) => (
            <div key={index} className={styles.dateCard}>
              <div className={styles.dateIcon}>
                {item.icon}
              </div>
              <div className={styles.dateInfo}>
                <h3>{item.title}</h3>
                <p>{item.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 
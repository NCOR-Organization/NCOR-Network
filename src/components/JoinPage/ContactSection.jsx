import React from 'react';
import styles from './JoinPage.module.css';

const ContactSection = () => {
  return (
    <div className={styles.contactSection}>
      <h2>Contact Us</h2>
      <p>For questions about becoming a community partner or potential collaborator:</p>
      
      <div className={styles.contactGrid}>
        <div className={styles.contactItem}>
          <div className={styles.contactIcon}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" />
            </svg>
          </div>
          <div>
            <h3>Email Us</h3>
            <a href="mailto:ncornetwork@gmail.com">ncornetwork@gmail.com</a>
          </div>
        </div>
        
        <div className={styles.contactItem}>
          <div className={styles.contactIcon}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" />
            </svg>
          </div>
          <div>
            <h3>Visit Us</h3>
            <address>
              500 Seneca Street<br/>
              Buffalo, NY 14204<br/>
              United States
            </address>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection; 
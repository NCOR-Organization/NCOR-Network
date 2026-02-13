import React, { useState } from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';
import clsx from 'clsx';

export default function EventsSection() {
  const [activeTab, setActiveTab] = useState('upcoming');

  const upcomingEvents = [
    {
      id: 1,
      title: 'STIDS 2025',
      description: 'Semantic Technology for Intelligence, Defense, and Security Conference featuring cutting-edge research presentations, expert keynotes, and classified sessions.',
      date: 'May 27-28, 2026',
      location: 'George Mason University, Woodbridge, VA',
      url: '/events/stids2025'
    },
    {
      id: 2,
      title: 'Exploring Career Opportunities in Tech for Non-STEM Students',
      description: 'A discussion led by Barry Smith on how students from humanities and social sciences can engage in tech careers.',
      date: 'October 30, 2024',
      location: 'Virtual',
      url: 'https://techguide.org/podcast/barry-smith/'
    },
    {
      id: 3,
      title: 'STIDS 2024',
      description: 'Annual conference on Semantic Technology for Intelligence, Defense, and Security.',
      date: 'October 22–24, 2024',
      location: 'George Mason University, Fairfax, VA',
      url: 'https://kadsci.com/stids2024/'
    }
  ];

  const pastEvents = [
  {
    id: 5,
    title: 'Enhanced Object-Based Production Conference; Part Two',
    description: 'A follow-up event exploring advances in object-based intelligence production, with experts from government, industry, and academia.',
    date: 'March 21–22, 2024',
    location: 'Tampa, FL',
    url: 'https://ncorwiki.buffalo.edu/index.php/Enhanced_Object-Based_Production_Conference_part_two'
  },
  {
    id: 6,
    title: 'Buffalo Toronto Ontology Alliance (BoaT) Meeting',
    description: 'A cross-border meeting of the Buffalo and Toronto ontology research communities.',
    date: 'July 14, 2023',
    location: 'University of Toronto, Canada',
    url: 'https://urbandatacentre.ca/buffalo-and-toronto-ontology-group-boat'
  },
  {
    id: 7,
    title: 'Enhanced Object-Based Production Conference',
    description: 'A multi-stakeholder meeting focused on object-based intelligence production methods.',
    date: 'June 22–23, 2023',
    location: 'SAIC Rosslyn, Arlington, VA',
    url: 'https://ncorwiki.buffalo.edu/index.php/Enhanced_Object-Based_Production_Conference'
  }
];

  const displayedEvents = activeTab === 'upcoming' ? upcomingEvents : pastEvents;

  return (
    <div className={styles.eventsContainer}>
      <div className="container">
        <div className={styles.headerRow}>
          <div className={styles.headerContent}>
            <h2 className={styles.sectionTitle}>
              Events & <span className={styles.highlight}>Conferences</span>
            </h2>
            <p className={styles.sectionDescription}>
              Connect with the global ontology community through our conferences, workshops, and educational events.
            </p>
          </div>
          <div className={styles.allEventsLink}>
            <Link to="/events" className={styles.viewAllLink}>
              All Events
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={styles.arrowIcon}
              >
                <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>

        <div className={styles.tabContainer}>
          <button 
            className={clsx(styles.tabButton, activeTab === 'upcoming' && styles.activeTab)}
            onClick={() => setActiveTab('upcoming')}
          >
            Upcoming Events
          </button>
          <button 
            className={clsx(styles.tabButton, activeTab === 'past' && styles.activeTab)}
            onClick={() => setActiveTab('past')}
          >
            Past Events
          </button>
        </div>

        <div className={styles.eventsGrid}>
          {displayedEvents.map((event) => (
            <div key={event.id} className={styles.eventCard}>
              <div className={styles.eventContent}>
                <div className={styles.eventHeader}>
                  <h3 className={styles.eventTitle}>{event.title}</h3>
                  <span className={styles.eventType}>Event</span>
                </div>
                <p className={styles.eventDescription}>{event.description}</p>
                <div className={styles.eventMeta}>
                  <div className={styles.eventDate}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.metaIcon}>
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                      <line x1="16" y1="2" x2="16" y2="6"></line>
                      <line x1="8" y1="2" x2="8" y2="6"></line>
                      <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                    {event.date}
                  </div>
                  <div className={styles.eventLocation}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.metaIcon}>
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    {event.location}
                  </div>
                </div>
              </div>
              <div className={styles.eventFooter}>
                <Link to={event.url} className={styles.viewDetailsLink}>
                  View Details
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.detailsArrow}>
                    <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

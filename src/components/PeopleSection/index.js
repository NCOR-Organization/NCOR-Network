import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

const PeopleList = [
  // Leadership
  {
    name: 'Dr. Barry Smith',
    title: 'Chair, Board of Directors',
    initials: 'BS',
    image: '/img/people/barry_smith.jpeg',
    affiliation: 'University at Buffalo',
    profileLink: 'https://www.linkedin.com/in/barry-smith-ontology/',
    group: 'Leadership',
  },
  {
    name: 'Dr. John Beverley',
    title: 'President and member of Board of Directors',
    initials: 'JB',
    image: '/img/people/john_beverley.jpeg',
    affiliation: 'University at Buffalo',
    profileLink: 'https://www.linkedin.com/in/john-beverley-869445a0/',
    group: 'Leadership',
  },

  // Core Contributors
  {
    name: 'Alan Ruttenberg',
    title: 'Ontologist, OBO Foundry',
    initials: 'AR',
    image: 'https://ubwp.buffalo.edu/ncor/wp-content/uploads/sites/40/2015/10/Alan-Ruttenberg-300x225.jpg',
    affiliation: 'University at Buffalo',
    profileLink: 'https://creativecommons.org/about/program-areas/open-science',
    group: 'Core Contributors',
  },
  {
    name: 'Mark Jensen',
    title: 'Data Scientist',
    initials: 'MJ',
    image: '/img/people/mark_jensen.jpeg',
    affiliation: 'U.S. Customs and Border Protection',
    profileLink: 'https://www.linkedin.com/in/mark-jensen-022a98103/',
    group: 'Core Contributors',
  },
  {
    name: 'J. Neil Otte',
    title: 'Senior Ontologist',
    initials: 'NO',
    image: '/img/people/neil_otte.jpeg',
    affiliation: 'Johns Hopkins University Applied Physics Laboratory',
    profileLink: 'https://www.linkedin.com/in/j-neil-otte-56286211a/',
    group: 'Core Contributors',
  },
];

function PersonCard({ name, title, initials, image, affiliation, profileLink }) {
  return (
    <div className={styles.personCard}>
      {image ? (
        <div className={styles.avatarImage}>
          <img src={image} alt={`${name} profile`} />
        </div>
      ) : (
        <div className={styles.avatarCircle}>
          {initials}
        </div>
      )}

      <h3 className={styles.personName}>{name}</h3>
      <div className={styles.personTitle}>{title}</div>
      <div className={styles.personAffiliation}>{affiliation}</div>

      <Link to={profileLink} className={styles.viewProfileLink}>
        View Profile <span style={{ marginLeft: '4px' }}>→</span>
      </Link>
    </div>
  );
}

export default function PeopleSection() {
  return (
    <section className={styles.peopleSection}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>
            Our <span className={styles.highlight}>People</span>
          </h2>
          <p className={styles.sectionDescription}>
            Meet the researchers and contributors behind our ontological projects
          </p>
        </div>

        {['Leadership', 'Core Contributors'].map((group) => (
          <div key={group} className={styles.peopleGroup}>
            <h3 className={styles.groupHeading}>{group}</h3>
            <div className={styles.peopleGrid}>
              {PeopleList.filter((person) => person.group === group).map((props, idx) => (
                <PersonCard key={`${group}-${idx}`} {...props} />
              ))}
            </div>
          </div>
        ))}

        <div className={styles.joinSection}>
          <div className={styles.joinContent}>
            <h3 className={styles.joinTitle}>Join Our Network</h3>
            <p className={styles.joinDescription}>
              Become part of our international community of researchers and
              practitioners advancing the field of ontology.
            </p>
          </div>

          <div className={styles.joinButtons}>
            <Link className={styles.button} to="/join">
              Join NCOR
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

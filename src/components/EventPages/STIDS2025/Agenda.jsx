import React from 'react';
import styles from './styles.module.css';

const restaurantUrl =
  'https://www.maggianos.com/locations/district%20of%20columbia/washington/5333-wisconsin-ave.-nw/';

const speakerLinks = {
  'John Beverley': 'https://johnbeverley.com/',
  'Peter Kaloroumakis': 'https://www.linkedin.com/in/peter-kaloroumakis',
  'Ryan Hohimer': 'https://www.linkedin.com/in/ryan-hohimer-6b9a1b3a',
  'Simon Streltsov': 'https://www.linkedin.com/in/simonstreltsov/',
  'Giacomo De Colle': 'https://philpeople.org/profiles/giacomo-de-colle',
  'Gideon Zufan': 'https://us.bold.pro/my/gideon-zufan',
  'Denise Ferniza': 'https://wti-solutions.com/team-wti/',
  'Brian Haugh': 'https://www.researchgate.net/profile/Brian-Haugh',
  'Steve Wartik': 'https://www.researchgate.net/profile/Steve-Wartik',
  'Carter Benson': 'https://www.linkedin.com/in/carterbeaubenson',
  'Austin Leibers': 'https://philpeople.org/profiles/austin-c-liebers',
  'Alec Sculley': 'https://scholar.google.com/citations?hl=en&user=p2ZGxhUAAAAJ',
  'Ryan Hohimer': 'https://www.linkedin.com/in/ryan-hohimer-6b9a1b3a',
  'Dave McComb': 'https://www.semanticarts.com/about-us/',
  'Jans Aasman': 'https://franz.com/about/bios/jaasman.lhtml',
  'Joe Gregory': 'https://academicaffairs.arizona.edu/person/joe-gregory',
  'Alejandro Salado': 'https://sie.engineering.arizona.edu/faculty-staff/faculty/alejandro-salado',
  'Colonel James “Snake” Clark': 'https://www.af.mil/About-Us/Biographies/Display/Article/104881/james-g-clark/',
  'Jonathan Vajda': 'https://jonathanvajda.com/about/',
  'Aaron Damiano': 'https://www.linkedin.com/in/aaron-a-damiano/',
  'Roman Ilin': 'https://www.spie.org/profile/Roman.Ilin-2865',
  'Ali Hasanzazeh': 'https://www.linkedin.com/in/ali-hasanzadeh-2b975786',
  'Dan Schleigel': 'https://www.linkedin.com/in/danielschlegel/',
  'Neil Otte': 'https://www.jneilotte.com/teaching/',
  'Mark Jensen': 'https://philpeople.org/profiles/mark-jensen',
  'Lowell Vizenor': 'https://www.linkedin.com/in/lowellvizenor/',
  'Alex Memory': 'https://www.linkedin.com/in/alexmemory/',
  'Dan Maxwell': 'https://www.linkedin.com/in/daniel-maxwell-2583667/',
  'John Gugliotti': 'https://www.linkedin.com/in/john-gugliotti',
  'Armita Davarpanah': 'https://www.spelman.edu/staff/profiles/armita-davarpanah.html',
  'Forrest Hare': 'https://sks.ai/meet-the-team',
  'Rebecca Rafferty': 'https://www.linkedin.com/in/rebecca-r-650975308/',
  'Jamie Steiler': 'https://www.linkedin.com/in/jstieler',
  'Eric Merrell': 'https://philpeople.org/profiles/eric-merrell',
  'Amanda Hicks': 'https://www.linkedin.com/in/amanda-hicks-9aa48765',
  'Theresa Swift': 'https://www.linkedin.com/in/theresa-swift-0194131',
  'Thomas Bittner': 'https://www.buffalo.edu/cas/philosophy/faculty/faculty_directory/bittner.html',
  'Jeremy Ravenel': 'https://www.linkedin.com/in/jeremyravenel/',
  'James Adam': 'https://www.linkedin.com/in/jamesadam/',
  'Wesley J. Wildman': 'https://www.bu.edu/sth/profile/wesley-j-wildman/',
  'Andreas Tolk': 'https://www.odu.edu/directory/andreas-tolk',
  'Paul Cripps': 'https://www.turing.ac.uk/people/external-researchers/paul-cripps',
  'Chris Partridge': 'https://www.linkedin.com/in/chris-partridge-995ba6',
  'Barry Smith': 'https://ontology.buffalo.edu/smith/',
  'Joe Blankenship (Chair)': 'https://thejoeblankenship.com/',
  'Joe Blankenship': 'https://thejoeblankenship.com/',
  'Lieutenant General Robert "Bob" Elder': 'https://www.af.mil/About-Us/Biographies/Display/Article/104897/lieutenant-general-robert-j-bob-elder-jr/',
  'David Kamien': 'https://www.linkedin.com/in/davidkamien',
  'Chinmay Mantravadi': 'https://www.linkedin.com/in/chinmay-mantravadi-87740835a',
  'Michael Norman': 'https://www.linkedin.com/in/michael-g-norman',
  'Lenny Blum': 'https://www.linkedin.com/in/lennyblum',
  'Summit Knowledge Solutions Hosted': 'https://sks.ai/',
};

const topicLinks = {
  'Dinner: Maggiano’s Little Italy': restaurantUrl,
};

const locationLinks = {
  '5333 Wisconsin Ave NW, Washington, District of Columbia, 20015': restaurantUrl,
};

const agenda = [
  {
    date: 'May 27',
    rows: [
      {
        time: '8:00 - 9:00',
        topic: 'Registration',
        presenters: '',
        location: 'Exchange Lobby',
      },
      {
        time: '9:00 - 9:10',
        topic: 'Introductions',
        presenters: 'John Beverley',
        location: 'Van Metre Hall 113',
      },
      {
        time: '9:10 - 9:30',
        topic: 'Cyber Ontology Foundry',
        presenters: 'Peter Kaloroumakis\nRyan Hohimer\nJohn Beverley',
        location: 'Van Metre Hall 113',
      },
      {
        time: '9:30 - 9:55',
        topic: 'Track A Talk: Introducing D3FEND-CCO',
        presenters: 'Peter Kaloroumakis\nGiacomo De Colle',
        location: 'Van Metre Hall 113',
      },
      {
        time: '9:30 - 9:55',
        topic:
          'Track B Talk: BFO-Aligned Ontologies as the Semantic Backbone of Tool-Agnostic MBSE',
        presenters: 'Gideon Zufan\nDenise Ferniza\nJohn Sayoun',
        location: 'Fuse 2416',
      },
      {
        time: '9:55 - 10:10',
        topic: 'Break',
        presenters: '',
        location: 'Exchange Lobby',
      },
      {
        time: '10:10 - 10:35',
        topic: 'Track A Talk: Ontology for Attacks in Cyber Risk Assessment',
        presenters: 'Brian Haugh\nSteve Wartik',
        location: 'Van Metre Hall 113',
      },
      {
        time: '10:10 - 10:35',
        topic: 'Track B Talk: My Ontologist: Evaluating BFO-Based AI for Definition Support',
        presenters: 'Carter Benson\nAustin Leibers\nAlec Sculley',
        location: 'Fuse 2416',
      },
      {
        time: '10:35 - 11:00',
        topic:
          'Track A Talk: Semantic Interoperability in Cybersecurity: Harmonizing Threat Intelligence with gist and gistCyber',
        presenters: 'Ryan Hohimer\nDave McComb\nJans Aasman',
        location: 'Van Metre Hall 113',
      },
      {
        time: '10:35 - 11:00',
        topic: 'Track B Talk: Ontology-Driven Test Strategy Optimization',
        presenters: 'Joe Gregory\nAlejandro Salado',
        location: 'Fuse 2416',
      },
      {
        time: '11:00 - 11:15',
        topic: 'Break',
        presenters: '',
        location: 'Exchange Lobby',
      },
      {
        time: '11:15 - 12:00',
        topic: 'Keynote: Innovation in Three Decades',
        presenters: 'Colonel James “Snake” Clark',
        location: 'Van Metre Hall 113',
      },
      {
        time: '12:00 - 13:00',
        topic: 'Lunch (Provided)',
        presenters: '',
        location: 'Exchange Lobby',
      },
      {
        time: '13:00 - 14:30',
        topic:
          'Demo A: Ontology Development Workflows with Progressive Web Apps and Client-Side Processing Browser-Based Tools',
        presenters: 'Jonathan Vajda\nAaron Damiano',
        location: 'Van Metre Hall 113',
      },
      {
        time: '13:00 - 14:30',
        topic: 'Demo B: Interactive Tool for Ontology Building',
        presenters:
          'Roman Ilin\nSimon Streltsov\nDan Schleigel\nCarrie Corcoran\nLiel Shkap\nAli Hasanzazeh',
        location: 'Fuse 2416',
      },
      {
        time: '14:30 - 15:00',
        topic: 'Break',
        presenters: '',
        location: 'Exchange Lobby',
      },
      {
        time: '15:00 - 16:00',
        topic: 'Track A Panel: Ontology Engineering Implementation Challenges',
        presenters: 'Neil Otte\nMark Jensen\nJohn Gugliotti',
        location: 'Van Metre Hall 113',
      },
      {
        time: '15:00 - 15:30',
        topic:
          'Track B Talk: Flood-Risk Governance through Hybrid LLM-Graph RAG: A Query Framework for the National Levee Database',
        presenters: 'Armita Davarpanah',
        location: 'Fuse 2416',
      },
      {
        time: '15:30 - 16:00',
        topic: 'Track B Talk: Ensuring Object Singularity in an Integrated Knowledge Graph Ecosystem',
        presenters: 'Forrest Hare',
        location: 'Fuse 2416',
      },
      {
        time: '16:00 - 17:00',
        topic:
          'Keynote: From Data to Decision Advantage: A Warfighter’s Requirements for Semantic Technology in 21st\u00A0Century Intelligence',
        presenters: 'Jamie Steiler',
        location: 'Van Metre Hall 113',
      },
      {
        time: '17:00 - 18:00',
        topic: 'Break',
        presenters: '',
        location: '',
      },
      {
        time: '18:00 - 20:00',
        topic: 'Dinner: Maggiano’s Little Italy',
        presenters: '',
        location: '5333 Wisconsin Ave NW, Washington, District of Columbia, 20015',
      },
    ],
  },
  {
    date: 'May 28',
    rows: [
      {
        time: '9:00 - 09:15',
        topic: 'Summary of Day 1',
        presenters: 'John Beverley',
        location: 'Van Metre Hall 113',
      },
      {
        time: '9:15 - 9:40',
        topic: 'National Security Ontology Foundry',
        presenters: 'Neil Otte',
        location: 'Van Metre Hall 113',
      },
      {
        time: '9:40 - 10:30',
        topic: 'Track A Talk: TBD',
        presenters: 'Eric Merrell\nAmanda Demour',
        location: 'Van Metre Hall 113',
      },
      {
        time: '9:40 - 10:05',
        topic: 'Track B Talk: Ontology Engineering as a Tradecraft',
        presenters: 'John Beverley',
        location: 'Fuse 2416',
      },
      {
        time: '10:05 - 10:30',
        topic:
          'Track B Talk: Authoring Mission Threads with Semantic Technologies: From Narrative Workflows to Executable, Explainable Knowledge',
        presenters: 'David Kamien\nChinmay Mantravadi',
        location: 'Fuse 2416',
      },
      {
        time: '10:30 - 10:45',
        topic: 'Break',
        presenters: '',
        location: 'Exchange Lobby',
      },
      {
        time: '10:45 - 11:10',
        topic:
          'Track A Talk: Zenia - An RDF-Native, Graph RAG, and Multi-Agent Reference Architecture for Explainable Zero Trust Access Control',
        presenters: 'Lowell Vizenor\nWen Zhu\nJay Desai\nJohn Price',
        location: 'Van Metre Hall 113',
      },
      {
        time: '10:45 - 11:10',
        topic:
          'Track B Talk: Pangea CLP-PSL: Making Time Explicit in OWL-Centric Knowledge Graphs for Defense and Intelligence Applications',
        presenters: 'Amanda Hicks\nTheresa Swift\nAlex Memory',
        location: 'Fuse 2416',
      },
      {
        time: '11:10 - 11:35',
        topic:
          'Track A Talk: Helix: A Secure, Provenance-Based, Distributed Ledger System for Storing and Querying Ontology-Driven Knowledge Graphs',
        presenters: 'Alec Sculley\nDaniel Chapple',
        location: 'Van Metre Hall 113',
      },
      {
        time: '11:10 - 11:35',
        topic:
          'Track B Talk: A Formal Framework for Ontological Vagueness in Intelligence Analysis: Towards Trustworthy and Explainable Judgment',
        presenters: 'Thomas Bittner',
        location: 'Fuse 2416',
      },
      {
        time: '11:35 - 12:00',
        topic:
          'Track A Talk: Transdisciplinary\u00A0Research Implementation:\u00A0\nHybrid Models,\u00A0Hybrid Teams\u00A0& Big Theory',
        presenters: 'Dan Maxwell\nWesley J. Wildman\nAndreas Tolk',
        location: 'Van Metre Hall 113',
      },
      {
        time: '11:35 - 12:00',
        topic: 'Track B Talk: Bridging Ontology Engineering to Agentic AI',
        presenters: 'Jeremy Ravenel',
        location: 'Fuse 2416',
      },
      {
        time: '12:00 - 13:00',
        topic:
          'Lunch (Provided)\n\nBonus Demo: Trivyn - AI-Augmented BFO/CCO Ontology Generation & Neurosymbolic Querying',
        presenters: '\n\nJames Adam',
        location: 'Exchange Lobby\n\nVan Metre Hall 113',
      },
      {
        time: '13:00 - 14:30',
        topic: 'Working Session A: FVEY Ontology Working Group',
        presenters:
          'Nigel D (Chair)\nPaul Cripps\nChris Partridge\nRebecca Rafferty\nBarry Smith\nDerek Weber\nJohn Beverley',
        location: 'Van Metre Hall 113',
      },
      {
        time: '13:00 - 14:30',
        topic:
          'Working Session B: Ontology Engineering in the Era of Generative AI: Current Trends and Future Trajectories',
        presenters: 'Joe Blankenship (Chair)\nAaron Damiano\nJonathan Vajda',
        location: 'Fuse 2416',
      },
      {
        time: '14:30 - 15:00',
        topic: 'Break',
        presenters: '',
        location: 'Exchange Lobby',
      },
      {
        time: '15:00 - 16:00',
        topic: 'Keynote:',
        presenters: 'Lieutenant General Robert "Bob" Elder',
        location: 'Van Metre Hall 113',
      },
      {
        time: '16:00 - 17:00',
        topic: 'Demo A: Ontos Cosmos',
        presenters: 'Denise Ferniza',
        location: 'Van Metre Hall 113',
      },
      {
        time: '16:00 - 17:00',
        topic: 'Demo B: SCRDF - Realizing the Semantics of Plans',
        presenters: 'Michael Norman\nLenny Blum',
        location: 'Fuse 2416',
      },
      {
        time: '17:00 - 18:00',
        topic: 'Summit Knowledge Solutions Hosted Mixer',
        presenters: '',
        location: '3434 Washington Blvd, Ste 1405, Arlington, VA 22201',
      },
      {
        time: '18:00 - 20:00',
        topic: 'Mixer and Dinner\n(Open)',
        presenters: '',
        location: 'TBD',
      },
    ],
  },
];

function renderLinkedLines(text, linkMap) {
  if (!text) {
    return '\u00A0';
  }

  return text.split('\n').map((line, index) => {
    const trimmed = line.trim();
    const href = linkMap[trimmed];

    return (
      <React.Fragment key={`${trimmed}-${index}`}>
        {index > 0 && <br />}
        {trimmed.length === 0 ? (
          '\u00A0'
        ) : href ? (
          <a href={href} target="_blank" rel="noopener noreferrer">
            {line}
          </a>
        ) : (
          line
        )}
      </React.Fragment>
    );
  });
}

function AgendaRow({ row }) {
  const topicLines = row.topic.split('\n');

  return (
    <tr className={styles.agendaRow}>
      <td className={styles.agendaTime}>{row.time}</td>

      <td className={styles.agendaTopic}>
        {topicLines.map((line, index) => {
          const colonIndex = line.indexOf(':');

          return (
            <React.Fragment key={`${row.time}-${index}`}>
              {index > 0 && <br />}
              {colonIndex > -1 ? (
                <>
                  <strong>{line.slice(0, colonIndex + 1)}</strong>
                  {line.slice(colonIndex + 1)}
                </>
              ) : (
                line
              )}
            </React.Fragment>
          );
        })}
      </td>

      <td className={styles.agendaPresenters}>
        {renderLinkedLines(row.presenters, speakerLinks)}
      </td>

      <td className={styles.agendaLocation}>
        {renderLinkedLines(row.location, locationLinks)}
      </td>
    </tr>
  );
}

export default function Agenda() {
  return (
    <section id="agenda" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Conference Agenda</h2>

        {agenda.map((day) => (
          <div className={styles.agendaDay} key={day.date}>
            <h3 className={styles.agendaDate}>{day.date}</h3>

            <div className={styles.agendaTableWrap}>
              <table className={styles.agendaTable}>
                <thead>
                  <tr>
                    <th>Time</th>
                    <th>Topic</th>
                    <th>Authors / Presenters</th>
                    <th>Location</th>
                  </tr>
                </thead>
                <tbody>
                  {day.rows.map((row, index) => (
                    <AgendaRow key={`${day.date}-${row.time}-${index}`} row={row} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
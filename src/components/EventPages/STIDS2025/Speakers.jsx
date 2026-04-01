import React from 'react';
import styles from './styles.module.css';

export default function Speakers() {
  const talks = [
    {
      title: 'Introducing D3FEND-CCO',
      abstract:
        'In this talk, the presenters introduce early work on robust semantic mappings between D3FEND and the Common Core Ontologies, showing how these mappings can improve interoperability and support data quality across cybersecurity workflows.',
      speakers: [
        {
          name: 'Giacomo De Colle',
          title: 'PhD Candidate',
          organization: 'University at Buffalo',
          image: '/img/speakers/giacomo-de-colle.jpeg',
          bio: 'Giacomo is a PhD candidate at the University at Buffalo, where he is doing research on the ontology of sovereignty in cyberspace and its ramifications in the ontology of cybersecurity. He is currently developing mappings between D3FEND and CCO in order to foster interoperability between the two ecosystems.'
        },
        {
          name: 'Peter E. Kaloroumakis',
          title: 'Principal Applied Ontologist',
          organization: 'MITRE Corporation',
          image: '/img/speakers/peter-kaloroumakis.jpeg',
          bio: 'Peter Kaloroumakis is a Principal Applied Ontologist at MITRE Corporation where he leads the D3FEND Project, funded by the National Security Agency. He also supports various government sponsors on the development of their Defensive Cyber Operations capabilities.'
        }
      ]
    },
    {
      title: 'BFO-Aligned Ontologies as the Semantic Backbone of Tool-Agnostic MBSE',
      abstract:
        'This presentation explores how BFO-aligned ontologies can serve as a semantic backbone for MBSE by connecting heterogeneous engineering artifacts through a shared, machine-interpretable vocabulary, improving validation, interoperability, and traceability.',
      speakers: [
        {
          name: 'Gideon Zufan',
          title: 'Knowledge Model Developer',
          organization: 'WTI Solutions (supporting the U.S. Air Force)',
          image: '/img/speakers/gideon-zufan.jpeg',
          bio: 'Gideon Zufan is a Knowledge Model Developer at WTI Solutions supporting the U.S. Air Force, where he develops ontologies and knowledge models to structure complex domain knowledge and enable semantic interoperability across defense data systems.'
        }
      ]
    },
    {
      title: 'My Ontologist: Evaluating BFO-Based AI for Definition Support',
      abstract:
        'This talk evaluates whether GPT-based systems can reliably support BFO-conformant ontology development, examining their performance in generating definitions, respecting ontology hierarchies, and producing valid OWL and Turtle content.',
      speakers: [
        {
          name: 'Carter-Beau Benson',
          title: 'Ontologist',
          organization: 'CUBRC Inc.',
          image: '/img/speakers/carter-benson.jpeg',
          bio: 'Carter-Beau Benson is an ontologist at CUBRC Inc. and a doctoral candidate at the University at Buffalo. His research spans applied ontology, knowledge representation, and domain modeling, with a dissertation developing an ontology of soccer.'
        }
      ]
    },
    {
      title: 'Ontology-Driven Test Strategy Optimization',
      abstract:
        'This presentation introduces an ontology-driven pipeline for test strategy generation and optimization, integrating semantic web technologies with digital engineering tools to reduce cost and improve traceability across test environments.',
      speakers: [
        {
          name: 'Joe Gregory',
          title: 'Assistant Research Professor',
          organization: 'University of Arizona',
          image: '/img/speakers/joe-gregory.jpeg',
          bio: 'Dr. Joe Gregory is an Assistant Research Professor in the Department of Systems and Industrial Engineering at the University of Arizona. His research focuses on digital engineering and the use of semantic technologies to improve engineering decision-making and lifecycle integration.'
        }
      ]
    },
    {
      title: 'Pangea CLP-PSL: Making Time Explicit in OWL-Centric Knowledge Graphs for Defense and Intelligence Applications',
      abstract:
        'This talk presents an approach that combines constraint logic programming and probabilistic soft logic to make temporal information in operational knowledge graphs more explicit, checkable, and repairable.',
      speakers: [
        {
          name: 'Amanda E. Hicks',
          title: 'Senior Ontologist',
          organization: 'Johns Hopkins University Applied Physics Laboratory',
          image: '/img/speakers/amanda-hicks.jpeg',
          bio: 'Amanda Hicks has nearly two decades of experience in ontology research and development and leads ontology research initiatives at Johns Hopkins University Applied Physics Laboratory.'
        },
        {
          name: 'Theresa Swift',
          title: 'Senior Software Engineer',
          organization: 'Johns Hopkins Applied Physics Lab',
          image: '/img/speakers/theresa-swift.jpeg',
          bio: 'Theresa Swift combines academic research with industry work and has more than 95 publications in logic programming and computational logic. She has been a core developer for XSB Prolog and the ErgoAI KRR system.'
        }
      ]
    },
    {
      title: 'Edge Computing Ontology DevOps: Progressive Web Apps for Ontology Development Designed to Support Each Stage of Knowledge Engineering Workflows',
      abstract:
        'This presentation describes a fully local, edge-first approach to ontology development tooling through browser-based progressive web apps designed to support each stage of the knowledge engineering lifecycle.',
      speakers: [
        {
          name: 'Jonathan M. Vajda',
          title: 'Ontologist (Management and Program Analyst)',
          organization: 'U.S. Customs and Border Protection',
          image: '/img/speakers/jonathan-vajda.jpeg',
          bio: 'Dr. Jonathan Vajda is an ontologist at U.S. Customs and Border Protection, where he designs and maintains formal, machine-readable domain models aligned with Basic Formal Ontology and related standards.'
        },
        {
          name: 'Aaron A. Damiano',
          title: 'Ontologist & Program Analyst',
          organization: 'U.S. Customs and Border Protection',
          image: '/img/speakers/aaron-damiano.jpeg',
          bio: 'Aaron Damiano is a semantic engineer, ontologist, and data scientist specializing in enterprise knowledge graphs and ontology-driven systems. He works at U.S. Customs and Border Protection, where he helps lead efforts to normalize, integrate, and operationalize data using formal ontologies and graph technologies.'
        }
      ]
    },
    {
      title: 'Authoring Mission Threads with Semantic Technologies',
      abstract:
        'This talk shows how semantic technologies can turn mission threads from narrative artifacts into executable, explainable knowledge using ontology, SHACL validation, provenance-linked graphs, and reusable authoring patterns.',
      speakers: [
        {
          name: 'David Kamien',
          title: 'CEO and Founder',
          organization: 'Mind-Alliance Systems, LLC',
          image: '/img/speakers/david-kamien.jpeg',
          bio: 'David Kamien is the CEO and Founder of Mind-Alliance Systems, LLC, and an innovation strategist with more than 25 years of experience spanning consulting, law, and national security. His work focuses on AI-powered solutions, knowledge graphs, retrieval-augmented generation, and decision-support systems for government, corporate, and legal contexts.'
        }
      ]
    },
    {
      title: 'Interactive Tool for Ontology Building',
      abstract:
        'This demo presents an interactive tool designed to help subject matter experts create ontologies aligned with BFO and CCO by guiding users through superclass and relation selection.',
      speakers: [
        {
          name: 'Roman Ilin',
          title: 'Research Computer Scientist',
          organization: 'Air Force Research Laboratory',
          image: '/img/speakers/roman-ilin.jpeg',
          bio: 'Dr. Roman Ilin is a Research Computer Scientist at the Air Force Research Laboratory. His work focuses on sensor data processing and information fusion.'
        },
        {
          name: 'Ali Hasanzadeh',
          title: 'Systems Engineering Ph.D. Candidate, Ontology Consultant',
          organization: 'Arizona State University, LongShortWay Inc.',
          image: '/img/speakers/ali-hasanzadeh.jpeg',
          bio: 'Ali is a Ph.D. student in Systems Engineering at Arizona State University. His research focuses on applied ontology for supply chain and manufacturing systems, with particular emphasis on developing a mereotopological framework for industrial ontologies.'
        }
      ]
    },
    {
      title: 'SCRDF - Realizing the Semantics of Plans',
      abstract:
        'This talk presents SCRDF, an RDF representation of a plan as a state machine using CCO for states and events and SHACL-AF for conditions and actions, bridging the gap between semantic models and software behavior.',
      speakers: [
        {
          name: 'Michael G. Norman',
          title: 'Executive Director',
          organization: 'JP Morgan Chase',
          image: '/img/speakers/michael-norman.jpeg',
          bio: 'Michael G. Norman has spent the last 11 years at JP Morgan designing and building access management systems for strategic platforms, with a focus on semantic technologies for governance and control processes.'
        },
        {
          name: 'Lenny Blum',
          title: 'Managing Director',
          organization: 'JP Morgan Chase & Co.',
          image: '/img/speakers/lenny-blum.jpeg',
          bio: 'Lenny Blum has been at JP Morgan Chase for the past nine years leading the delivery of governance and helping pioneer the use of semantic technologies to define and govern access patterns.'
        }
      ]
    }
  ];

  const additionalSpeakers = [
    {
      name: 'Daniel Chapple',
      title: 'Chief Executive Officer',
      organization: 'Beskar',
      image: '/img/speakers/daniel-chapple.jpeg',
      bio: 'Daniel Chapple is the Chief Executive Officer of Beskar, a cybersecurity and full-stack technology company founded by former government technology and security leaders. He has authored U.S. and international patents on post-quantum encrypted distributed systems and artificial intelligence and previously held senior security and counterintelligence roles in government.'
    },
    {
      name: 'Alec Sculley',
      title: 'Knowledge Engineer',
      organization: 'Summit Knowledge Solutions',
      image: '/img/speakers/alec-sculley.jpeg',
      bio: 'Alec Sculley is a knowledge engineer at Summit Knowledge Solutions specializing in ontology engineering. He has contributed to projects aligning W3C ontologies such as PROV-O and SSN/SOSA with the Basic Formal Ontology ecosystem and currently chairs IEEE Working Group P3195.1.1 on a cyber ontology standard.'
    },
    {
      name: 'Amy Morris',
      title: 'Senior Geodetic Earth Scientist',
      organization: 'National Geospatial-Intelligence Agency (NGA)',
      image: '/img/speakers/amy-morris.jpeg',
      bio: 'Amy Morris is a professionally licensed geotechnical engineer with more than 20 years of experience in consulting and federal service. Her work has focused extensively on levee infrastructure, risk assessment, and specialized analyses, and she is now engaged in research aimed at improving infrastructure documentation and detection.'
    },
    {
      name: 'Steve Wartik',
      title: 'Adjunct Research Staff Member',
      organization: 'Institute for Defense Analyses',
      image: '/img/speakers/steve-wartik.jpeg',
      bio: 'Steve Wartik studies the nature and structure of data and information as they relate to systems engineering, especially software-intensive systems. Over nearly three decades at the Institute for Defense Analyses, he has worked across domains including cybersecurity, C4ISR, generative AI, first responders, and interoperability.'
    }
  ];

   const soloTalks = talks.filter((talk) => talk.speakers.length === 1);
  const groupTalks = talks.filter((talk) => talk.speakers.length > 1);

  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Featured Speakers</h2>
        <p className={styles.sectionSubtitle}>
          Explore selected STIDS presentations and the speakers contributing to them.
        </p>

        {groupTalks.map((talk, index) => (
          <div
            key={`group-${index}`}
            style={{
              background: '#fff',
              borderRadius: '18px',
              padding: '2rem',
              marginBottom: '2rem',
              boxShadow: '0 4px 18px rgba(0, 0, 0, 0.08)'
            }}
          >
            <h3
              style={{
                fontSize: '1.75rem',
                marginBottom: '1rem',
                textAlign: 'center'
              }}
            >
              {talk.title}
            </h3>

            <p
              style={{
                maxWidth: '900px',
                margin: '0 auto 2rem',
                textAlign: 'center',
                lineHeight: '1.7',
                color: '#555'
              }}
            >
              {talk.abstract}
            </p>

            <div className={styles.grid}>
              {talk.speakers.map((speaker, speakerIndex) => (
                <div
                  key={speakerIndex}
                  className={`${styles.card} ${styles.speakerCard}`}
                >
                  <img
                    src={speaker.image}
                    alt={speaker.name}
                    className={styles.speakerImage}
                    style={{
                      width: '160px',
                      height: '160px',
                      objectFit: 'cover',
                      borderRadius: '50%',
                      margin: '0 auto 1rem',
                      display: 'block'
                    }}
                  />
                  <h4 className={styles.speakerName}>{speaker.name}</h4>
                  <div className={styles.speakerTitle}>
                    {speaker.title}
                    <br />
                    {speaker.organization}
                  </div>
                  <p style={{ marginTop: '1rem' }}>{speaker.bio}</p>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div
          style={{
            background: '#fff',
            borderRadius: '18px',
            padding: '2rem',
            marginBottom: '2rem',
            boxShadow: '0 4px 18px rgba(0, 0, 0, 0.08)'
          }}
        >
          <h3
            style={{
              fontSize: '1.75rem',
              marginBottom: '1rem',
              textAlign: 'center'
            }}
          >
            Individual Presentations
          </h3>

          <p
            style={{
              maxWidth: '900px',
              margin: '0 auto 2rem',
              textAlign: 'center',
              lineHeight: '1.7',
              color: '#555'
            }}
          >
            These presentations feature individual speakers contributing to this year’s STIDS program.
          </p>

          <div className={styles.grid}>
            {soloTalks.map((talk, index) => {
              const speaker = talk.speakers[0];
              return (
                <div
                  key={`solo-${index}`}
                  className={`${styles.card} ${styles.speakerCard}`}
                >
                  <h4
                    style={{
                      fontSize: '1.2rem',
                      marginBottom: '1rem',
                      textAlign: 'center'
                    }}
                  >
                    {talk.title}
                  </h4>

                  <img
                    src={speaker.image}
                    alt={speaker.name}
                    className={styles.speakerImage}
                    style={{
                      width: '160px',
                      height: '160px',
                      objectFit: 'cover',
                      borderRadius: '50%',
                      margin: '0 auto 1rem',
                      display: 'block'
                    }}
                  />
                  <h4 className={styles.speakerName}>{speaker.name}</h4>
                  <div className={styles.speakerTitle}>
                    {speaker.title}
                    <br />
                    {speaker.organization}
                  </div>
                  <p style={{ marginTop: '1rem' }}>{speaker.bio}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div
          style={{
            background: '#fff',
            borderRadius: '18px',
            padding: '2rem',
            marginBottom: '2rem',
            boxShadow: '0 4px 18px rgba(0, 0, 0, 0.08)'
          }}
        >
          <h3
            style={{
              fontSize: '1.75rem',
              marginBottom: '1rem',
              textAlign: 'center'
            }}
          >
            Additional Featured Speakers
          </h3>

          <p
            style={{
              maxWidth: '900px',
              margin: '0 auto 2rem',
              textAlign: 'center',
              lineHeight: '1.7',
              color: '#555'
            }}
          >
            These speakers are part of the developing STIDS program. Additional presentation details will be added as they are confirmed.
          </p>

          <div className={styles.grid}>
            {additionalSpeakers.map((speaker, index) => (
              <div key={index} className={`${styles.card} ${styles.speakerCard}`}>
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className={styles.speakerImage}
                  style={{
                    width: '160px',
                    height: '160px',
                    objectFit: 'cover',
                    borderRadius: '50%',
                    margin: '0 auto 1rem',
                    display: 'block'
                  }}
                />
                <h4 className={styles.speakerName}>{speaker.name}</h4>
                <div className={styles.speakerTitle}>
                  {speaker.title}
                  <br />
                  {speaker.organization}
                </div>
                <p style={{ marginTop: '1rem' }}>{speaker.bio}</p>
              </div>
            ))}
          </div>
        </div>

        <div
          style={{
            textAlign: 'center',
            marginTop: '3rem',
            padding: '2rem',
            background: '#f9f9f9',
            borderRadius: '16px'
          }}
        >
          <h3 style={{ marginBottom: '1rem' }}>More Speakers to Be Announced</h3>
          <p style={{ maxWidth: '700px', margin: '0 auto', color: '#555' }}>
            Additional speakers and presentations will be announced as the program is finalized.
            Please check back for updates as we continue to expand this year’s STIDS lineup.
          </p>
        </div>
      </div>
    </div>
  );
}

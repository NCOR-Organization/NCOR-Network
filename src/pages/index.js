import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import Head from '@docusaurus/Head';


// Import the new component
import AboutSection from '@site/src/components/AboutSection';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import PeopleSection from '@site/src/components/PeopleSection';
import ResearchAreasSection from '@site/src/components/ResearchAreasSection';
import EventsSection from '@site/src/components/EventsSection';
import FeaturedVideosSection from '@site/src/components/FeaturedVideosSection';
import PartnersSection from '@site/src/components/PartnersSection';

import styles from './styles.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={styles.heroBanner} style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 0,
          opacity: 0.6, // Adjust this value to control video visibility
        }}
      >
        <source src="/videos/ancient-geometry-transform.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay to improve text readability */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        zIndex: 1
      }} />

      {/* Platonic Forms Background - now as overlay */}
      <div style={{ 
        position: 'absolute', 
        top: 0, 
        left: 0, 
        right: 0, 
        bottom: 0,
        zIndex: 2,
        pointerEvents: 'none'
      }}>
        {/* Light grid texture overlay */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'linear-gradient(rgba(220, 220, 220, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(220, 220, 220, 0.5) 1px, transparent 1px)',
          backgroundSize: '20px 20px',
          opacity: 0.6
        }} />
        
        {/* SVG with Platonic solids */}
        <svg width="100%" height="100%" viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg">
          {/* Frame border */}
          <rect x="40" y="40" width="1120" height="720" fill="none" stroke="#9e7418" strokeWidth="3" strokeDasharray="2,2" opacity="0.3" />
          <rect x="50" y="50" width="1100" height="700" fill="none" stroke="#9e7418" strokeWidth="1" opacity="0.3" />
          
          {/* Dodecahedron */}
          <g transform="translate(300, 250)">
            <circle cx="0" cy="0" r="150" fill="none" stroke="#9e7418" strokeWidth="1.5" opacity="0.3" />
            <path d="M0,-90 L80,-26 L50,70 L-50,70 L-80,-26 Z" fill="none" stroke="#9e7418" strokeWidth="1.2" opacity="0.5" />
            <path d="M0,-90 L80,-26 L120,-60 L60,-130 L-60,-130 L-120,-60 L-80,-26 Z" fill="none" stroke="#9e7418" strokeWidth="1.2" opacity="0.5">
              <animateTransform 
                attributeName="transform" 
                type="rotate" 
                from="0" 
                to="360" 
                dur="100s" 
                repeatCount="indefinite" 
                additive="sum"
              />
            </path>
          </g>
          
          {/* Tetrahedron */}
          <g transform="translate(900, 250)">
            <circle cx="0" cy="0" r="150" fill="none" stroke="#9e7418" strokeWidth="1.5" opacity="0.3" />
            <path d="M0,-110 L-95,60 L95,60 Z" fill="none" stroke="#9e7418" strokeWidth="1.2" opacity="0.5" />
            <path d="M0,-110 L-95,60 L0,15 Z" fill="none" stroke="#9e7418" strokeWidth="1.2" opacity="0.5" />
            <path d="M0,-110 L95,60 L0,15 Z" fill="none" stroke="#9e7418" strokeWidth="1.2" opacity="0.5" />
            <path d="M-95,60 L95,60 L0,15 Z" fill="none" stroke="#9e7418" strokeWidth="1.2" opacity="0.5">
              <animateTransform 
                attributeName="transform" 
                type="rotate" 
                from="0" 
                to="360" 
                dur="90s" 
                repeatCount="indefinite" 
                additive="sum"
              />
            </path>
          </g>
          
          {/* Cube */}
          <g transform="translate(300, 550)">
            <circle cx="0" cy="0" r="150" fill="none" stroke="#9e7418" strokeWidth="1.5" opacity="0.3" />
            <path d="M-80,-80 L80,-80 L80,80 L-80,80 Z" fill="none" stroke="#9e7418" strokeWidth="1.2" opacity="0.5" />
            <path d="M-60,-60 L100,-60 L100,100 L-60,100 Z" fill="none" stroke="#9e7418" strokeWidth="1.2" opacity="0.5" transform="rotate(45)">
              <animateTransform 
                attributeName="transform" 
                type="rotate" 
                from="45" 
                to="405" 
                dur="110s" 
                repeatCount="indefinite" 
                additive="sum"
              />
            </path>
          </g>
          
          {/* Octahedron */}
          <g transform="translate(600, 550)">
            <circle cx="0" cy="0" r="150" fill="none" stroke="#9e7418" strokeWidth="1.5" opacity="0.3" />
            <path d="M0,-100 L100,0 L0,100 L-100,0 Z" fill="none" stroke="#9e7418" strokeWidth="1.2" opacity="0.5" />
            <path d="M0,-100 L100,0 L0,0 Z" fill="none" stroke="#9e7418" strokeWidth="1.2" opacity="0.5" />
            <path d="M100,0 L0,100 L0,0 Z" fill="none" stroke="#9e7418" strokeWidth="1.2" opacity="0.5" />
            <path d="M0,100 L-100,0 L0,0 Z" fill="none" stroke="#9e7418" strokeWidth="1.2" opacity="0.5" />
            <path d="M-100,0 L0,-100 L0,0 Z" fill="none" stroke="#9e7418" strokeWidth="1.2" opacity="0.5">
              <animateTransform 
                attributeName="transform" 
                type="rotate" 
                from="0" 
                to="360" 
                dur="120s" 
                repeatCount="indefinite" 
                additive="sum"
              />
            </path>
          </g>
          
          {/* Icosahedron */}
          <g transform="translate(900, 550)">
            <circle cx="0" cy="0" r="150" fill="none" stroke="#9e7418" strokeWidth="1.5" opacity="0.3" />
            <path d="M0,-100 L95,-30 L60,80 L-60,80 L-95,-30 Z" fill="none" stroke="#9e7418" strokeWidth="1.2" opacity="0.5" />
            <path d="M0,-100 L95,-30 L60,80 Z" fill="none" stroke="#9e7418" strokeWidth="1.2" opacity="0.5" />
            <path d="M0,-100 L-95,-30 L-60,80 Z" fill="none" stroke="#9e7418" strokeWidth="1.2" opacity="0.5" />
            <path d="M95,-30 L60,80 L-60,80 L-95,-30 Z" fill="none" stroke="#9e7418" strokeWidth="1.2" opacity="0.5">
              <animateTransform 
                attributeName="transform" 
                type="rotate" 
                from="0" 
                to="360" 
                dur="105s" 
                repeatCount="indefinite" 
                additive="sum"
              />
            </path>
          </g>
          
          {/* Corner decorations */}
          <path d="M80,80 C100,60 120,60 140,80 C120,100 120,120 140,140 C100,120 80,120 60,140 C80,100 60,80 80,80" fill="none" stroke="#9e7418" strokeWidth="1" opacity="0.4" />
          <path d="M1120,80 C1100,60 1080,60 1060,80 C1080,100 1080,120 1060,140 C1100,120 1120,120 1140,140 C1120,100 1140,80 1120,80" fill="none" stroke="#9e7418" strokeWidth="1" opacity="0.4" />
          <path d="M80,720 C100,740 120,740 140,720 C120,700 120,680 140,660 C100,680 80,680 60,660 C80,700 60,720 80,720" fill="none" stroke="#9e7418" strokeWidth="1" opacity="0.4" />
          <path d="M1120,720 C1100,740 1080,740 1060,720 C1080,700 1080,680 1060,660 C1100,680 1120,680 1140,660 C1120,700 1140,720 1120,720" fill="none" stroke="#9e7418" strokeWidth="1" opacity="0.4" />
        </svg>
      </div>

      <div className="container" style={{ width: '100%', position: 'relative', zIndex: 3 }}>
        <div style={{ 
          position: 'relative',
          textAlign: 'center', 
          padding: '4rem 0',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          minHeight: '80vh'
        }}>
          <h1 style={{ 
            fontSize: 'clamp(2.75rem, 5vw, 3.75rem)', // Responsive font size that scales between 2.75rem and 3.75rem
            fontWeight: '700', 
            color: '#ffffff',
            margin: '0 0 1rem 0',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'
          }}>
            The Ontology Research & Development Network
          </h1>
          <p style={{ 
            fontSize: '1.25rem', 
            maxWidth: '800px', 
            margin: '0 auto 2rem auto', 
            color: '#ffffff', // Changed to white for better contrast
            lineHeight: '1.6',
            textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)' // Added text shadow for better readability
          }}>
            The NCOR Network is an international non-profit organization fostering ontology engineering best practices 
            that enable interoperability for robust AI systems.
          </p>
          <div>
            <a
              className="button button--lg"
              style={{ 
                backgroundColor: '#9e7418', 
                borderColor: '#9e7418',
                color: 'white',
                margin: '0 0.75rem',
                padding: '0.75rem 1.5rem',
                fontWeight: '500',
                borderRadius: '4px',
                textDecoration: 'none',
                position: 'relative', // Ensure buttons are above overlay
                zIndex: 3
              }}
              href="/join">
              Join NCOR
            </a>
            <a
              className="button button--lg"
              style={{ 
                backgroundColor: 'rgba(255, 255, 255, 0.15)',
                borderColor: '#ffffff',
                color: '#ffffff',
                margin: '0 0.75rem',
                padding: '0.75rem 1.5rem',
                fontWeight: '500',
                borderRadius: '4px',
                textDecoration: 'none',
                backdropFilter: 'blur(4px)',
                position: 'relative', // Ensure buttons are above overlay
                zIndex: 3
              }}
              href="/docs/get-started">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
<Layout
  title={`${siteConfig.title}`}
  description="NCOR - A global hub fostering National Centers for Ontological Research across diverse cultures"
  className="homepage">

  {/* ✅ SEO meta tags */}
  <Head>
    <title>NCOR Network | Ontology Research, Collaboration & Best Practices</title>
    <meta
      name="description"
      content="The NCOR Network is an international non-profit fostering ontology research, education, and interoperability for robust AI and data systems."
    />
    <meta
      name="keywords"
      content="ontology, NCOR, research, workshops, AI, education"
    />
  </Head>

  <HomepageHeader />

      {/* About Section */}
      <section style={{ 
        background: '#fff',
        padding: '60px 0', 
        borderBottom: '1px solid #eee',
        position: 'relative'
      }}>
        <AboutSection />
      </section>
      
      {/* Research Areas Section */}
      <ResearchAreasSection />
      
      {/* The rest of your page content */}
      <main>
        {/* Network Vision section */}
        <div className="container padding-vert--xl">
          <div className="row">
            <div className="col col--8 col--offset-2">
              <Heading as="h2" className="text--center margin-bottom--lg">Why NCOR?</Heading>
              <div className="margin-bottom--xl" style={{ textAlign: 'justify' }}>
                <p>
                  The NCOR Network is a global non-profit organization dedicated to advancing the field of ontology by serving as a coordinating hub
                  for ontological research, education, and practical implementation across diverse perspectives.
                </p>
                <p>
                  Our mission is to encourage the emergence of ontology centers that capture unique domain knowledge 
                  while maintaining rigorous standards for disambiguation and interoperability. By embracing diverse philosophical traditions 
                  and technological frameworks, we aim to develop richer, more nuanced ontological resources that benefit humanity.
                </p>
                <p>
                  The NCOR Network facilitates collaboration between academic institutions, government agencies, and industry partners worldwide. 
                  Our work supports critical applications in defense, intelligence, healthcare, manufacturing, and emerging AI systems where precise 
                  data-driven representation and interoperability are essential for global cooperation.
                </p>
                <div className="text--center margin-top--lg">
                  <Link
                    className="button button--primary button--lg"
                    style={{ backgroundColor: '#9e7418', borderColor: '#9e7418' }}
                    to="/docs/about/mission">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <EventsSection />
        
        {/* Featured Videos section */}
        <FeaturedVideosSection />
        
        <HomepageFeatures />
        <PeopleSection />
        <PartnersSection />
      </main>
    </Layout>
  );
}

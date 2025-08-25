import React from 'react';
import Layout from '@theme/Layout';
import STIDS2025Hero from '@site/src/components/EventPages/STIDS2025/Hero';
import Overview from '@site/src/components/EventPages/STIDS2025/Overview';
import CallForPapers from '@site/src/components/EventPages/STIDS2025/CallForPapers';
import ImportantDates from '@site/src/components/EventPages/STIDS2025/ImportantDates';
import Registration from '@site/src/components/EventPages/STIDS2025/Registration';
import ContactForm from '@site/src/components/EventPages/STIDS2025/ContactForm';

const SEO = {
  title: 'STIDS 2025 – Semantic Technologies for Intelligence, Defense, and Security',
  description:
    'Join us for the International Conference on Semantic Technologies for Intelligence, Defense, and Security (STIDS 2025), co-hosted with KGOIDS and the DOD-IC Ontology Working Group. November 17–19, 2025.',
  url: 'https://ncor-network.org/events/stids2025',
  image: '/img/stids2025-banner.png',
  keywords: [
    'STIDS 2025',
    'semantic technologies',
    'intelligence',
    'defense',
    'security',
    'ontology',
    'knowledge graphs',
    'NCOR',
  ],
};

export default function STIDS2025() {
  return (
    <Layout title={SEO.title} description={SEO.description}>
      <STIDS2025Hero />
      <Overview />
      <CallForPapers />
      <ImportantDates />
      <Registration />
      <ContactForm />
    </Layout>
  );
}

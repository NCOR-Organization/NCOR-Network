import React from 'react';
import Layout from '@theme/Layout';
import STIDS2025Hero from '@site/src/components/EventPages/STIDS2025/Hero';
import Overview from '@site/src/components/EventPages/STIDS2025/Overview';
import Registration from '@site/src/components/EventPages/STIDS2025/Registration';
import Agenda from '@site/src/components/EventPages/STIDS2025/Agenda';
import Speakers from '@site/src/components/EventPages/STIDS2025/Speakers';
import ContactForm from '@site/src/components/EventPages/STIDS2025/ContactForm';

const SEO = {
  title: 'STIDS 2026 – Semantic Technologies for Intelligence, Defense, and Security',
  description:
    'Join us for the International Conference on Semantic Technologies for Intelligence, Defense, and Security (STIDS 2026), co-hosted with KGOIDS and the DOD-IC Ontology Working Group.',
  url: 'https://ncor-network.org/events/stids2026',
  image: '/img/stids2025-banner.png',
  keywords: [
    'STIDS 2026',
    'semantic technologies',
    'intelligence',
    'defense',
    'security',
    'ontology',
    'knowledge graphs',
    'NCOR',
  ],
};

export default function STIDS2026() {
  return (
    <Layout title={SEO.title} description={SEO.description}>
      <STIDS2025Hero />
      <Overview />

      <section id="registration">
        <Registration />
      </section>

      <Agenda />

      <section id="speakers">
        <Speakers />
      </section>

      <ContactForm />
    </Layout>
  );
}
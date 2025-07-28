// Trigger rebuild to deploy CEUR template ZIP
// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'The Ontology Research & Development Network',
  tagline: 'Advancing ontology research, education, and implementation across domains',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://ncor-network.org',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'NCOR-Organization', // Updated from CommonCoreOntology
  projectName: 'NCOR-Network', // Updated from commoncoreontology.github.io
  trailingSlash: false,

  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  
  // Explicitly exclude the resources directory from static files copying
  staticDirectories: ['static'],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Remove or update this if needed
          editUrl: 'https://github.com/NCOR-Organization/NCOR-Network/tree/main/',
          exclude: ['resources/**'],
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],
  
  // Add the wiki as a separate plugin instead of in the preset
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'wiki',
        path: 'wiki',
        routeBasePath: 'wiki',
        sidebarPath: require.resolve('./wikiSidebars.js'),
        editUrl: 'https://github.com/NCOR-Organization/NCOR-Network/tree/main/',
        exclude: ['resources/**'],
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/ncor-network-logo.png',
      navbar: {
        title: 'NCOR',
        logo: {
          alt: 'NCOR Logo',
          src: 'img/ncor-network-logo.png',
          srcDark: 'img/ncor-network-logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'docsSidebar',
            position: 'right',
            label: 'Get Started',
},
{
  type: 'docSidebar',
  sidebarId: 'docsSidebar',
  label: 'Training',
  to: '/docs/training/overview',
  position: 'right',
},
{
  type: 'dropdown',

            type: 'dropdown',
            label: 'About',
            position: 'right',
            items: [
              {
                label: 'Mission',
                to: '/docs/about/mission',
              },
              {
                label: 'What is Ontology',
                to: '/docs/about/what-is-ontology',
              },
              {
                label: 'Ontology for AI',
                to: '/docs/about/ontology-for-ai',
              },
              {
                label: 'Success Stories',
                to: '/docs/about/success-stories',
              },
            ],
          },
          {
            type: 'dropdown',
            label: 'Research',
            position: 'right',
            items: [
              {
                label: 'Areas',
                to: '/docs/research/areas',
              },
              {
                label: 'Projects',
                to: '/docs/research/projects',
              },
              {
                label: 'Publications',
                to: '/docs/research/publications',
              },
            ],
          },
          {
            type: 'dropdown',
            label: 'Wiki',
            position: 'right',
            items: [
              {
                label: 'Ontology 101',
                to: '/wiki/main-page',
              },
              {
                label: 'Courses',
                to: '/wiki/courses/barry-smith',
              },
              {
                label: 'Ontologies',
                to: '/wiki/ontologies/basic-formal-ontology',
              },
              {
                label: 'Books',
                to: '/wiki/books/why-machines-will-never-rule-the-world',
              },
              {
                label: 'Glossary',
                to: '/wiki/glossary',
              },
            ],
          },
          {
            to: '/docs/events/office-hours',
            position: 'right',
            label: 'Events',
            activeBasePath: '/docs/events',
          },
          {
            to: '/docs/affiliates/individuals',
            position: 'right',
            label: 'Affiliates',
            activeBasePath: '/docs/affiliates',
          },
          {
            href: 'https://github.com/NCOR-Organization',
            label: 'GitHub',
            position: 'right',
          },
          {
            to: '/join',
            label: 'Join NCOR',
            position: 'right',
            className: 'button button--primary navbar-join-button',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'NCOR',
            items: [
              {
                html: `
                  <p style="text-align: left; max-width: 300px; margin-top: -5px;">
                    National Center for Ontological Research (NCOR) is an international organization that promotes interdisciplinary research on the theory and application of ontologies.
                  </p>
                `,
              },
            ],
          },
          {
            title: 'Quick Links',
            items: [
              {
                label: 'Home',
                to: '/',
              },
              {
                label: 'About',
                to: '/docs/about/mission',
              },
              {
                label: 'Research',
                to: '/docs/research/publications',
              },
              {
                label: 'Events',
                to: '/docs/events/office-hours',
              },
              {
                label: 'People',
                to: '/docs/affiliates/individuals',
              },
            ],
          },
          {
            title: 'Resources',
            items: [
              {
                label: 'Publications',
                to: '/docs/research/publications',
              },
              {
                label: 'Ontologies',
                to: '/docs/get-started',
              },
              {
                label: 'Useful Links',
                to: '/docs/useful-links',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/NCOR-Organization',
              },
            ],
          },
          {
            title: 'Contact',
            items: [
              {
                html: `
                  <div style="display: flex; align-items: flex-start; margin-bottom: 8px;">
                    <svg style="min-width: 20px; margin-right: 8px; margin-top: 4px;" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" fill="#adbac7"/>
                    </svg>
                    <span>
                      500 Seneca Street<br/>
                      Buffalo, NY 14204<br/>
                      United States
                    </span>
                  </div>
                  <div style="display: flex; align-items: center;">
                    <svg style="min-width: 20px; margin-right: 8px;" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" fill="#adbac7"/>
                    </svg>
                    <a href="mailto:ncornetwork@gmail.com">ncornetwork@gmail.com</a>
                  </div>
                `,
              },
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} National Center for Ontological Research. All rights reserved. | <a href="#">Privacy Policy</a> | <a href="#">Terms of Use</a>`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
    
    }),
  stylesheets: [
    {
      href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Merriweather:wght@300;400;700;900&display=swap',
      type: 'text/css',
    },
  ],
  headTags: [
    {
      tagName: 'script',
      attributes: {
        type: 'text/javascript',
        src: 'https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js',
      },
    },
    {
      tagName: 'script',
      attributes: {
        type: 'text/javascript',
      },
      innerHTML: `
        (function(){
          emailjs.init("YOUR_USER_ID"); // Replace with your actual EmailJS user ID
        })();
      `,
    },
  ],
};

export default config;

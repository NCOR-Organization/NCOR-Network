/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const wikiSidebars = {
  wikiSidebar: [
    {
      type: 'doc',
      id: 'index',
      label: 'Wiki Home',
    },
    {
      type: 'category',
      label: 'Courses',
      items: ['courses/barry-smith', 'courses/john-beverley'],
    },
    {
      type: 'category',
      label: 'Ontologies',
      items: [
        'ontologies/basic-formal-ontology', 
        'ontologies/common-core-ontologies', 
        ],
    },
    {
      type: 'category',
      label: 'Books',
      items: [
        'books/why-machines-will-never-rule-the-world', 
        'books/building-ontologies-with-basic-formal-ontology',
      ],
    },
  ],
};

module.exports = wikiSidebars; 
// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [
    {
      type: 'doc',
      id: 'intro',
      label: 'Introduction',
    },
    {
      type: 'category',
      label: 'Installation',
      items: ['installation/installation'],
    },
    {
      type: 'category',
      label: 'Usage Guide',
      items: [
        'usage/usage',
        'usage/password-manager',
        'usage/encryption-manager',
        'usage/backup-manager',
        'usage/log-manager',
      ],
    },
    {
      type: 'category',
      label: 'Error Codes',
      items: ['errors/error-codes'],
    },
    {
      type: 'category',
      label: 'Versions',
      items: [
        'versions/v2.3.0',
        'versions/v2.2.0',
        'versions/v2.1.0',
        'versions/v2.0.0',
      ],
    },
  ],
};

module.exports = sidebars;

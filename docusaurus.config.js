// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'XPManager',
  tagline: 'A fast and efficient CLI tool for managing passwords and encrypting sensitive data.',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://xpmanager.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'xpmanager', // Usually your GitHub org/user name.
  projectName: 'xpmanager.github.io', // Usually your repo name.
  deploymentBranch: 'gh-pages', // Branch that GitHub pages will deploy from
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'XPManager',
        logo: {
          alt: 'XPManager Logo',
          src: 'img/logo.jpg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Documentation',
          },
          {
            href: 'https://github.com/xpmanager/XPManager',
            label: 'GitHub',
            position: 'right',
          },
          {
            label: 'GitHub Discussions',
            href: 'https://github.com/orgs/xpmanager/discussions',
            position: 'right',
          },
          {
            label: 'Feature Requests',
            href: 'https://github.com/xpmanager/xpmanager/issues/new?labels=enhancement',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} XPManager Project. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      // Add custom theme settings
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
      // Update theme colors to match our palette
      colors: {
        primary: {
          main: '#017598',
          dark: '#017598',
          light: '#1ed7cd',
        },
        secondary: {
          main: '#1ed7cd',
          dark: '#087ea2',
        },
      },
    }),
};

export default config;

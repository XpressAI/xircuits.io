// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Spark Cyclone',
  tagline: 'The performance will blow you away',
  url: 'http://sparkcyclone.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/cyclone-logo.png',
  organizationName: 'XpressAI', // Usually your GitHub org/user name.
  projectName: 'sparkcyclone', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/XpressAI/sparkcyclone.io/edit/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/XpressAI/sparkcyclone.io/edit/main/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Spark Cyclone',
        logo: {
          alt: 'Spark Cyclone Logo',
          src: 'img/cyclone-logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'index',
            position: 'left',
            label: 'Docs',
          },
          {to: 'https://blog.xpress.ai', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/XpressAI/SparkCyclone',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Getting Started',
                to: '/docs/getting-started/vector-engine-setup',
              },
              {
                 label: 'Configuration',
                 to: '/docs/configuration/spark-cyclone-configuration',
              },
              {
                 label: 'Examples',
                 to: '/docs/examples/running-tpch-benchmarks',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/spark-cyclone',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/J5ERetfR',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/XpressAI',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                href: 'https://blog.xpress.ai',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/XpressAI/SparkCyclone',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Xpress AI GK. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;

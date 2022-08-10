// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Xircuits',
  tagline: 'Xpress your Workflows',
  url: 'http://xircuits.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/xpress-logo.ico',
  organizationName: 'XpressAI', // Usually your GitHub org/user name.
  projectName: 'Xircuits', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/XpressAI/xircuits.io/edit/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/XpressAI/xircuits.io/edit/main/blog/',
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
        title: 'Home',
        logo: {
          alt: 'Xircuits Logo',
          src: 'img/xircuits-logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'index',
            position: 'left',
            label: 'Docs',
          },
          {to: 'https://www.xpress.ai/blog/', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/XpressAI/xircuits',
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
                to: '/docs/category/getting-started',
              },
              {
                 label: 'User Guide',
                 to: '/docs/category/user-guide',
              },
              {
                label: 'Developer Guide',
                to: '/docs/category/developer-guide',
             },
              {
                label: 'Examples',
                to: '/docs/category/examples',
             },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/xircuits',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/C4DaD3MrAH',
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
                href: 'https://www.xpress.ai/blog/',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/XpressAI/xircuits',
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
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true
      }
    }),
};

module.exports = config;

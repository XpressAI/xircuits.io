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
  organizationName: 'XpressAI',
  projectName: 'Xircuits',
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
      }
      ),

    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
        sidebar: {
          hideable: true,
        }
      },
      navbar: {
        title: '',
        logo: {
          alt: 'Xircuits Logo',
          src: 'img/xircuits-logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'main/index',
            position: 'left',
            label: 'Docs',
          },
          {
            type: 'doc',
            docId: 'main/references/cli-commands',
            position: 'left',
            label: 'CLI Commands',
          },
          {
            type: 'doc',
            docId: 'component-library/index',
            position: 'left',
            label: 'Component Library',
          },
          {
            type: 'doc',
            docId: 'project-template/index',
            position: 'left',
            label: 'Project Template',
          },
          {to: 'https://www.xpress.ai/blog/', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/XpressAI/xircuits',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
          },
          {
            href: 'https://xpress.ai/',
            label: 'Platform',
            position: 'right',
            className: 'navbar__link--platform',
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
                to: 'docs/main/#first-steps',
              },
              {
                 label: 'Tutorials',
                 to: 'docs/category/tutorials',
              },
              {
                label: 'Developer Guide',
                to: 'docs/category/developer-guide',
             }
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
        copyright: `Copyright © ${new Date().getFullYear()} Xpress AI KK. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true
      },
    }),

    themes: [
      [
        "@xpressai/docusaurus-vecto-search",
        /** type {import("@xpressai/docusaurus-vecto-search").PluginOptions} */
        ({
          docsRouteBasePath: '/',
          vecto_public_token: process.env.VECTO_PUBLIC_TOKEN,
          vector_space_id: Number(process.env.VECTOR_SPACE_ID),
          top_k: 20,
          rankBy: "weightedAverage"
        }),
      ],
    ],
};

module.exports = config;

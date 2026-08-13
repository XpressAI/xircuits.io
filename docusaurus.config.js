// @ts-check
const {themes: prismThemes} = require('prism-react-renderer');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Xircuits',
  tagline: 'Xpress your Workflows',
  url: 'https://xircuits.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/xpress-logo.ico',
  organizationName: 'XpressAI',
  projectName: 'Xircuits',

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'throw',
    },
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/XpressAI/xircuits.io/edit/main/',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/XpressAI/xircuits.io/edit/main/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themes: ['@xpressai/docusaurus-vecto-search'],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
        sidebar: {
          hideable: true,
        },
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
              {label: 'Getting Started', to: 'docs/main/#first-steps'},
              {label: 'Tutorials', to: 'docs/category/tutorials'},
              {label: 'Developer Guide', to: 'docs/category/developer-guide'},
            ],
          },
          {
            title: 'Community',
            items: [
              {label: 'Stack Overflow', href: 'https://stackoverflow.com/questions/tagged/xircuits'},
              {label: 'Discord', href: 'https://discord.gg/C4DaD3MrAH'},
              {label: 'Twitter', href: 'https://twitter.com/XpressAI'},
            ],
          },
          {
            title: 'More',
            items: [
              {label: 'Blog', href: 'https://www.xpress.ai/blog/'},
              {label: 'GitHub', href: 'https://github.com/XpressAI/xircuits'},
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Xpress AI KK. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
      },
      vectorSearch: {
        mode: 'hybrid',
        vecto: {
          publicToken: process.env.VECTO_PUBLIC_TOKEN ?? '',
          vectorSpaceId: Number(process.env.VECTO_SPACE_ID ?? '0'),
          batchSize: 5,
        },
        content: {
          splitOnHeadings: [2, 3],
        },
      },
    }),
};

module.exports = config;

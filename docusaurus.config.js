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
  plugins: ['./src/remark'],
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
      vecto: {
        // INSERT_VECTOR_SPACE_TOKEN_HERE.
        token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJ1cG4iOiJiYXJfdG9rZW4iLCJpc3MiOiJodHRwczovL3ZlY3RvLmFpIiwiZ3JvdXBzIjpbInVzZXIiXSwiZXhwIjoxNjYxNTY2NDQ1LCJhdWQiOlsiMyJdLCJpYXQiOjE2NTg5NzQ0NDUsImp0aSI6ImQ5YWIzMmM4LWI4ZjgtNGI1Ni04YzA0LTUwZWVkNThiMzljMSJ9.SXTnRdLD65_5PcMIY_TZ3F4AwdaXwZOV4uz6qnVQerVrLZifKM3awoVDgq9Y_ES0PXQQJrRleqUpk9W0tpKlI_FU-M9_BPwOa2bJmN5rAB68OBk4BtOHDn3Lhv5l4Z_ef04CxLfk3Q2OuXE0ELyrmdKA6VQw66h5S3whFitQc1i_t0m6WQE63H2ZAG4kRk2WWUIG3VHBd2m2kihc_5UBNzYwqrz8l-1j7BEUbkz3dz242Zhhf8YL3881YsMlI-f0lKM93PJkyH-1EZfnx7okE2wnfKnu1BNYU5llNN2-2T8RH_xj3lr1SC-NryqumTV7G6-ZwhnSFfUjvWYX1G-YBQ', 

        vecto_base_url: 'http://localhost:8080/api/v0/lookup',

        vector_space_id: 3, // INSERT_VECTOR_SPACE_ID
      },
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
          {to: 'https://blog.xpress.ai', label: 'Blog', position: 'left'},
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
                href: 'https://blog.xpress.ai',
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

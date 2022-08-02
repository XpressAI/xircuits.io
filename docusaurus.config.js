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
        token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJ1cG4iOiJiYXJfdG9rZW4iLCJpc3MiOiJodHRwczovL3ZlY3RvLmFpIiwiZ3JvdXBzIjpbInVzZXIiXSwiZXhwIjoxNjYyMDAyNzAzLCJhdWQiOlsiMyJdLCJpYXQiOjE2NTk0MTA3MDMsImp0aSI6ImFjNmU4YTlkLWYxZWMtNGQ3Zi1hODgxLTNiN2I5NTY2YTFiZCJ9.jyxM-R31Hyjs7OkpgbDKr5yR7WKh0v0ZayebYO-8kuUWAJcUIkOaxszAZDAi8LiIwf-P1MhrMNnzBiz-4r_xvcRTI93S2Dr5SesHZ_YeWt66SHLh-kctPsexgOg4MHf_QuHJBXX5_2nRyuig_GDmZ86mhBBsdcbmv6Qq9JruPFNXVmh7-Ppma0NoMnIV36bpavEqueAZKFpuU7WJEww5LqMFB1si-nlQDew8KBqEONwWQb3iLj9lJQbK0GYrDoGtWt6tzkX1v_p7MrPQAlW7fZAF9XjKJSuLXxO5JHkMrcL6kIpV7XT6ZDO_xHe6mKqSDzOYx50oIAwZ7CMs929DdQ', 

        vecto_base_url: 'http://localhost:8080/api/v0/lookup',
        vecto_ingest_url: 'http://127.0.0.1:8080/api/v0/index',

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

// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'conscious stardust',
  tagline: '',
  url: 'https://snigui.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'snigui',
  projectName: 'portfolio',

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/snigui/snigui.github.io',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/snigui/snigui.github.io',
          blogSidebarTitle: 'Recent',
          blogSidebarCount: 3,
          feedOptions: {
            type: 'all',
            copyright: `Copyright © ${new Date().getFullYear()} Motadaka.`,
          },
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  plugins: [
  [
    '@docusaurus/plugin-pwa',
    {
      debug: true,
      offlineModeActivationStrategies: [
        'appInstalled',
        'standalone',
        'queryString',
      ],
        pwaHead: [
          {
            tagName: 'link',
            rel: 'icon',
            href: '/img/favicon.ico',
          },
          {
            tagName: 'link',
            rel: 'manifest',
            href: '/manifest.json',
          },
          {
            tagName: 'meta',
            name: 'theme-color',
            content: 'rgb(37, 194, 160)',
          },
          {
            tagName: 'meta',
            name: 'apple-mobile-web-app-capable',
            content: 'yes',
          },
          {
            tagName: 'meta',
            name: 'apple-mobile-web-app-status-bar-style',
            content: '#000',
          },
          {
            tagName: 'link',
            rel: 'apple-touch-icon',
            href: '/img/favicon.ico',
          },
          {
            tagName: 'link',
            rel: 'mask-icon',
            href: '/img/favicon.ico',
            color: 'rgb(37, 194, 160)',
          },
          {
            tagName: 'meta',
            name: 'msapplication-TileImage',
            content: '/img/favicon.ico',
          },
          {
            tagName: 'meta',
            name: 'msapplication-TileColor',
            content: '#000',
          }
        ]
    }],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'main',
        logo: {
          alt: 'balance',
          src: 'img/logo.svg',
          target: '_self', // By default, this value is calculated based on the `href` attribute (the external link will open in a new tab, all others in the current one).
        },
        items: [
          {
            type: 'doc',
            docId: 'credentials',
            position: 'left',
            label: 'credentials',
          },
          {to: '/blog', label: 'blog', position: 'left'},
          {
            href: 'https://github.com/snigui',
            label: 'github',
            position: 'left',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Web Links 🌐',
            items: [
              {
                label: 'digital art',
                href: 'https://www.deviantart.com/snilett',
              },
              {
                label: 'linkedin',
                href: 'https://www.linkedin.com/in/motadaka',
              },
            ],
          },
          {
            title: 'Attributions ®️',
            items: [
              {
                label: 'vectors',
                href: 'https://www.freepik.com',
              },
              {
                label: 'svgs',
                href: 'https://www.svgrepo.com/'
              },
            ],
          },
          {
            title: 'Pages ⚁',
            items: [
              {
                label: 'blog',
                to: '/blog',
              },
              {
                label: 'credentials',
                to: '/docs/credentials',
              },
            ],
          },
        ],
        copyright: ` © ${new Date().getFullYear()} motadaka 🧡 powered by react`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: false,
      switchConfig: {
        darkIcon: '🌕',
        darkIconStyle: {
          marginLeft: '2px',
        },
        // Unicode icons such as '\u2600' will work
        // Unicode with 5 chars require brackets: '\u{1F602}'
        lightIcon: '🌘',
        lightIconStyle: {
          marginLeft: '1px',
        },
      },
    },
  }),
};

module.exports = config;
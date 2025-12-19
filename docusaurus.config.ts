import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Agregarr',
  tagline: 'The easiest way to create and manage Plex Collections',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  url: 'https://agregarr.org',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  organizationName: 'agregarr',
  projectName: 'agregarr',

  onBrokenLinks: 'throw',

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
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl:
            'https://github.com/agregarr/agregarr-docs/tree/latest',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
          createSitemapItems: async (params) => {
            const {defaultCreateSitemapItems, ...rest} = params;
            const items = await defaultCreateSitemapItems(rest);
            return items.map((item) => {
              // Homepage - highest priority, daily updates
              if (item.url === 'https://agregarr.org/') {
                return {...item, priority: 1.0, changefreq: 'daily'};
              }
              // Key setup pages - very high priority
              if (item.url.match(/\/(installation|setup|creating-a-collection)$/)) {
                return {...item, priority: 0.9, changefreq: 'weekly'};
              }
              // Important overview pages
              if (item.url.includes('/overview')) {
                return {...item, priority: 0.8, changefreq: 'weekly'};
              }
              // FAQ
              if (item.url.includes('/faq')) {
                return {...item, priority: 0.8, changefreq: 'weekly'};
              }
              // All docs pages
              if (item.url.includes('/docs/')) {
                return {...item, priority: 0.7, changefreq: 'weekly'};
              }
              // Everything else (search, etc.)
              return {...item, priority: 0.3, changefreq: 'monthly'};
            });
          },
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      'docusaurus-plugin-image-zoom',
      {
        selector: '.markdown img, .galleryImage',
      },
    ],
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          {
            from: '/docs/coming-soon-volumes',
            to: '/docs/placeholder-volumes',
          },
        ],
      },
    ],
  ],

  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
        language: ["en"],
        indexDocs: true,
        indexBlog: false,
        docsRouteBasePath: '/docs',
        searchBarShortcutHint: false,
        explicitSearchResultPath: true,
        searchResultLimits: 8,
        searchResultContextMaxLength: 150,
        highlightSearchTermsOnTargetPage: true,
      },
    ],
  ],

  themeConfig: {
    image: 'img/logo_stacked_filled.png',
    metadata: [
      {name: 'keywords', content: 'agregarr, plex, collections, plex collections, automation, radarr, sonarr, trakt, imdb, tmdb, plex manager, arr apps'},
      {property: 'og:site_name', content: 'Agregarr'},
      {property: 'og:type', content: 'website'},
      {name: 'twitter:card', content: 'summary_large_image'},
    ],
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: '',
      logo: {
        alt: 'Agregarr',
        src: 'img/os_icon.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'setupSidebar',
          position: 'left',
          label: 'Setup',
        },
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {
          type: 'docSidebar',
          sidebarId: 'faqSidebar',
          position: 'left',
          label: 'F.A.Q',
        },
        {
          type: 'search',
          position: 'right',
        },
        {
          href: 'https://github.com/agregarr/agregarr',
          label: 'GitHub',
          position: 'right',
        },
        {
          href: 'https://discord.gg/RfEPPRQJQ2',
          label: 'Discord',
          position: 'right',
        },
        {
          href: 'https://www.buymeacoffee.com/agregarr',
          label: '☕ Buy Me a Coffee',
          position: 'right',
          className: 'header-coffee-link',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Setup',
          items: [
            {
              label: 'Installation',
              to: '/docs/installation',
            },
            {
              label: 'Initial Setup',
              to: '/docs/setup',
            },
            {
              label: 'First Collection',
              to: '/docs/creating-a-collection',
            },
          ],
        },
        {
          title: 'Documentation',
          items: [
            {
              label: 'Collection Sources',
              to: '/docs/sources/overview',
            },
            {
              label: 'Downloads & Integration',
              to: '/docs/downloads/overview',
            },
          ],
        },
        {
          title: 'Help & Support',
          items: [
            {
              label: 'F.A.Q',
              to: '/docs/faq',
            },
            {
              label: 'Discord Community',
              href: 'https://discord.gg/RfEPPRQJQ2',
            },
          ],
        },
        {
          title: 'Resources',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/agregarr/agregarr',
            },
            {
              label: 'Docker Hub',
              href: 'https://hub.docker.com/r/agregarr/agregarr',
            },
            {
              label: 'Report Issues',
              href: 'https://github.com/agregarr/agregarr/issues',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Agregarr. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.vsLight,
      darkTheme: prismThemes.oceanicNext,
    },
    zoom: {
      selector: '.markdown img, .galleryImage',
      background: {
        light: 'rgba(0, 0, 0, 0.8)',
        dark: 'rgba(0, 0, 0, 0.9)',
      },
      config: {
        margin: 80,
        scrollOffset: 0,
      },
    },
  } satisfies Preset.ThemeConfig,
};

export default config;

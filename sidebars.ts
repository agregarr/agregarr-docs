import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // Setup sidebar
  setupSidebar: [
    {
      type: 'doc',
      id: 'installation',
      label: 'Installation',
    },
    {
      type: 'doc',
      id: 'setup',
      label: 'Initial Setup',
    },
    {
      type: 'doc',
      id: 'creating-a-collection',
      label: 'Creating a Collection',
    },
    {
      type: 'doc',
      id: 'placeholder-volumes',
      label: 'Placeholder Docker Volumes',
    },
  ],

  // Main documentation sidebar
  docsSidebar: [
    {
      type: 'category',
      label: 'Navigating the UI',
      items: [
        {
          type: 'doc',
          id: 'ui/overview',
          label: 'Navigating the UI',
        },
        {
          type: 'doc',
          id: 'ui/home',
          label: 'Home View',
        },
        {
          type: 'doc',
          id: 'ui/recommended',
          label: 'Recommended View',
        },
        {
          type: 'doc',
          id: 'ui/library',
          label: 'Library View',
        },
        {
          type: 'doc',
          id: 'ui/all-collections',
          label: 'All Collections',
        },
        {
          type: 'doc',
          id: 'ui/posters',
          label: 'Posters Workspace',
        },
        {
          type: 'doc',
          id: 'ui/dashboard',
          label: 'Dashboard',
        },
        {
          type: 'doc',
          id: 'ui/settings',
          label: 'Settings Area',
        },
      ],
    },
    {
      type: 'category',
      label: 'Collection Sources',
      items: [
        {
          type: 'doc',
          id: 'sources/overview',
          label: 'Collection Sources',
        },
        {
          type: 'doc',
          id: 'sources/tmdb',
          label: 'TMDB Lists',
        },
        {
          type: 'doc',
          id: 'sources/imdb',
          label: 'IMDb Lists',
        },
        {
          type: 'doc',
          id: 'sources/letterboxd',
          label: 'Letterboxd Lists',
        },
        {
          type: 'doc',
          id: 'sources/anilist',
          label: 'AniList',
        },
        {
          type: 'doc',
          id: 'sources/networks',
          label: 'Network Top 10',
        },
        {
          type: 'doc',
          id: 'sources/trakt',
          label: 'Trakt Lists',
        },
        {
          type: 'doc',
          id: 'sources/mdblist',
          label: 'MDBList Lists',
        },
        {
          type: 'doc',
          id: 'sources/originals',
          label: 'Network Originals',
        },
        {
          type: 'doc',
          id: 'sources/myanimelist',
          label: 'MyAnimeList',
        },
        {
          type: 'doc',
          id: 'sources/overseerr',
          label: 'Overseerr Requests',
        },
        {
          type: 'doc',
          id: 'sources/tautulli',
          label: 'Tautulli Statistics',
        },
        {
          type: 'doc',
          id: 'sources/radarr-sonarr-tags',
          label: 'Radarr & Sonarr Tags',
        },
        {
          type: 'doc',
          id: 'sources/coming-soon',
          label: 'Coming Soon',
        },
        {
          type: 'doc',
          id: 'sources/multi-source',
          label: 'Multi-source Collections',
        },
      ],
    },
    {
      type: 'category',
      label: 'Collection Options',
      items: [
        {
          type: 'doc',
          id: 'options/overview',
          label: 'Collection Options',
        },
        {
          type: 'doc',
          id: 'options/source-specific-options',
          label: 'Source Specific Options',
        },
        {
          type: 'doc',
          id: 'options/library-selection',
          label: 'Library Selection',
        },
        {
          type: 'doc',
          id: 'options/titles',
          label: 'Titles',
        },
        {
          type: 'doc',
          id: 'options/visibility',
          label: 'Visibility',
        },
        {
          type: 'doc',
          id: 'options/random-home-order',
          label: 'Randomise Home Order',
        },
        {
          type: 'doc',
          id: 'options/max-items',
          label: 'Max Items',
        },
        {
          type: 'doc',
          id: 'options/unwatched-collections',
          label: 'Unwatched Collections',
        },
        {
          type: 'doc',
          id: 'options/posters',
          label: 'Posters',
        },
        {
          type: 'doc',
          id: 'options/time-restrictions',
          label: 'Time Restrictions',
        },
        {
          type: 'doc',
          id: 'options/custom-sync-timing',
          label: 'Custom Sync Timing',
        },
        {
          type: 'doc',
          id: 'options/missing-items',
          label: 'Missing Items',
        },
        {
          type: 'doc',
          id: 'options/create-placeholders',
          label: 'Create Placeholders',
        },
      ],
    },
    {
      type: 'category',
      label: 'Missing Items/Downloads',
      items: [
        {
          type: 'doc',
          id: 'downloads/overview',
          label: 'Downloads Overview',
        },
        {
          type: 'doc',
          id: 'downloads/radarr-sonarr',
          label: 'Radarr & Sonarr',
        },
        {
          type: 'doc',
          id: 'downloads/overseerr',
          label: 'Overseerr',
        },
      ],
    },
    {
      type: 'doc',
      id: 'preexisting-and-hubs',
      label: 'Pre-existing & Hubs',
    },
    {
      type: 'doc',
      id: 'collection-previews',
      label: 'Collection Preview',
    },
    {
      type: 'doc',
      id: 'collection-sync',
      label: 'Collection Sync',
    },
    {
      type: 'doc',
      id: 'docker-tips',
      label: 'Docker Tips & Windows Setup',
    },
    {
      type: 'doc',
      id: 'imdb-ratings',
      label: 'IMDb Ratings Proxy',
    },
    {
      type: 'doc',
      id: 'placeholder-volumes',
      label: 'Placeholder Docker Volumes',
    },
    {
      type: 'doc',
      id: 'contributing-translations',
      label: 'Translations',
    },
  ],

  // FAQ sidebar
  faqSidebar: [
    {
      type: 'doc',
      id: 'faq/index',
      label: 'F.A.Q',
    },
    {
      type: 'doc',
      id: 'faq/agregarr-kometa',
      label: 'Agregarr vs Kometa',
    },
  ],
};

export default sidebars;

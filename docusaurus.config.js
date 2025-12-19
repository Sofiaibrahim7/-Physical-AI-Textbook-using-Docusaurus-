const config = {
  title: 'Physical AI: Embodied Intelligence in the Real World',
  tagline: 'An open textbook on embodied intelligence',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://sofiaibrahim7.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  baseUrl: '/physical-ai-docusaurus/',

  organizationName: 'Sofiaibrahim7',
  projectName: 'physical-ai-docusaurus',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: '/docs',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'Physical AI Textbook',
      items: [
        {
          to: '/docs/intro',
          label: 'Start Reading',
          position: 'left',
        },
        {
          href: 'https://github.com/Sofiaibrahim7/physical-ai-docusaurus',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} Sofia Ibrahim`,
    },
  },
};

module.exports = config;

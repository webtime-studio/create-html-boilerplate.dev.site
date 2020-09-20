/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

// List of projects/orgs using your project for the users page.
const users = [
  // {
  //   caption: 'Павел Клочков',
  //   // You will need to prepend the image path with your baseUrl
  //   // if it is not '/', like: '/test-site/img/image.jpg'.
  //   image: 'https://ckomop0x.me/images/apple-icon.png',
  //   infoLink: 'https://www.facebook.com/ckomop0x',
  //   pinned: true,
  // },
  // {
  //   caption: 'Кристина Кузьменко',
  //   // You will need to prepend the image path with your baseUrl
  //   // if it is not '/', like: '/test-site/img/image.jpg'.
  //   image:
  //     'https://scontent-ams4-1.xx.fbcdn.net/v/t1.0-9/36357140_1576597839118460_2556038744129929216_n.jpg?_nc_cat=110&_nc_sid=09cbfe&_nc_ohc=5M-4J7lt9-4AX8fjuKz&_nc_ht=scontent-ams4-1.xx&oh=18e2cf56ab8be88c7e4b1135d09787c1&oe=5F8B2542',
  //   infoLink: 'https://www.facebook.com/tiny.kuzmenko',
  //   pinned: true,
  // },
];

const siteConfig = {
  title: 'Create HTML Boilerplate', // Title for your website.
  tagline: 'Создайте свой новый веб-проект одним нажатием.',
  url: 'https://create-html-boilerplate.dev/', // Your website URL
  baseUrl: '/', // Base URL for your project */
  // For github.io type URLs, you would set the url and baseUrl like:
  //   url: 'https://facebook.github.io',
  //   baseUrl: '/test-site/',

  // Used for publishing and more
  projectName: 'create-html-boilerplate',
  organizationName: 'webtime-studio',
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  // Ссылки в меню верхней навигации top nav bar -> headerLinks: [],
  headerLinks: [
    { doc: 'how-to-start', label: 'Документация' },
    { page: 'help', label: 'Help' },
    { blog: true, label: 'Блог' },
  ],

  // If you have users set above, you add it here:
  users,

  /* path to images for header/footer */
  headerIcon: 'img/favicon.ico',
  footerIcon: 'img/favicon.ico',
  favicon: 'img/favicon.ico',

  /* Colors for website */
  colors: {
    primaryColor: '#190a2b',
    secondaryColor: '#11071e',
  },

  /* Custom fonts for website */
  /*
  fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },
  */

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()} Your Name or Your Company Name`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'default',
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: ['https://buttons.github.io/buttons.js'],

  // On page navigation for the current documentation page.
  onPageNav: 'separate',
  // No .html extensions for paths.
  cleanUrl: true,

  // Open Graph and Twitter card images.
  ogImage: 'img/undraw_online.svg',
  twitterImage: 'img/undraw_tweetstorm.svg',

  // For sites with a sizable amount of content, set collapsible to true.
  // Expand/collapse the links and subcategories under categories.
  // docsSideNavCollapsible: true,

  // Show documentation's last contributor's name.
  // enableUpdateBy: true,

  // Show documentation's last update time.
  enableUpdateTime: true,

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  // repoUrl: 'https://github.com/facebook/test-site',

  defaultVersionShown: 'v1.1.0',
  noIndex: false,
  docsSideNavCollapsible: true,
  scrollToTop: true,
};

module.exports = siteConfig;

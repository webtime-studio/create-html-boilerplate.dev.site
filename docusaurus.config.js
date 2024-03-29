module.exports = {
  title: "Create HTML Boilerplate",
  tagline: "Создайте свой новый веб-проект одним нажатием.",
  url: "https://create-html-boilerplate.dev/",
  baseUrl: "/",
  onBrokenLinks: "throw",
  favicon: "img/favicon.ico",
  organizationName: "webtime-studio",
  projectName: "create-html-boilerplate",
  themeConfig: {
    colorMode: {
      disableSwitch: true,
      respectPrefersColorScheme: false,
      defaultMode: "light",
    },
    navbar: {
      title: "Create HTML Boilerplate",
      logo: {
        alt: "Create HTML Boilerplate",
        src: "img/svg/logo.svg",
      },
      items: [
        {
          to: "docs/",
          activeBasePath: "docs",
          label: "Документация",
          position: "right",
        },
        {
          to: "blog",
          label: "Блог",
          position: "right"
        },
        {
          href: "https://github.com/webtime-studio/create-html-boilerplate",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Style Guide",
              to: "docs/",
            },
            {
              label: "Second Doc",
              to: "docs/doc2/",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/docusaurus",
            },
            {
              label: "Discord",
              href: "https://discordapp.com/invite/docusaurus",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/docusaurus",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/facebook/docusaurus",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/webtime-studio/create-html-boilerplate.dev.site/blob/master/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // editUrl:
          //   "https://github.com/facebook/docusaurus/edit/master/website/blog/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
  plugins: ["docusaurus-plugin-sass"],
};

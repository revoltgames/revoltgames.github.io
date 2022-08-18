// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Revolt Games Docs",
  tagline: "Documentation for public APIs",
  url: "https://docs.neopolis.app",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "revoltgames",
  projectName: "docs",
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/revoltgames/docs/",
        },
        blog: {
          showReadingTime: true,
          editUrl: "https://github.com/revoltgames/docs/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        logo: {
          alt: "Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "API Docs",
          },
          {
            href: "https://github.com/revoltgames/docs/issues",
            label: "Report an issue",
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
                label: "API Docs",
                to: "/docs/intro",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Discord",
                href: "https://www.neopolis.io/discord",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/neopolisgame?lang=en",
              },
              {
                label: "Fractal",
                href: "https://www.fractal.is/neoland",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Revolt Games",
                href: "https://www.revoltgames.io/",
              },
              {
                label: "Neopolis",
                href: "https://www.neopolis.io/",
              },
              {
                label: "Neoland",
                href: "https://www.neoland.io/",
              },
            ],
          },
        ],
        copyright: `Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;

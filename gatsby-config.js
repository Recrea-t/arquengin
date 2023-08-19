require("dotenv").config()

const config = require("./site-config.json")

console.log(config)

module.exports = {
  siteMetadata: config,
  plugins: [
    {
      resolve: "@chakra-ui/gatsby-plugin",
      options: {
        isUsingColorMode: false,
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-robots-txt",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-preload-fonts",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: `Arquengin`,
        short_name: `Arquengin`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#E8864B`,
        display: `minimal-ui`,
        icon: "static/images/icon.svg",
        icon_options: {
          purpose: `any maskable`,
        },
        //cache_busting_mode: "none",
      },
    },
    // The offline plugin must be listed after the manifest plugin
    //"gatsby-plugin-remove-serviceworker",
    "gatsby-plugin-offline",
    //resolve: "gatsby-plugin-offline",
    //options: {
    //workboxConfig: {
    //globPatterns: ["**/icon-path*"],
    //},
    //},
    //},
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: "gatsby-source-filesystem",
      options: {
        name: "uploads",
        path: `${__dirname}/static/images`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-relative-images",
            options: {
              name: "uploads",
            },
          },
          {
            resolve: "gatsby-remark-images",
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 1380,
              quality: 90,
              withWebp: true,
              linkImagesToOriginal: false,
            },
          },
          {
            resolve: "gatsby-remark-copy-linked-files",
            options: {
              destinationDir: "static",
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-algolia`,
      options: {
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_ADMIN_KEY,
        queries: require("./src/utils/algolia-queries"),
      },
    },
    {
      resolve: `gatsby-plugin-gdpr-cookies`,
      options: {
        googleAnalytics: {
          trackingId: process.env.GA_TRACKING_ID,
          cookieName: "gatsby-gdpr-google-analytics",
          anonymize: true,
        },
        environments: ["production", "development"],
      },
    },
    "gatsby-plugin-netlify",
		"gatsby-plugin-netlify-cms",
  ],
}

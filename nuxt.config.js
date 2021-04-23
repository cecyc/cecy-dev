const { getClient } = require("./plugins/contentful");
const client = getClient();

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "cecy-dev",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "preconnect", href: "https://fonts.gstatic.com" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css2?family=Poppins&family=Work+Sans:wght@400;700&display=swap"
      }
    ]
  },
  env: {
    CTF_SPACE_ID: process.env.CTF_SPACE_ID,
    CTF_CDA_TOKEN: process.env.CTF_CDA_TOKEN,
    CTF_ENV_ALIAS: process.env.CTF_ENV_ALIAS
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/assets/css/main.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ["~/plugins/contentful.js"],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    [
      "nuxt-highlightjs",
      {
        style: "dracula"
      }
    ]
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  generate: {
    routes() {
      return Promise.all([
        // blog posts
        client.getEntries({
          content_type: "blog_post"
        }),
        // talks
        client.getEntries({
          content_type: "talk"
        })
      ]).then(([posts, talks]) => {
        return [
          // map posts
          ...posts.items.map(post => `/blog/${post.fields.url_slug}`),
          // map talks
          ...talks.items.map(talk => `/talks/${talk.fields.url_slug}`)
        ];
      });
    }
  }
};

const meta = {
  name: 'Friedland Rocks',
  description:
    'E-Gitarre, Akustik-Gitarre, Ukulele, Klavier, Keyboard und vieles mehr für Menschen in Friedland und Umgebung oder im Web.',
  title:
    'Friedland Rocks! Innovativer Musikunterricht für die Gemeinde Friedland.',
  keywords:
    'E-Gitarre, Akustik-Gitarre, Ukulele, Klavier, Keyboard, Musik-Produktion, Komposition, Friedland, Göttingen, Niedersachsen',
  locale: 'de_DE',
  type: 'Business',
  url: 'https://friedland.rocks',
  image: 'https://friedland.rocks/images/cover.jpg',
  author: 'Malik Dirim <contact@malikdirim.de>',
}

export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'universal',
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'static',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: meta.title,
    meta: [
      { charset: 'utf-8' },
      { robots: 'index,follow' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      // Basic Meta
      {
        hid: 'keywords',
        name: 'keywords',
        content: meta.keywords,
      },
      {
        hid: 'description',
        name: 'description',
        content: meta.description,
      },
      {
        hid: 'language',
        name: 'language',
        content: meta.locale,
      },
      {
        hid: 'Classification',
        name: 'Classification',
        content: meta.type,
      },
      {
        hid: 'author',
        name: 'author',
        content: meta.author,
      },
      {
        hid: 'designer',
        name: 'designer',
        content: meta.author,
      },
      {
        hid: 'url',
        name: 'url',
        content: meta.url,
      },
      // Open Graph
      {
        hid: 'og:title',
        name: 'og:title',
        content: meta.title,
      },
      {
        hid: 'og:type',
        name: 'og:type',
        content: meta.type,
      },
      {
        hid: 'og:url',
        name: 'og:url',
        content: meta.url,
      },
      {
        hid: 'og:image',
        name: 'og:image',
        content: meta.image,
      },

      {
        hid: 'og:site_name',
        name: 'og:site_name',
        content: meta.name,
      },
      {
        hid: 'og:description',
        name: 'og:description',
        content: meta.description,
      },

      {
        hid: 'og:locale',
        name: 'og:locale',
        content: meta.locale,
      },
      // Apple
      {
        hid: 'apple-mobile-web-app-title',
        name: 'apple-mobile-web-app-title',
        content: meta.title,
      },
    ],
    htmlAttrs: {
      lang: meta.locale,
    },
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  /*
   ** Global CSS
   */
  css: ['./assets/css/main.scss'],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ['@nuxtjs/pwa', 'nuxt-purgecss'],
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/axios',
    // Docs: https://github.com/nuxt-community/robots-module
    [
      '@nuxtjs/robots',
      {
        UserAgent: '*',
        Disallow: ['/impressum', '/datenschutz'],
        Sitemap: `${meta.url}/sitemap.xml`,
      },
    ],
    // Docs: https://github.com/nuxt-community/sitemap-module
    [
      '@nuxtjs/sitemap',
      {
        hostname: meta.url,
        gzip: true,
        exclude: ['/impressum', '/datenschutz'],
      },
    ],
  ],
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {
    extractCSS: true,
    optimization: {
      splitChunks: {
        cacheGroups: {
          styles: {
            name: 'styles',
            test: /\.(css|vue)$/,
            chunks: 'all',
            enforce: true,
          },
        },
      },
    },
  },
  publicRuntimeConfig: {
    baseURL: process.env.BASE_URL || 'https://friedland.rocks',
  },
}

export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: ['@nuxtjs/tailwindcss'],

  css: ['~/assets/css/main.css'],

  runtimeConfig: {
    public: {
      strapiUrl: process.env.STRAPI_URL || 'http://localhost:1337'
    }
  },

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Webbiker.nl',
      meta: [
        { name: 'description', content: 'Joost Brommert - Webdesigner & Developer' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/assets/img/favicon/favicon.ico' },
        { rel: 'apple-touch-icon-precomposed', href: '/assets/img/favicon/apple-touch-icon-114x114-precomposed.png', sizes: '114x114' },
        { rel: 'apple-touch-icon-precomposed', href: '/assets/img/favicon/apple-touch-icon-72x72-precomposed.png', sizes: '72x72' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,700' }
      ]
    },
    pageTransition: { name: 'page', mode: 'out-in' }
  },

  nitro: {
    publicAssets: [
      { dir: '../media', baseURL: '/media' }
    ]
  },

  vite: {
    vue: {
      template: {
        transformAssetUrls: false
      }
    }
  },

  compatibilityDate: '2024-11-01'
})

export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/i18n'],

  i18n: {
    locales: [
      { code: 'nl', language: 'nl-NL', name: 'Nederlands', file: 'nl.json' },
      { code: 'en', language: 'en-US', name: 'English', file: 'en.json' },
    ],
    defaultLocale: 'nl',
    strategy: 'prefix_except_default',
    detectBrowserLanguage: false,
    customRoutes: 'config',
    pages: {
      about: {
        nl: '/over-webbiker',
        en: '/about-webbiker',
      },
      contact: {
        nl: '/contact',
        en: '/contact',
      },
      services: {
        nl: '/diensten',
        en: '/services',
      },
      work: {
        nl: '/werk',
        en: '/work',
      },
    },
  },

  css: ['~/assets/css/main.scss'],

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
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,700' },
        { rel: 'preload', as: 'script', href: '/assets/js/vendor/gsap.min.js' },
        { rel: 'preload', as: 'script', href: '/assets/js/loader-animation.js' },
      ],
      script: [
        { src: '/assets/js/vendor/gsap.min.js', defer: true },
        { src: '/assets/js/loader-animation.js', defer: true },
      ]
    }
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

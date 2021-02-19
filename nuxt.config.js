export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Your_Name',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    script: [
      {
        src: 'https://buttons.github.io/buttons.js',
        async: true,
        defer: true,
      },
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    'animate.css/animate.min.css',
    'hamburgers/dist/hamburgers.min.css',
    'swiper/css/swiper.min.css',
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: '@/plugins/vue-awesome-swiper', ssr: false },
    { src: '@/plugins/vue-typed-js', ssr: false },
    { src: '~/plugins/aos', ssr: false },
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    'nuxt-i18n',
  ],

  i18n: {
    strategy: 'prefix_except_default',
    defaultLocale: 'en',
    locales: [
      {
        code: 'en',
        iso: 'en_US',
        file: 'en.json',
      },
      {
        code: 'jp',
        iso: 'ja_JP',
        file: 'jp.json',
      },
      {
        code: 'cn',
        iso: 'zh_CN',
        file: 'cn.json',
      },
    ],
    lazy: true,
    langDir: 'lang/',
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
  server: {
    host: '0.0.0.0', // default: localhost
  },
}

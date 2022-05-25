export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'test-nuxt',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/styles/main.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {src: '~/plugins/vue-modal.js', mode: 'client'},
    {src: '~/plugins/vue-agile.js', mode: 'client'},
    {src: '~/plugins/vue-select.js'}
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [
    '~/components',
    { path: '~/components/layouts', extensions: ['vue'] }
  ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],
  env: {
    NUXT_BASE_URL: process.env.NUXT_BASE_URL,
    NUXT_BASE_DASHBOARD_URL: process.env.NUXT_BASE_DASHBOARD_URL
  },
  publicRuntimeConfig: {
    axios: {
      baseURL: process.env.NUXT_BASE_URL
    }
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ['vue-agile'],
    loaders: {
      sass: {
        implementation: require('sass'),
      },
      scss: {
        implementation: require('sass'),
      },
    }
  }
}

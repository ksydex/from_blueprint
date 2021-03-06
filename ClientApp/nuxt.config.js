export default {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: 'FROM BLUEPRINT - строительная компания',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap'
      }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '~/styles/reset.css',
    '~/styles/variables.css',
    '~/styles/main.css',
    { src: '~/styles/_breakpoints.scss', lang: 'scss' }
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/global.js',
    '~/plugins/api.js'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    //'@nuxtjs/eslint-module'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
    'nuxt-client-init-module'
  ],
  styleResources: {
    scss: ['~/styles/*.scss']
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    baseURL: 'https://localhost:5001/api/'
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}

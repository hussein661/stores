const pkg = require('./package')

module.exports = {
  mode: 'universal',
  server:{
    port:process.env.PORT || 4000,
    host:process.env.HOST || '0.0.0.0'
  },
  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
  //   script: [
  //     {  
  //         type: 'text/javascript', 
  //         src: 'https://www.googletagmanager.com/gtag/js?id=G-EEQL8PR4B3',
  //         async: true
  //     }
  // ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/components',
    '~/plugins/filters',
    {
      src: './plugins/GoogleAnalytics.js',
      mode: 'client'
  }
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    ['storyblok-nuxt', {accessToken: 'YPJhIqzQepWQtUNNSVIPXAtt', cache: { type: 'none' }}]
  ],

  /*
  ** Router middleware
  */
  router: {
    middleware: 'setCacheVersion'
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

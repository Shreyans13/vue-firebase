
module.exports = {
  pwa: {
    themeColor: "#42b983",
    msTileColor: "#42b983",
    appleMobileWebAppCache: "yes",
    manifestOptions: {
        background_color: "#42b983"
    }
},  
  publicPath: process.env.NODE_ENV === 'production'
      ? '/vue-firebase/'
      : '/'
  }



  
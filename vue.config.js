module.exports = {
  publicPath: '.',
  devServer:{
    port:80,
  },
  configureWebpack: {
    resolve: {
      alias: {
        'quasar': 'quasar-framework/dist/quasar.mat.esm'
      }
    }
  }
}

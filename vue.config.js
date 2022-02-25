module.exports = {
  devServer: {
    port: 8881,
    open: true,
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true,
      },
    },
  },
  css: {
    loaderOptions: {
      sass: {
        // 新版本sass-loader， 将data改成prependData进行配置
        prependData: '@import "@/assets/scss/_variable.scss";',
      },
    },
  },
}

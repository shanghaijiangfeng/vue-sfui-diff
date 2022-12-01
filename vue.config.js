module.exports = {
  devServer: {
    port: 8881,
    open: true,
    proxy: {
      '/flower': {
        target: 'http://192.168.96.175:8080',
        changeOrigin: true,
      },
      '/api': {
        target: 'http://192.168.96.175:8080',
        changeOrigin: true,
      },
      '/testcase': {
        target: 'http://192.168.96.175:8080',
        changeOrigin: true,
      },
      '/guess': {
        target: 'http://192.168.96.175:8080',
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

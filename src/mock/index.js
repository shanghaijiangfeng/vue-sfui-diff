import Mock from 'mockjs'
import homeApi from './home'

Mock.setup({
  timeout: '200-2000',
})

// 首页相关  home
Mock.mock(/\/home\/getData/, 'get', homeApi.getStatisticalData)
// 获取首页右上的数量统计接口
Mock.mock(/\/home\/getCountData/, 'get', homeApi.getCountData())

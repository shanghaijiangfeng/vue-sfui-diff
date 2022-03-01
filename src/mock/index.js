import Mock from 'mockjs'
import userApi from './user'
// import homeApi from './home'

Mock.setup({
  timeout: '200-2000',
})

// 首页相关  home
// Mock.mock(/\/home\/getData/, 'get', homeApi.getStatisticalData)
// 获取首页右上的数量统计接口
// Mock.mock(/\/home\/getCountData/, 'get', homeApi.getCountData())

// 用户相关
Mock.mock(/\/user\/getUser/, 'get', userApi.getUserList)
Mock.mock(/\/user\/del/, 'get', userApi.deleteUser)
Mock.mock(/\/user\/batchremove/, 'get', userApi.batchremove)
Mock.mock(/\/user\/add/, 'post', userApi.createUser)
Mock.mock(/\/user\/edit/, 'post', userApi.updateUser)
// Mock.mock(/\/home\/getData/, 'get', homeApi.getStatisticalData)

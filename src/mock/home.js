import Mock from 'mockjs'
let List = []

export default {
  // getHomeData: () => {
  //   return {
  //     code: 2000,
  //     data: {
  //       casedata: [
  //         {
  //           name: 'upc',
  //           todayCase: Mock.Random.integer(100, 200),
  //           failCase: Mock.Random.integer(100, 200),
  //           Case: Mock.Random.integer(100, 200),
  //         },
  //         {
  //           name: 'npl',
  //           todayCase: Mock.Random.integer(100, 200),
  //           failCase: Mock.Random.integer(100, 200),
  //           Case: Mock.Random.integer(100, 200),
  //         },
  //         {
  //           name: 'sdkupc',
  //           todayCase: Mock.Random.integer(100, 200),
  //           failCase: Mock.Random.integer(100, 200),
  //           Case: Mock.Random.integer(100, 200),
  //         },
  //         {
  //           name: 'sdknpl',
  //           todayCase: Mock.Random.integer(100, 200),
  //           failCase: Mock.Random.integer(100, 200),
  //           Case: Mock.Random.integer(100, 200),
  //         },
  //       ],
  //     },
  //   }
  // },
  getStatisticalData: () => {
    for (let i = 0; i < 7; i++) {
      List.push(
        Mock.mock({
          vue: Mock.Random.float(100, 8000, 0, 2),
          wechat: Mock.Random.float(100, 8000, 0, 2),
          ES6: Mock.Random.float(100, 8000, 0, 2),
          Redis: Mock.Random.float(100, 8000, 0, 2),
          React: Mock.Random.float(100, 8000, 0, 2),
          springboot: Mock.Random.float(100, 8000, 0, 2),
        })
      )
    }
    return {
      code: 20000,
      data: {
        // 饼图
        videoData: [
          {
            name: 'springboot',
            value: Mock.Random.float(1000, 10000, 0, 2),
          },
          {
            name: 'vue',
            value: Mock.Random.float(1000, 10000, 0, 2),
          },
          {
            name: '小程序',
            value: Mock.Random.float(1000, 10000, 0, 2),
          },
          {
            name: 'ES6',
            value: Mock.Random.float(1000, 10000, 0, 2),
          },
          {
            name: 'Redis',
            value: Mock.Random.float(1000, 10000, 0, 2),
          },
          {
            name: 'React',
            value: Mock.Random.float(1000, 10000, 0, 2),
          },
        ],
        // 柱状图
        userData: [
          {
            date: '周一',
            new: Mock.Random.integer(1, 100),
            active: Mock.Random.integer(100, 1000),
          },
          {
            date: '周二',
            new: Mock.Random.integer(1, 100),
            active: Mock.Random.integer(100, 1000),
          },
          {
            date: '周三',
            new: Mock.Random.integer(1, 100),
            active: Mock.Random.integer(100, 1000),
          },
          {
            date: '周四',
            new: Mock.Random.integer(1, 100),
            active: Mock.Random.integer(100, 1000),
          },
          {
            date: '周五',
            new: Mock.Random.integer(1, 100),
            active: Mock.Random.integer(100, 1000),
          },
          {
            date: '周六',
            new: Mock.Random.integer(1, 100),
            active: Mock.Random.integer(100, 1000),
          },
          {
            date: '周日',
            new: Mock.Random.integer(1, 100),
            active: Mock.Random.integer(100, 1000),
          },
        ],
        // 折线图
        orderData: {
          date: ['20191001', '20191002', '20191003', '20191004', '20191005', '20191006', '20191007'],
          data: List,
        },
        casedata: [
          {
            name: 'upc',
            todayCase: Mock.Random.integer(100, 200),
            failCase: Mock.Random.integer(100, 200),
            Case: Mock.Random.integer(100, 200),
          },
          {
            name: 'npl',
            todayCase: Mock.Random.integer(100, 200),
            failCase: Mock.Random.integer(100, 200),
            Case: Mock.Random.integer(100, 200),
          },
          {
            name: 'sdkupc',
            todayCase: Mock.Random.integer(100, 200),
            failCase: Mock.Random.integer(100, 200),
            Case: Mock.Random.integer(100, 200),
          },
          {
            name: 'sdknpl',
            todayCase: Mock.Random.integer(100, 200),
            failCase: Mock.Random.integer(100, 200),
            Case: Mock.Random.integer(100, 200),
          },
        ],
      },
    }
  },
  getCountData: () => {
    return {
      code: 2000,
      data: {
        countData: [
          {
            name: '用例总数',
            value: 1234,
            icon: 'success',
            color: '#2ec7c9',
          },
          {
            name: '已执行用例',
            value: 1210,
            icon: 'finished',
            color: '#ffb980',
          },
          {
            name: '失败用例',
            value: 29,
            icon: 'error',
            color: '#5ab1ef',
          },
          {
            name: '忽略用例',
            value: 38,
            icon: 'close-notification',
            color: '#2ec7c9',
          },
          {
            name: '本月执行用例',
            value: 122200,
            icon: 'star-on',
            color: '#ffb980',
          },
          {
            name: '本月失败用例',
            value: 129,
            icon: 's-release',
            color: '#5ab1ef',
          },
        ],
      },
    }
  },
}

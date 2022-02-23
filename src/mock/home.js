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
          upc: Mock.Random.float(100, 8000, 0, 2),
          npl: Mock.Random.float(100, 8000, 0, 2),
          sdkupc: Mock.Random.float(100, 8000, 0, 2),
          sdknpl: Mock.Random.float(100, 8000, 0, 2),
        })
      )
    }
    return {
      code: 20000,
      data: {
        // 饼图
        caseRightData: [
          {
            name: 'upc',
            value: Mock.Random.float(1000, 10000, 0, 2),
          },
          {
            name: 'npl',
            value: Mock.Random.float(1000, 10000, 0, 2),
          },
          {
            name: 'sdkupc',
            value: Mock.Random.float(1000, 10000, 0, 2),
          },
          {
            name: 'sdknpl',
            value: Mock.Random.float(1000, 10000, 0, 2),
          },
        ],
        // 柱状图
        caseWeekData: [
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
        caseOrderData: {
          date: ['20220101', '20220201', '20220301', '20220401', '20220501', '20220601', '20220701'],
          data: List,
        },
        caseData: [
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
  // getCountData: () => {
  //   return {
  //     code: 2000,
  //     data: {
  //       countData: [
  //         {
  //           name: '用例总数',
  //           value: 1234,
  //           icon: 'success',
  //           color: '#2ec7c9',
  //         },
  //         {
  //           name: '已执行用例',
  //           value: 1210,
  //           icon: 'finished',
  //           color: '#ffb980',
  //         },
  //         {
  //           name: '失败用例',
  //           value: 29,
  //           icon: 'error',
  //           color: '#5ab1ef',
  //         },
  //         {
  //           name: '忽略用例',
  //           value: 38,
  //           icon: 'close-notification',
  //           color: '#2ec7c9',
  //         },
  //         {
  //           name: '本月执行用例',
  //           value: 122200,
  //           icon: 'star-on',
  //           color: '#ffb980',
  //         },
  //         {
  //           name: '本月失败用例',
  //           value: 129,
  //           icon: 's-release',
  //           color: '#5ab1ef',
  //         },
  //       ],
  //     },
  //   }
  // },
}

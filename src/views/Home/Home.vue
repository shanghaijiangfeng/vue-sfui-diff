<template>
  <div>
    <el-row class="home" :gutter="20">
      <el-col :span="8">
        <el-card shadow="hover" style="margin-top: 20px">
          <div class="user">
            <img :src="userImg" />
            <div class="userinfo">
              <p class="name">帅锋</p>
              <p class="access">超级管理员</p>
            </div>
          </div>
          <div class="login-info">
            <p>上次登录时间：<span>2022-01-25</span></p>
            <P>上次登录地点：<span>上海合作部</span></P>
          </div>
        </el-card>
        <el-card shadow="hover" style="height: 576px; margin-top: 20px">
          <el-table :data="tableData">
            <el-table-column v-for="(val, key) in tableLabel" :key="key" :prop="key" :label="val"></el-table-column>
          </el-table>
        </el-card>
      </el-col>

      <el-col :span="16">
        <div class="case">
          <el-card shadow="hover" v-for="item in countData" :key="item.name" :body-style="{ display: 'flex', padding: 0 }">
            <i class="icon" :class="`el-icon-${item.icon}`" :style="{ background: item.color }"></i>
            <div class="detail">
              <p class="case-num">{{ item.value }}</p>
              <p class="text">{{ item.name }}</p>
            </div>
          </el-card>
        </div>
        <el-card shadow="hover">
          每月用例统计
          <EChart style="height: 280px" :chart-data="EChartData.CaseOrder"></EChart>
        </el-card>
        <div class="graph">
          <el-card shadow="hover">
            每周用例走势
            <EChart style="height: 260px" :chart-data="EChartData.CaseLeftOrder"></EChart>
          </el-card>
          <el-card shadow="hover"
            >右下饼图统计2
            <EChart style="height: 260px"></EChart>
          </el-card>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import EChart from '@/components/EChart'
export default {
  components: {
    EChart,
  },
  data() {
    return {
      userImg: require('../../assets/images/img.png'),
      countData: [],
      tableData: [],
      tableLabel: {
        name: '服务',
        todayCase: '成功用例',
        failCase: '失败用例',
        Case: '总用例',
      },
      EChartData: {
        CaseOrder: {
          xData: [],
          series: [],
        },
        CaseLeftOrder: {
          xData: [],
          series: [],
        },
        CaseRightOrder: {
          series: [],
        },
      },
    }
  },
  methods: {
    gettableData() {
      this.$http.get('/home/getData').then((res) => console.log(res.data))
      this.$http.get('/home/getData').then((res) => {
        res = res.data
        this.tableData = res.data.caseData
        const CaseOrder = res.data.caseOrderData
        this.EChartData.CaseOrder.xData = CaseOrder.date
        // 第一步取出series中的name部分——键名
        let keyArray = Object.keys(CaseOrder.data[0])
        // 第二步，循环添加数据
        keyArray.forEach((key) => {
          this.EChartData.CaseOrder.series.push({
            name: key,
            data: CaseOrder.data.map((item) => item[key]),
            type: 'line',
          })
        })

        // const CaseWeekData = res.data.caseWeekData
        // this.EChartData.CaseLeftOrder.series = CaseWeekData.data
        // 用户柱状图
        this.EChartData.CaseLeftOrder.xData = res.data.caseWeekData.map((item) => item.date)
        //传入x轴到对比数据
        this.EChartData.CaseLeftOrder.series.push({
          name: '总用例',
          data: res.data.caseWeekData.map((item) => item.new),
          type: 'bar',
        })
        this.EChartData.CaseLeftOrder.series.push({
          name: '成功用例',
          data: res.data.caseWeekData.map((item) => item.active),
          type: 'bar',
          barGap: 0,
        })
      })
    },
    getCountData() {
      this.$http.get('/home/getCountData').then((res) => console.log(res.data))
      this.$http.get('/home/getCountData').then((res) => {
        res = res.data
        this.countData = res.data.countData
      })
    },
  },
  created() {
    this.gettableData()
    this.getCountData()
  },
}
</script>

<style lang="scss" scoped>
@import '~@/assets/scss/home.scss';
</style>

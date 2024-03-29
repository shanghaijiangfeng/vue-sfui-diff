<template>
  <div style="height: 100%" ref="echart">echart</div>
</template>

<script>
import echarts from 'echarts'
export default {
  // 从父组件获取的数据
  // 先看哪些需要动态传入的参数，定义出来
  props: {
    chartData: {
      type: Object,
      default() {
        return {
          xData: [],
          series: [],
          //配置颜色，使用时会从color数组中循环获取颜色到图表
          color: [
            '#2ec7c9',
            '#b6a2de',

            '#5ab1ef',
            '#ffb980',
            '#d87a80',
            '#8d98b3',
            '#e5cf0d',
            '#97b552',
            '#95706d',
            '#dc69aa',
            '#07a2a4',
            '#9a7fd1',
            '#588dd5',
            '#f5994e',
            '#c05050',
            '#59678c',
            '#c9ab00',
            '#7eb00a',
            '#6f5553',
            '#c14089',
          ],
        }
      },
    },
    isAxisChart: {
      type: Boolean,
      default: true,
    },
  },
  // 计算属性，看是否有需要判断图表的类型等，如果有则通过计算属性来判断
  //例如使用echarts必须传入options配置对象，则判断是哪种类型等图表再传入(Echart先初始化，再传入对象)
  computed: {
    options() {
      return this.isAxisChart ? this.axisOption : this.normalOption
    },

    isCollapse() {
      return this.$store.state.isCollapse
    },
  },

  data() {
    return {
      echart: null,
      axisOption: {
        //图表位置偏移
        grid: {
          left: '20%',
        },
        //图例显示
        legend: {
          textStyle: {
            color: '#333',
          },
        },

        //点击悬浮提示
        tooltip: {
          trigger: 'axis',
        },
        xAxis: {
          type: 'category',
          data: [],
          //x轴到轴线样式配置
          axisLine: {
            lineStyle: {
              color: '#17b3a3',
            },
          },
          //x轴到文本样式配置
          axisLabel: {
            color: '#333',
          },
        },
        yAxis: {},
        series: [],
      },
      normalOption: {
        legend: {
          textStyle: {
            color: '#333',
          },
        },
        tooltip: {
          trigger: 'item',
        },
        color: ['#5470c6', '#91cc75', '#fac858', '#ee6666', '#73c0de', '#3ba272', '#fc8452', '#9a60b4', '#ea7ccc'],
        series: [],
      },
    }
  },
  methods: {
    //初始化图表方法
    initChart() {
      this.initChartData()
      if (this.echart) {
        this.echart.setOption(this.options)
      } else {
        this.echart = echarts.init(this.$refs.echart)
        this.echart.setOption(this.options)
      }
    },
    //图表数据处理方法
    initChartData() {
      if (this.isAxisChart) {
        this.axisOption.xAxis.data = this.chartData.xData
        this.axisOption.series = this.chartData.series
      } else {
        this.normalOption.series = this.chartData.series
      }
    },
    //图表大小依据浏览器大小变化，判断echart实例是否存在
    //存在的话就调用resize方法改变大小，如果不存在就什么都不做
    resizeChart() {
      this.echart ? this.echart.resize() : ''
    },
  },
  //钩子函数监听事件
  mounted() {
    //监听resize事件，监听到就调用resizeChart函数
    window.addEventListener('resize', this.resizeChart)
  },
  //钩子函数销毁事件
  destroyed() {
    //监听resize事件，监听到就调用resizeChart函数
    window.removeEventListener('resize', this.resizeChart)
  },

  watch: {
    chartData: {
      handler: function () {
        this.initChart()
      },
      deep: true,
    },
    //监听折叠状态，折叠后延时300ms调用改变图表大小的函数
    isCollapse() {
      setTimeout(() => {
        this.resizeChart()
      }, 300)
    },
  },
}
</script>

<style lang="scss" scoped></style>

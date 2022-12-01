<template>
  <div class="manage">
    <!--    <common-alert show="show"></common-alert>-->
    <el-dialog :title="operateType === 'see' ? '查看详情' : '更新用例'" :visible.sync="isShow">
      <common-form :formLabel="operateFormLabel" :form="operateForm" ref="form"></common-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="isShow = false">取 消</el-button>
        <el-button type="primary" @click="updateData()">保 存</el-button>
      </div>
    </el-dialog>
    <div class="manage-header">
      <el-button type="primary">+ 新增</el-button>
      <common-form inline="true" :form-label="formLabel" :form="searchFrom">
        <el-button type="primary">搜索</el-button>
      </common-form>
    </div>
    <CommonTable :tableData="tableData" :tableLabel="tableLabel" :config="config" @changePage="getList()" @edit="editUser"></CommonTable>
  </div>
</template>

<script>
import CommonForm from '@/components/CommonForm'
import CommonTable from '@/components/CommonTable'
// import CommonAlert from '@/components/CommonAlert'

export default {
  components: { CommonTable, CommonForm },
  data() {
    return {
      // 弹出框操作类型
      operateType: 'see',
      // 弹出框操作内容
      operateForm: {
        id: '',
        season: '',
        name: '',
        min_variety_range: '',
        max_variety_range: '',
        rarity: '',
        min_rarity_range: '',
        max_rarity_range: '',
        color: '',
        min_color_range: '',
        max_color_range: '',
        series: '',
        min_series_range: '',
        max_series_range: '',
        pretend_text: '',
        language: '',
        profile_: '',
        output: '',
        exp: '',
        sale_price: '',
        icon: '',
        picture: '',
        lucky: '',
        comment: '',
        vote_gold: '',
        vote_value: '',
        status: '',
      },
      isShow: false,
      operateFormLabel: [
        { model: 'id', label: '主键 id' },
        { model: 'season', label: '赛季' },
        { model: 'name', label: '植物名称' },
        { model: 'min_variety_range', label: '品种最小范围' },
        { model: 'max_variety_range', label: '品种最大范围' },
        { model: 'rarity', label: '稀有度' },
        { model: 'min_rarity_range', label: '稀有度最小范围' },
        { model: 'max_rarity_range', label: '稀有度最大范围' },
        { model: 'color', label: '颜色' },
        { model: 'min_color_range', label: '最小颜色范围' },
        { model: 'max_color_range', label: '最大颜色范围' },
        { model: 'series', label: '系列' },
        { model: 'min_series_range', label: '系列最小范围' },
        { model: 'max_series_range', label: '系列最大范围' },
        { model: 'pretend_text', label: '形态预测文案' },
        { model: 'language', label: '花语' },
        { model: 'profile_', label: '简介' },
        { model: 'output', label: '基础产量' },
        { model: 'exp', label: '经验' },
        { model: 'sale_price', label: '贩卖价格' },
        { model: 'icon', label: '图标' },
        { model: 'picture', label: '立绘' },
        { model: 'lucky', label: '四叶草类型' },
        { model: 'comment', label: '乐评' },
        { model: 'vote_gold', label: '送花时获得金币数' },
        { model: 'vote_value', label: '人气值' },
        { model: 'status', label: '状态（0-禁用 1-启用）' },
      ],
      searchFrom: {
        keyword: '',
      },
      formLabel: [
        {
          model: 'keyword',
          label: '',
        },
      ],
      tableLabel: [
        { prop: 'id', label: '主键 id' },
        { prop: 'season', label: '赛季' },
        { prop: 'name', label: '植物名称' },
        // { prop: 'min_variety_range', label: '品种最小范围' },
        // { prop: 'max_variety_range', label: '品种最大范围' },
        { prop: 'rarity', label: '稀有度' },
        // { prop: 'min_rarity_range', label: '稀有度最小范围' },
        // { prop: 'max_rarity_range', label: '稀有度最大范围' },
        { prop: 'color', label: '颜色' },
        // { prop: 'min_color_range', label: '最小颜色范围' },
        // { prop: 'max_color_range', label: '最大颜色范围' },
        { prop: 'series', label: '系列' },
        // { prop: 'min_series_range', label: '系列最小范围' },
        // { prop: 'max_series_range', label: '系列最大范围' },
        { prop: 'pretend_text', label: '形态预测文案' },
        { prop: 'language', label: '花语' },
        { prop: 'profile_', label: '简介' },
        { prop: 'output', label: '基础产量' },
        { prop: 'exp', label: '经验' },
        { prop: 'sale_price', label: '贩卖价格' },
        { prop: 'icon', label: '图标' },
        { prop: 'picture', label: '立绘' },
        { prop: 'lucky', label: '四叶草类型' },
        { prop: 'comment', label: '乐评' },
        { prop: 'vote_gold', label: '送花时获得金币数' },
        { prop: 'vote_value', label: '人气值' },
        { prop: 'status', label: '状态（0-禁用 1-启用）' },
        // { prop: 'creator', label: '测试报告地址' },
        // { prop: 'creator_id', label: '测试报告地址' },
        // { prop: 'created_time', label: '测试报告地址' },
        // { prop: 'last_operator', label: '测试报告地址' },
        // { prop: 'last_operator_id', label: '测试报告地址' },
        // { prop: 'update_time', label: '测试报告地址' },
      ],
      tableData: [],
      config: {
        page: 1,
        total: 30,
        loading: false,
      },
    }
  },
  methods: {
    getList(name = '') {
      this.config.loading = true
      // 搜索时，页码需要设置为1，才能正确返回数据，因为数据是从第一页开始返回的
      name ? (this.config.page = 1) : ''
      // this.$http.get('/api/case/list').then((res) => console.log(res.data))
      this.$http
        .get('/api/flower0/plant', {
          params: {
            page: this.config.page - 1,
            name,
          },
        })
        .then((res) => {
          // console.log(res.data.list)
          // for (let i = 0; i < res.data.list.length; i++) {
          //   this.tableData.push(res.data.list[i])
          // }
          this.tableData = res.data.list
          this.config.total = res.data.configpage.totalCount
          this.config.loading = false
        })
    },
    updateData() {
      this.$http.get('/api/flower0/update/plant', { params: this.operateForm }).then((res) => {
        this.operateForm = res.data
        console.log(res.data)
        this.isShow = false
      })
    },
    editUser(row) {
      console.log(row)
      this.operateType = 'see'
      this.isShow = true
      this.operateForm = row
    },
    url(row) {
      console.log(row)
      this.isShow = true
      this.operateForm = row
    },
  },
  created() {
    this.getList()
  },
}
</script>

<style lang="scss" scoped>
@import '/src/assets/scss/common';
</style>

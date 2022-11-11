<template>
  <div class="manage">
    <el-dialog :title="operateType === 'see' ? '查看报告' : '更新用例'" :visible.sync="isShow">
      <common-form :formLabel="operateFormLabel" :form="operateForm" ref="form"></common-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="isShow = false">取 消</el-button>
        <el-button type="primary" @click="confirm">确 定</el-button>
      </div>
    </el-dialog>
    <div class="manage-header">
      <el-button type="primary">+ 新增</el-button>
      <common-form inline :form-label="formLabel" :form="searchFrom">
        <el-button type="primary">搜索</el-button>
      </common-form>
    </div>
    <CommonTable :tableData="tableData" :tableLabel="tableLabel" :config="config" @changePage="getList()" @edit="editUser"></CommonTable>
  </div>
</template>

<script>
import CommonForm from '@/components/CommonForm'
import CommonTable from '@/components/CommonTable'
export default {
  components: { CommonTable, CommonForm },
  data() {
    return {
      // 弹出框操作类型
      operateType: 'see',
      // 弹出框操作内容
      operateForm: {
        gamename: '',
        environment: '',
        method: '',
        headers: '',
        url: '',
        data: '',
      },
      isShow: false,
      operateFormLabel: [
        { model: 'gamename', label: '游戏名称' },
        { model: 'environment', label: '环境' },
        { model: 'method', label: '请求方式' },
        { model: 'headers', label: '请求头' },
        { model: 'url', label: '请求路径' },
        { model: 'data', label: '请求体' },
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
        { prop: 'gamename', label: '游戏名称' },
        { prop: 'environment', label: '环境' },
        { prop: 'method', label: '请求方式' },
        { prop: 'headers', label: '请求头' },
        { prop: 'url', label: '请求路径' },
        { prop: 'data', label: '请求体' },
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
        .get('/testcase/querycaseid/all', {
          params: {
            page: this.config.page,
          },
        })
        .then((res) => {
          console.log(res.data.data[0].records)
          console.log('sad')
          // for (let i = 0; i < res.data.list.length; i++) {
          //   this.tableData.push(res.data.list[i])
          // }
          this.tableData = res.data.data[0].records
          this.config.total = res.data.total
          this.config.loading = false
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

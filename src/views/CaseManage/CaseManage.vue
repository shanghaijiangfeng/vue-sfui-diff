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
        servername: '',
        taskId: '',
        passNumber: '',
        failNumber: '',
        ignoreNumber: '',
        birthd: '',
        resulturl: '',
      },
      isShow: false,
      operateFormLabel: [
        {
          model: 'servername',
          label: '服务名称',
        },
        {
          model: 'taskId',
          label: '任务id',
        },
        {
          model: 'passNumber',
          label: '通过用例',
        },
        {
          model: 'passNumber',
          label: '失败用例',
        },
        {
          model: 'ignoreNumber',
          label: '忽略用例',
        },
        {
          model: 'birthd',
          label: '日期',
        },
        {
          model: 'resulturl',
          label: '测试报告地址',
        },
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
        { prop: 'servername', label: '服务名称' },
        { prop: 'taskId', label: '任务Id' },
        { prop: 'passNumber', label: '通过用例' },
        { prop: 'failNumber', label: '失败用例' },
        { prop: 'ignoreNumber', label: '忽略用例' },
        { prop: 'birthd', label: '日期' },
        { prop: 'resulturl', label: '测试报告地址' },
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
        .get('/api/case/list', {
          params: {
            page: this.config.page,
            name,
          },
        })
        .then((res) => {
          console.log(res.data.data.list)
          // for (let i = 0; i < res.data.list.length; i++) {
          //   this.tableData.push(res.data.list[i])
          // }
          this.tableData = res.data.data.list
          this.config.total = res.data.data.count
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

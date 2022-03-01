<template>
  <div class="manage">
    <el-dialog :title="operateType === 'add' ? '新增用户' : '更新用户'" :visible.sync="isShow">
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
  name: 'UserManage',
  components: { CommonTable, CommonForm },
  data() {
    return {
      operateType: 'add',
      operateForm: {
        servername: '',
        taskId: '',
        status: '',
        date: '',
        sex: '',
      },
      operateFormLabel: [
        {
          model: 'servername',
          label: '服务',
        },
        {
          model: 'taskId',
          label: '任务id',
        },
        {
          model: 'status',
          label: '执行结果',
          type: 'select',
          opts: [
            {
              label: '成功',
              value: 1,
            },
            {
              label: '失败',
              value: 0,
            },
          ],
        },
        {
          model: 'date',
          label: '运行',
          type: 'date',
        },
        {
          model: 'caseReport',
          label: '地址',
        },
      ],
      isShow: false,
      tableData: [],
      tableLabel: [
        {
          prop: 'servername',
          label: '服务名称',
        },
        {
          prop: 'taskId',
          label: '任务Id',
        },
        {
          prop: 'passNumber',
          label: '执行结果',
        },
        {
          prop: 'birth',
          label: '日期',
        },
        {
          prop: 'caseReport',
          label: '地址',
          width: 300,
        },
        {
          prop: 'caseReport',
          label: '地址',
          width: 300,
        },
      ],
      config: {
        page: 1,
        total: 30,
        loading: false,
      },
      searchFrom: {
        keyword: '',
      },
      formLabel: [
        {
          model: 'keyword',
          label: '',
        },
      ],
    }
  },
  methods: {
    getList(name = '') {
      this.config.loading = true
      // 搜索时，页码需要设置为1，才能正确返回数据，因为数据是从第一页开始返回的
      name ? (this.config.page = 1) : ''
      this.$http.get('/api/case/list').then((res) => console.log(res.data))
      this.$http
        .get('/api/case/list', {
          params: {
            page: this.config.page,
            name,
          },
        })
        .then((res) => {
          console.log(res)
          this.tableData = res.data.list.map((item) => {
            item.statusLabel = item.sex === 0 ? '失败' : '成功'
            return item
          })
          this.config.total = res.data.count
          this.config.loading = false
        })
    },
    editUser(row) {
      this.operateType = 'edit'
      this.isShow = true
      this.operateForm = row
    },
    confirm() {
      if (this.operateType === 'edit') {
        this.$http.post('/api/user/edit', this.operateForm).then((res) => {
          console.log(res.data)
          this.isShow = false
          this.getList()
        })
      } else {
        this.$http.post('/api/user/add', this.operateForm).then((res) => {
          console.log(res.data)
          this.isShow = false
          this.getList()
        })
      }
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

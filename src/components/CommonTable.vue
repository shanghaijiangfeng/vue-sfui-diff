<template>
  <div class="common-table">
    <el-table :data="tableData" height="90%" stripe v-loading="config.loading">
      <!--      <el-table-column label="序号" width="85">-->
      <!--        <template slot-scope="scope">-->
      <!--          <span style="margin-left: 10px">{{ (config.page - 1) * 20 + scope.$index + 1 }}</span>-->
      <!--        </template>-->
      <!--      </el-table-column>-->
      <el-table-column style="width: auto" show-overflow-tooltip v-for="item in tableLabel" :key="item.prop" :label="item.label" :child="$children">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row[item.prop] }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="180">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.row)">编辑</el-button>
          <!--          <el-button size="mini" type="danger" @click="handleDelete(scope.row)">编辑</el-button>-->
        </template>
      </el-table-column>
    </el-table>
    <el-pagination class="pager" layout="prev, pager, next" :total="config.total" :current-page.sync="config.page" @current-change="changePage" :page-size="10">
    </el-pagination>
  </div>
</template>

<script>
export default {
  name: 'CommonTable',
  props: {
    tableData: Array,
    tableLabel: Array,
    config: Object,
  },
  methods: {
    handleEdit(row) {
      this.$emit('edit', row)
    },
    changePage(page) {
      //监听组件的页码信息，传递给父组件
      this.$emit('changePage', page)
    },
  },
}
</script>

<style lang="scss" scoped>
.common-table {
  height: calc(100% - 62px);
  background-color: #fff;
  position: relative;
  .pager {
    position: absolute;
    bottom: 0;
    right: 20px;
  }
}
</style>

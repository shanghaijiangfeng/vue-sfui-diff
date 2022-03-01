<template>
  <div class="manage">
    <div class="manage-header" style="justify-content: right">
      <CommonForm inline :form-label="formLabel" :form="searchFrom"><el-button type="primary">搜索</el-button></CommonForm>
    </div>
    <div class="manage-content">
      <common-table></common-table>
    </div>
  </div>
</template>

<script>
import CommonForm from '@/components/CommonForm'
import CommonTable from '@/components/CommonTable'
export default {
  components: { CommonTable, CommonForm },
  data() {
    return {
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
}
</script>

<style lang="scss" scoped>
@import '/src/assets/scss/common';
</style>

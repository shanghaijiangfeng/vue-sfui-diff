<template>
  <div>
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="题目ID">
        <el-input v-model="formInline.questionid" placeholder="题目ID"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="getCountData()">查询</el-button>
      </el-form-item>
    </el-form>
    <el-descriptions title="题目正确率统计" direction="vertical" :column="4" border>
      <el-descriptions-item label="题目id">{{ this.guessdata.data.question_id }}</el-descriptions-item>
      <el-descriptions-item label="难度">{{ this.guessdata.data.difficulty }}</el-descriptions-item>
      <el-descriptions-item label="问题类别">{{ this.guessdata.data.question_category }}</el-descriptions-item>
      <el-descriptions-item label="选项类型（1-单选 2-判断 3-填空）" :span="2">{{ this.guessdata.data.question_type }}</el-descriptions-item>
      <el-descriptions-item label="题目内容">{{ this.guessdata.data.question_text }}</el-descriptions-item>
      <el-descriptions-item label="乐评内容">{{ this.guessdata.data.music_comment }}</el-descriptions-item>
      <el-descriptions-item label="资源链接" :span="2">{{ this.guessdata.data.question_resource }}</el-descriptions-item>
      <el-descriptions-item label="题目出现总次数">{{ this.guessdata.data.number }}</el-descriptions-item>
      <el-descriptions-item label="题目错误数量">{{ this.guessdata.data.error }}</el-descriptions-item>
      <el-descriptions-item label="正确率">{{ this.guessdata.data.aaccuracy }}</el-descriptions-item>
    </el-descriptions>
  </div>
</template>
<script>
export default {
  data() {
    return {
      formInline: {
        questionid: '',
      },
      guessdata: {
        data: {
          question_id: '',
          difficulty: '',
          question_type: '',
          question_text: '',
          music_comment: '',
          question_resource: '',
          number: '',
          error: '',
          aaccuracy: '',
          question_category: '',
        },
      },
    }
  },
  mounted() {
    //模板或el对应的html渲染完成后再调用里面的方法
    this.getCountData()
  },
  methods: {
    getCountData() {
      this.$http.get('/guess/question/statisticaldata', { params: { id: this.formInline.questionid } }).then((res) => {
        this.guessdata.data = res.data.data
        console.log(res.data.data)
        var nval = this.guessdata.data.aaccuracy
        this.guessdata.data.aaccuracy = Math.round(nval * 10000) / 100 + '%'
      })
    },
  },
}
</script>

<style lang="scss" scoped></style>

<template>
  <div>
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="userid">
        <el-input v-model="formInline.userid" placeholder="userid"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="getmusiclist()">查询</el-button>
      </el-form-item>
    </el-form>
    <div>
      <el-descriptions v-for="(item, index) in data" :key="index" title="歌曲详情">
        <el-descriptions-item label="歌曲名称">{{ item.name }}</el-descriptions-item>
        <el-descriptions-item label="歌曲标签">{{ item.songTag }}</el-descriptions-item>
        <el-descriptions-item label="歌手">{{ item.artists[0].name }}</el-descriptions-item>
        <el-descriptions-item label="需要VIP才能播放">{{ item.vipPlayFlag }}</el-descriptions-item>
        <el-descriptions-item label="需要VIP才能播放和下载">{{ item.vipFlag }}</el-descriptions-item>
      </el-descriptions>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      formInline: {
        userid: '7824260053',
        // 7824260053
      },
      data: [
        {
          downloadFlag: '',
          payPlayFlag: '',
          visible: '',
          songMaxBr: '',
          album: {
            name: '',
            id: '',
          },
          payDownloadFlag: '',
          liked: '',
          duration: '',
          coverImgUrl: '',
          songTag: [],
          playFlag: '',
          artists: [
            {
              name: '',
              id: '',
            },
          ],
          vipPlayFlag: '',
          name: '',
          id: '',
          alg: '',
          vipFlag: '',
        },
      ],
      stylelsit: [],
    }
  },
  mounted() {
    //模板或el对应的html渲染完成后再调用里面的方法
    this.getmusiclist()
  },

  methods: {
    getstylelist() {
      this.$http
        .get('/flower/get/style')
        .then((res) => {
          this.stylelsit = res.data
          console.log(res.data)
        })
        .catch((err) => console.log(err))
    },
    getmusiclist() {
      this.$http
        .get('/flower/get/music', { params: { userid: this.formInline.userid } })
        .then((res) => {
          this.data = res.data.data
          for (let i = 0; i < this.data.length; i++) {
            console.log(this.data[i].songTag)
            this.data[i].songTag = this.data[i].songTag.filter((item) => {
              return this.stylelsit.includes(item)
            })
            console.log(this.data[i].songTag)
          }
        })
        .catch((err) => console.log(err))
    },
  },
  created() {
    this.getstylelist()
  },
}
</script>

<style lang="scss" scoped></style>

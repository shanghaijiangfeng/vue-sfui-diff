<template>
  <div class="tabs">
    <el-tag
      @click="changeMenu(tag)"
      :effect="$route.name == tag.name ? 'dark' : 'plain'"
      :key="tag.name"
      v-for="tag in tags"
      :closable="tag.name !== 'home'"
      :disable-transitions="false"
      @close="handleClose(tag)"
    >
      {{ tag.label }}
    </el-tag>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      tags: (state) => state.tab.tabsList,
    }),
  },
  data() {
    return {
      dynamicTags: ['标签一', '标签二', '标签三'],
      inputVisible: false,
      inputValue: '',
    }
  },
  methods: {
    ...mapMutations({
      close: 'closeTab',
    }),
    handleClose(tag) {
      this.close(tag)
    },
    changeMenu(item) {
      this.$router.push({ name: item.name })
      this.$store.commit('selectMenu', item)
    },

    // showInput() {
    //   this.inputVisible = true
    //   this.$nextTick(() => {
    //     this.$refs.saveTagInput.$refs.input.focus()
    //   })
    // },
    //
    // handleInputConfirm() {
    //   let inputValue = this.inputValue
    //   if (inputValue) {
    //     this.dynamicTags.push(inputValue)
    //   }
    //   this.inputVisible = false
    //   this.inputValue = ''
    // },
  },
}
</script>

<style lang="scss" scoped>
.tabs {
  padding: 20px;
  .el-tag {
    margin-right: 15px;
  }
}
</style>

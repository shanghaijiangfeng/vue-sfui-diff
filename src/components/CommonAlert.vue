<template>
  <div v-if="dialogShow" class="panelDialog" :style="'width:' + width">
    <!-- 这里套用一层就可以避免外层居中的样式和animate动画冲突了 -->
    <div class="animate__animated animate__fadeInDown">
      <div class="dialog">
        <i class="closeBtn el-icon-close" @click="closeFn"></i>
        <p class="title" v-if="title">{{ title }}</p>
        <slot></slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'PanelDialog',
  props: {
    dialogShow: {
      type: Boolean,
      default: false,
    },
    width: {
      type: String,
      default: '349px',
    },
    title: {
      type: String,
      default: '',
    },
  },
  data() {
    return {}
  },
  methods: {
    closeFn() {
      this.$emit('update:dialogShow', false)
    },
  },
}
</script>
<style lang="scss" scoped>
.panelDialog {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  .dialog {
    width: 100%;
    min-height: 50px;
    padding: 10px 10px 0;
    box-sizing: border-box;
    position: relative;
    background-image: var(--cddk_dialog_bgCenter);
    background-size: 100% auto;
    .closeBtn {
      position: absolute;
      top: -22px;
      right: 10px;
      font-size: 20px;
      color: #00dcf5;
      cursor: pointer;
      z-index: 2;
    }

    .title {
      width: 100%;
      height: 24px;
      line-height: 24px;
      padding: 0 15px;
      box-sizing: border-box;
      position: absolute;
      top: -24px;
      left: 0;
      font-size: 16px;
      font-weight: 300;
      color: var(--cddk_dialog_title);
    }
  }
}
</style>

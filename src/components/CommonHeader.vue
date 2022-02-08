<template>
  <header>
    <div class="l-content">
      <el-button @click="collapseMenu" type="primary" icon="el-icon-menu" circle size="mini"></el-button>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="current.path" v-if="current">
          {{ current.label }}
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="r-content">
      <el-dropdown trigger="click">
        <span class="el-dropdown-link"><img :src="userImg" class="userImg" /></span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item icon="el-icon-user-solid">个人中心</el-dropdown-item>
          <el-dropdown-item icon="el-icon-close">退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </header>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      current: (state) => state.tab.currentMenu,
    }),
  },
  name: 'CommonHeader',
  data() {
    return {
      userImg: require('../assets/images/img.png'),
    }
  },
  methods: {
    collapseMenu() {
      this.$store.commit('CollapseMenu')
    },
  },
}
</script>

<style lang="scss" scoped>
header {
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: space-between;
}
.l-content {
  display: flex;

  align-items: center;
  .el-button {
    margin-right: 20px;
  }
}
.r-content {
  .userImg {
    width: 54px;
    height: 54px;
    border-radius: 50%;
  }
}
</style>
<style lang="scss">
.el-breadcrumb__item {
  .el-breadcrumb__inner {
    color: #666666;
    font-weight: normal;
  }
  &:last-child {
    .el-breadcrumb__inner {
      color: #ffffff;
    }
  }
}
</style>

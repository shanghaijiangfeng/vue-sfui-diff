<template>
  <el-menu default-active="2" class="el-menu-vertical-demo" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" :collapse="isCollapse">
    <h3 v-show="!isCollapse">diff测试报告</h3>
    <h3 v-show="isCollapse">diff</h3>
    <el-menu-item @click="clickMenu(item)" :index="item.path" v-for="item in nochildren" :key="item.path">
      <i :class="'el-icon-' + item.icon"></i>
      <span slot="title">{{ item.label }}</span>
    </el-menu-item>
    <el-submenu index="index" v-for="(item, index) in hasChildren" :key="index">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>{{ item.label }}</span>
      </template>
      <el-menu-item-group>
        <el-menu-item :index="subItem.path" v-for="(subItem, subIndex) in item.children" :key="subIndex" @click="clickMenu(subItem)">{{
          subItem.label
        }}</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
  name: 'CommonAside',
  computed: {
    nochildren() {
      return this.asideMenu.filter((item) => !item.children)
    },
    hasChildren() {
      return this.asideMenu.filter((item) => item.children)
    },
    isCollapse() {
      return this.$store.state.tab.isCollapse
    },
  },
  methods: {
    clickMenu(item) {
      this.$router.push({ name: item.name })
      this.$store.commit('selectMenu', item)
    },
  },
  data() {
    return {
      asideMenu: [
        {
          path: '/',
          name: 'home',
          label: '首页',
          icon: 's-home',
        },
        {
          path: '/case',
          name: 'case',
          label: '用例管理',
          icon: 'video-play',
        },
        {
          label: '接口测试',
          icon: 'user',
          children: [
            {
              path: '/user1',
              name: 'user1',
              label: '接口管理',
              icon: 'setting',
            },
            {
              path: '/user2',
              name: 'user2',
              label: '接口执行',
              icon: 'setting',
            },
          ],
        },
        {
          label: '正式环境猜歌后台',
          icon: 'user',
          children: [
            {
              path: '/page1',
              name: 'page1',
              label: '单题正确率查询',
              icon: 'setting',
            },
            {
              path: '/page2',
              name: 'page2',
              label: '页面2',
              icon: 'setting',
            },
          ],
        },
        {
          label: '正式环境云音花园后台',
          icon: 'user',
          children: [
            {
              path: '/flower/page1',
              name: 'flower1',
              label: '植物数据配置plant表',
              icon: 'setting',
            },
            {
              path: '/flower/page2',
              name: 'flower2',
              label: '歌曲标签查询',
              icon: 'setting',
            },
          ],
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.el-menu {
  height: 100%;
  border: none;
  h3 {
    color: white;
    text-align: center;
    line-height: 48px;
  }
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>

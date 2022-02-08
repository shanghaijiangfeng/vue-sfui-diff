<template>
  <el-menu default-active="2" class="el-menu-vertical-demo" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" :collapse="isCollage">
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
    isCollage() {
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
          path: '/user',
          name: 'user',
          label: '用户管理',
          icon: 'user',
        },
        {
          label: '其他',
          icon: 'user',
          children: [
            {
              path: '/page1',
              name: 'page1',
              label: '页面1',
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
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.el-menu {
  height: 100%;
  border: none;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>

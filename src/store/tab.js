export default {
  state: {
    //菜单是否折叠的状态
    isCollapse: false,
    menu: [],
    currentMenu: null,
    tabsList: [
      {
        path: '/',
        name: 'home',
        label: '首页',
        icon: 's-home',
      },
    ],
  },
  mutations: {
    selectMenu(state, val) {
      if (val.nameMap !== 'home') {
        state.currentMenu = val
        let result = state.tabsList.findIndex((item) => item.name === val.name)
        result === -1 ? state.tabsList.push(val) : ''
      } else {
        state.currentMenu = null
      }
      // val.name !== 'home' ? (state.currentMenu = val) : (state.currentMenu = null)
    },
    closeTab(state, val) {
      let result = state.tabsList.findIndex((item) => item.name === val.name)
      state.tabsList.splice(result, 1)
    },
    CollapseMenu(state) {
      state.isCollapse = !state.isCollapse
    },
  },
  actions: {},
}

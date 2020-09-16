const menu = {
  state: {
    menuList: [],
    // 职工创新
    menuCreate: [
      {
        name: '合理化的建议',
        path: '/worker/create/advise',
        active: true
      },
      {
        name: '先进操的作法',
        path: '/worker/create/operate',
        active: false
      },
      {
        name: '创新的增效',
        path: '/worker/create/innovate',
        active: false
      }
    ]
  },
  mutations: {
    'SET_MENU_LIST': (state, menuList) => {
      state.menuList = menuList
    }
  },
  actions: {
    setMenuList({ commit }, menuList) {
      return commit('SET_MENU_LIST', menuList)
    }
  }
}

export default menu

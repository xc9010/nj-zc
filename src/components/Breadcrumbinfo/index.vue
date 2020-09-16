<template>
    <div class="bread-crumb-info">
      <!--<div class="bread-crumb-info-item active">-->
        <!--工会要闻-->
      <!--</div>-->
      <div v-for="(item, index) in tabs" :key="index" @click="routerChange(item)"
      :class="['bread-crumb-info-item', {'active': activeRouteName === item.name}]">
        {{item.title}}
      </div>
    </div>
</template>

<script>

export default {
  data() {
    return {
      levelList: null,
      routes: [],
      // act: '',
      currentRoute: {},
      tabs: [],
      activeRouteName: ''
    }
  },
  watch: {
    $route(tab) {
      this.getCurrentRoutes()
      this.getCurrentTabs()
      // this.checkItem(this.currentRoute)
    }
  },
  created() {
    this.getCurrentRoutes()
    // this.checkItem(this.currentRoute)
  },
  methods: {
    routerChange(item) {
      console.log(item)
      const { redirect, path, name } = item
      // this.checkItem(item)
      if (redirect) {
        this.$router.push(redirect)
        return
      }
      this.$router.push({
        name: item.name
      })
    },
    // checkItem(item) {
    //   let cur = item.path.replace('/', '').split('/')[0]
    //   console.log('面包屑 checkItem', item, cur)

    //   this.act = cur
    //   console.log(cur)
    // },
    // 获取当前路由
    getCurrentRoutes() {
      this.currentRoute = this.$router.currentRoute
      this.routes = this.$router.options.routes && this.$router.options.routes[2] && this.$router.options.routes[2].children
      this.getCurrentTabs()
    },
    // 获取当前标签切
    getCurrentTabs() {
      // console.log(this.routes)
      // console.log(this.currentRoute)
      // let cur = this.currentRoute.path.replace('/', '')
      // let cur = this.currentRoute.path.replace('/', '').split('/')[0]

      // matched 值参考：["", "worker", "member"]
      const node = this.routes.find(v => v.name === this.currentRoute.matched[1].name)
      if (node && node.children) {
        this.tabs = node.children.filter(m => !m.meta || (m.meta && m.meta.showInBreadcrumb))
      }
      if (this.currentRoute.matched.length > 2) {
        this.activeRouteName = this.currentRoute.matched[2].name
      }
      // console.log('左侧当行参考1111111', this.currentRoute, this.routes, node)
      // console.log('左侧当行参考2222222', this.tabs, this.activeRouteName)
    },

    handleLink(item) {
      const { redirect, path } = item
      if (redirect) {
        this.$router.push(redirect)
        return
      }
      this.$router.push(this.pathCompile(path))
    }
  }
}
</script>

<style lang="scss" scoped>
.bread-crumb-info {
  display: flex;
}
  .bread-crumb-info-item {
    width: 150px;
    font-size: 16px;
    text-align: center;
    color: #666666;
    cursor: pointer;
    &:hover{
      background: #b91320;
      color: #ffffff;
    }
  }
  .bread-crumb-info-item.active {
      background: #b91320;
      color: #ffffff;
    }
</style>

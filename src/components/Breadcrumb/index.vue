<template>
  <el-breadcrumb class="app-breadcrumb" separator=">">
    <transition-group name="breadcrumb">
      <el-breadcrumb-item v-for="(item, index) in levelList" :key="index">
        <span>{{ item }}</span>
      </el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
</template>

<script>
import pathToRegexp from 'path-to-regexp'

export default {
  data() {
    return {
      currentRoute: {},
      routes: [],
      levelList: []
    }
  },
  watch: {
    $route() {
      this.getCurrentRoutes()
      this.getBreadcrumb()
    }
  },
  created() {
    this.getCurrentRoutes()
    this.getBreadcrumb()
  },
  methods: {
    // 获取当前路由
    getCurrentRoutes() {
      this.currentRoute = this.$router.currentRoute
      this.routes = this.$router.options.routes && this.$router.options.routes[2] && this.$router.options.routes[2].children
    },
    getBreadcrumb() {
      // console.log(this.$route)
      // only show routes with meta.title
      let matched = this.$route.matched.filter(item => item.name)
      const first = matched[0]

      if (!this.isDashboard(first)) {
        matched = [{ path: '/', name: '首页', meta: { title: '首页' }}].concat(matched)
      }

      const matchedList = this.currentRoute.matched
      console.log('333333333333', this.currentRoute, this.routes, matchedList)
// console.log('右侧当行参考22222224444444444', this.$route.matched, this.routes)
      let list = this.routes
      const res = []
      for (let i = 1; i < matchedList.length; i++) {
        const node = list.find(m => m.name === matchedList[i].name)
        if (node) {
          res.push(node.title)
        }
        console.log('找多node', node)
        if (node.children) {
          list = node.children
        }
      }
      console.log('找多node', res)
      this.levelList = res

      // this.levelList = matched.filter(item => item.meta)
      // console.log('右侧当行参考2222222', this.$route, this.levelList, matched.filter(item => item.meta), this.levelList.map(m => m.meta.name))
    },
    isDashboard(route) {
      const name = route && route.name
      if (!name) {
        return false
      }
      return name.trim().toLocaleLowerCase() === '/'.toLocaleLowerCase()
    },
    pathCompile(path) {
      // To solve this problem https://github.com/PanJiaChen/vue-element-admin/issues/561
      const { params } = this.$route
      var toPath = pathToRegexp.compile(path)
      return toPath(params)
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
.app-breadcrumb.el-breadcrumb {
  display: inline-block;
  font-size: 14px;
  line-height: 50px;
  margin-left: 8px;

  .no-redirect {
    color: #97a8be;
    cursor: text;
  }
}
</style>

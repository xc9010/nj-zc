<template>
    <div class="bread-crumb-info">
      <div class="bread-crumb-info-item active">
        工会要闻
      </div>
      <div class="bread-crumb-info-item">
        政策解读
      </div>
      <div class="bread-crumb-info-item">
        主席信箱
      </div>
    </div>
</template>

<script>
import pathToRegexp from 'path-to-regexp'

export default {
  data() {
    return {
      levelList: null
    }
  },
  watch: {
    $route() {
      this.getBreadcrumb()
    }
  },
  created() {
    this.getBreadcrumb()
  },
  methods: {
    getBreadcrumb() {
      // console.log(this.$route)
      // only show routes with meta.title
      let matched = this.$route.matched.filter(item => item.name)
      const first = matched[0]

      if (!this.isDashboard(first)) {
        matched = [{ path: '/', name: '首页', meta: { title: '首页' }}].concat(matched)
      }
      // console.log(matched)

      this.levelList = matched.filter(item => item.meta)
      // console.log(this.levelList)

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
.bread-crumb-info {
  display: flex;
}
  .bread-crumb-info-item {
    width: 150px;
    font-size: 16px;
    text-align: center;
    color: #666666;
  }
  .bread-crumb-info-item.active {
      background: #b91320;
      color: #ffffff;
    }
</style>

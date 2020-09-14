<template>
    <div class="bread-crumb-info">
      <!--<div class="bread-crumb-info-item active">-->
        <!--工会要闻-->
      <!--</div>-->
      <div v-for="i in tabs" :key="i.path" :class="['bread-crumb-info-item', {'active': act === i.path}]" @click="routerChange(i)">{{i.name}}</div>
    </div>
</template>

<script>

export default {
  data() {
    return {
      levelList: null,
      routes: [],
      act: '',
      currentRoute: {},
      tabs: []
    }
  },
  watch: {
    $route(tab) {
      this.getCurrentRoutes()
      this.getCurrentTabs()
      this.checkItem(this.currentRoute)
    }
  },
  created() {
    this.getCurrentRoutes()
    this.checkItem(this.currentRoute)
  },
  methods: {
    routerChange(item) {
      const { redirect, path, name } = item
      this.checkItem(item)
      if (redirect) {
        this.$router.push(redirect)
        return
      }
      this.$router.push({
        name: name
      })
    },
    checkItem(item) {
      console.log(item)
      let cur = item.path.replace('/', '').split('/')[0]

      this.act = cur
      console.log(cur)
    },
    // 获取当前路由
    getCurrentRoutes() {
      this.currentRoute = this.$router.currentRoute
      this.routes = this.$router.options.routes && this.$router.options.routes[2] && this.$router.options.routes[2].children;
      this.getCurrentTabs()
    },
    // 获取当前标签切
    getCurrentTabs() {
      // console.log(this.routes)
      // console.log(this.currentRoute)
      // let cur = this.currentRoute.path.replace('/', '')
      let cur = this.currentRoute.path.replace('/', '').split('/')[0]
      let pid = this.routes.find(v => v.path === cur) && this.routes.find(v => v.path === cur).pid
      let currentTabs = []
      if (pid && pid !== 5) {
        currentTabs = this.routes.filter(v => v.pid === pid)
      }
      this.tabs = currentTabs
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

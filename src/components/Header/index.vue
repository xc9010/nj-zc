<template>
  <el-row>
    <el-col :span="8">
      <div class="headerLogo">logo</div>
    </el-col>
    <el-col :span="16">
      <el-menu
        text-color="#000000"
        :default-active="currentRoute"
        wclass="el-menu-demo"
        mode="horizontal"
        router
      >
        <el-menu-item route="/" index="0">首页</el-menu-item>
        <el-submenu index="1">
          <template slot="title">通知公告</template>
          <el-menu-item route="/news" index="1-1">工会要闻</el-menu-item>
          <el-menu-item route="/policy" index="1-2">政策解读</el-menu-item>
          <el-menu-item route="/email" index="1-3">主席信箱</el-menu-item>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">职工之家</template>
          <el-menu-item route="/family" index="2-1">我要入会</el-menu-item>
          <el-menu-item route="/family" index="2-2">职工创新</el-menu-item>
          <el-menu-item route="/family" index="2-3">红娘牵线</el-menu-item>
          <el-menu-item route="/family" index="2-4">普惠服务</el-menu-item>
          <el-menu-item route="/family" index="2-5">工会风采</el-menu-item>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">知识社区</template>
          <el-menu-item route="/knowledge" index="3-1">专利展示</el-menu-item>
          <el-menu-item route="/knowledge" index="3-2">工匠讲堂</el-menu-item>
          <el-menu-item route="/knowledge" index="3-3">创新直播</el-menu-item>
          <el-menu-item route="/knowledge" index="3-4">职代会</el-menu-item>
          <el-menu-item route="/knowledge" index="3-5">大事记</el-menu-item>
        </el-submenu>
        <el-submenu index="4">
          <template slot="title">练兵比武</template>
          <el-menu-item route="/kungfu" index="4-1">闯关练习</el-menu-item>
          <el-menu-item route="/kungfu" index="4-2">理想信念</el-menu-item>
          <el-menu-item route="/kungfu" index="4-3">在线考试</el-menu-item>
          <el-menu-item route="/kungfu" index="4-4">试题征集</el-menu-item>
          <el-menu-item route="/kungfu" index="4-5">专家问诊</el-menu-item>
        </el-submenu>
        <el-menu-item route="/sports" index="5">运动专场</el-menu-item>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script>

  export default {
    data() {
      return {
        levelList: null,
        routes: ['/notice', '/family', '/knowledge', '/kungfu', 'sports'],
        currentRoute: ''
      }
    },
    watch: {
      $route() {
        this.getBreadcrumb()
      }
    },
    methods: {
      getBreadcrumb() {
        console.log(this.$route)
        // console.log(this.routes.findIndex(v => v === this.$route.path).toString())
        // this.currentRoute = this.routes.findIndex(v => v === this.$route.path)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .headerLogo{
    line-height: 60px;
    text-align: center;
    background: #fff;
  }
  .el-menu--horizontal{
    border-bottom: 0;
  }
</style>

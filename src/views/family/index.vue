<template>
  <div class="mainBox">
    <div class="mainContent">
      <el-tabs :tab-position="position">
        <el-tab-pane label="我要入会">
          <Members></Members>
        </el-tab-pane>
        <el-tab-pane label="职工创新">
          <el-tabs type="border-card">
            <el-tab-pane label="合理化建议">合理化建议</el-tab-pane>
            <el-tab-pane label="先进操作法">先进操作法</el-tab-pane>
            <el-tab-pane label="创新增效">创新增效</el-tab-pane>
          </el-tabs>
        </el-tab-pane>
        <el-tab-pane label="红娘牵线"></el-tab-pane>
        <el-tab-pane label="普惠服务"></el-tab-pane>
        <el-tab-pane label="工会风采"></el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import Card from '../../components/Card'
  import Members from '../../components/Members'

  export default {
    name: 'Family',
    components: { Card, Members },
    data() {
      return {
        position: 'left',
        active: ['1','2','3','4']
      }
    },
    computed: {
      ...mapGetters([
        'name'
      ])
    },
    methods: {
      goto(url) {
        console.log(url)
        this.$router.push(url || './')
      }
    }
  }
</script>

<style lang="scss" scoped>
</style>

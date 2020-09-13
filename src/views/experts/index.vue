<template>
  <div class="mainBox">
    <el-card class="box-card">
      <div slot="header" class="box-title">
        <span>专家问诊</span>
      </div>
      <div>
        <AskForHelp></AskForHelp>
      </div>
    </el-card>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import AskForHelp from '../../components/AskForHelp'

  export default {
    name: 'Experts',
    components: { AskForHelp },
    computed: {
      ...mapGetters([
        'name'
      ])
    }
  }
</script>

<style lang="scss" scoped>
</style>

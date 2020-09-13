<template>
  <div class="mainBox">
    <el-card class="box-card">
      <div slot="header" class="box-title">
        <span>创新直播</span>
      </div>
      <div class="liveHeader">
        <DetailVideo video></DetailVideo>
      </div>
      <div class="liveBody">

      </div>
    </el-card>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import DetailVideo from '../../components/DetailVideo'

  export default {
    name: 'Live',
    components: { DetailVideo },
    computed: {
      ...mapGetters([
        'name'
      ])
    }
  }
</script>

<style lang="scss" scoped>
</style>

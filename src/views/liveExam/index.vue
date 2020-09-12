<template>
  <div class="mainBox">
    <div class="mainContent">
      在线考试s
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'Live',
    computed: {
      ...mapGetters([
        'name'
      ])
    }
  }
</script>

<style lang="scss" scoped>
</style>

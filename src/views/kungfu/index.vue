<template>
  <div class="mainBox">
    kungfu
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'Kungfu',
    computed: {
      ...mapGetters([
        'name'
      ])
    }
  }
</script>

<style lang="scss" scoped>
</style>

<template>
  <div class="mainBox">
    <div class="mainContent">
      试题征集
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

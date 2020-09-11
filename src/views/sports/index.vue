<template>
  <div class="mainBox">
    sports
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'Sports',
    computed: {
      ...mapGetters([
        'name'
      ])
    }
  }
</script>

<style lang="scss" scoped>
</style>

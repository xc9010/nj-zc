<template>
  <div class="mainBox">
    family
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'Family',
    computed: {
      ...mapGetters([
        'name'
      ])
    }
  }
</script>

<style lang="scss" scoped>
</style>

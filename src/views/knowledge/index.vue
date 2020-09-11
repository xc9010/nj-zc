<template>
  <div class="mainBox">
    knowledge
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'Knowledge',
    computed: {
      ...mapGetters([
        'name'
      ])
    }
  }
</script>

<style lang="scss" scoped>
</style>

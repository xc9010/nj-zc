<template>
  <div class="mainBox">
    <Love></Love>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import Love from '../../components/Love'

  export default {
    name: 'Live',
    components: {Love},
    computed: {
      ...mapGetters([
        'name'
      ])
    }
  }
</script>

<style lang="scss" scoped>
</style>

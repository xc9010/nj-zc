<template>
  <div class="mainBox">
    <Members></Members>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import Members from '../../components/Members'

  export default {
    name: 'Live',
    components: { Members },
    computed: {
      ...mapGetters([
        'name'
      ])
    }
  }
</script>

<style lang="scss" scoped>
</style>

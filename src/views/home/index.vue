<template>
  <div>
    <Header></Header>
    <Main></Main>
    <Footer></Footer>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import Header from '../../components/Header/index'
  import Footer from '../../components/Footer/index'
  import Main from '../../components/Main'

  export default {
    name: 'Home',
    components: { Header, Footer, Main },
    computed: {
      ...mapGetters([
        'name'
      ])
    }
  }
</script>

<style lang="scss" scoped>
</style>

<template>
  <div class="mainBox">
    <div class="news-info-wrapper">
      <news-info :data="this.$route.params.article"></news-info>
      <news-recommed :data="data"></news-recommed>
    </div>
  </div>
</template>

<script>

  import { mapGetters } from 'vuex'
  import newsInfo from '../../components/newsInfo'
  import newsRecommed from '../../components/newsInfo/recommed'

  export default {
    components: { newsRecommed, newsInfo },
    props: {
      data: {

        type: Object
      }
    },
    data() {
      return {
        levelList: null,
        active: ['1','2','3','4'],
      }
    },
    computed: {
      ...mapGetters([
        'name'
      ])
    }
  }
</script>

<style lang="scss" scoped>
  .news-info-wrapper {
    width: 1200px;
    display: flex;
    justify-content: space-between;
    padding-top: 50px;
  }
  // .img-wrapper {
  //   // width: 15px;
  //   // height: 15px;
  //   display: flex;
  //   align-items: center;
  //   justify-content: center;
  //   img {
  //     display: block;
  //     max-height: 100%;
  //     max-width: 100%;
  //   }
  // }

</style>

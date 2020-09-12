<template>
  <div class="mainBox">
    <div class="mainContent">
      <div class="details">
        <h3>{{detailObj.title}}</h3>
        <div class="flex detailsTip">
          <span>{{detailObj.date}}</span>
          <span>{{detailObj.author}}</span>
        </div>
        <div class="detailsContent">
          <div class="detailsBox"  v-html="detailObj.content">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'Notice',
    data() {
      return {
        position: 'left',
        detailObj: {
          title: this.$route.params.article.title,
          author: this.$route.params.article.author,
          date: this.$route.params.article.date,
          content: this.$route.params.article.content
        },

      }
    },
    computed: {
      ...mapGetters([
        'name'
      ])
    },
    created() {
      console.log(this.$route.params.article)
    },
    methods: {
    }
  }
</script>

<style lang="scss" scoped>
  .details{
    h3{
      text-align: center;
    }
    .detailsTip{
      color: #777777;
      padding-top: 10px;
      justify-content: center;
      span:first-child{
        flex: 0.3;
      }
    }
    .detailsContent{
      margin: 50px;
    }
    .detailsBox{
      border: 1px solid #eee;
      padding: 20px;
    }
  }
</style>

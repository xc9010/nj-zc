<template>
  <div class="mainBox">
    <div class="mainContent">
      <div class="details">
        <h3>{{detailObj.title}}</h3>
        <div class="flex detailsTip">
          <span>{{detailObj.time}}</span>
          <span>{{detailObj.audthor}}</span>
        </div>
        <div class="detailsContent">
          <div class="detailsBox">
            {{detailObj.content}}
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
          title: '南钢上市啦！！！',
          audthor: 'admin',
          time: '2020-08-19',
          content: '南钢上市啦南钢上市啦南钢上市啦南钢上市啦南钢上市啦南钢上市啦南钢上市啦南钢上市啦南钢上市啦南钢上市啦南钢上市啦南钢上市啦南钢上市啦南钢上市啦南钢上市啦南钢上市啦南钢上市啦南钢上市啦'
        },

      }
    },
    computed: {
      ...mapGetters([
        'name'
      ])
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

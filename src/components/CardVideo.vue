<template>
<div class="cardPicVertical">
  <el-card :style="{border: '0', boxShadow: '0'}" :body-style="{ textAlign: 'left', height: '180px ', width: '100%', padding: '2px' }">
    <img src="/static/img/5.071b761d.jpg" class="image">
    <div style="padding: 0 10px;">
      <div class="cardPicTips">2222</div>
      <div class="cardPicTips">222</div>
    </div>
  </el-card>
</div>
</template>

<script>

  export default {
    props: {
      info: {
        type: String
      }
    },
    data() {
      return {
        levelList: null
      }
    },
    methods: {
      handleClick(item) {
        this.$router.push({
          name: '详情',
          params: {
            article: item
          }
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .cardPicVertical{
    flex: 0.23;
    .cardPicWrap{
      display: flex;
      flex-wrap: wrap;
      width: 100%;
      margin: 0 auto;
      .cardPicItem{
        margin: 0 5px 10px 5px;
      }
    }
    .image{
      width: 100%;
      height: 70%;
    }
  }

</style>

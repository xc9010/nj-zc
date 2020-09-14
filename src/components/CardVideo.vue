<template>
<div class="cardPicVertical">
  <el-card :style="{border: '0', boxShadow: '0'}" :body-style="{ textAlign: 'left', height: '180px ', width: '100%', padding: '2px' }">
    <img :src="info.imgs" class="image">
    <div style="padding: 0 10px;">
      <div class="cardPicTips">{{info.title}}</div>
      <div class="cardPicTips">{{info.author}}</div>
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
    .cardPicTips{
      font-size: 14px;
    }
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

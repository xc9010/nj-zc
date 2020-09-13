<template>
<div class="cardPic">
    <div class="flex cardPicWrap">
      <div v-for="item in info" class="f1 cardPicItem" style="flex: 0.3">
        <el-card :body-style="{ width: '100%', padding: '10px', display: 'flex' }">
          <img :src="item.imgs" class="image">
          <div style="padding: 0 10px;">
            <div class="cardPicTitle">{{item.title}}</div>
            <div class="cardPicTips" style="color: red">{{item.classify}}</div>
            <div class="cardPicTips">{{item.author}}</div>
            <el-button style="margin: 10px 0"><el-link @click="handleClick(item)" target="_blank">查看详情</el-link></el-button>
          </div>
        </el-card>
      </div>
    </div>
</div>
</template>

<script>

  export default {
    props: {
      info: {
        type: Array
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
  .cardPic{
    .cardPicWrap{
      flex-wrap: wrap;
    }
    .cardPicItem{
      margin: 0 10px 10px 0;
      border-radius: 10px;
      .el-card{
        width: 345px;
        height: 100%;
      }
      .image{
        width: 120px;
        height: 120px;
      }
      .cardPicTitle{
        font-size: 18px;
        font-weight: bold;
        padding: 8px 0;
      }
      .cardPicTips{
        font-size: 12px;
      }
    }
  }
</style>

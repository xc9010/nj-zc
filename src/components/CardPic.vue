<template>
<div class="cardPic">
    <div class="flex cardPicWrap">
      <div v-for="item in 6" class="f1 cardPicItem" style="flex: 0.4">
        <el-card :body-style="{ width: '100%', padding: '10px', display: 'flex' }">
          <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
          <div style="padding: 0 10px;">
            <div class="cardPicTitle">好吃的汉堡好吃的汉堡好吃的汉堡</div>
            <div class="cardPicTips" style="color: red">好吃的汉堡</div>
            <div class="cardPicTips">好吃的汉堡</div>
            <el-button style="margin: 10px 0">查看详情</el-button>
          </div>
        </el-card>
      </div>
    </div>
</div>
</template>

<script>

  export default {
    data() {
      return {
        levelList: null
      }
    },
  }
</script>

<style lang="scss" scoped>
  .cardPic{
    .cardPicWrap{
      flex-wrap: wrap;
    }
    .cardPicItem{
      margin: 0 5px 5px 0;
      border-radius: 10px;
      .el-card{
        width: 345px;
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

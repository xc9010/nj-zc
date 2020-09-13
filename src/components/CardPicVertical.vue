<template>
<div class="cardPicVertical">
  <div class="cardPicWrap">
    <div v-for="item in info" class="cardPicItem">
      <el-card :style="{border: '0', boxShadow: '0'}" :body-style="{ textAlign: 'center', width: '150px', height: '220px', padding: '2px' }">
        <img :src="item.imgs" class="image">
        <div style="padding: 0 10px;">
          <div class="cardPicTips">{{item.name}}</div>
          <div class="cardPicTips">{{item.introduce}}</div>
        </div>
      </el-card>
    </div>
  </div>
  <div style="text-align: center;  padding: 10px">
    <el-pagination
      background
      layout="prev, pager, next"
      :total="1000">
    </el-pagination>
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
        levelList: null,
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
    .cardPicWrap{
      display: flex;
      flex-wrap: wrap;
      max-width: 700px;
      margin: 0 auto;
      .cardPicItem{
        margin: 0 5px 10px 5px;
      }
    }
    .image{
      width: 100%;
      height: 174px;
    }
  }

</style>

<template>
  <div class="news-detail">
    <div class="title">
      {{data.title}}
    </div>
    <div class="sub-title">
      <div class="text-with-icon time">
        <div class="img-wrapper">
          <img :src="require('@/assets/images/icon/time.png')" />
        </div>
        <span>2019.08.27</span>
      </div>
      <div class="text-with-icon">
        <div class="img-wrapper">
          <img :src="require('@/assets/images/icon/man.png')" />
        </div>
        <span>参会人：张主席，杨主席</span>
      </div>
      <div class="text-with-icon">
        <div class="img-wrapper">
          <img :src="require('@/assets/images/icon/share.png')" />
        </div>
        <span>分享</span>
      </div>
      <div class="return">
        返回
      </div>
    </div>
    <div class="body" v-html="data.content">
    </div>
  </div>
</template>

<script>

export default {
   props: {
     data: {
       type: Object
     }
   },
   data() {
     return {
       levelList: null
     }
   }
}
</script>

<style lang="scss" scoped>

  .news-detail {
    width: 865px;
    .title {
      font-weight: bold;
      color: #3c3c3c;
      font-size: 24px;
    }
    .sub-title {
      display: flex;
      color: #999999;
      margin-top: 30px;
      padding-bottom: 30px;
      border-bottom: 1px solid #eeeeee;
      position: relative;
      .text-with-icon {
        &.time {
          color: #ffa200;
        }
        display: flex;
        margin-right: 30px;
        .img-wrapper {
          width: 15px;
          height: 15px;
          margin-right: 5px;
        }
      }
      .return {
        font-size: 14px;
        color: #6c6c6c;
        position: absolute;
        right: 5px;
      }
    }
    .body {
      color: #3c3c3c;
      font-size: 15px;
      line-height: 30px;
      padding-top: 30px;
      img {
        display: block;
      }
    }
  }
</style>

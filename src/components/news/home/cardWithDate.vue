<template>
  <div class="home-news-card">
    <div class="date">
      <p class="day">
        {{data.date.substring(8)}}
      </p>
      <p class="month">
        {{data.date.substring(0,7)}}
      </p>
    </div>
    <div class="news-content">
      <p class="news-title">
        {{data.title}}
      </p>
      <p class="news-info">
        {{data.info}}
      </p>
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
   },
}
</script>

<style lang="scss" scoped>
.home-news-card {
  width: 810px;
  padding-right: 20px;
  height: 82px;
  background: #ffffff;
  position: relative;
  display: flex;
  // &::after {
  //   content: '';
  //   position: absolute;
  //   width: 1200px;
  //   height: 1px;
  //   bottom: 0;
  //   background: #ebebeb;
  // }
  &:hover {
    .date {
      color: #e33f4e;
      .day {
        background: #b91320;
      }
    }
    .news-content {
      .news-info {
        color: #666;
      }
    }
  }
  .date {
    margin-right: 30px;

    width: 70px;
    height: 85px;
    // background: #C6C6C6;
    // margin-left: 40px;
    // margin-top: 25px;
    // margin-right: 25px;
    color: #c9c8c8;
    position: relative;
    text-align: center;
    .day {
      height: 55px;
      line-height: 55px;
      font-size: 30px;
      background: #cccccc;
      color: #ffffff;
      margin: 0;
    }
    .month {
      height: 30px;
      line-height: 30px;
      margin: 0;
      font-size: 14px;
      color: #8a8a8a;
      border: 1px solid #dfdfdf;;
      background: #fafafa;
    }
  }
  .news-content {
    width: 690px;
    .news-title {
      margin: 0;
      font-size: 16px;
      color: #2B2B2B;
    }
    .news-info {
      margin: 0;
      font-size: 14px;
      color: #7F7F7F;
      margin-top: 20px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
  }
}
</style>

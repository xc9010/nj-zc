<template>
  <div class="news-card">
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
.news-card {
  width: 1000px;
  height: 140px;
  background: #ffffff;
  position: relative;
  display: flex;
  &::after {
    content: '';
    position: absolute;
    width: 1200px;
    height: 1px;
    bottom: 0;
    background: #ebebeb;
  }
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
    width: 70px;
    height: 85px;
    margin-left: 40px;
    margin-top: 25px;
    margin-right: 25px;
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
    }
  }
  .news-content {
    width: 750px;
    height: 195px;
    .news-title {
      font-size: 16px;
      color: #4a4a4a;
      margin-top: 25px;
    }
    .news-info {
      font-size: 14px;
      color: #b5b5b5;
      margin-top: 20px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
    }
  }
}
</style>

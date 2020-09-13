<template>
  <div class="news-card">
    <div class="date">
      <p class="day">
        20
      </p>
      <p class="month">
        2020-08
      </p>
    </div>
    <div class="news-content">
      <p class="news-title">
        艺术家园“艺之乒”周年庆在南钢举办
      </p>
      <p class="news-info">
        9月1日，南京艺术家园“艺之乒”成立一周年庆活动在南钢举办，南钢工会主席张六喜等接待了艺术家们的到来。此次参加活动的有《江苏工人报》著名漫画家禹天成、南京知名主持人方方等来自各界的艺术家们...
      </p>
    </div>
  </div>
</template>
<script>

export default {
  // props: {
  //   author: {
  //     type: String
  //   },
  //   date: {
  //     type: String
  //   },
  //   info:  {
  //     type: String
  //   },
  //   imgs:  {
  //     type: String
  //   }
  // },
  // data() {
  //   return {
  //     levelList: null
  //   }
  // },
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
    }
  }
}
</style>

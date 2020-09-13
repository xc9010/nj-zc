<template>
  <div class="news-card">
    <div class="date">
      <p class="year">
        2020
      </p>
      <p class="day">
        06-03
      </p>
    </div>
    <div class="news-content">
      <p class="news-title">
        艺术家园“艺之乒”周年庆在南钢举办
      </p>
      <p class="news-info">
        9月1日，南京艺术家园“艺之乒”成立一周年庆活动在南钢举办，南钢工会主席张六喜等接待了艺术家们的到来。此次参加活动的有《江苏工人报》著名漫画家禹天成、南京知名主持人方方等来自各界的艺术家们...
      </p>
      <p class="news-more">
        查看更多>
      </p>
    </div>
    <div class="news-cover">
      <img src="http://nggh.nisco.cn/UploadFiles/ghgz/2020/8/202008271456389849.jpg" alt="">
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
  width: 1200px;
  height: 195px;
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
    width: 185px;
    height: 195px;
    color: #c9c8c8;
    position: relative;
    .year {
      position: absolute;
      margin: 0;
      right: 50px;
      top: 40px;
      font-size: 16px;
    }
    .day {
      margin: 0;
      position: absolute;
      right: 50px;
      top: 70px;
      font-size: 40px;
    }
  }
  .news-content {
    width: 750px;
    height: 195px;
    .news-title {
      font-size: 16px;
      color: #555555;
      margin-top: 35px;
    }
    .news-info {
      font-size: 14px;
      color: #767676;
      margin-top: 25px;
    }
    .news-more {
      font-size: 14px;
      color: #b5b5b5;
      margin-top: 35px;
    }
  }
  .news-cover {
    width: 235px;
    height: 195px;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      max-height: 100%;
      max-width: 100%;
    }
  }
}

</style>

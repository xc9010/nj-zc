<template>
  <div class="news-card">
    <div class="date">
      <p class="year">
        {{data.date.substring(0,4)}}
      </p>
      <p class="day">
        {{data.date.substring(5)}}
      </p>
    </div>
    <div class="news-content">
      <p class="news-title">
        {{data.title}}
      </p>
      <p class="news-info">{{data.info}}</p>
      <p class="news-more">查看更多></p>
    </div>
    <div class="news-cover" v-if="data.imgs != null && data.length != 0">
      <img :src="data.imgs" alt="">
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
    width: 700px;
    margin-right: 50px;
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
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
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

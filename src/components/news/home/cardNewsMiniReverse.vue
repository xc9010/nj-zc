<template>
  <div class="card-home-mini">
    <div class="avatar img-wrapper">
      <img :src="require('@/assets/images/demo//home/mini jpg.png')" />
    </div>
    <div class="news-info">
      <div class="date">
        2020-09-15
      </div>
      <div class="title">
        建立公司级、分厂（单位）级、班组（科室）级三级管
      </div>
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
.img-wrapper {
  // width: 15px;
  // height: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  img {
    display: block;
    max-height: 100%;
    max-width: 100%;
  }
}
.card-home-mini {
  width: 360px;
  height: 80px;
  display: flex;
  .avatar {
    width: 120px;
    height: 80px;
    margin-right: 20px;
  }
  .news-info {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 460px;
    .date {
      margin: 0;
      font-size: 12px;
      color: #888888;
    }
    .title {
      margin: 0;
      font-size: 18px;
      color: #444444;
    }
  }
}

</style>

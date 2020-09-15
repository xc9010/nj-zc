<template>
  <div class="card-craftsman">
    <div class="left-wrapper">
      <p class="btn top">大国工匠</p>
      <p class="btn bottom">技艺绝伦</p>
    </div>
    <div class="craftsman-info">
      <div class="img-wrapper">
        <img :src="require('@/assets/images/demo/home/laomo_1.png')" />
      </div>
      <p class="desc">
        很多人认为工匠是一种机械重复的工作很多人认为工匠是一种机械重复的工作
      </p>
      <p class="name">
        “机车工匠”葛树东
      </p>
    </div>
    <div class="craftsman-info">
      <div class="img-wrapper">
        <img :src="require('@/assets/images/demo/home/laomo_2.png')" />
      </div>
      <p class="desc">
        如果这道工序需要十分钟不眨眼，那就如果这道工序需要十分钟不眨眼，那就
      </p>
      <p class="name">
        “机车工匠”
      </p>
    </div>
    <div class="craftsman-info">
      <div class="img-wrapper">
        <img :src="require('@/assets/images/demo/home/laomo_1.png')" />
      </div>
      <p class="desc">
        专注做一样东西，创造别人认为不可能
      </p>
      <p class="name">
        “南钢工匠” 王月彪
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
  img {
    display: block;
    max-height: 100%;
    max-width: 100%;
  }
}
.card-craftsman {
  width: 1200px;
  height: 360px;
  position: relative;
  display: flex;
  justify-content: space-between;
  background: #F5F5F5;

  .left-wrapper {
    width: 60px;
    height: 360px;
    .btn {
      margin: 0;
      padding: 30px 0;
      letter-spacing: 5px;
      height: 180px;
      font-size: 28px;
      font-weight: bold;
      color: #FFFFFF;
      text-align: center;

      &.top {
        background: #BE000F;
      }
      &.bottom {
        background: #444444;
      }
    }
  }
  .craftsman-info {
    width: 360px;
    height: 360px;
    text-align: center;
    .img-wrapper {
      width: 360px;
      height: 290px;
    }
    .desc {
      margin: 0;
      margin-top: 20px;
      font-size: 18px;
      color: #444444;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
    }
    .name {
      margin: 0;
      margin-top: 15px;
      
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

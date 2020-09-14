<template>
  <div class="card-video-wrapper">
    <!-- 605, 305 -->
    <div class="cover-left img-wrapper">
      <img :src="require('@/assets/images/demo/video.png')" />
    </div>
    <div class="video-desc">
      <div class="title">
        钢铁是这样炼成的
      </div>
      <div class="video-play">
        <div class="cover-left img-wrapper">
          <img :src="require('@/assets/images/icon/video.png')" />
        </div>
        直接观看
      </div>
      <div class="video-summary">
        <span class="tip">摘要：</span>
        南钢始建于1958年,1996年完成公司制改造,由南京钢铁厂改为南京钢铁集团有限公司（以下简称“南钢集团公司”）。1999年3月，南钢集团公司以部分钢铁主业资产投入发起设立了南京钢铁股份有限公司南钢集团公司以部分钢铁主业资产投入发起设立了南京钢铁股份有限公司南钢集团公司以部分钢铁主业资产投入发起设立了南京钢铁股份有限公司南钢集团公司以部分钢铁主业资产投入发起设立了南京钢铁股份有限公司南钢集团公司以部分钢铁主业资产投入发起设立了南京钢铁股份有限公司南钢集团公司以部分钢铁主业资产投入发起设立了南京钢铁股份有限公司
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
  img {
    display: block;
    max-height: 100%;
    max-width: 100%;
  }
}
.card-video-wrapper {
  width: 1200px;
  height: 305px;
  display: flex;
  .cover-left {
    width: 605px;
    &.img-wrapper {
      width: 605px;
      height: 305px;
    }
  }
  .video-desc {
    width: 595px;
    height: 305px;
    padding: 40px 50px 0 50px;
    .title {
      font-size: 24px;
      font-weight: bold;
    }
    .video-play {
      width: 140px;
      height: 45px;
      border: 1px solid #f09800;
      color: #f09800;
      display: flex;
      border-radius: 5px;
      align-items: center;
      justify-content: center;
      text-align: center;
      margin-top: 35px;
      font-size: 15px;
      .img-wrapper {
        width: 22px;
        height: 22px;
        margin-right: 15px;
      }
    }
    .video-summary {
      margin-top: 35px;
      font-size: 14px;
      line-height: 32px;
      color: #5e5e5e;
      .tip {
        color: #db1423;
      }
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
    }
  }
}
</style>

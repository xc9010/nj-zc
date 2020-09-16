<template>
  <div class="home-banner-list">
    <div class="banner-item" @click="push(1)">
      <div class="img-wrapper">
        <img :src="require('@/assets/images/demo/home/ruhui.png')" alt="pic">
      </div>
      <p class="icon-title">
        我要入会
      </p>
    </div>
    <div class="banner-item" @click="push(2)">
      <div class="img-wrapper">
        <img :src="require('@/assets/images/demo/home/bangfu.png')" alt="pic">
      </div>
      <p class="icon-title">
        困难帮扶
      </p>
    </div>
    <div class="banner-item" @click="push(3)">
      <div class="img-wrapper">
        <img :src="require('@/assets/images/demo/home/daikuan.png')" alt="pic">
      </div>
      <p class="icon-title">
        助学贷款
      </p>
    </div>
    <div class="banner-item" @click="push(4)">
      <div class="img-wrapper">
        <img :src="require('@/assets/images/demo/home/zhidaihui.png')" alt="pic">
      </div>
      <p class="icon-title">
        职代会
      </p>
    </div>
    <div class="banner-item" @click="push(5)">
      <div class="img-wrapper">
        <img :src="require('@/assets/images/demo/home/wenzhen.png')" alt="pic">
      </div>
      <p class="icon-title">
        专家问诊
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
   methods: {
     push(key) {
       switch(key) {
         case 1:
          this.$router.push('/member')
          break
        case 2:
          this.$router.push('/service/help')
          break
        case 3:
          this.$router.push('/service/study')
          break
        case 4:
          this.$router.push('/worksMeeting/worksMeeting')
          break
        case 5:
          this.$router.push('/experts')
          break
       }
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
  // .home-banner-wrapper {
  //   background: #FFFFFF;
  //   opacity: 0.8;
  // }
  .home-banner-list {
    margin: auto;
    height: 75px;
    width: 1200px;
    display: flex;
    justify-content: space-around;
    .banner-item {
      display: flex;
      align-items: center;
      .img-wrapper {
        width: 40px;
        height: 40px;
        margin-right: 20px;
      }
      .icon-title {
        margin: 0;
        font-size: 20px;
      }
      &:nth-child(1) {
        .icon-title {
          color: #E34634;
        }
      }
      &:nth-child(2) {
        .icon-title {
          color: #EBB013;
        }
      }
      &:nth-child(3) {
        .icon-title {
          color: #3D3B8C;
        }
      }
      &:nth-child(4) {
        .icon-title {
          color: #25A5DA;
        }
      }
      &:nth-child(5) {
        .icon-title {
          color: #10A132;
        }
      }
    }
  }

</style>

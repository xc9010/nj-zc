<template>
  <div class="patent-wrapper">
    <div class="patent-img-wrapper">
      <div class="patent-img">
        <img :src="require('@/assets/images/patetn.png')" />
        <!--<img :src="data.imgs" />-->
      </div>
    </div>
    <p class="patent-title">
      夹芯轻质隔墙板
    </p>
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
.patent-wrapper {
  width: 280px;
  height: 285px;
  display: block;
  background: #eeeeee;
  // margin-left: 50px;
.patent-img-wrapper {
  height: 230px;
  display: flex;
  justify-content: center;
  align-items: center;
  .patent-img {
    width: 240px;
    height: 165px;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      max-height: 100%;
      max-width: 100%;
    }
  }
}
  .patent-title {
    display: block;
    margin: 0;
    height: 55px;
    line-height: 55px;
    font-size: 16px;
    color: #ffffff;
    text-align: center;
    background: #aaaaaa;
  }
}

</style>

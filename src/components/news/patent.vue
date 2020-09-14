<template>
  <div class="ketang-wrapper">
    <div class="ketang-img-wrapper">
      <div class="patetn-img">
        <img :src="require('@/assets/images/patetn.png')" />
      </div>
    </div>
    <p class="ketang-title">
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
.ketang-wrapper {
  width: 280px;
  height: 285px;
  display: block;
  background: #eeeeee;
  // margin-left: 50px;
.ketang-img-wrapper {
  height: 230px;
  display: flex;
  justify-content: center;
  align-items: center;
  .ketang-img {
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
  .ketang-title {
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

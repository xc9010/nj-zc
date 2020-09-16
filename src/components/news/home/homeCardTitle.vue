<template>
  <div class="home-card-title-wrapper">
    <div class="red-vertical">
    </div>
    <p class="home-card-title">
      {{title}}
    </p>
  </div>
</template>

<script>

export default {
   props: {
     title: {
       type: String,
       default: function() {
         return ''
       }
    }
   },
   data() {
     return {
     }
   }
}
</script>

<style lang="scss" scoped>
.home-card-title-wrapper {
  display: flex;
  position: relative;
  height: 45px;
  // &::after {
  //   content: '';
  //   width: 360px;
  //   height: 1px;
  //   background: #CCCCCC;
  //   position: absolute;
  //   bottom: 0;
  // }
  .red-vertical {
    width: 6px;
    height: 30px;
    margin-right: 15px;
    background: #BE000F;
  }
  .home-card-title {
    margin: 0;
    font-size: 28px;
    font-weight: bold;
  }
}

</style>

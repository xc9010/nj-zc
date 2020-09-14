<template>
<div class="footer">
  <div class="flex footerTop">
    <div>友情链接</div>
    <div>二维码</div>
  </div>
  <div class="flex footerBottom">
    <div>版权所有</div>
    <div>技术支持</div>
  </div>
</div>
</template>

<script>

  export default {
    data() {
      return {
        levelList: null
      }
    },
  }
</script>

<style lang="scss" scoped>
  .footer{
    font-size: 12px;
    .footerTop{
      line-height: 200px;
      background-color: #efefef;
      color: #000;
      justify-content: space-between;
      padding: 0 190px;
    }
    .footerBottom{
      height: 65px;
      line-height: 65px;
      background-color: #49505d;
      color: #fff;
      font-weight: bold;
      justify-content: space-around;
    }
  }

</style>

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
    .footerBottom{
      line-height: 66px;
      background-color: #40505d;
      color: #fff;
      font-weight: bold;
      justify-content: space-around;
    }
    .footerTop{
      line-height: 200px;
      background-color: #fafafa;
      color: #000;
      justify-content: space-between;
      padding: 0 190px;
    }
  }

</style>

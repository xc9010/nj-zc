<template>
<div class="footer">
  <div class="flex footerTop">
    <div>
      <!--友情链接-->
      <p style="font-weight: bold">友情链接</p>
      <div class="flex">
        <div class="linkLeft">
          <p>南京南钢钢铁联合有限公司</p>
          <p>南京南钢钢铁联合有限公司</p>
          <p>南京南钢钢铁联合有限公司</p>
          <p>南京南钢钢铁联合有限公司</p>
        </div>
        <div class="linkLeft">
          <p>南京南钢钢铁联合有限公司</p>
          <p>南京南钢钢铁联合有限公司</p>
          <p>南京南钢钢铁联合有限公司</p>
          <p>南京南钢钢铁联合有限公司</p>
        </div>
      </div>
    </div>
    <div class="flex">
      <div class="crcode">
        <p class="tip">24小时客服热线</p>
      </div>
      <div class="crcode">
        <span class="tip">24小时客服热线</span>
      </div>
    </div>
  </div>
  <div class="flex footerBottom">
    <div>版权所有:南京南钢钢铁联合有限公司版权所有</div>
    <div>技术支持:南京铭启信息技术有限公司</div>
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
      height: 200px;
      background-color: #fafafa;
      color: #000;
      justify-content: space-between;
      padding: 0 190px;
      .linkLeft{
        padding: 10px 10px 0 0;
      }
      .crcode{
        width: 100px;
        height: 100px;
        background-color: #999999;
        margin: 20px 10px;
        position: relative;
        .tip{
          position: absolute;
          bottom: -40%;
          margin: 0;
        }
      }
    }
  }

</style>

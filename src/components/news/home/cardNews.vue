<template>
  <div class="card-home">
    <div class="avatar img-wrapper">
      <img :src="require('@/assets/images/demo//home/new_jpg.png')" />
    </div>
    <div class="news-info">
      <div class="title">
        建立公司级、分厂（单位）级、班组（科室）级三级管
      </div>
      <div class="content">
        建立合理化建议收集、反馈系统，对合理化建议实行电子表单化管理，发挥信息系统的自动跟踪分析功能。将用于合理化建议奖励的部分资金划拨至基层单位，由基层单位负责与本单位相关的合理化建议的评审及奖励工作，使合理化建议得到及时有效实施...
      </div>
      <div class="more">
        查看更多+
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
.card-home {
  width: 810px;
  height: 230px;
  padding-right: 20px;
  display: flex;
  .avatar {
    width: 300px;
    height: 230px;
    margin-right: 30px;
  }
  .news-info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 460px;
    .title {
      font-size: 18px;
      font-family: Microsoft YaHei;
      font-weight: bold;
      color: #414141;
    }
    .content {
      margin-top: 28px;
      font-size: 14px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: #777777;
      line-height: 30px;
    }
    .more {
      background-color: #BE000F;
      width: 130px;
      height: 45px;
      line-height: 45px;
      text-align: center;
      font-size: 14px;
      color: #ffffff;
    }
  }
}

</style>

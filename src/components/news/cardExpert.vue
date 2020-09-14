<template>
  <div class="card-exports">
    <div class="avatar img-wrapper">
      <img :src="require('@/assets/images/cardPicVertical/6.png')" />
    </div>
    <div class="expert-info">
      <div class="name-wrapper">
        <p class="name">刘莉</p>
        <p class="level">经理</p>
      </div>
      <div class="company-wrapper">
        <p class="company">南钢集团</p>
        <p class="post">科技质量部</p>
      </div>
      <div class="desc">
        男，主任医师，医学博士，中华医学会消化内镜分会早癌协作组委员，中国医学装备学会消化病分会早癌学组委员，江苏省医学会消化内镜分会委员，江苏省医学会消化内镜分会早癌与病理学组委员，擅长消化内镜治疗，尤其擅长消化道粘膜病变如息肉、侧向发育性肿瘤、高级别上皮内瘤变。
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
.card-exports {
  width: 1200px;
  height: 210px;
  border: 1px solid #ffe5b7;
  box-shadow: 0px 3px 10px #e3e3e3;
  background: #fffbf4;
  display: flex;
  .avatar {
    width: 130px;
    height: 165px;
    margin-left: 15px;
    margin-top: 15px;
  }
  .expert-info {
    margin-top: 35px;
    margin-left: 25px;
    width: 985px;
    height: 140px;
    .name-wrapper {
      display: flex;
      align-items: baseline;
      color: #f5a210;
      font-weight: bold;
      .name {
        margin: 0;
        font-size: 22px;
        margin-right: 20px;
      }
      .level {
        margin: 0;
        font-size: 16px;
      }
    }
    .company-wrapper {
      margin-top: 20px;
      color: #f5a210;
      font-size: 16px;
      display: flex;
      .company {
        margin: 0;
        margin-right: 15px;
      }
      .post {
        margin: 0;
      }
    }
    .desc {
      margin-top: 20px;
      font-size: 14px;
      color: #3e3e3e;
      line-height: 25px;
    }
  }
}

</style>

<template>
  <div class="qs-wrapper">
    <div class="qs-head">
      <div class="person">
        <div class="img-wrapper">
          <img :src="require('@/assets/images/icon/avatar.png')" />
        </div>
        <p class="name">
          徐峥
        </p>
      </div>
      <p class="date">
        2019.09.07
      </p>
    </div>
    <div class="qs-content">
      <div class="question">
        术后快满一个月了，恢复很好，吞咽正常，已开始治胃病。感谢凌医生，医术精湛。住院期间团队照顾无微不至。现在对医生这个职业，满怀敬意。
      </div>
      <div class="answer">
        回复：祝所有医护人员身体健康，生活幸福！
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

.qs-wrapper {
  width: 1200px;
  padding-left: 45px;
  position: relative;

  .qs-head {
    width: 1075px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .person {
      display: flex;
      align-items: center;
      .img-wrapper {
        margin: 0;
        width: 55px;
        height: 55px;
        margin-right: 15px;
      }
      .name {
        margin: 0;
        color: #343434;
        font-size: 16px;
      }
    }
    .date {
      margin: 0;
      color: #9c9c9c;
    }
  }

  .qs-content {
    line-height: 25px;
    width: 1000px;
    margin-left: 70px;
    .question {
      width: 1000px;
      padding: 15px 0 ;
      color: #6f6f6f;
      font-size: 15px;
    }
    .answer {
      padding: 20px;
      color: #d31b2a;
      font-size: 16px;
      background: #fbedee;
    }
  }
}
</style>

<template>
<div class="mainBox">
  <div class="block-wrapper">
    <div class="block-left">
      <qs-block :title="'2019热点'" :list="list1"></qs-block>
      <qs-block :title="'生产工种'" :bgColor="'#28aee6'" :list="list2"></qs-block>
      <qs-block :title="'专业知识'" :bgColor="'#453f9f'" :list="list3"></qs-block>
    </div>
    <div class="form-question">
      <div class="form-line">
        <p class="label">
          题库名称
        </p>
        <p class="text">
          医疗知识
        </p>
      </div>
      <div class="form-line">
        <p class="label">
          级别
        </p>
        <p class="text">
          1
        </p>
      </div>
      <div class="form-line">
        <p class="label">
          账户
        </p>
        <p class="text">
          test
        </p>
      </div>
      <div class="form-line">
        <p class="label">
          级别
        </p>
        <p class="text">
          {{date}}
        </p>
      </div>
      <div class="form-line submit">
        <div class="btn" @click="start(checked)">
          开始闯关
        </div>
      </div>
    </div>
  </div>
</div>
</div>

</template>

<script>
  import qsBlock from '../../../components/question/qsBlock'

  export default {
    components: { qsBlock },
    props: {
      info: {
        type: Array
      }
    },
    data() {
      return {
        checked: '',
        levelList: null,
        date: new Date((Date.now() + 8*3600*1000)).toJSON().substr(0, 16).replace('T', ' '),
        list1: [
          {
            icon: require('@/assets/images/icon/question/03.png'),
            name: '抗击疫情'
          }, {
            icon: require('@/assets/images/icon/question/05.png'),
            name: '党的十九大精神'
          }, {
            icon: require('@/assets/images/icon/question/07.png'),
            name: '医疗知识'
          }
        ],
        list2: [
          {
            icon: require('@/assets/images/icon/question/12.png'),
            name: '钳工'
          }, {
            icon: require('@/assets/images/icon/question/13.png'),
            name: '安全'
          }, {
            icon: require('@/assets/images/icon/question/14.png'),
            name: '炼钢工'
          },
          {
            icon: require('@/assets/images/icon/question/16.png'),
            name: '性别平等及女职工权益保护知识'
          }, {
            icon: require('@/assets/images/icon/question/18.png'),
            name: '焊工'
          }, {
            icon: require('@/assets/images/icon/question/25.png'),
            name: '维修电工'
          }, {
            icon: require('@/assets/images/icon/question/26.png'),
            name: '计算机办公'
          },
          {
            icon: require('@/assets/images/icon/question/27.png'),
            name: '冷轧工'
          }, {
            icon: require('@/assets/images/icon/question/28.png'),
            name: '高炉炼铁'
          }, {
            icon: require('@/assets/images/icon/question/29.png'),
            name: '内燃机车司机'
          }
        ],
        list3: [
          {
            icon: require('@/assets/images/icon/question/35.png'),
            name: '英语'
          }, {
            icon: require('@/assets/images/icon/question/36.png'),
            name: '心理健康知识'
          }
        ]
      }
    },
    methods: {
      start(item) {
        this.$router.push({
          name: '开始闯关',
          params: {
            id: item
          }
        })
      },
      checkExam(i) {
        this.checked = i;
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

.form-question {
  padding-top: 30px;
  width: 280px;
  border: 1px solid #ebebeb;
  .form-line {
    padding: 0 30px;
    height: 45px;
    display: flex;
    justify-content: space-between;
    .label {
      margin: 0;
      font-weight: bold;
      font-size: 16px;
    }
    .text {
      margin: 0;
      font-size: 14px;
      color: #595959;
    }

    &.submit {
      background: #f2f2f2;
      height: 80px;
      display: flex;
      justify-content: center;
      align-items: center;

      .btn {
        width: 170px;
        height: 45px;
        line-height: 45px;
        border-radius: 5px;
        text-align: center;
        font-size: 15px;
        background: #ffa200;
        letter-spacing: 5px;
        color: white;
      }
    }
  }
}

.block-wrapper {
  padding-top: 50px;
  display: flex;
  justify-content: space-between;
}
  // .cardPicVertical{
  //   .cardPicWrap{
  //     display: flex;
  //     flex-wrap: wrap;
  //   }
  //   .con li{
  //     cursor: pointer;
  //     width: 76px;
  //     height: 110px;
  //     text-align: center;
  //     font-size: 14px;
  //     white-space: nowrap;
  //     border: 1px solid #fff;
  //     border-radius: 16px;
  //     transition: all .3s;
  //     list-style: none;
  //     .round{
  //       position: relative;
  //       width: 60px;
  //       height: 60px;
  //       background: #ff5c7c;
  //       border-radius: 36px;
  //       line-height: 36px;
  //       text-align: center;
  //       margin: 0 auto 8px;
  //     }
  //   }
  //   .active{
  //     border: 1px solid #eee!important;
  //   }
  //   .image{
  //     width: 100%;
  //     height: 174px;
  //     border-radius: 50%;
  //   }
  // }

</style>

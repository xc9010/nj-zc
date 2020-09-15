<template>
<div class="mainBox">
  <div class="block-wrapper">
    <div class="block-left">
      <qs-block :title="'2019热点'" :list="list1" @handleClick="handleTypeClick"></qs-block>
      <qs-block :title="'生产工种'" :bgColor="'#28aee6'" :list="list2" @handleClick="handleTypeClick"></qs-block>
      <qs-block :title="'专业知识'" :bgColor="'#453f9f'" :list="list3" @handleClick="handleTypeClick"></qs-block>
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
        <div :class="['btn', selectedItem.id ? 'allow' : '']" @click="start(checked)">
          开始闯关
        </div>
      </div>
    </div>
  </div>
</div>
<!-- </div> -->

</template>

<script>
import qsBlock from '../../../components/question/qsBlock'
import { login, getQuBank, getExercise } from '@/api/exam'

export default {
  components: { qsBlock },
  props: {
    info: {
      type: Array
    }
  },
  data() {
    return {
      level: 1,
      selectedItem: {},
      checked: '',
      levelList: null,
      date: new Date((Date.now() + 8*3600*1000)).toJSON().substr(0, 16).replace('T', ' '),
      list1: [
        {
          icon: require('@/assets/images/icon/question/03.png'),
          name: '抗击疫情',
          id: '1303255679842189314'
        }, {
          icon: require('@/assets/images/icon/question/05.png'),
          name: '党的十九大精神',
          id: '1303255706757038082'
        }, {
          icon: require('@/assets/images/icon/question/07.png'),
          name: '医疗知识',
          id: '1303255731406962689'
        }
      ],
      list2: [
        {
          icon: require('@/assets/images/icon/question/12.png'),
          name: '钳工',
          id: '1303255983337832449'
        }, {
          icon: require('@/assets/images/icon/question/13.png'),
          name: '安全',
          id: '1303255781721833474'
        }, {
          icon: require('@/assets/images/icon/question/14.png'),
          name: '炼钢工',
          id: '1303255851372445698'
        },
        {
          icon: require('@/assets/images/icon/question/16.png'),
          name: '性别平等及女职工权益保护知识',
          id: '1303255823631319041'
        }, {
          icon: require('@/assets/images/icon/question/18.png'),
          name: '焊工',
          id: '1303255897065193474'
        }, {
          icon: require('@/assets/images/icon/question/25.png'),
          name: '维修电工',
          id: '1303255922826608642'
        }, {
          icon: require('@/assets/images/icon/question/26.png'),
          name: '计算机办公',
          id: '1303255954829148161'
        },
        {
          icon: require('@/assets/images/icon/question/27.png'),
          name: '冷轧工',
          id: '1305027815401426946'
        }, {
          icon: require('@/assets/images/icon/question/28.png'),
          name: '高炉炼铁',
          id: '1305028321062522882'
        }, {
          icon: require('@/assets/images/icon/question/29.png'),
          name: '内燃机车司机',
          id: '1305027724229840897'
        }
      ],
      list3: [
        {
          icon: require('@/assets/images/icon/question/35.png'),
          name: '英语',
          id: '1305028083501338626'
        }, {
          icon: require('@/assets/images/icon/question/36.png'),
          name: '心理健康知识',
          id: '1305027889812574210'
        }
      ]
    }
  },
  created() {
    this.autoLogin()
    getQuBank().then(response => {
      console.log('拉取分类', response.data.records)
    })
  },
  methods: {
    handleTypeClick(item) {
      console.log(item)
      this.selectedItem = item
    },
    start(item) {
      console.log(this.selectedItem)
      if (!this.selectedItem.id) {
        return
      }
      getExercise({
        quRepoId: this.selectedItem.id,
        gameLevel: 5
      }).then(response => {
        console.log('token', response, response.data)
        this.$router.push(
          {
            name: 'chuangguan',
            params: {
              bank: response.data,
              repo: this.selectedItem,
              level: this.level
            }
          })
        // if (resp.success === true) {
        //   this.$router.push(
        //     {
        //       // path: '/ng/exam/test',
        //       name: 'examTest',
        //       params: {
        //         bank: resp.data,
        //         repo: {},
        //         level: this.level
        //       }
        //     })
        // } else {
        //   showToastMessage(this, resp.msg, 'error')
        // }
      })
      // this.$router.push({
      //   name: '开始闯关',
      //   params: {
      //     id: item
      //   }
      // })
    },
    checkExam(i) {
      this.checked = i
    },
    autoLogin() {
      login().then(response => {
        console.log(response)
        const token = response.data.token
        localStorage.setItem('token', token)
        // this.$store.commit('SET_TOKEN', token)
        // this.$store.dispatch('setSelected', 1)
        // store.commit('SET_TOKEN', token)
      })
    },
    activated() {
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
        background: #e1c99f;
        letter-spacing: 5px;
        color: white;
        &.allow {
          background: #ffa200;
        }
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

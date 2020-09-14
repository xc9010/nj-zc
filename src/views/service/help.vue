<template>
  <div class="news-nav">
    <nav-left :items="navItems" @callback="callback"/>
    <div class="nav-content">
      <div class="form-title">
        <span>困难帮扶登记</span>
      </div>
      <div class="email-wrapper">
        <div class="form-wrapper">
          <div class="form-column">
            <div class="form-half-wrapper">
              <div class="form-item">
                <input class="" placeholder="姓名" />
              </div>
              <div class="form-item">
                <input class="" placeholder="出生年月" />
              </div>
              <div class="form-item">
                <input class="" placeholder="政治面貌" />
              </div>
              <div class="form-item">
                <input class="" placeholder="婚姻状况" />
              </div>
              <div class="form-item">
                <input class="" placeholder="身份证号码" />
              </div>
              <div class="form-item">
                <input class="" placeholder="政治面貌" />
              </div>
              <div class="form-item">
                <input class="" placeholder="联系电话" />
              </div>
              <div class="form-item">
                <input class="" placeholder="紧急联系方式" />
              </div>
              <div class="form-item">
                <input class="" placeholder="个人年收入(万元)" />
              </div>
            </div>
            <div class="form-half-wrapper">
              <div class="form-item">
                <input class="" placeholder="性别" />
              </div>
              <div class="form-item">
                <input class="" placeholder="联系电话" />
              </div>
              <div class="form-item">
                <input class="" placeholder="开户行（建行）" />
              </div>
              <div class="form-item">
                <input class="" placeholder="建行卡号" />
              </div>
              <div class="form-item">
                <input class="" placeholder="是否单亲家庭" />
              </div>
              <div class="form-item">
                <input class="" placeholder="本人是否独生子女" />
              </div>
              <div class="form-item">
                <input class="" placeholder="是否工伤" />
              </div>
              <div class="form-item">
                <input class="" placeholder="是否劳模" />
              </div>
              <div class="form-item">
                <input class="" placeholder="户口所在地" />
              </div>
            </div>
          </div>
          <div class="form-half-wrapper">
            <div class="form-item-simgle">
              <textarea class="" placeholder="困难原因" />
            </div>
            <div class="form-item-simgle">
              <textarea class="" placeholder="备注" />
            </div>
          </div>
        </div>
      </div>
      <div class="btn-wrapper">
        <div class="btn submit">
          提交
        </div>
        <div class="btn reset">
          重置
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import Members from '../../components/Members'
  import navLeft from '../../components/news/navLeft'

  export default {
    name: 'Live',
    components: { Members,navLeft},
    computed: {
      ...mapGetters([
        'name'
      ])
    },
    data(){
      return{
        navItems: [
          {
            name: '工会在身边',
            code:'around',
            active: false
          },
          {
            name: '女工关怀',
            code:'woman',
            active: false
          },
          {
            name: '职工生日会',
            code:'birthday',
            active: false
          },
          {
            name: '困难帮扶',
            code:'help',
            active: true
          },
          {
            name: '助学贷款',
            code:'study',
            active: false
          }
        ],
        code:'help'
      }
    },
    methods: {
      callback(item) {
        this.listOption = this[`${item.code}`];
        if (item.code === 'around') {
          this.$router.push('/service/around')
        } else if (item.code === 'woman') {
          this.$router.push('/service/woman')
        } else if (item.code === 'birthday') {
          this.$router.push('/service/birthday')
        } else if (item.code === 'help') {
          this.$router.push('/service/help')
        } else {
          this.$router.push('/service/study')
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .form-title{
    height: 115px;
    /*text-align: center;*/
    display: flex;
    align-items: center;
    justify-content: center;
    color: #666666;
    font-size: 24px;
  }
  .email-wrapper {
    width: 948px;
    background: #f9f9f9;
    padding-top: 1px;
    margin: auto;
    .welcome {
      font-size: 24px;
      color: #d31b2a;
      font-weight: bold;
      // margin-top: 50px;
    }
    .welcome-remark {
      font-size: 15px;
      color: #aaaaaa;
      margin-top: 30px;
    }
    .form-wrapper {
      height: 1300px;
      margin-top: 45px;
      margin-left: 42px;
      .form-column{
        display: flex;
        justify-content: space-between;
      }
      .form-half-wrapper {
        width: 474px;
      }
      .form-item {
        width: 412px;
        position: relative;
        input, textarea {
          width: 100%;
          margin-bottom: 25px;
          font-size: 15px;
          padding: 15px;
          padding-left: 15px;
          padding-top: 15px;
          background: #ffffff;
          border: 1px solid #e9e9e9;
          &::-webkit-input-placeholder {
            /* WebKit browsers */
            color: #666666;
          }
        }
        &.right {
          float: right;
        }
        .required {
          color: #d31b2a;
          position: absolute;
          right: 15px;
          // top: 15px;
          line-height: 52px;
        }
        textarea {
          height: 270px;
          float: right;
        }
      }
      .form-item-simgle {
        width: 865px;
        position: relative;
        input, textarea {
          width: 100%;
          margin-bottom: 25px;
          font-size: 15px;
          padding: 15px;
          padding-left: 15px;
          padding-top: 15px;
          background: #ffffff;
          border: 1px solid #e9e9e9;
          &::-webkit-input-placeholder {
            /* WebKit browsers */
            color: #666666;
          }
        }
        &.right {
          float: right;
        }
        .required {
          color: #d31b2a;
          position: absolute;
          right: 15px;
          // top: 15px;
          line-height: 52px;
        }
        textarea {
          height: 270px;
          float: right;
        }
      }
    }
  }
  .btn-wrapper {
    height: 100px;
    display: flex;
    justify-content: center;
    padding-top: 25px;
    .btn {
      width: 125px;
      height: 40px;
      line-height: 40px;
      text-align: center;
      color: #ffffff;
      border-radius: 5px;
      &.submit {
        background: #d31b2a;
        margin-right: 30px;
      }
      &.reset {
        background: #b3b3b3;
      }
    }
  }
  .news-nav {
    padding-top: 55px;
    width: 1200px;
    margin: auto;
    display: flex;
    background: #ffffff;
    .nav-content {
      margin-top: -25px;
    }
  }
</style>

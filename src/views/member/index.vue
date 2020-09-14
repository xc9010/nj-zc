<template>
  <div>
    <div class="form-title">
      <span>会员入会登记</span>
    </div>
    <div class="email-wrapper">
      <div class="form-wrapper">
        <div class="form-column">
          <div class="form-half-wrapper">
            <div class="form-item">
              <input class="" placeholder="姓名" />
            </div>
            <div class="form-item">
              <input class="" placeholder="民族" />
            </div>
            <div class="form-item">
              <input class="" placeholder="年龄" />
            </div>
            <div class="form-item">
              <input class="" placeholder="学历" />
            </div>
            <div class="form-item">
              <input class="" placeholder="政治面貌" />
            </div>
            <div class="form-item">
              <input class="" placeholder="联系电话" />
            </div>
            <div class="form-item">
              <input class="" placeholder="待入工会" />
            </div>
            <div class="form-item">
              <input class="" placeholder="是否农民工" />
            </div>
            <div class="form-item">
              <input class="" placeholder="工作单位" />
            </div>
          </div>
          <div class="form-half-wrapper">
            <div class="form-item">
              <input class="" placeholder="性别" />
            </div>
            <div class="form-item">
              <input class="" placeholder="出生年月" />
            </div>
            <div class="form-item">
              <input class="" placeholder="婚姻状况" />
            </div>
            <div class="form-item">
              <input class="" placeholder="学位" />
            </div>
            <div class="form-item">
              <input class="" placeholder="身份证号码" />
            </div>
            <div class="form-item">
              <input class="" placeholder="紧急联系方式" />
            </div>
            <div class="form-item">
              <input class="" placeholder="申请入会时间" />
            </div>
            <div class="form-item">
              <input class="" placeholder="是否一线员工" />
            </div>
            <div class="form-item">
              <input class="" placeholder="职务" />
            </div>
          </div>
        </div>
        <div class="form-half-wrapper">
          <div class="form-item-simgle">
            <input class="" placeholder="户口所在地" />
          </div>
          <div class="form-item-simgle">
            <input class="" placeholder="选居住地" />
          </div>
          <div class="form-item-simgle">
            <input class="" placeholder="个人工作简历" />
          </div>
          <div class="form-item-simgle">
            <input class="" placeholder="家庭主要成员及联系方式" />
          </div>
          <div class="form-item-simgle">
            <input class="" placeholder="有何特长" />
          </div>
          <div class="form-item-simgle">
            <input class="" placeholder="工会基层委员意见" />
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
</template>

<script>
  import { mapGetters } from 'vuex'
  import Members from '../../components/Members'

  export default {
    name: 'Live',
    components: { Members },
    computed: {
      ...mapGetters([
        'name'
      ])
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
    width: 1200px;
    background: #f9f9f9;
    padding-top: 1px;
    margin: 0 auto;
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
      height: 1450px;
      margin-top: 45px;
      margin-left: 42px;
      .form-column{
        display: flex;
        justify-content: space-between;
      }
      .form-half-wrapper {
        width: 600px;
      }
      .form-item {
        width: 533px;
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
        width: 1110px;
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
</style>

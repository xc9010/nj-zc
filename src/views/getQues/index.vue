<template>
    <div class="email-wrapper">
  <div class="mainBox">
      <div class="form-wrapper">
    <div class="question-btn-wrapper">
      <div class="question-btn-select active">
        单选题
      </div>
      <div class="question-btn-select">
        多选题
      </div>
      <div class="question-btn-select">
        判断题
      </div>
    </div>
        <div class="form-column">
          <div class="form-half-wrapper">
            <p class="remark form-item-simgle">
              <span>所属题库：</span>所属题库是当前题库的分类。
            </p>
            <div class="form-item-simgle">
              <textarea class="" placeholder="困难原因" />
            </div>
            <p class="remark form-item-simgle">
              <span>题目内容：</span>试题需要填写答案处，请统一使用“（____）”，请不要使用其他内容，题目最长为500个汉字。
            </p>
            <div class="form-item">
              <input class="inputcss" placeholder="汽车司机" />
            </div>
            <div class="form-item">
              <input class="inputcss" placeholder="A" /><input class="choice" name="choice" type="radio" value="A" /><span>设为正确答案</span>
            </div>
            <div class="form-item">
              <input class="inputcss" placeholder="B" /><input class="choice" name="choice" type="radio" value="" /><span>设为正确答案</span>
            </div>
            <div class="form-item">
              <input class="inputcss" placeholder="C" /><input class="choice" name="choice" type="radio" value="" /><span>设为正确答案</span>
            </div>
            <div class="form-item">
              <input class="inputcss" placeholder="D" /><input class="choice" name="choice" type="radio" value="" /><span>设为正确答案</span>
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
  .remark {
    font-size: 15px;
    color: #464646;
    margin-top: 30px;
    span{
      color: #ffa200;
    }
  }

  .question-btn-wrapper {
    display: flex;
    .question-btn-select {
      width: 160px;
      height: 55px;
      line-height: 55px;
      text-align: center;
      margin-right: 5px;
      background: #cfcecd;
      color: #ffffff;
      border-top-left-radius: 10px;
      border-top-right-radius:10px;
      &.active {
        background: #ffa200;
      }
    }
  }
  .email-wrapper {
    width: 1200px;
    background: #f9f9f9;
    padding-top: 1px;
    margin: 30px auto 70px auto;
    .welcome {
      font-size: 24px;
      color: #d31b2a;
      font-weight: bold;
      // margin-top: 50px;
    }

    .form-wrapper {
      height:750px;
      margin-left: 42px;
      .form-column{
        display: flex;
        justify-content: space-between;
      }
      .form-half-wrapper {
        width: 474px;
      }
      .form-item {
        width: 612px;
        position: relative;
        span{
          color: #595959;
        }
        .choice{
          margin: 0 10px;
        }
        .inputcss, textarea {
          width: 50%;
          margin-bottom: 25px;
          font-size: 15px;
          padding: 15px;
          padding-left: 15px;
          padding-top: 15px;
          background: #ffffff;
          border: 1px solid #e9e9e9;
          &::-webkit-input-placeholder {
            /* WebKit browsers */
            color: #b1b1b1;
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
          height: 100px;
          float: right;
        }
      }
      .form-item-simgle {
        width: 1126px;
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
            color: #b1b1b1;
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
          height: 140px;
          float: right;
        }
      }
    }
  }
  .btn-wrapper {
    height: 100px;
    display: flex;
    /*justify-content: center;*/
    /*padding-left: 30px;*/
    /*padding-top: 25px;*/
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

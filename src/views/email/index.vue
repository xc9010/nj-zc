<template>
  <div class="email-wrapper">
    <p class="welcome">
      南钢钢铁联合欢迎您的投递
    </p>
    <p class="welcome-remark">
      欢迎大家给主席写信我们在这里倾听您的心声，了解您的需求，帮助您解决难题!可以在这里直接写信发给主席！
    </p>
    <div class="form-wrapper">
      <div class="form-half-wrapper">
        <div class="form-item">
          <input class="" placeholder="主管" />
          <span class="required">*</span>
        </div>
        <div class="form-item">
          <input class="" placeholder="姓名" />
          <span class="required">*</span>
        </div>
        <div class="form-item">
          <input class="" placeholder="所属单位" />
        </div>
        <div class="form-item">
          <input class="" placeholder="工号" />
          <span class="required">*</span>
        </div>
      </div>
      <div class="form-half-wrapper">
        <div class="form-item right">
          <textarea class="" placeholder="内容" />
          <span class="required">*</span>
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
export default {
  data() {
    return {
      levelList: null,
    }
  },
  computed: {
    ...mapGetters([
      'name'
    ])
  },
  methods: {
    handleClick(item) {
      this.$router.push({
        name: '详情',
        params: {
          article: item
        }
      })
    },
    goto(url) {
      console.log(url)
      this.$router.push(url || './')
    }
  }
}
</script>

<style lang="scss" scoped>

.email-wrapper {
  width: 1200px;
  background: #ffffff;
  padding-top: 50px;
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
    margin-top: 45px;
    display: flex;
    justify-content: space-between;
    .form-half-wrapper {
      width: 600px;
      .form-item {
        width: 580px;
        position: relative;
        input, textarea {
          width: 100%;
          margin-bottom: 25px;
          font-size: 15px;
          padding: 15px;
          padding-left: 15px;
          padding-top: 15px;
          background: #f5f5f5;
          border: 1px solid #e9e9e9;
          &::-webkit-input-placeholder {
            /* WebKit browsers */
            color: #b8b8b8;
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
    display: flex;
    justify-content: center;
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
}
</style>

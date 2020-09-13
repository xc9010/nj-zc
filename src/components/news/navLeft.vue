<template>
  <div class="nav-container">
    <div class="nav-item active">
      <div class="active"></div>
      <p>
        合理化建议
      </p>
    </div>
    <div class="nav-item">
      <div class="active"></div>
      <p>
        先进操作法
      </p>
    </div>
    <div class="nav-item">
      <div class="active"></div>
      <p>
        创新增效
      </p>
    </div>
  </div>
</template>

<script>

export default {
  // props: {
  //   author: {
  //     type: String
  //   },
  //   date: {
  //     type: String
  //   },
  //   info:  {
  //     type: String
  //   },
  //   imgs:  {
  //     type: String
  //   }
  // },
  // data() {
  //   return {
  //     levelList: null
  //   }
  // },
}
</script>

<style lang="scss" scoped>
.nav-container {
  .nav-item {
    height: 45px;
    line-height: 45px;
    width: 200px;
    margin-bottom: 15px;
    display: flex;
    align-items: center;
    .active {
      width: 5px;
      height: 100%;
      margin-right: 25px;
      background-color: transparent;
    }
    font-size: 15px;
    &.active {
      color: #ffffff;
      background-image: linear-gradient(to right, #ffa200, transparent);
      .active {
        background-color: #d90e1e;
      }
      &.active:hover {
        color: #ffffff;
      }
    }
    &:hover {
      color: #d90e1e;
      .active {
        background-color: #d90e1e;
      }
    }
  }
}
</style>

<template>
  <div class="contentHeader">
    <div class="headerLeft">
      {{title}}
    </div>
    <div>
      <a v-if="refresh" class="btn" style="width: 70px; padding: 0">
        <i class="el-icon-refresh"></i>
        换一换
      </a>
      <a class="btn">
        更多
        <i class="el-icon-arrow-right"></i>
      </a>
    </div>
  </div>
</template>

<script>

  export default {
    props: {
      title: {
        type: String
      },
      info: {
        type: String
      },
      refresh: {
        type: Boolean
      }
    },
    data() {
      return {
        levelList: null
      }
    },
    methods: {
      handleClick(item) {
        this.$router.push({
          name: '详情',
          params: {
            article: item
          }
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .contentHeader {
    display: flex;
    height: 36px;
    align-items: center;
    justify-content: space-between;

    .headerLeft {
      &:before{
        content: "";
        width: 0px;
        height: 15px;
        border-left: 5px solid #409EFF;
        vertical-align: top;
        margin-right: 5px;
      }
    }

    .btn {
      display: inline-block;
      align-items: center;
      cursor: pointer;
      height: 22px;
      text-align: center;
      border: 1px solid silver;
      border-radius: 2px;
      font-size: 12px;
      color: #505050;
      transition: all .2s;
      line-height: 22px;
      padding: 0 0 0 12px;
      width: 58px;
      margin-left: 12px;
      &:hover{
        background-color: #f4f4f4;
      }
    }
  }

</style>

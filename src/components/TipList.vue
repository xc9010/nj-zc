<template>
  <div>
    <div v-for="(item, index) in 10" class="tipItem">
      <span :class="['num', { 'on': index < 3 }]">{{index + 1}}</span>
      <a href="#" class="link">
        <p class="txt">
          <span class="title elli">title</span>
          <span class="update elli">name</span>
        </p>
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
    }
  }
</script>

<style lang="scss" scoped>
  .tipItem{
    display: flex;
    justify-content: space-between;
    margin-bottom: 18px;
    .link{
      display: inline-block;
    }
    .title{
      width: 198px;
      font-size: 14px;
      font-weight: 500;
    }
    .num{
      font-size: 14px;
      color: #999;
      width: 18px;
      height: 18px;
      text-align: center;
      line-height: 18px;
      background: #fff;
      border-radius: 2px;
      display: inline-block;
    }
    .on{
      color: #fff;
      background: #00a1d6;
    }
    .txt{
      width: 220px;
      line-height: 20px;
      display: flex;
      justify-content: space-between;
      margin: 0;
    }
    .update{
      font-size: 12px;
      color: #999;
      text-align: right;
      min-width: 90px;
    }
  }
</style>

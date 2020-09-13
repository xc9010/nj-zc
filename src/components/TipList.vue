<template>
  <div>
    <div v-for="(item, index) in list" class="tipItem">
      <span :class="['num', { 'on': index < 3 }]">{{index + 1}}</span>
      <a href="#" class="link">
        <p class="txt">
          <span class="title elli">{{item.title}}</span>
          <span class="update elli">{{item.author}}</span>
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
        levelList: null,
        list:[
          {
            title: '数控车床编程培训',
            author: '南钢教育培训'
          },
          {
            title: '电工培训,焊工培训',
            author: '上德教育培训'
          },
          {
            title: '登高证，高压电工证',
            author: '上海则成安全技术有限公司'
          },
          {
            title: '叉车考叉车驾驶培训',
            author: '南钢教育培训'
          },
          {
            title: '塔吊司机培训',
            author: '南钢教育培训'
          },
          {
            title: '起重机司',
            author: '上德教育培训'
          },
          {
            title: '安监局的电工证和国家电网的电工考试',
            author: '上海则成安全技术有限公司'
          },
          {
              title: '上海低压电工证电焊证登高作业架子工特种操作',
              author: '南钢教育培训'
            }
        ]
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

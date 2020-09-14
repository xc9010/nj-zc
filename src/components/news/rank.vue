<template>
  <div class="rank-list">
    <div class="rank-row header">
      <div class="header-name">
        <div class="img-wrapper">
          <img :src="require('@/assets/images/icon/rank.png')" />
        </div>
        <span>排行榜</span>
      </div>
      <div class="more">
        更多>
      </div>
    </div>
    <div class="rank-row body">
      <div class="header-name">
        <div class="rank-index active">
          1
        </div>
        <span>数控车床</span>
      </div>
      <div class="more">
        南钢教育培训
      </div>
    </div>
    <div class="rank-row body">
      <div class="header-name">
        <div class="rank-index active">
          1
        </div>
        <span>数控车床</span>
      </div>
      <div class="more">
        南钢教育培训
      </div>
    </div>
    <div class="rank-row body">
      <div class="header-name">
        <div class="rank-index active">
          1
        </div>
        <span>数控车床</span>
      </div>
      <div class="more">
        南钢教育培训
      </div>
    </div>
    <div class="rank-row body">
      <div class="header-name">
        <div class="rank-index active">
          1
        </div>
        <span>数控车床</span>
      </div>
      <div class="more">
        南钢教育培训
      </div>
    </div>
    <div class="rank-row body">
      <div class="header-name">
        <div class="rank-index active">
          1
        </div>
        <span>数控车床</span>
      </div>
      <div class="more">
        南钢教育培训
      </div>
    </div>
    <div class="rank-row body">
      <div class="header-name">
        <div class="rank-index">
          1
        </div>
        <span>数控车床</span>
      </div>
      <div class="more">
        南钢教育培训
      </div>
    </div>
    <div class="rank-row body">
      <div class="header-name">
        <div class="rank-index">
          1
        </div>
        <span>数控车床</span>
      </div>
      <div class="more">
        南钢教育培训
      </div>
    </div>
    <div class="rank-row body">
      <div class="header-name">
        <div class="rank-index">
          1
        </div>
        <span>数控车床</span>
      </div>
      <div class="more">
        南钢教育培训
      </div>
    </div>
  </div>
</template>

<script>

export default {
   props: {
     data: {
       type: Object
     }
   },
   data() {
     return {
       levelList: null
     }
   }
}
</script>

<style lang="scss" scoped>
.rank-list {
  width: 315px;
  border: 1px solid #e2e2e2;
  .rank-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 15px;
    border-bottom: 1px solid #ffeded;
    &:last-child {
      border-bottom: none;
    }
    &.header {
      height: 50px;
      line-height: 50px;
      .header-name {
        display: flex;
        align-items: center;
        .img-wrapper {
          width: 25px;
          height: 25px;
          display: flex;
          align-items: center;
          justify-content: center;
          img {
            display: block;
            max-height: 100%;
            max-width: 100%;
          }
        }

        color: #cd1d2b;
        font-size: 16px;
        font-weight: bold;
      }
    }
    .more {
      font-size: 16px;
      color: #9e9e9e;
    }
    &.body {
      height: 40px;
      line-height: 40px;
      .header-name {
        display: flex;
        align-items: center;
        .rank-index {
          &.active {
            background: #ffa200;
          }
          background: #aeaeae;
          color: #ffffff;
          width: 20px;
          height: 20px;
          margin-right: 10px;
          border-radius: 10px;
          line-height: 20px;
          text-align: center;
        }
        color: #3c3c3c;
        font-size: 15px;
      }
    }
  }
}
</style>

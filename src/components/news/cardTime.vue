<template>
  <div class="card-time">
    <div :class="['tick', direction]"></div>
    <div class="date">
      {{data.date}}
    </div>
    <div class="title">
      {{data.title}}
    </div>
    <div class="show img-wrapper">
      <img :src="data.imgs" />
    </div>
  </div>
</template>

<script>

export default {
   props: {
     data: {
       type: Object
     },
     // 箭头方向
     direction: {
       type: String,
       default: 'left'
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

.card-time {
  position: relative;
  width: 470px;
  height: 365px;
  border: 1px solid #dedede;
  padding: 30px;
  text-align: right;
  .tick {
    position: absolute;
    top: 25px;
    width: 21px;
    height: 21px;
    background: white;
    border: 1px solid #dedede;
    border-bottom: none;
    border-left: none;

    &.right {
      right: -11px;
      transform: rotate(45deg);
    }

    &.left {
      left: -11px;
      transform: rotate(-135deg);
    }
  }
  .date {
    font-size: 24px;
    font-weight: bold;
    color: #ffa200;
  }
  .title {
    margin-top: 25px;
    font-size: 16px;
    font-weight: bold;
    color: #818181;
  }
  .show {
    margin-top: 25px;
    width: 410px;
    height: 215px;
  }
}

</style>

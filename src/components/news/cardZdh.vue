<template>
  <div :class="['zdh-wrapper', reverse ? 'reverse' : '']">
    <div class="zdh-left">
      <div class="studio-info">
        <div class="studio-desc">
          <p class="name">{{data.title}}</p>
          <p class="icon-desc">
            <img class="icon" :src="require('@/assets/images/list.png')">
            <span class="desc">
              {{data.date}}
            </span>
          </p>
          <p class="icon-desc leader">
            <img class="icon" :src="require('@/assets/images/man.png')">
            <span class="desc">
              {{data.author}}
            </span>
          </p>
        </div>
      </div>
      <div class="btn-more">
        <!--  -->
        查看详情
        <div class="img-wrapper">
          <img :src="require('@/assets/images/icon/arrow-right.png')" />
        </div>
      </div>
    </div>
    <div class="zdh-right">
      <div class="img-wrapper">
        <img :src="require('@/assets/images/demo/zdh.png')" />
      </div>
    </div>
  </div>
</template>

<script>

export default {
   props: {
     data: {
       type: Object
     },
     // 样式反转
     reverse: {
       type: Boolean,
       default: false
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
.zdh-wrapper {
  width: 1200px;
  height: 290px;
  display: flex;

  &.reverse {
    flex-direction: row-reverse;
  }
  .zdh-left {
    padding: 50px 0 0 50px;
    width: 400px;
    height: 290px;
    .studio-info {
      // width: 450px;
      // height: 150px;
      position: relative;
      text-align: left;
      margin-bottom: 35px;
      display: flex;
      .head-img {
        width: 215px;
        height: 150px;
        overflow: hidden;
        img {
          text-align: center;
          // max-width: 100%;
          max-height: 100%;
          height: 100%;
          text-align: center;
        }
      }
      .studio-desc {
        width: 275px;
        padding: 0 20px;
        .name {
          margin: 0;
          // height: 60px;
          // line-height: 60px;
          font-size: 22px;
          color: #3c3c3c;
          position: relative;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
        }
        .icon-desc {
          margin: 0;
          margin-top: 30px;
          display: flex;
          align-items: center;
          .icon {
            width: 16px;
            height: 16px;
          }
          .desc {
            font-size: 14px;
            margin-left: 10px;
            color: #ffa200;
          }
          &.leader {
            margin-top: 20px;
            .desc {
              color: #979797;
            }
          }
        }
      }
    }
    .btn-more {
      border: 1px solid #910d17;
      color: #910d17;
      font-size: 14px;
      width: 145px;
      height: 42px;
      border-radius: 5px;

      display: flex;
      align-items: center;
      justify-content: center;

      .img-wrapper {
        margin-left: 15px;

        width: 18px;
        height: 18px;
        display: flex;
        align-items: center;
        justify-content: center;
        img {
          display: block;
          max-height: 100%;
          max-width: 100%;
        }
      }
    }
  }
  .zdh-right {
    width: 800px;
    height: 290px;
    .img-wrapper {
      width: 800px;
      height: 290px;
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        display: block;
        max-height: 100%;
        max-width: 100%;
      }
    }
  }
}
</style>

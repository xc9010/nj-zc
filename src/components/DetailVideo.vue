<template>
<div class="detailVideo">
  <div class="detailVideoHeader flex">
    <div v-if="video" class="video">
      <video width="380" height="240" src="" controls="controls">
        您的浏览器不支持 video 标签。
      </video>
    </div>
    <div v-else class="img">
      <img src="" alt="img">
    </div>

    <div class="txt">
      <p class="title">title</p>
      <p class="name">admin</p>
      <el-button v-if="video" class="showVideoBtn">直接观看</el-button>
      <i class="line"></i>
      <ul>
        <li>123132</li>
        <li>1231322312</li>
        <li>1231322312</li>
        <li>1231322312w</li>
      </ul>
    </div>
  </div>
</div>
</template>

<script>

  export default {
    props: {
      video: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        levelList: null,
      }
    },
  }
</script>

<style lang="scss" scoped>
  .detailVideo{
    margin: 10px 0;
    .detailVideoHeader{
      p{margin: 0}
      justify-content: space-between;
      .img{
        width: 380px;
        height: 240px;
        flex: 0.4;
        img{
          width: 380px;
          height: 240px;
          display: block;
        }
      }
      .video{
        flex: 0.4;
      }
      .txt{
        ul{
          margin: 0;
          padding: 0;
        }
        li{
          list-style: none;
          padding: 10px 0;
        }
        flex: 0.5;
        .title{
          font-size: 28px;
        }
        .name{
          font-size: 26px;
        }
        .showVideoBtn{
          margin: 10px 0;
        }
        .line{
          width: 100%;
          display: block;
          margin: 10px 0;
          border-bottom: 1px solid #eee;
        }
      }
    }
  }
</style>

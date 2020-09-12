<template>
<div class="love">

  <div class="flex flexwrap">
    <div class="flex1">
      <el-card style="width: 250px" shadow="always" :body-style="{ padding: '0px' }">
        <el-carousel  height="250px">
          <el-carousel-item v-for="item in 3" :key="item">
            <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" style="width: 100%">
          </el-carousel-item>
        </el-carousel>
        <div class="flex loveContent">
          <div class="f1">
            <div>张三</div>
            <div>炼钢一厂</div>
          </div>
          <div class="contentItem">
            <div class="loveicon"></div>
          </div>
        </div>
        <div class="loveTag">
          <el-tag
            v-for="item in items"
            :key="item.label"
            :type="item.type"
            style="margin: 0 5px 10px 10px"
            effect="dark">
            {{ item.label }}
          </el-tag>
        </div>
      </el-card>
    </div>
    <div class="flex1">
      <el-card style="width: 250px" shadow="always" :body-style="{ padding: '0px' }">
        <el-carousel  height="250px">
          <el-carousel-item v-for="item in 3" :key="item">
            <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" style="width: 100%">
          </el-carousel-item>
        </el-carousel>
        <div class="flex loveContent">
          <div class="f1">
            <div>张三</div>
            <div>炼钢一厂</div>
          </div>
          <div class="contentItem">
            <div class="loveicon"></div>
          </div>
        </div>
        <div class="loveTag">
          <el-tag
            v-for="item in items"
            :key="item.label"
            :type="item.type"
            style="margin: 0 5px 10px 10px"
            effect="dark">
            {{ item.label }}
          </el-tag>
        </div>
      </el-card>
    </div>
    <div class="flex1">
      <el-card style="width: 250px" shadow="always" :body-style="{ padding: '0px' }">
        <el-carousel  height="250px">
          <el-carousel-item v-for="item in 3" :key="item">
            <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" style="width: 100%">
          </el-carousel-item>
        </el-carousel>
        <div class="flex loveContent">
          <div class="f1">
            <div>张三</div>
            <div>炼钢一厂</div>
          </div>
          <div class="contentItem">
            <div class="loveicon"></div>
          </div>
        </div>
        <div class="loveTag">
          <el-tag
            v-for="item in items"
            :key="item.label"
            :type="item.type"
            style="margin: 0 5px 10px 10px"
            effect="dark">
            {{ item.label }}
          </el-tag>
        </div>
      </el-card>
    </div>
  </div>

  <div class="flex flexwrap">
    <div class="flex1">
      <el-card style="width: 250px" shadow="always" :body-style="{ padding: '0px' }">
        <el-carousel  height="250px">
          <el-carousel-item v-for="item in 3" :key="item">
            <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" style="width: 100%">
          </el-carousel-item>
        </el-carousel>
        <div class="flex loveContent">
          <div class="f1">
            <div>张三</div>
            <div>炼钢一厂</div>
          </div>
          <div class="contentItem">
            <div class="loveicon"></div>
          </div>
        </div>
        <div class="loveTag">
          <el-tag
            v-for="item in items"
            :key="item.label"
            :type="item.type"
            style="margin: 0 5px 10px 10px"
            effect="dark">
            {{ item.label }}
          </el-tag>
        </div>
      </el-card>
    </div>
    <div class="flex1">
      <el-card style="width: 250px" shadow="always" :body-style="{ padding: '0px' }">
        <el-carousel  height="250px">
          <el-carousel-item v-for="item in 3" :key="item">
            <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" style="width: 100%">
          </el-carousel-item>
        </el-carousel>
        <div class="flex loveContent">
          <div class="f1">
            <div>张三</div>
            <div>炼钢一厂</div>
          </div>
          <div class="contentItem">
            <div class="loveicon"></div>
          </div>
        </div>
        <div class="loveTag">
          <el-tag
            v-for="item in items"
            :key="item.label"
            :type="item.type"
            style="margin: 0 5px 10px 10px"
            effect="dark">
            {{ item.label }}
          </el-tag>
        </div>
      </el-card>
    </div>
    <div class="flex1">
      <el-card style="width: 250px" shadow="always" :body-style="{ padding: '0px' }">
        <el-carousel  height="250px">
          <el-carousel-item v-for="item in 3" :key="item">
            <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" style="width: 100%">
          </el-carousel-item>
        </el-carousel>
        <div class="flex loveContent">
          <div class="f1">
            <div>张三</div>
            <div>炼钢一厂</div>
          </div>
          <div class="contentItem">
            <div class="loveicon"></div>
          </div>
        </div>
        <div class="loveTag">
          <el-tag
            v-for="item in items"
            :key="item.label"
            :type="item.type"
            style="margin: 0 5px 10px 10px"
            effect="dark">
            {{ item.label }}
          </el-tag>
        </div>
      </el-card>
    </div>
  </div>

</div>
</template>

<script>

  export default {
    data() {
      return {
        levelList: null,
        items: [
          { type: '', label: '标签一' },
          { type: 'success', label: '标签二' },
          { type: 'info', label: '标签三' },
          { type: 'danger', label: '标签四' },
          { type: 'warning', label: '标签五' }
        ]
      }
    },
  }
</script>

<style lang="scss" scoped>
  .love{
    padding: 50px;
    .loveContent{
      padding: 14px;
      display: flex;
      border-bottom: 1px solid #ddd;
    }
    .contentItem{

    }
    .loveTag {
      padding: 10px;
    }
    .flexwrap{
      &:first-child{
        margin-top: 0;
      }
      margin: 20px 0;
      justify-content: space-around;
      flex-wrap: wrap;
      .flex1{
        flex: 0.3;
      }
    }
    .loveicon{
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background-color: red;
    }
  }

</style>

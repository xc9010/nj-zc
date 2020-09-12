<template>
<div class="love">
  <el-card class="box-card">
    <div slot="header" class="box-title">
      <span>红娘牵线</span>
    </div>
    <div>

      <div class="flex flexwrap">
        <div v-for="item in 5" class="flex1">
          <el-card style="width: 220px" shadow="always" :body-style="{ padding: '0px' }">
            <el-carousel  height="250px">
              <el-carousel-item v-for="item in 3" :key="item">
                <img src="@/assets/images/loveMan.jpg" style="width: 100%">
              </el-carousel-item>
            </el-carousel>
            <div class="flex loveContent">
              <div class="f1">
                <div>张三</div>
                <div>炼钢一厂</div>
              </div>
              <div class="contentItem">
                <div class="loveicon">
                  <img src="@/assets/images/loveicon.png" style="width: 100%">
                </div>
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
  </el-card>

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
      flex-wrap: wrap;
      .flex1{
        flex: 0.3;
        margin: 0 0 20px 0;
        /*margin: 0 auto;*/
      }
    }
    .loveicon{
      width: 20px;
      height: 20px;
    }
  }

</style>

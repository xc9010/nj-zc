<template>
<div class="love">
  <el-card class="box-card">
    <div slot="header" class="box-title">
      <span>普惠服务</span>
    </div>
    <div>
      AllService
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

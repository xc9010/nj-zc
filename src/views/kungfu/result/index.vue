<template>

  <div class="mainBox">
    <el-card class="box-card">
      <div slot="header" class="box-title">
        <span>闯关结果</span>
      </div>
      <div class="mainContent" style="margin: 0">
        <el-row :gutter="20">
          <el-col :span="12">
            <div>
              <img src="../../../assets/images/success.png" alt="" width="100%" height="100%">
            </div>
          </el-col>
          <el-col :span="12">
            <el-form label-position="left" label-width="80px">
              <el-form-item label="题库名称">
                11231231
              </el-form-item>
              <el-form-item label="级别">
                1232131
              </el-form-item>
              <el-form-item label="账户">
                123123123
              </el-form-item>
              <el-form-item label="时间">
                {{date}}
              </el-form-item>
            </el-form>
          </el-col>
        </el-row>
      </div>
    </el-card>

  </div>

</template>

<script>

  export default {
    props: {
      info: {
        type: Array
      }
    },
    data() {
      return {
        checked: '',
        levelList: null,
        date: new Date((Date.now() + 8*3600*1000)).toJSON().substr(0, 16).replace('T', ' ')
      }
    },
    methods: {
      start(item) {
        this.$router.push({
          name: '开始闯关',
          params: {
            id: item
          }
        })
      },
      checkExam(i) {
        this.checked = i;
      }
    }
  }
</script>

<style lang="scss" scoped>
  .cardPicVertical{
    .cardPicWrap{
      display: flex;
      flex-wrap: wrap;
    }
    .con li{
      cursor: pointer;
      width: 76px;
      height: 110px;
      text-align: center;
      font-size: 14px;
      white-space: nowrap;
      border: 1px solid #fff;
      border-radius: 16px;
      transition: all .3s;
      list-style: none;
      .round{
        position: relative;
        width: 60px;
        height: 60px;
        background: #ff5c7c;
        border-radius: 36px;
        line-height: 36px;
        text-align: center;
        margin: 0 auto 8px;
      }
    }
    .active{
      border: 1px solid #eee!important;
    }
    .image{
      width: 100%;
      height: 174px;
      border-radius: 50%;
    }
  }

</style>

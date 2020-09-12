<template>
<div class="email">
  <div>
    <el-card class="box-card">
      <div slot="header" class="email-title">
        <span>主席信箱</span>
      </div>
      <div class="text item">
        <el-form ref="form" :model="form" label-width="180px" size="medium">
          <el-form-item label="主题" required>
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="姓名" required>
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="所属单位">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="工号" required>
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="内容" required>
            <el-input type="textarea" v-model="form.desc" maxlength="1000" rows="10"></el-input>
          </el-form-item>
        </el-form>
        <div style="text-align: center">
          <el-button type="primary">提交</el-button>
          <el-button>重置</el-button>
        </div>
      </div>
    </el-card>

  </div>
</div>
</template>

<script>

  export default {
    data() {
      return {
        levelList: null,
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
      }
    },
  }
</script>

<style lang="scss" scoped>
  .email{
    padding: 10px;
    .email-title{
      text-align: center;
      font-size: 22px;
      font-weight: bold;
    }
  }

</style>

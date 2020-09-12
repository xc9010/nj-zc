<template>
<div class="member">
  <div>
    <el-card class="box-card">
      <div slot="header" class="member-title">
        <span>会员入会登记</span>
      </div>
      <div class="text item">
        <el-form
          ref="form"
          :model="form"
          label-width="180px"
          size="medium"
          inline
        >
          <el-form-item label="姓名">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="性别">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="名族">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="出生年月">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="年龄">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="婚姻状况">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="学历">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="学位">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="政治面貌">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="身份证号码">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="联系电话">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="紧急联系方式">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="待入工会">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="申请入会时间">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="是否农民工">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="是否一线职工">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="工作单位">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="职务">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="户口所在地">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="现居住地">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="个人工作简历">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="简历附件">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="内容">
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
  .member{
    padding: 10px;
    .member-title{
      text-align: center;
      font-size: 22px;
      font-weight: bold;
    }
  }

</style>

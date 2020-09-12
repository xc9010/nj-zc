<template>
<div class="member">
  <div>
    <el-card class="box-card">
      <div slot="header" class="box-title">
        <span>职工生日会登记</span>
      </div>
      <div class="text item zcForm">
        <el-form
          ref="form"
          :model="form"
          label-width="180px"
          size="medium"
        >
          <el-form-item label="姓名">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="性别">
            <el-select v-model="value" placeholder="请选择">
              <el-option
                v-for="item in males"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="出生年月">
            <el-date-picker
              type="date"
              placeholder="选择日期">
            </el-date-picker>
          </el-form-item>
          <el-form-item label="联系电话">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="工作单位">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="生日会组织人">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item class="formLong" label="生日会场地及形式">
            <el-input type="textarea" v-model="form.desc" maxlength="1000" rows="10"
                      placeholder="1、场地：
2、形式：
3、食品：
4、活动：">

            </el-input>
          </el-form-item>
          <el-form-item class="formLong" label="备注">
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
        fileName: '',
        value: '',
        males: [{
          value: '0',
          label: '男'
        }, {
          value: '1',
          label: '女'
        }],
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
    methods: {
      uploadSuccess(response, file, fileList) {
        this.fileName = response.fileName
      }
    }
  }
</script>

<style lang="scss" scoped>
  .member{
    .member-title{
      text-align: center;
      font-size: 22px;
      font-weight: bold;
    }
  }

</style>

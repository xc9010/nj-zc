<template>
<div class="member">
  <div>
    <el-card class="box-card">
      <div slot="header" class="box-title">
        <span>会员入会登记</span>
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
          <el-form-item label="民族">
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
            <el-date-picker
              type="date"
              placeholder="选择日期">
            </el-date-picker>
          </el-form-item>
          <el-form-item label="申请入会时间">
            <el-date-picker
              type="date"
              placeholder="选择日期">
            </el-date-picker>
          </el-form-item>
          <el-form-item label="是否农民工">
            <el-select v-model="value" placeholder="请选择">
              <el-option
                v-for="item in males"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="是否一线职工">
            <el-select v-model="value" placeholder="请选择">
              <el-option
                v-for="item in males"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="工作单位">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="职务">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item class="formLong" label="户口所在地">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item class="formLong" label="现居住地">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item class="formLong" label="个人工作简历">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item class="formLong" label="简历附件">
            <el-upload
              class="upload-demo"
              action="https://jsonplaceholder.typicode.com/posts/"
              :on-success="this.uploadSuccess"
            >
              {{fileName}}
              <el-button type="primary">浏览</el-button>
            </el-upload>
          </el-form-item>
          <el-form-item class="formLong" label="家庭主要成员及其联系方式">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item class="formLong" label="有何特长">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item class="formLong" label="工会基层委员会意见">
            <el-input v-model="form.name"></el-input>
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

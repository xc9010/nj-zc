<template>
<div class="member">
  <div>
    <el-card class="box-card">
      <div slot="header" class="box-title">
        <span>困难帮扶登记</span>
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
          <el-form-item label="政治面貌">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="婚姻状况">
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
          <el-form-item label="个人年收入(万元)">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="开户行（建行）">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="建行卡号">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="是否单亲家庭">
            <el-select v-model="value" placeholder="请选择">
              <el-option
                v-for="item in yesNo"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="本人是否独生子女">
            <el-select v-model="value" placeholder="请选择">
              <el-option
                v-for="item in yesNo"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="是否工伤">
            <el-select v-model="value" placeholder="请选择">
              <el-option
                v-for="item in yesNo"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="是否劳模">
            <el-select v-model="value" placeholder="请选择">
              <el-option
                v-for="item in yesNo"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item class="formLong" label="户口所在地">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item class="formLong" label="现居住地">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item class="formLong" label="困难原因	">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item class="formLong" label="附件证明(一)：个人申请">
            <el-upload
              class="upload-demo"
              action="https://jsonplaceholder.typicode.com/posts/"
              :on-success="this.uploadSuccess"
            >
              {{fileName}}
              <el-button type="primary">浏览</el-button>
            </el-upload>
          </el-form-item>
          <el-form-item class="formLong" label="附件证明(二)：诊断证明">
            <el-upload
              class="upload-demo"
              action="https://jsonplaceholder.typicode.com/posts/"
              :on-success="this.uploadSuccess"
            >
              {{fileName}}
              <el-button type="primary">浏览</el-button>
            </el-upload>
          </el-form-item>
          <el-form-item class="formLong" label="附件证明(三)：县级以上医院正规票据或定点医保药店的正规发票">
            <el-upload
              class="upload-demo"
              action="https://jsonplaceholder.typicode.com/posts/"
              :on-success="this.uploadSuccess"
            >
              {{fileName}}
              <el-button type="primary">浏览</el-button>
            </el-upload>
          </el-form-item>
          <el-form-item class="formLong" label="附件证明(四)：个人年度收入证明">
            <el-upload
              class="upload-demo"
              action="https://jsonplaceholder.typicode.com/posts/"
              :on-success="this.uploadSuccess"
            >
              {{fileName}}
              <el-button type="primary">浏览</el-button>
            </el-upload>
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
        yesNo: [{
          value: '0',
          label: '否'
        }, {
          value: '1',
          label: '是'
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

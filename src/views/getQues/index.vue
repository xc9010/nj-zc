<template>
  <div class="mainBox">
    <div class="">
      <el-card class="box-card">
        <div slot="header" class="box-title">
          <el-button @click="changeTab(i)" :type="tabType === i.val ? 'primary' : ''" :key="i.val" v-for="i in tabs">{{i.title}}</el-button>
        </div>
        <div v-if="tabType === '0'">
          <div>
            <h3>题目内容：试题内容需要......</h3>
            <el-input
              type="textarea"
              :rows="2"
              placeholder="请输入内容"
              v-model="textarea">
            </el-input>
            <h3>所属题库：所属题库是当前题库的分类</h3>
            <el-select style="width: 500px" v-model="value" placeholder="请选择">
              <el-option
                v-for="item in 8"
                :key="item"
                :label="item"
                :value="item">
              </el-option>
            </el-select>
            <div class="flex">
              <el-form style="flex: 0.8; margin-top: 20px; margin-right: 20px" label-position="right" label-width="150px">
                <el-form-item label="A、">
                  <el-input ></el-input>
                </el-form-item>
                <el-form-item label="B、">
                  <el-input ></el-input>
                </el-form-item>
                <el-form-item label="C、">
                  <el-input ></el-input>
                </el-form-item>
                <el-form-item label="D、">
                  <el-input ></el-input>
                </el-form-item>
              </el-form>
              <el-radio-group class="flexVertical" v-model="radio">
                <el-radio :label="3">设为正确答案</el-radio>
                <el-radio :label="6">设为正确答案</el-radio>
                <el-radio :label="9">设为正确答案</el-radio>
                <el-radio :label="9">设为正确答案</el-radio>
              </el-radio-group>
            </div>
            <div style="text-align: center">
              <el-button type="primary">提交</el-button>
              <el-button>重置</el-button>
            </div>
          </div>
        </div>
        <div v-if="tabType === '1'">
          <div>
            <h3>题目内容：试题内容需要......</h3>
            <el-input
              type="textarea"
              :rows="2"
              placeholder="请输入内容"
              v-model="textarea">
            </el-input>
            <h3>所属题库：所属题库是当前题库的分类</h3>
            <el-select style="width: 500px" v-model="value" placeholder="请选择">
              <el-option
                v-for="item in 8"
                :key="item"
                :label="item"
                :value="item">
              </el-option>
            </el-select>
            <div class="flex">
              <el-form style="flex: 0.8; margin-top: 20px; margin-right: 20px" label-position="right" label-width="150px">
                <el-form-item label="A、">
                  <el-input ></el-input>
                </el-form-item>
                <el-form-item label="B、">
                  <el-input ></el-input>
                </el-form-item>
                <el-form-item label="C、">
                  <el-input ></el-input>
                </el-form-item>
                <el-form-item label="D、">
                  <el-input ></el-input>
                </el-form-item>
              </el-form>
              <el-checkbox-group class="flexVertical" v-model="checklist">
                <el-checkbox :label="设为正确答案">设为正确答案</el-checkbox>
                <el-checkbox :label="设为正确答案">设为正确答案</el-checkbox>
                <el-checkbox :label="设为正确答案">设为正确答案</el-checkbox>
                <el-checkbox :label="设为正确答案">设为正确答案</el-checkbox>
              </el-checkbox-group>
            </div>
            <div style="text-align: center">
              <el-button type="primary">提交</el-button>
              <el-button>重置</el-button>
            </div>
          </div>
        </div>
        <div v-if="tabType === '2'">
          <div>
            <h3>题目内容：试题内容需要......</h3>
            <el-input
              type="textarea"
              :rows="2"
              placeholder="请输入内容"
              v-model="textarea">
            </el-input>
            <h3>所属题库：所属题库是当前题库的分类</h3>
            <el-select style="width: 500px" v-model="value" placeholder="请选择">
              <el-option
                v-for="item in 8"
                :key="item"
                :label="item"
                :value="item">
              </el-option>
            </el-select>
            <div class="flex" style="margin: 10px 0">
              <el-radio-group v-model="radio">
                <el-radio :label="1">正确</el-radio>
                <el-radio :label="0">错误</el-radio>
              </el-radio-group>
            </div>
            <div style="text-align: center">
              <el-button type="primary">提交</el-button>
              <el-button>重置</el-button>
            </div>
          </div>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'Live',
    data() {
      return {
        tabType: '0',
        checklist: [],
        tabs: [
          { val: '0', title: '单选题' },
          { val: '1', title: '多选题' },
          { val: '2', title: '判断题' }
        ]
      }
    },
    computed: {
      ...mapGetters([
        'name'
      ])
    },
    methods: {
      changeTab(i) {
        console.log(i)
        this.tabType = i.val
      }
    }
  }
</script>

<style lang="scss" scoped>
  .flexVertical{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
</style>

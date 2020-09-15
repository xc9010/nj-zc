<template>
  <div class="mainBox">
    <div class="" style="margin: 0">
      <el-col :span="24">
        <el-card style="margin-bottom: 10px">
          <i class="el-icon-reading"></i>
          {{ selectedIndex + 1 }} / {{list.length}}
          <!-- 距离考试结束还有：<span style="color: #ff0000;">{{ min }}分钟{{ sec }}秒</span> -->
          <el-button style="float: right; margin-top: -10px" type="primary" icon="el-icon-switch-button" :loading="loading" @click="clickTab()">
            {{ handleText }}
          </el-button>
        </el-card>
      </el-col>

      <el-col :span="24" :xs="24">

        <el-card class="qu-content">
          <p>{{ selectedIndex + 1 }}.【{{quData.quTypeName}}】{{quData.content}}</p>
          <!-- <p v-if="quData.content">{{ quData.sort + 1 }}.{{ quData.content }}</p> -->
          <p v-if="quData.image"><img :src="quData.image"></p>
          <div v-if="quData.quType === 1 || quData.quType === 3">
            <el-radio-group v-model="quData.rightAnswer">
              <el-radio v-for="(item, index) in quData.answerDTOS" :key="index" :label="index">
                {{ getAnswerName(index) }}.{{ item.content }}
                <div v-if="item.image" style="clear: both"><img :src="item.image"></div>
              </el-radio>
            </el-radio-group>
          </div>

          <div v-if="quData.quType === 2">

            <el-checkbox-group v-model="quData.rightAnswer">
              <el-checkbox v-for="(item, index) in quData.answerDTOS" :key="index" :label="item.id">
                {{ getAnswerName(index) }}.{{ item.content }}
                <div v-if="item.image" style="clear: both"><img :src="item.image"></div>
              </el-checkbox>
            </el-checkbox-group>

          </div>

          <div v-if="quData.quType === 4">
            <el-input v-model="saqValue" type="textarea" :rows="10" />
          </div>

        </el-card>

        <div style="margin: 20px 0">
          <el-button v-if="selectedIndex > 0" type="primary" icon="el-icon-back" @click="handPrevious()">
            上一关
          </el-button>

          <el-button v-if="showNext" type="warning" icon="el-icon-right" @click="handNext()">
            下一关
          </el-button>
        </div>

      </el-col>

    </div>
  </div>

</template>

<script>

export default {
  // props: {
  //   info: {
  //     type: Array
  //   }
  // },
  data() {
    return {
      repo: {}, // 题库信息
      level: 1, // 闯关等级
      list: [], // 题库
      selectedIndex: 0, // 题目索引
      // 全屏/不全屏
      // isFullscreen: false,
      // camVisible: true,
      // showPrevious: true,
      showNext: true,
      loading: false,
      handleText: '退出闯关',
      pageLoading: false,
      // // 试卷ID
      // paperId: '',
      // // 当前答题卡
      // cardItem: {},
      // allItem: [],
      // 当前题目内容
      quData: {
        answerList: []
      },

      // // 试卷信息
      // paperData: {
      //   leftSeconds: 99999,
      //   radioList: [],
      //   multiList: [],
      //   judgeList: [],
      //   saqList: []
      // },
      // // 单选选定值
      // radioValue: '',
      // // 简答题值
      // saqValue: '',
      // 多选选定值
      // multiValue: [],
      // // 已答ID
      // answeredIds: [],
      min: '00',
      sec: '00'
    }
  },
  created() {
    this.repo = this.$route.params.repo
    this.level = this.$route.params.level
    this.list = this.$route.params.bank
    if (!this.list) {
      this.$router.push('/kungfu/list')
    }
    // question
    this.quData = this.list[this.selectedIndex]
    if (this.quData.quType === 2 && !this.quData.rightAnswer) {
      this.quData.rightAnswer = []
    }

    console.log('找到数据', this.list, this.quData)

    // 倒计时
    this.countdown()
  },
  methods: {
    start(item) {
      this.$router.push({
        name: '开始闯关',
        params: {
          article: item
        }
      })
    },
    // 倒计时
    countdown() {
      const leftSeconds = this.leftSeconds

      // // 强制交卷
      // if (leftSeconds < 0) {
      //   this.doHandler()
      //   return
      // }

      // 时
      const min = parseInt(leftSeconds / 60 % 60)
      const sec = parseInt(leftSeconds % 60)

      this.min = min > 9 ? min : '0' + min
      this.sec = sec > 9 ? sec : '0' + sec
      const that = this
      this.leftSeconds -= 1
      setTimeout(function() {
        that.countdown()
      }, 1000)
    },
    getAnswerName(index) {
      let str = ''
      switch (index) {
        case 0:
          str = 'A'
          break
        case 1:
          str = 'B'
          break
        case 2:
          str = 'C'
          break
        case 3:
          str = 'D'
          break
        case 4:
          str = 'E'
          break
        case 5:
          str = 'F'
          break
        case 6:
          str = 'G'
          break
        case 7:
          str = 'H'
          break
      }
      return str
    },
    /**
     * 下一题
     */
    handNext() {
      console.log(this.quData, this.multiValue)
      if (this.selectedIndex < this.list.length - 1) {
        this.selectedIndex++
        this.quData = this.list[this.selectedIndex]
        if (this.quData.quType === 2 && !this.quData.rightAnswer) {
          this.quData.rightAnswer = []
        }
      }
    },

    /**
     * 上一题
     */
    handPrevious() {
      if (this.selectedIndex > 0) {
        this.selectedIndex--
        this.quData = this.list[this.selectedIndex]
      }
    },

    clickTab() {
      console.log(this.quData.rightAnswer, this.multiValue)
      this.list.forEach(question => {
        if (question.quType === 1 || question.quType === 3) { // 单选及判断
          const rightAnswer = question.answerDTOS.find(m => m.isRight)
          question.isRight = !!rightAnswer.active
          // console.log(question.content, rightAnswer, question.isRight)
        } else if (question.quType === 2) { // 多选
          for (let i = 0; i < question.answerDTOS.length; i++) {
            const answer = question.answerDTOS[i]
            if (answer.isRight !== !!answer.active) {
              question.isRight = false
              return
            }
          }
          question.isRight = true
        }
      })
      console.log(this.list)
      // this.record()
      // this.$router.push({ name: '考试结果', params: { id: this.paperId }})
    }
  }
}
</script>

<style scoped>

  .web-cam{
    position: absolute;
    right: 5px;
    bottom: 10px;
  }

  .qu-content{

  }

  .qu-content div{
    line-height: 30px;
  }

  .el-checkbox-group label,.el-radio-group label{
    width: 100%;
  }

  .card-title{
    background: #eee;
    line-height: 35px;
    text-align: center;
    font-size: 14px;
  }
  .card-line{
    padding-left: 10px
  }
  .card-line span {
    cursor: pointer;
    margin: 2px;
  }

  /deep/
  .el-radio, .el-checkbox{
    padding: 9px 20px 9px 10px;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    margin-bottom: 10px;
  }

  .is-checked{
    border: #409eff 1px solid;
  }

  .el-radio img, .el-checkbox img{
    max-width: 200px;
    max-height: 200px;
    border: #dcdfe6 1px dotted;
  }

  /deep/
  .el-checkbox__inner {
    display: none;
  }

  /deep/
  .el-radio__inner{
    display: none;
  }

  /deep/
  .el-checkbox__label{
    line-height: 30px;
  }

  /deep/
  .el-radio__label{
    line-height: 30px;
  }

</style>

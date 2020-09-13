<template>
  <div class="mainBox">
      <div class="mainContent" style="height: 500px;">
        <Table
          ref="pagingTable"
          :options="options"
          :list-query="listQuery"
        >
          <template slot="filter-content">

            <el-input v-model="listQuery.params.title" placeholder="搜索考试名称" style="width: 200px;" class="filter-item" />

          </template>

          <template slot="data-columns">

            <el-table-column
              label="考试名称"
              prop="title"
              show-overflow-tooltip
            />

            <el-table-column
              label="考试类型"
              align="center"
              width="150px"
            >
              <template slot-scope="scope">
                <span v-if="scope.row.open">公开考试</span>
                <span v-else>内部考试</span>
              </template>

            </el-table-column>

            <el-table-column
              label="考试描述"
              prop="content"
              show-overflow-tooltip
            />

            <el-table-column
              label="创建时间"
              prop="createTime"
              align="center"
              width="180px"
            />

            <el-table-column
              label="操作"
              align="center"
              width="150px"
            >
              <template slot-scope="scope">
                <el-button type="warning" round size="small" @click="handlePre(scope.row.id)">开始考试</el-button>
              </template>

            </el-table-column>

          </template>

        </Table>
      </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import Table from '../../../components/Table'

  export default {
    name: 'ListExam',
    components: { Table },
    computed: {
      ...mapGetters([
        'name'
      ])
    },

    data() {
      return {

        listQuery: {
          current: 1,
          size: 10,
          params: {
            name: ''
          }
        },

        options: {
          // 可批量操作
          multi: false,
          // 列表请求URL
          listUrl: '/exam/exam/paging'
        },

        apiJson: {
          "code":0,
          "data":{
            "current":1,
            "hitCount":false,
            "optimizeCountSql":true,
            "orders":[],
            "pages":1,
            "records":[
              {
                "content":"简单的智力测试，考试结果随员工档案存储！",
                "createTime":"2020-07-26 08:50:50",
                "endTime":"2020-07-26 08:50:50",
                "examUser":2,
                "id":"1287188594607308801",
                "objScore":100,
                "open":false,
                "password":"AK1981",
                "qualifyScore":90,
                "ruleId":"1265561656944033793",
                "startTime":"2020-07-26 08:50:50",
                "state":1,
                "subjScore":0,
                "timeLimit":false,
                "title":"新人入职智力测试题",
                "totalScore":100,
                "totalTime":120,
                "unreadPaper":0,
                "updateTime":"2020-07-26 08:50:50"
              },
              {
                "content":"111",
                "createTime":"2020-09-08 17:11:22",
                "endTime":"2020-09-08 17:11:22",
                "examUser":0,
                "id":"1303259623100317697",
                "objScore":100,
                "open":true,
                "password":"",
                "qualifyScore":90,
                "ruleId":"1265561656944033793",
                "startTime":"2020-09-08 17:11:22",
                "state":1,
                "subjScore":0,
                "timeLimit":false,
                "title":"11",
                "totalScore":100,
                "totalTime":120,
                "unreadPaper":0,
                "updateTime":"2020-09-08 17:11:22"
              }
            ],
            "searchCount":true,
            "size":10,
            "total":2
          },
          "msg":"操作成功！",
          "success":true
        }
      }
    },
    methods: {

      // 开始考试
      handlePre(examId) {
        this.$router.push({ name: '准备考试', params: { examId: examId }})
      }
    }
  }
</script>

<style lang="scss" scoped>
</style>

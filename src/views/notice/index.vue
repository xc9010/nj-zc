<template>
  <div class="mainBox">
    <div class="mainContent">
      <el-tabs :tab-position="position">
        <el-tab-pane label="工会要闻">
          <div class="mainList">
            <el-collapse v-model="active">
              <el-collapse-item name="1" v-for="(item, index) in list" :key="index">
                <template slot="title">
                  <el-link @click="goto('/details/12')" target="_blank">{{item.title}}</el-link>
                </template>
                <Card :info="item.info" :date="item.date" :author="item.author"></Card>
              </el-collapse-item>
            </el-collapse>
          </div>
          <div style="text-align: center;  padding: 10px">
            <el-pagination
              background
              layout="prev, pager, next"
              :total="1000">
            </el-pagination>
          </div>
        </el-tab-pane>
        <el-tab-pane label="政策解读">政策解读</el-tab-pane>
        <el-tab-pane label="主席信箱">主席信箱</el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import Card from '../../components/Card'

  export default {
    name: 'Notice',
    components: { Card },
    data() {
      return {
        position: 'left',
        active: ['1','2','3','4'],
        list: [
          {
            title: '艺术家园“艺之乒”周年庆在南钢举办',
            author: '陈虹',
            date: '2019-09-02',
            info: '9月1日，南京艺术家园“艺之乒”成立一周年庆活动在南钢举办，南钢工会主席张六喜等接待了艺术家们的到来。此次参加活动的有《江苏工人....'
          },
          {
            title: '六一前夕看望生病职工子女',
            author: '佚名',
            date: '2019-06-03',
            info: '在第70个“六一”国际儿童节到来之际，公司党委副书记、工会主席张六喜，公司工会女职工委员会主任陈杰一行，带着水果、牛奶等.....'
          },
          {
            title: '田浩被授予“南京市十佳文明职工”称号',
            author: '方雷',
            date: '2019-05-27',
            info: '南钢研究院职工田浩被授予“南京市十佳文明职工”称号，并荣获“五一”劳动奖章。近日，南京市十佳文明职工代表-南钢研究院.........'
          },
          {
            title: '公司工会召开庆“五一”劳模、先进座谈会',
            author: '高安俊',
            date: '2019-05-05',
            info: '4月30日上午，公司工会在公司新大楼202会议室召开庆“五一”劳模、先进座谈会。来自公司各事业部、直属单位的市级以上退休、在......'
          }
        ]
      }
    },
    computed: {
      ...mapGetters([
        'name'
      ])
    },
    methods: {
      goto(url) {
        console.log(url)
        this.$router.push(url || './')
      }
    }
  }
</script>

<style lang="scss" scoped>
</style>

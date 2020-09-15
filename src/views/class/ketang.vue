  <template>
  <div class="mainBox">
    <div class="container">
      <div class="ketang-list">
        <ketang v-for="(item, index) in lecture" :key="index" :data="item">
        </ketang>
      </div>
      <rank :data="lecture"></rank>
    </div>
    <div style="text-align: center;  padding: 10px">
      <el-pagination
        background
        layout="prev, pager, next"
        :total="1000">
      </el-pagination>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import ketang from '../../components/news/ketang'
  import rank from '../../components/news/rank'


  export default {
    name: 'Live',
    components: { ketang, rank },
    data() {
      return {
        active: ['1', '2', '3', '4'],
        tabType: '0',
        lecture: [
          {
            title: '线切割软件caxa精讲系列课之一',
            imgs: 'http://10.idqqimg.com/qqcourse_logo_ng/ajNVdqHZLLBKt3HSH4c4SeY4URiciaMfnwmaiahtBNbqDAQgyzIRtw1GbZKsfCwCn8mezh95711nco/356',
            author: '兴达教育',
            date: '2020-08-20',
            content: ''
          },
          {
            title: '德国职业教育法系列公益讲座',
            imgs: 'http://10.idqqimg.com/qqcourse_logo_ng/ajNVdqHZLLAD6MZdGeYr8gsI0ibIl2FKiagGvGnTNhiaFtJSXnPjxvhhNtcmhLHgjtHYfBanjJPzN0/356',
            author: '北京全道智源教育科技院',
            date: '2020-08-20',
            content: ''
          },
          {
            title: '工程造价工具软件实战课程',
            imgs: 'https://10.url.cn/qqcourse_logo_ng/ajNVdqHZLLDBXZtDROFa3C5cWyeDe6BiaNDRaicpqnVWxsWaOPhYw0X0eTlWWoE89ovnwHurXn0CE/356',
            author: '深圳市斯维尔科技股份有限公司',
            date: '2020-08-20',
            content: ''
          },
          {
            title: '常见传感器原理与测量方法',
            imgs: 'http://10.idqqimg.com/qqcourse_logo_ng/ajNVdqHZLLDdH7IWvK3RoGGUGARvKEENF4eXlrciag6gd6KaQCib1Ah3ZbhBibt0rw6A62gUOKkp8Q/356',
            author: '节大力汽修学院',
            date: '2020-08-20',
            content: ''
          },
          {
            title: '汽车车身电路检修',
            imgs: 'http://10.idqqimg.com/qqcourse_logo_ng/ajNVdqHZLLBppNic6bENmibyI4eevbIxUIor0r46q7jweKs0Y5LOvaoy7fad2gDWlSq0T1dmznsjg/356',
            author: '大力汽修学院',
            date: '2020-08-20',
            content: ''
          },
          {
            title: '自动化工控PLC入门介绍职业规划与展望',
            imgs: 'http://10.idqqimg.com/qqcourse_logo_ng/ajNVdqHZLLCJXU983tdDhNXM3RW9u1BL1dDCFeibveYBmIUrJw1QP44jZod2fdfxx1OlnWyc0oYY/356',
            author: '陈老师',
            date: '2020-08-20',
            content: ''
          },
          {
            title: '船公司指定人员和公司保安员培训',
            imgs: 'http://10.idqqimg.com/qqcourse_logo_ng/ajNVdqHZLLCLNCicDJQLtuuBwF7SZ2vl3iaqa6B3CibCDCl35ChIdcYRhzGlsWCahBkMiaO9IAmouaM/356',
            author: '中国船级社',
            date: '2020-08-20',
            content: ''
          },
          {
            title: '臻艺汇宝珠宝鉴定培训FGA/GIC',
            imgs: 'http://10.idqqimg.com/qqcourse_logo_ng/ajNVdqHZLLBCCyEOb0ImibqIuXIIldlHGrnkHtaRgYwSEj3XI9JvcibmhbHY4XemblG6lBiaKqE7P0/356',
            author: '臻艺汇宝珠宝教育',
            date: '2020-08-20',
            content: ''
          }
        ]
      }
    },
    mounted() {
      let index = this.$router.currentRoute.params && this.$router.currentRoute.params.index
      this.tabType = index || '0'
    },
    computed: {
      ...mapGetters([
        'name'
      ])
    },
    methods: {
      handleClick(item) {
        this.$router.push({
          name: '详情',
          params: {
            article: item
          }
        })
      },
      handleTabClick(targetName) {
        // console.log(targetName.index)
        const index = targetName.index;
        // console.log(this.$router)
        if(index) this.$router.replace({path: `/create/${index}`} || './')
      },
      goto(url) {
        console.log(url)
        this.$router.push(url || './')
      }
    }
  }
</script>

<style lang="scss" scoped>
.container {
  width: 1200px;
  display: flex;
  justify-content: space-around;
  padding-top: 50px;
}
.ketang-list {
  padding-top: 25px;
  width: 1200px;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  background: #ffffff;

  .ketang-wrapper {
    margin-right: 40px;
    margin-bottom: 90px;
    &:nth-child(3n) {
      margin-right: 0;
    }
  }
}

</style>

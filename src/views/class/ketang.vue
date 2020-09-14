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
            title: '数控车床编程培训',
            imgs: 'https://img.qeo.cn/s201738205058560811A00210135.jpg',
            author: '南钢教育培训',
            date: '2020-08-20',
            content: ''
          },
          {
            title: '电工培训,焊工培训',
            imgs: 'https://img.qeo.cn/s2017120157169256795A00131067.jpg',
            author: '上德教育培训',
            date: '2020-08-20',
            content: ''
          },
          {
            title: '登高证，高压电工证',
            imgs: 'https://img.qeo.cn/s10089905A00227365.png',
            author: '上海则成安全技术有限公司',
            date: '2020-08-20',
            content: ''
          },
          {
            title: '叉车考叉车驾驶培训',
            imgs: 'https://img.qeo.cn/s2018326108557715199A00242476.jpg',
            author: '南钢教育培训',
            date: '2020-08-20',
            content: ''
          },
          {
            title: '塔吊司机培训',
            imgs: 'https://img.qeo.cn/s201632517438360005A00159671.jpg',
            author: '南钢教育培训',
            date: '2020-08-20',
            content: ''
          },
          {
            title: '起重机司',
            imgs: 'https://img.qeo.cn/s2016811728599373524A00098557.jpg',
            author: '上德教育培训',
            date: '2020-08-20',
            content: ''
          },
          {
            title: '安监局的电工证和国家电网的电工考试',
            imgs: 'https://img.qeo.cn/s201314103732986A00241422.png',
            author: '上海则成安全技术有限公司',
            date: '2020-08-20',
            content: ''
          },
          {
            title: '上海低压电工证电焊证登高作业架子工特种操作',
            imgs: 'https://img.qeo.cn/s10088005B00196975.jpg',
            author: '南钢教育培训',
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

<template>
  <div class="news-nav">
    <nav-left :items="navItems" @callback="callback"/>
    <div class="nav-content">
        <div @click="handleClick(item)" v-for="(item, index) in woman" :key="index">
          <card-concert-nav :data="item"/>
        </div>
        <div style="text-align: center;  padding: 10px">
        <el-pagination
          background
          layout="prev, pager, next"
          :total="1000">
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import Birthday from '../../components/Birthday'
  import Card from '../../components/Card'
  import Help from '../../components/Help'
  import Study from '../../components/Study'
  import navLeft from '../../components/news/navLeft'
  import cardConcertNav from '../../components/news/cardConcertNav'

  export default {
    name: 'Live',
    components: {Birthday, Card, Help, Study, navLeft, cardConcertNav },
    computed: {
      ...mapGetters([
        'name'
      ])
    },
    data() {
      return {
        position: 'left',
        tabType: '0',
        navItems: [
          {
            name: '工会在身边',
            code:'around',
            active: false
          },
          {
            name: '女工关怀',
            code:'woman',
            active: true
          },
          {
            name: '职工生日会',
            code:'birthday',
            active: false
          },
          {
            name: '困难帮扶',
            code:'help',
            active: false
          },
          {
            name: '助学贷款',
            code:'study',
            active: false
          }
        ],
        active: ['1','2','3','4'],
        woman:[
          {
            title: '公司三名女职工文字作品在全国和江苏省获奖-南京钢铁联合有限公司工会',
            imgs: 'http://nggh.nisco.cn/UploadFiles/ghgz/2020/8/202008181429353457.jpg',
            author: '女职委',
            date: '2020-08-18',
            info: '2020年三八期间，江苏省总工会女职工委员会在全省组织开展了新时代江苏女职工精神大讨论活动，引导全省女职工围绕“新时代江苏女职工精神品格”“她为什么冲锋在抗疫一线”“心目中最美的江苏女职工形象”“女职工与时代发展”等话题展开讨论，并用文字或视频方式书写下自己对女职工....',
            content:'<img alt="" src="http://nggh.nisco.cn/UploadFiles/ghgz/2020/8/202008181429353457.jpg"  style="width: 563px; height: 563px;" />' +
              '<p>&emsp;&emsp;2020年三八期间，江苏省总工会女职工委员会在全省组织开展了新时代江苏女职工精神大讨论活动，引导全省女职工围绕“新时代江苏女职工精神品格”“她为什么冲锋在抗疫一线”“心目中最美的江苏女职工形象”“女职工与时代发展”等话题展开讨论，并用文字或视频方式书写下自己对女职工精神的理解、记录下心目中最美的江苏女职工形象，活动历时两个多月。</p>' +
              '<p>&emsp;&emsp;公司工会女职工委员会在公司全体女职工中开展了征集活动，11个基层工会女职委共征集了49条文字作品，其中既有“顶起半边天”“今日花木兰”“铿锵玫瑰”等的传统描述，更有“奉献”“担当”“独立”“进取”等高频热词。新时代女性的精神面貌和价值追求发生了巨大变化。</p>' +
              '<p>&emsp;&emsp;经省总女职委认真评审，本次活动全省共有100件文字作品入围。南钢新产业投资集团卞云丽、特钢事业部大棒厂张绫的两篇作品荣获“入围奖”。另外，在2019年三八节期间公司工会女职工举办的“家风家训故事”征集活动中，特钢事业部高线厂新进厂大学生陈敏的作品《一步一脚印》，被市总选中推荐参加全国“书香三八”读书征文活动，荣获优秀奖。</p>' +
              '<p>&emsp;&emsp;（女职委）</p>'
          },
          {
            title: '微画安全，助力生产',
            imgs: 'http://nggh.nisco.cn/UploadFiles/ghgz/2020/6/202006301047478500.jpg',
            author: '女职委',
            date: '2020-06-30',
            info: '在围绕中心服务大局、推进企业高质量发展的进程中，女职工从未缺席；在推进南钢安全生产工作中，女职工同样有担当有作为。“生命至上、安全第一”。在全国第十九个“安全生产月”之际，公司工会女职工委员会开展了以“微....',
            content:'<img alt="" src="http://nggh.nisco.cn/UploadFiles/ghgz/2020/6/202006301047478500.jpg" style="width: 524px; height: 295px;" /> ' +
              '<p>&emsp;&emsp;在围绕中心服务大局、推进企业高质量发展的进程中，女职工从未缺席；在推进南钢安全生产工作中，女职工同样有担当有作为。“生命至上、安全第一”。在全国第十九个“安全生产月”之际，公司工会女职工委员会开展了以“微‘画’安全”为主题的女职工助力安全绘画作品征集活动。</p>' +
              '<p>&emsp;&emsp;公司各级女职工组织切实发挥女职工组织优势，立足女职工特有的细心、热心和责任心，以春风化雨、润物无声的方式，把参与安全生产的行动融入到每一项日常工作，渗透到每一个工作细节，时刻绷紧安全生产这根弦，不断扣牢企业、职工、家庭之间的安全纽带，从源头上防范和减少安全事故发生。打造有温度的安全“微”文化，通过开展“微‘画’安全”助力安全绘画作品征集活动，把安全生产的理念宣传到女职工和职工家庭，不断提升企业安全水平，展现女职工在推进安全生产中的巾帼风采。</p>' +
              '<p>&emsp;&emsp;通过积极组织动员，共征集绘画作品98幅，作者有公司在岗女职工，也有职工子女，年龄最小的4岁，最大的48岁。绘画作品品类丰富，有国画、水粉、素描，也有漫画、电子画，内容紧扣安全主题，充分体现安全生产理念，展示了女职工和职工子女的绘画天赋。经过公司文联书画协会专家的认真评选，共评选出优秀作品20幅，在办公楼门厅集中展示，获得一致好评。</p> ' +
              '<p>&emsp;&emsp;（女工委）</p>'
          },
          {
            title: '公司工会女工委六一前夕看望生病职工子女',
            imgs: 'http://nggh.nisco.cn/UploadFiles/ghgz/2020/6/202006031005183866.jpg',
            author: '高捷',
            date: '2020-06-03',
            info: '在第71个“六一”国际儿童节到来之际，公司工会女职工委员会委员们带着水果和慰问金，分别前往凤滨嘉园、鑫庭雅苑、杨庄南村、新华七村等职工家中，看望生急病、重病的职....',
            content:'<img alt="" src="http://nggh.nisco.cn/UploadFiles/ghgz/2020/6/202006031005183866.jpg" style="width: 563px; height: 563px;" />' +
              '<img alt="" src="http://nggh.nisco.cn/UploadFiles/ghgz/2020/6/202006031005327939.jpg" style="width: 563px; height: 563px;" />' +
              '<p>&emsp;&emsp;在第71个“六一”国际儿童节到来之际，公司工会女职工委员会委员们带着水果和慰问金，分别前往凤滨嘉园、鑫庭雅苑、杨庄南村、新华七村等职工家中，看望生急病、重病的职工子女，为他们送去节日的祝福和特别的关爱。</p>' +
              '<p>&emsp;&emsp;每年“六一”儿童节前夕，公司工会女职工委员会都会对特困、单亲家庭大病儿童以及14周岁以下患重病、急病的职工子女进行梳理统计，今年梳理出长期患病或残疾的病儿9名，患急病经各级医保、公司医改办报销后自费金额达到5000元以上的病儿9名。公司工会女职工委员会分别对他们进行了补助，并选择了四个病儿家庭上门慰问。</p>' +
              '<p>&emsp;&emsp;女工委员们仔细询问了孩子的病情和治疗情况，鼓励职工们克服困难，坚定信心，对生病的孩子及时、尽最大努力给予治疗，让他们健康快乐成长，并祝小朋友们“六一”儿童节快乐！</p> ' +
              '<p>&emsp;&emsp;（高捷 文 杨小丽、田甜）</p>'
          },
          {
            title: '公司工会举办女工干部培训班-南京钢铁联合有限公司工会',
            imgs: 'http://nggh.nisco.cn/UploadFiles/ghgz/2019/12/201912090945207564.jpg',
            author: '张中芳 高捷',
            date: '2019-12-09',
            info: '12月6日，公司工会女职工委员会举办为期一天的女职工干部培训班，邀请南京中医药大学曾智教授、南京市人社局生育保险科王小戟科长分别做题为《职场心灵和谐与自我修炼》以及《生育保....',
            content:'<img alt="" src="http://nggh.nisco.cn/UploadFiles/ghgz/2019/12/201912090945207564.jpg" style="height: 307px; width: 492px" />' +
              '<p>&emsp;&emsp;12月6日，公司工会女职工委员会举办为期一天的女职工干部培训班，邀请南京中医药大学曾智教授、南京市人社局生育保险科王小戟科长分别做题为《职场心灵和谐与自我修炼》以及《生育保险相关政策解读》的专题讲解。公司各级工会女职工干部三十余人参加了培训。</p>' +
              '<p>&emsp;&emsp;公司工会副主席杨桥东做了开班动员。他希望参加培训的女工干部能将培训内容内化于心、外化于行；通过培训彼此之间分享工作经验，加强沟通联系；并介绍了明年公司工会的主要工作思路和重点工作。希望广大工会工作者紧紧围绕“服务企业，服务职工”的工作宗旨，努力做到“围绕中心转，跟着党政走，心中有职工”。</p>' +
              '<p>&emsp;&emsp;南京中医药大学卫生经济管理学院教授、博士，硕士研究生导师，国内知名管理科学培训专家曾智教授从保持心灵和谐是一种调适职场压力的境界和素质、职业发展中自我修炼的智慧、修炼自我，构建和谐的人际关系、加强团队建设，提升团队素养等四个方面阐述了“心灵和谐成为我们实践快乐人生的手段”这一主题。曾教授语言风趣生动，引经据典，从热门电视剧《甄嬛传》的人物分析入手，层层剖析，得出结论：面对现代社会的诸多压力，只有实现自我心灵革命，拥有和谐的心灵，才能享受美好人生。他为女工干部做了一次很好的心理疏导，参培女工干部们受益匪浅，意犹未尽。</p>' +
              '<p>&emsp;&emsp;南京市社保中心生育保险科科长王小戟从参保对象、缴费费率、享受生育保险待遇的条件、待遇标准、就医流程等几方面系统介绍了生育保险的相关政策法规，内容详实，政策性强，对女工干部的日常工作具有指导意义。</p>' +
              '<p>&emsp;&emsp;通过一天的学习培训，工会女职工干部的理论水平、专业技能和服务能力有了进一步提高。</p>' +
              '<p>&emsp;&emsp;文：张中芳 高捷 图：陈虹</p>'
          }
        ],
        listOption: [],
        code:'around'
      }
    },
    created(){
      this.listOption = this.around;
      this.$forceUpdate()
    },
    mounted() {
      let index = this.$router.currentRoute.params && this.$router.currentRoute.params.index
      this.tabType = index || '0'
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
      changeTab(targetName) {
        const index = targetName.index;
        if(index) this.$router.replace({path: `/service/${index}`} || './')
      },
      callback(item) {
        this.listOption = this[`${item.code}`];
        if(item.code === 'around'){
          this.$router.push('/service/around')
        }else if (item.code === 'woman'){
          this.$router.push('/service/woman')
        }else if (item.code === 'birthday'){
          this.$router.push('/service/birthday')
        }else if (item.code === 'help'){
          this.$router.push('/service/help')
        }else {
          this.$router.push('/service/study')
        }
      }
    }

  }
</script>

<style lang="scss" scoped>
  .news-nav {
    padding-top: 55px;
    width: 1200px;
    margin: auto;
    display: flex;
    background: #ffffff;
    .nav-content {
      margin-top: -25px;
    }
  }
</style>

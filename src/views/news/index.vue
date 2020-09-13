<template>
  <div class="mainBox">
    <div class="news-list">
      <news-card v-for="(item, index) in list" :key="index" :data="item">
      </news-card>
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
  import Card from '../../components/Card'
  import newsCard from '../../components/news/card'

  export default {
    components: { Card, newsCard },
    data() {
      return {
        levelList: null,
        active: ['1','2','3','4'],
        list: [
          {
            title: '艺术家园“艺之乒”周年庆在南钢举办',
            author: '陈虹',
            date: '2019-09-02',
            imgs:'http://nggh.nisco.cn/UploadFiles/ghgz/2020/9/202009020825161393.jpg',
            info: '9月1日，南京艺术家园“艺之乒”成立一周年庆活动在南钢举办，南钢工会主席张六喜等接待了艺术家们的到来。此次参加活动的有《江苏工人....',
            content:'<img alt="" src="http://nggh.nisco.cn/UploadFiles/ghgz/2020/9/202009020825161393.jpg" style="width: 439px; height: 332px;" />' +
              '<p>&emsp;&emsp;9月1日，南京艺术家园“艺之乒”成立一周年庆活动在南钢举办，南钢工会主席张六喜等接待了艺术家们的到来。此次参加活动的有《江苏工人报》著名漫画家禹天成、南京知名主持人方方等来自各界的艺术家们。</p>' +
              '<p>&emsp;&emsp;（陈虹）</p>'
          },
          {
            title: '六一前夕看望生病职工子女',
            author: '佚名',
            date: '2019-06-03',
            imgs:'http://nggh.nisco.cn/UploadFiles/ghgz/2019/6/201906031511373522.jpg',
            info: '在第70个“六一”国际儿童节到来之际，公司党委副书记、工会主席张六喜，公司工会女职工委员会主任陈杰一行，带着水果、牛奶等.....',
            content:'<img alt="" src="http://nggh.nisco.cn/UploadFiles/ghgz/2019/6/201906031511373522.jpg" style="height: 418px; width: 485px" />' +
              '<img alt="" src="http://nggh.nisco.cn/UploadFiles/ghgz/2019/6/201906031511529242.jpg" style="height: 362px; width: 487px" />' +
              '<p>&emsp;&emsp;在第70个&ldquo;六一&rdquo;国际儿童节到来之际，公司党委副书记、工会主席张六喜，公司工会女职工委员会主任陈杰一行，带着水果、牛奶等慰问品，分别前往南钢五村、湖滨村、六村等职工家中，看望生急病、重病的职工子女，为他们送去&ldquo;六一&rdquo;儿童节的关爱。</p>' +
              '<p>&emsp;&emsp;每年&ldquo;六一&rdquo;儿童节前夕，公司工会女职工委员会都会对特困、单亲家庭大病儿童以及14周岁以下患重病、急病的职工子女进行梳理统计，今年梳理出长期患病或残疾的病儿10名，患急病经各级医保、公司医改办报销后自费金额达到5000元以上的病儿9名。公司工会女职工委员会分别对他们进行了补助，并选择了三个困难家庭上门慰问。</p>' +
              '<p>&emsp;&emsp;公辅事业部铁运中心职工刘涛儿子刘嘉宝患重症肌无力、脑蛋白营养不良，公司工会女职委每年都会来看望他。十周岁的男孩子正是调皮玩耍的年纪，可他连舒服地坐着都是奢望，孩子的父母并没有放弃他，孩子可爱的神情和天真的话语惹得大家齐声笑了起来。张主席仔细询问了孩子的病情和治疗情况，鼓励他们要克服困难，坚定信心，尽最大努力照顾好孩子，让他们快乐成长。</p>' +
              '<p>&emsp;&emsp;板材事业部第一炼钢厂职工邓伟庆6岁的儿子邓兴成患儿童孤独症，长期康复治疗的负担很重。小兴成见到来看望他的张主席一行非常兴奋。张主席嘱咐孩子父亲及时给予治疗，不能耽误孩子健康快乐成长。</p>' +
              '<p>&emsp;&emsp;板材事业部中厚板卷厂石飞飞的双胞胎女儿先后患新生儿肺炎、急性坏死性小肠结肠炎等疾病，给家庭带来了沉重负担，张主席看到现在已9个月大的两个孩子精神状态很好，不禁由衷地高兴。</p>' +
              '<p>&emsp;&emsp;在看望了三个病儿家庭之后，张主席一行来到了六村幼儿园，看望了正在参加&ldquo;六一&rdquo;儿童节活动的幼儿园老师、家长和孩子们。他详细了解了幼儿园的设施、师资和生源情况，希望六村幼儿园和家长一道培养好孩子，让他们有个幸福快乐的童年，祝小朋友们&ldquo;六一&rdquo;国际儿童节快乐！</p>' +
              '<p>&emsp;&emsp;（文：张中芳 高捷 摄影：魏南南）</p>'
          },
          {
            title: '田浩被授予“南京市十佳文明职工”称号',
            author: '方雷',
            date: '2019-05-27',
            imgs:'http://nggh.nisco.cn/UploadFiles/upload/201905051138071860.jpg',
            info: '南钢研究院职工田浩被授予“南京市十佳文明职工”称号，并荣获“五一”劳动奖章。近日，南京市十佳文明职工代表-南钢研究院.........',
            content:'<p>&emsp;&emsp;南钢研究院职工田浩被授予&ldquo;南京市十佳文明职工&rdquo;称号，并荣获&ldquo;五一&rdquo;劳动奖章。</p>' +
              '<p>&emsp;&emsp;近日，南京市十佳文明职工代表-南钢研究院职工田浩，受邀参加由南京广播电台录制的&ldquo;南京好人365&rdquo;访谈节目。&ldquo;南京好人365&rdquo;专栏节目每天讲述一位南京好人的感人故事，大力倡导关注好人、崇尚好人的社会导向，在全社会形成争做好人的良好风尚，积极传播和弘扬社会主义核心价值观。</p>' +
              '<p>&emsp;&emsp;2000年,田浩18岁步入焊接行业，立志献身焊接事业，田浩是南京钢铁集团专门引进的高技术焊接人才， 2013年来到南钢研究院，田浩勤勤恳恳，默默奉献，对工作尽职尽责,对专业技能不断钻研，不断创新。2017年, 田浩被评为南钢集团的首届&ldquo;南钢工匠&rdquo;；2017年,他参加江苏省焊工大赛&ldquo;中建钢构杯&rdquo;，获得团体第三名，个人第五名；2017年,他被江苏省总工会授予&ldquo;江苏省五一创新能手荣誉称号&rdquo;；2018年,他被中国钢铁工业协会评为全国钢铁行业职业技能竞赛裁判员。工作中他兢兢业业，生活中他热心帮助他人，每年积极参加无偿献血；累计捐款10余次，同事中谁家有事，都会有他忙碌的身影</p>' +
              '<p>&emsp;&emsp;访谈现场，田浩的事迹让在场听众非常感动。田浩用他生活中的点点滴滴诠释如何践行社会主义核心价值观，是我们身边学习的好榜样！</p>' +
              '<img alt="" src="http://nggh.nisco.cn/UploadFiles/ghgz/2019/5/201905271502519833.jpg" style="height: 971px; width: 429px" />' +
              '<p>&emsp;&emsp;研究院 汪晶洁 吴晓慧</p>'
          },
          {
            title: '公司工会召开庆“五一”劳模、先进座谈会',
            author: '高安俊',
            date: '2019-05-05',
            imgs:'http://nggh.nisco.cn/UploadFiles/upload/201905051137467074.jpg',
            info: '4月30日上午，公司工会在公司新大楼202会议室召开庆“五一”劳模、先进座谈会。来自公司各事业部、直属单位的市级以上退休、在......',
            content:'<p>&emsp;&emsp;4月30日上午，公司工会在公司新大楼202会议室召开庆&ldquo;五一&rdquo;劳模、先进座谈会。来自公司各事业部、直属单位的市级以上退休、在职劳模、五一奖章代表；公司十佳先进人物代表；职工技术创新工作室领头人代表齐聚一堂致敬劳动者，共话南钢憧憬未来。公司党委副书记工会主席张六喜参加座谈会。</p>' +
              '<p>&emsp;&emsp;会上劳模、先进代表纷纷发言，忆过去谈现在，畅谈感受和理想，对南钢充满希望和感激，感激南钢给了他们施展的平台，锻炼大家的意志，促进大家的共同成长，丰富阅历，无悔逝去的青春。</p>' +
              '<p>&emsp;&emsp;工会主席张六喜说：在五一节到来之前，我代表公司工会向大家表达敬意，祝大家节日快乐！劳模是南钢宝贵的精神财富，是最有价值的无形品牌，是企业的脊梁。希望大家保持劳模的先进性，做时代的楷模，新时代新使命，永葆本色，不忘初心，自觉履行使命，保持政治性。</p>' +
              '<p>&emsp;&emsp;(公司工会：戴静 文/图)</p>' +
              '<img alt="" style="height: 418px; width: 485px" src="http://nggh.nisco.cn/UploadFiles/upload/201905051137467074.jpg" /></p>\n' +
              '<img alt="" style="height: 418px; width: 485px" src="http://nggh.nisco.cn/UploadFiles/upload/201905051138071860.jpg" /></p>\n' +
              '<img alt="" style="height: 418px; width: 485px" src="http://nggh.nisco.cn/UploadFiles/upload/201905051138335245.jpg" /></p>\n'
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
      handleClick(item) {
        this.$router.push({
          name: '详情',
          params: {
            article: item
          }
        })
      },
      goto(url) {
        console.log(url)
        this.$router.push(url || './')
      }
    }
  }
</script>

<style lang="scss" scoped>
.news-list {
  margin: auto;
  width: 1200px;
  background: #ffffff;
  padding-top: 40px;
}

</style>

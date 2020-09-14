<template>
  <div class="news-nav">
    <nav-left :items="navItems" @callback="callback"/>
    <div class="nav-content">
        <div @click="handleClick(item)" v-for="(item, index) in around" :key="index">
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
            active: true
          },
          {
            name: '女工关怀',
            code:'woman',
            active: false
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
        around: [
          {
            title: '张主席慰问“田浩技师创新工作室”',
            imgs: 'http://nggh.nisco.cn/UploadFiles/xwdt/2020/8/202008181417310602.jpg',
            author: '陈虹',
            date: '2020-08-19',
            info: ' 8月18日，公司工会主席张六喜带领公司工会部门负责人，来到研究院“田浩技师创新工作室“，为高温下坚守岗位的人员送上冷饮、矿泉水、毛巾等防暑降温用品，并为田浩颁....',
            content:'<img alt="" src="http://nggh.nisco.cn/UploadFiles/xwdt/2020/8/202008181417310602.jpg" style="width: 563px; height: 563px;" />' +
              '<p>&emsp;&emsp;8月18日，公司工会主席张六喜带领公司工会部门负责人，来到研究院“田浩技师创新工作室“，为高温下坚守岗位的人员送上冷饮、矿泉水、毛巾等防暑降温用品，并为田浩颁发了江苏省”最美抗疫职工“荣誉证。（陈虹）</p>'
          },
          {
            title: '关爱职工 夏送清凉 公司慰问一线职工',
            imgs: 'http://nggh.nisco.cn/UploadFiles/ghgz/2020/8/202008040933445786.jpg',
            author: '赵莉',
            date: '2020-08-04',
            info: '骄阳似火，高温闷热， 8月3日下午，最高气温达到36度，公司工会主席张六喜，公司副总裁徐晓春，公司工会副主席杨桥东和工会部门负责人及部分工作人员，顶着烈日带着藿香正气水、人丹、花露水等清凉套装依次来到梅桂营站（上海铁路局南京东站梅桂营货运部....',
            content:'<p>&emsp;&emsp;骄阳似火，高温闷热，8月3日下午，最高气温达到36度，公司工会主席张六喜，公司副总裁徐晓春，公司工会副主席杨桥东和工会部门负责人及部分工作人员，顶着烈日带着藿香正气水、人丹、花露水等清凉套装依次来到梅桂营站（上海铁路局南京东站梅桂营货运部）、燃料供应厂焦炉作业区、第一炼铁厂一号炉、第二炼钢厂转炉平台、保卫部门岗，慰问奋战在高温一线的职工。</p>' +
              '<p>&emsp;&emsp;在慰问现场，张六喜和徐晓春与在岗位上战高温的职工一一握手，送上公司工会为大家准备的慰问品，并和现场职工做了交流，张主席表示在高温下作业的职工们辛苦了，持续的高温会给高温岗位上的职工带来身体上的不适，希望大家能做好防暑降温工作，同时叮嘱各生产一线的领导要及时关注并维护好职工身体健康，保障职工平安健康度过炎夏天。</p>' +
              '<p>&emsp;&emsp;徐晓春表示，天气炎热，一线高温岗位的职工们非常辛苦，希望大家合理安排工作时间和休息时间，保护好身体，才能有效的工作，并鼓励职工保持干劲为完成南钢8月份生产经营指标共同努力。</p>' +
              '<img alt="" src="http://nggh.nisco.cn/UploadFiles/ghgz/2020/8/202008040933445786.jpg" style="width: 563px; height: 563px;" />' +
              '<img alt="" src="http://nggh.nisco.cn/UploadFiles/ghgz/2020/8/202008040934088117.jpg" style="width: 563px; height: 563px;" />' +
              '<img alt="" src="http://nggh.nisco.cn/UploadFiles/ghgz/2020/8/202008040934316976.jpg" style="width: 563px; height: 563px;" />' +
              '<img alt="" src="http://nggh.nisco.cn/UploadFiles/ghgz/2020/8/202008040935241461.jpg" style="width: 563px; height: 563px;" />' +
              '<img alt="" src="http://nggh.nisco.cn/UploadFiles/ghgz/2020/8/202008040936285238.jpg" style="width: 563px; height: 563px;" />' +
              '<p>文/图 赵莉</p>'
          },
          {
            title: '防洪抗台 保产保供”公司慰问抗洪保产一线员工',
            imgs: 'http://nggh.nisco.cn/UploadFiles/ghgz/2020/7/202007240922158238.jpg',
            author: '赵莉',
            date: '2020-07-24',
            info: '7月23日，公司工会张六喜、集团公司总裁余长林、公司副总裁徐晓春带着慰问品来到防汛、保料工作单位：铁路16#道口，21#道口水厂泵房，港池码头，原料厂4#料条，慰问抗战在洪水形势严峻下工作的一....',
            content:'<p>&emsp;&emsp;7月23日，公司工会张六喜、集团公司总裁余长林、公司副总裁徐晓春带着慰问品来到防汛、保料工作单位：铁路16#道口，21#道口水厂泵房，港池码头，原料厂4#料条，慰问抗战在洪水形势严峻下工作的一线员工。</p>' +
              '<p>&emsp;&emsp;进入汛期以来长江水位持续上涨，并且已超出警戒线1.4m，公司原辅料码头、低洼区域、梅桂营车站等区域不仅出现了江水、河水上漫，而且严重影响到公司的生产组织与保产保供。为确保公司正常的生产经营秩序，满足铁前正常的生产用料需求，公司工会组织开展了&ldquo;防洪抗台保产保供&rdquo;劳动竞赛。公司成立防汛抗洪保产指挥部，每日召开推进会，协调解决保产保供遇到的难点与痛点，组建以祝总裁、张主席、徐副总牵头的防汛抗洪保产保供攻关微信群，实时跟进抗洪保供情况。</p>' +
              '<p>&emsp;&emsp;公司防汛抗台指挥部、保料工作组成员，发挥出不怕吃苦，敢于挑战和团结奋进的精神，使用科学有效的技术手段安全有序的开展本阶段防洪抗台工作任务。7月22日炼铁产量破记录达到30166吨，防汛抗洪保供小组有效利用涨退潮的窗口期，采取了汽车焦炭直供、梅桂营铁路线积水强排、朱家山铁路线防汛突击队现场值守、道路交通疏导指引、现场作业人员慰问、防汛抗洪指挥部统筹协调与推进等措施，快速扭转了库存下降的局面，焦炭、矿石、煤实现保供增储。在各部门系统性攻关能力、作业效率、信心士气越来越高。</p>' +
              '<p>&emsp;&emsp;7月22日，共调进各类原燃料8.65万吨，其中铁辅料6.43万吨、燃料2.22万吨，满足了公司持续性的高效安全生产的需求。公司、事业部、机关部室各位领导更是高度重视，频繁的涉水深入一线进行指挥，就管理措施、作业方法提出改进要求，就员工作业激情进行了鞭策，激发出来现场作业人员和作业设备的内在潜力，用新思维、新行动、新动力、高站位推动了防汛抗洪工作的开展。</p>' +
              '<p>&emsp;&emsp;在慰问现场，张六喜表示目前的重点工作是保产保供保设施运行安全，各保障工作组要以大局为重，做好协调配合工作，组织开展好防汛保产保供竞赛，提高隐患意识和安全防护意识，希望广大职工继续加油，发扬不怕吃苦、勇于奉献的精神，确保打赢防洪保产攻坚战。公司副总裁徐晓春也给现场的员工加油鼓劲：昨天炼铁铁水产量破历史纪录，和各抗洪保供小组的工作是分不开的，希望各小组继续落实好供料，合理安排物流运输，满足铁前工序正常的生产需求，在严峻的汛情下紧紧围绕公司生产经营目标，安全有序的生产，争取突破新记录。</p>' +
              '<p>&emsp;&emsp;文 田信雷 赵莉</p>'+
              '<img alt="" src="http://nggh.nisco.cn/UploadFiles/ghgz/2020/7/202007240922158238.jpg" style="width: 563px; height: 563px;" />'
          },
          {
            title: '抗击疫情 我们与你同在',
            imgs: 'http://nggh.nisco.cn/UploadFiles/ghgz/2020/3/202003100824335070.jpg',
            author: '方雷',
            date: '2020-03-10',
            info: '继南钢工会为公司全体在岗职工发放12000只抗疫防护包以来 ，3月3日，南钢工会向武钢工会捐赠的100箱免洗手消毒液和2000只口罩也顺利到达武钢。南钢工会在对本单位职工的关心爱护以外还心系疫区兄弟单位，为他们送去南....',
            content:'<p>&emsp;&emsp;继南钢工会为公司全体在岗职工发放12000只抗疫防护包以来&nbsp;，3月3日，南钢工会向武钢工会捐赠的100箱免洗手消毒液和2000只口罩也顺利到达武钢。</p>' +
            '<p>&emsp;&emsp;南钢工会在对本单位职工的关心爱护以外还心系疫区兄弟单位，为他们送去南钢工会的关心和爱护，武钢工会的负责人在接收到捐赠物资后致电南钢工会表示了衷心的感谢。</p>' +
            '<p>&emsp;&emsp;（方雷文 &nbsp;摄）</p>' +
            '<img alt="" src="http://nggh.nisco.cn/UploadFiles/ghgz/2020/3/202003100824335070.jpg" style="width: 563px; height: 563px;" />'
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

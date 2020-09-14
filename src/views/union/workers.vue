<template>
  <div class="news-nav">
    <nav-left :items="navItems" @callback="callback"/>
    <div class="nav-content">
      <card-concert-nav v-for="(item, index) in listOption" :key="index" :data="item"/>
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
  import Card from '../../components/Card'
  import CardPic from '../../components/CardPic'
  import CardPicVertical from '../../components/CardPicVertical'
  import navLeft from '../../components/news/navLeft'
  import cardConcertNav from '../../components/news/cardConcertNav'

  export default {
    name: 'Union',
    components: { Card, CardPic, CardPicVertical, navLeft, cardConcertNav },
    data() {
      return {
        active: ['1', '2', '3', '4'],
        tabType: '0',
        workers: [
          {
            title: '战高温、保生产、送清凉——第一炼铁厂在行动',
            imgs: 'http://nggh.nisco.cn/UploadFiles/xwdt/2020/8/202008201441005097.png',
            author: '房华',
            date: '2020-08-20',
            info: '近两天，南京热浪来袭，这对于钢铁厂来说，更是进入了烧烤模式，第一炼铁厂高炉出铁厂区域已经达到60℃，铁口附近更是到了近100℃的辐射温度，但炉前工以及各个条线的员工都有条不紊地进行着日常工作，汗水湿透了他们的工作服，丝毫未影响他们的工作热情。8月3日中....',
            content:'<p>&emsp;&emsp;近两天，南京热浪来袭，这对于钢铁厂来说，更是进入了烧烤模式，第一炼铁厂高炉出铁厂区域已经达到60℃，铁口附近更是到了近100℃的辐射温度，但炉前工以及各个条线的员工都有条不紊地进行着日常工作，汗水湿透了他们的工作服，丝毫未影响他们的工作热情。8月3日中午3号高炉工艺休风更换小套、吹管，时间紧、任务重，高炉三车间人员午饭都顾不上吃，抓紧时间完成检修任务。</p>' +
              '<p>&emsp;&emsp;针对高温天气第一炼铁厂全面部署防暑降温工作：安全管理室负责降温药品的准备工作，综合室负责清凉饮料的准备工作；设备系统对现场液压等区域空调运行情况开展检查；施工项目提早开工、同时超过35℃，按公司规定进行错峰施工。</p>' +
              '<p>&emsp;&emsp;天气骤热，为切实做好防暑降温工作，第一炼铁厂从今天起开启“夏日送清凉、点滴暖人心”活动，为始终坚持在岗，经受着现场生产高温“烤”验的员工和相关方人员送上冷饮，盐汽水等，并叮嘱大家要劳逸结合，安全作业，平安度夏。</p>' +
              '<p>&emsp;&emsp;在第一炼铁厂的现场到处可见认真工作的人们，在为这涓涓而流的铁水奋斗着……</p>' +
              '<p>&emsp;&emsp;（房华/文 孟昭杰/图）</p>' +
              '<img alt="" src="http://nggh.nisco.cn/UploadFiles/xwdt/2020/8/202008201441005097.png" style="width: 482px; height: 701px;" />'
          },
          {
            title: '小车队开展“第二十一次夏季百日安全竞赛活动”-南京钢铁联合有限公司工会',
            imgs: 'http://nggh.nisco.cn/UploadFiles/xwdt/2020/7/202007021645322105.jpg',
            author: '公司办公室',
            date: '2020-07-02',
            info: '公司办小车队为了贯彻全国第19个“安全生产月”落实国家、省、市、新区的统一布置，进一步加强安全生产宣传教育工作，牢固树立安全发展理念，提升员工安全素质，营造深厚的安全生产氛围。结合车队实际情况经研究决定在全队范围内开展“第二十一次夏季百日安全....',
            content:'<img alt="" src="http://nggh.nisco.cn/UploadFiles/xwdt/2020/7/202007021645322105.jpg" style="width: 482px; height: 701px;"/>' +
              '<p>&emsp;&emsp;公司办小车队为了贯彻全国第19个“安全生产月”落实国家、省、市、新区的统一布置，进一步加强安全生产宣传教育工作，牢固树立安全发展理念，提升员工安全素质，营造深厚的安全生产氛围。结合车队实际情况经研究决定在全队范围内开展“第二十一次夏季百日安全竞赛”活动，6月22日上午，小车队组织召开“第二十一次夏季百日安全竞赛活动”动员大会，活动时间：2020年6月22日至9月29日，部分活动贯穿全年。</p>' +
              '<p>&emsp;&emsp;夏季百日安全竞赛活动是小车队一年一度都要进行的一项重要安全竞赛活动，自公司1999年公务车集中管理以来已经开展了第二十一次；“消除事故隐患，筑牢安全防线”是今年安全竞赛活动的主题，为确保活动顺利有序地开展，车队成立活动领导小组，强化组织领导、全面部署；加大宣传力度做起，开展安全警示教育和科普宣传活动等内容来营造竞赛活动氛围；同时要求车队全体驾驶员、修理工</p>' +
              '<p>&emsp;&emsp;奋战100天，实现全队零事故、零违章的目标。</p>' +
              '<p>&emsp;&emsp;公司办公室</p>' +
              '<p>&emsp;&emsp;二〇二〇年六月二十二日</p>'
          },
          {
            title: '公司办小车队《细节关乎生命、安全文明出行》',
            imgs: 'http://nggh.nisco.cn/UploadFiles/xwdt/2019/10/201910280904150342.jpg',
            author: '佚名',
            date: '2019-10-28',
            info: '公司办公室小车队以 《细节关乎生命、安全文明出行》为主题的2019年“第二十次夏季百日安全竞赛”活动已圆满结束。在这一百天中，小车队按照公司的要求，结合....',
            content:'<img alt="" src="http://nggh.nisco.cn/UploadFiles/xwdt/2019/10/201910280904150342.jpg" style="height: 334px; width: 336px" />' +
              '<img alt="" src="http://nggh.nisco.cn/UploadFiles/xwdt/2019/10/201910280904394633.jpg" style="height: 252px; width: 332px" />' +
              '<img alt="" src="http://nggh.nisco.cn/UploadFiles/xwdt/2019/10/201910280905156203.jpg" style="height: 225px; width: 336px" />' +
              '<p>&emsp;&emsp;公司办小车队《细节关乎生命、安全文明出行》百日安全竞赛活动圆满结束</p>' +
              '<p>&emsp;&emsp;公司办公室小车队以 《细节关乎生命、安全文明出行》为主题的2019年“第二十次夏季百日安全竞赛”活动已圆满结束。在这一百天中，小车队按照公司的要求，结合6月份公司安全生产月活动，大力倡导“小细节”关系到“大安全”的理念，增加主动防御意识及减少被动型事故，减少车辆违章曝光次数，杜绝机械设备事故等为安全竞赛内容，时间从6月17日至9月24日止，目的是为了增强全队员工遵章守法意识，从思想上高度重视安全，安全这根弦丝毫不能放松，经过全队员工的共同努力，竞赛活动已圆满结束，较好地完成了竞赛既定目标，同时完成了各项工作任务。</p>' +
              '<p>&emsp;&emsp;竞赛期间全队安全行车45万公里，实现重大责任事故和机械事故为零的目标。共完成出车任务4096趟次，接送内外客人82批次、425趟次，车辆检查168台次大修车辆台，小修车辆706台次，车辆年检62台次，长途车辆检查68台次，外修救援17次，修旧利废创效益14950元，比质比价降本34950元。</p>' +
              '<p>&emsp;&emsp;本次竞赛活动评比出：</p>' +
              '<p>&emsp;&emsp;一等奖二名：李跃权、徐军</p>' +
              '<p>&emsp;&emsp;二等奖三名：殷其发、竺玲明、王剑松，</p>' +
              '<p>&emsp;&emsp;三等奖四名：叶守森、李有亮、成伟、韩诚</p>' +
              '<p>&emsp;&emsp;表杨：王胜利、史克杰、袁文杰、耿金辉、梁宵、董萍萍</p>'
          },
          {
            title: '公司办开展“安全生产月”活动',
            imgs: 'http://nggh.nisco.cn/UploadFiles/xwdt/2019/6/201906281102223619.jpg',
            author: '佚名',
            date: '2019-06-27',
            info: '为认真落实公司“安全生产月”活动的相关精神，6月17日上午，公司办小车队组织召开“第二十次夏季百日安全竞赛活动”动员大会。公司办公室党总支书记、副主任张文超，安全能环部部长张宏，公司工会....',
            content:'<img alt="" src="http://nggh.nisco.cn/UploadFiles/xwdt/2019/6/201906281102223619.jpg" style="height: 343px; width: 490px" />' +
              '<img alt="" src="http://nggh.nisco.cn/UploadFiles/xwdt/2019/6/201906281102426199.jpg" style="height: 386px; width: 494px" />' +
              '<img alt="" src="http://nggh.nisco.cn/UploadFiles/xwdt/2019/6/201906281103043366.jpg" style="height: 410px; width: 495px" />' +
              '<p>&emsp;&emsp;公司办开展“安全生产月”活动</p>' +
              '<p>&emsp;&emsp;为认真落实公司“安全生产月”活动的相关精神，6月17日上午，公司办小车队组织召开“第二十次夏季百日安全竞赛活动”动员大会。公司办公室党总支书记、副主任张文超，安全能环部部长张宏，公司工会副主席杨桥东及公司办小车队全体员工参加动员会。</p>' +
              '<p>&emsp;&emsp;“夏季百日安全竞赛活动”是小车队一年一度都要进行的一项重要安全竞赛活动，自公司1999年公务车集中管理以来已经开展到第二十次。“细节关乎生命、安全文明出行”是今年安全竞赛活动的主题，动员大会上小车队卢晓峰队长宣读“第二十次夏季百日安全竞赛”活动的通知。为确保活动顺利有序地开展，车队成立活动领导小组，从加大宣传力度着手，通过开展安全警示教育和科普宣传活动等内容来营造竞赛活动氛围，同时活动领导小组要求车队全体驾驶员、修理工奋战100天，实现零事故、零违章的目标。</p>' +
              '<p>&emsp;&emsp;会上，张文超书记、张宏部长、杨桥东副主席就本次活动分别提出具体要求和建议，对车队多年来坚持开展“夏季百日安全竞赛活动”给予肯定，同时要求车队做好对人员、车辆动向的管理，安全行车贯穿全年；要以人为本，关心驾驶员身体及心理健康，建议开展家属助安全等活动内容；并要求落实好活动各项内容，努力争创公司级、市级工人先锋号等，最后预祝活动取得圆满成果。</p>'
          }
        ],
        craftsman:[
          {
            imgs:require('@/assets/images/cardPicVertical/15.jpg'),
            name:'葛树东',
            introduce:'“机车工匠”'
          },
          {
            imgs:require('@/assets/images/cardPicVertical/16.png'),
            name:'葛树东',
            introduce:'“南钢工匠”'
          },
          {
            imgs:require('@/assets/images/cardPicVertical/17.jpg'),
            name:'殷剑',
            introduce:'南钢工匠'
          },
          {
            imgs:require('@/assets/images/cardPicVertical/18.png'),
            name:'王月彪',
            introduce:'“南钢工匠”'
          },
          {
            imgs:require('@/assets/images/cardPicVertical/19.jpg'),
            name:'张红军',
            introduce:'全国机冶行业工匠”'
          }
        ],
        navItems: [
          {
            name: '职工风采',
            code:'workers',
            active: true
          },
          {
            name: '劳模先进',
            code:'model',
            active: false
          },
          {
            name: '工匠评优',
            code:'craftsman',
            active: false
          },
          {
            name: '创新工作室',
            code:'studio',
            active: false
          }
        ],
        listOption: [],
        code:'workers'
      }
    },
    created(){
      this.listOption = this.workers
    },
    computed: {
      ...mapGetters([
        'name'
      ])
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
        if(index) this.$router.replace({path: `/union/${index}`} || './')
      },
      callback(item) {
        this.listOption = this[`${item.code}`];
        if(item.code === 'model'){
          this.$router.push('/union/model')
        }else if (item.code === 'workers'){
          this.$router.push('/union/workers')
        }else if(item.code === 'studio'){
          this.$router.push('/union/studio')
        }else {
          this.$router.push('/union/craftsman')
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

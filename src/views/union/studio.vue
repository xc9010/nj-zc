<template>
  <div class="news-nav">
    <nav-left :items="navItems" @callback="callback"/>
    <div class="nav-content">
      <div class="studio-wrapper">
        <div class="studio-info" v-for="(item, index) in studio" :key="index" :data="item" @click="handleClick(item)">
          <div class="head-img">
            <img :src="item.imgs">
          </div>
          <div class="studio-desc">
            <p class="name">{{item.title}}</p>
            <p class="icon-desc">
              <img class="icon" :src="require('@/assets/images/list.png')">
              <span class="desc">
                {{item.classify}}
              </span>
            </p>
            <p class="icon-desc leader">
              <img class="icon" :src="require('@/assets/images/man.png')">
              <span class="desc">
                {{item.author}}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- <div class="mainBox" style="background-color: white;">
    <div class="mainContent">
      <el-tabs v-studio="tabType" @tab-click="handleTabClick" tab-position="left">
        <el-tab-pane name="0" label="合理化建议">
          <el-card class="box-card">
            <div slot="header" class="box-title">
              <span>合理化建议</span>
            </div>
            <el-collapse v-studio="active">
              <el-collapse-item name="1" v-for="(item, index) in list" :key="index">
                <template slot="title">
                  <el-link @click="handleClick(item)" target="_blank">{{item.title}}</el-link>
                </template>
                <Card :info="item.info" :date="item.date" :author="item.author"></Card>
              </el-collapse-item>
            </el-collapse>
          </el-card>
        </el-tab-pane>
        <el-tab-pane name="1" label="先进操作法">
          <el-card class="box-card">
            <div slot="header" class="box-title">
              <span>先进操作法</span>
            </div>
            <el-collapse v-studio="active">
              <el-collapse-item name="1" v-for="(item, index) in operate" :key="index">
                <template slot="title">
                  <el-link @click="handleClick(item)" target="_blank">{{item.title}}</el-link>
                </template>
                <Card :info="item.info" :date="item.date" :author="item.author"></Card>
              </el-collapse-item>
            </el-collapse>
          </el-card>
        </el-tab-pane>
        <el-tab-pane name="2" label="创新增效">
          <CardPic :info="innovate"></CardPic>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div> -->
</template>

<script>
  import { mapGetters } from 'vuex'
  import Card from '../../components/Card'
  import navLeft from '../../components/news/navLeft'
  import CardPic from '../../components/CardPic'
  import cardConcertNav from '../../components/news/cardConcertNav'


  export default {
    name: 'Live',
    components: { Card, CardPic, navLeft, cardConcertNav },
    data() {
      return {
        active: ['1', '2', '3', '4'],
        tabType: '0',
        navItems: [
          {
            name: '职工风采',
            code:'workers',
            active: false
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
            active: true
          }
        ],
        studio:[
          {
            title: '吴建群劳模创新工作室',
            imgs: require('@/assets/images/cardPic/5.jpg'),
            author: '吴建群',
            date:'2020.01.06',
            classify: '类型：创新工作室',
            content:'<span><!--Content_Start--><P style="TEXT-ALIGN: center"><IMG src="http://acftu.workercn.cn/html/files/2020-01/06/20200106145652000388449.png"></P>\n' +
            '<P>　　今年50岁的吴建群，是徐矿集团张双楼煤矿综采一区高级技师，先后获“全国煤炭工业劳动模范”、江苏省企业首席技师、“煤炭行业技能大师”等荣誉。2013年，煤矿成立吴建群劳模创新工作室，现有成员13名，其中党员10名。2018年6月，工作室成立党支部，充分发挥战斗堡垒作用和党员先锋模范作用，助推矿井科技创新发展，取得了多项科研创新成果。由吴建群牵头发明的《综采工作面液压系统失压自动保护系统》获得国家实用新型专利证书。煤矿以吴建群劳模创新工作室为引领，拓展了李兵防冲工作室和吴广永通防工作室。</P>\n' +
            '<P><STRONG>　　一名党员就是一面旗帜</STRONG></P>\n' +
            '<P>　　作为劳模工作室带头人，吴建群深知“打铁还需自身硬”，立足岗位开展技术攻关、技术革新、发明创造和技术培训、业务交流、师徒帮教等活动，提高技术创新能力和团队建设水平，团队凝聚力日渐增强。他不断学习业务知识，靠精湛的技术，折服了团队的每个人。</P>\n' +
            '<P>　　吴建群坚持做检修笔记，每次都把检修设备时的名称、型号，故障部位、原因、元件服务时间、操作程序、相关原理分析等，清晰地记录下来，10年时间累计撰写检修笔记10余万字。他的经验和技术，也在不知不觉的积累中得到了升华，成为矿井设备检修的“多面手”，无论煤机、溜子，还是乳化液泵站、成套液压支架，无论哪种设备出现故障他都能独当一面。</P>\n' +
            '<P>　　吴建群处处以身作则，始终以一名共产党员的标准要求自己。2017年7月3日凌晨1点左右，睡梦中的吴建群被一阵手机铃声吵醒，原来综采二区93602工作面930煤机发生了故障。夜班是储煤的黄金时间，每耽误一小时，企业的经济效益就会受到较大影响。吴建群立刻起身往矿上赶。</P>\n' +
            '<P>　　来到井下现场，吴建群一边查看煤机情况，一边听旁边维护人员的故障介绍，在仔细检查后发现煤机变频器显示屏不亮，打开发现变频器内的三个大保险均已经烧坏。凭着多年的检修经验，他断定是由变频器某些元器件烧坏引起的电流短路。他把变频器拆开检查，检测确认里面的RGBT模块损坏，于是和当班人员一道更换了部件、调整了相关参数……经过近3个小时的处理，直到煤机试运转正常，吴建群才拖着疲惫的身躯上井。</P>\n' +
            '<P>　　还有一次，吴建群在井下综采工作面发现，当煤机割煤至机头、机尾时，上、下出口附近工作人员和通过端头人员随时可能遇到被煤机滚筒带起的煤矸石砸伤的危险。如何提示、阻止上下出口处的工作人员在煤机临近上下出口时，及时撤离危险区域，避免两道出口与煤机割煤平行作业，杜绝事故隐患呢？</P>\n' +
            '<P>　　吴建群依托劳模创新平台，组织团队成员多次研究讨论，结合煤机电控系统原理，开发出了煤机上下出口预警语音提示装置：当煤机在临近机头、机尾30m（20个支架）距离时，煤机的拖缆架触动声光报警装置开关，启动报警，提示上下出口处经过或在危险区段以内工作人员退出危险区段，防止人员误入，有效避免了人身伤害事故的发生，保障了矿井的安全生产。此项创新获得张双楼煤矿科技创新一等奖。</P>\n' +
            '<P><STRONG>　　“送绝活”让技艺薪火相传</STRONG></P>\n' +
            '<P>　　职工队伍素质的高低决定着企业的核心竞争力。吴建群劳模工作室立足实际，将打造一支爱岗敬业、乐于学习、业务精湛、开拓创新、甘于奉献的“工匠型”人才队伍作为努力的方向。</P>\n' +
            '<P>　　他们通过师徒“结对子、传帮带”等形式，确保技艺薪火相传。2018年，按照创新支部制定的规划要求，专门安排3名党员工作室成员吴建群、刘军、姜建，分别与自己选定的5名徒弟签订了以师带徒合同，以党员“一对一，手拉手”的模式对徒弟进行岗位基本技能、工作流程、施工工艺、设备维修和操作等技能知识的传授。</P>\n' +
            '<P>　　工作室创新职工教育形式和载体，充分利用互联网信息技术整合学习资源，创建涵盖党建知识、廉洁文化、安全宣教、职工培训、科技创新为一体的“共享”学习教育平台，采用动漫、视频等多媒体教育方式，对安全措施、操作规范、事故案例等进行完整的表现，加深职工对学习内容的理解和贯彻执行。同时，还建立了以采掘维护员工作交流为主的微信群，为采掘维护员提供了一个交流学习平台。</P>\n' +
            '<P>　　张双楼矿充分发挥吴建群劳模创新工作室和吴广永技能工作室作用，设立“劳模创新大讲堂”，每月举办一次专业技术讲座，每季度组织一次创新创效成果评比活动，为一线机电维护人员传授业务技能。</P>\n' +
            '<P>　　工作室专门排定了详细地课程计划，创新团队的13名技能拔尖人才将结合自身技术专长、工作特长，精心选取教学模块，定期为生产一线专业工种职工讲授实用型技能。2017年以来，先后开展了多次劳模大讲堂活动，吴建群讲解了《MG300／700-QWD煤机电气部分故障分析与处理》，党员史向民主讲《井下移变常见故障分析及处理方法》《综采工作面“三机配套”工作模式》等实用型技能，对矿井技术工种人员进行培训，为企业培养更多的技能人才。</P>\n' +
            '<P><STRONG>　　围绕生产重点创新提效</STRONG></P>\n' +
            '<P>　　近几年来，工作室引领着矿井技术创新创效。他们每年召开一次创新目标计划会，分解责任，落实到人，并按照时间节点，扎实开展各项创新、革新，取得了多项技术创新成果。</P>\n' +
            '<P>　　2016年，工作室完成创新项目30项，其中综采工作面液压系统失压自动保护系统研究与应用、大倾角工作面电缆槽抬高架等项目，为降低矿井安全风险、减轻职工劳动强度、增强企业经济效益等方面发挥了积极的作用。</P>\n' +
            '<P>　　2017年，工作室团队围绕矿井安全生产重点、难点扎实开展技术创新攻关，全年先后开展综采工作面液压系统失压自动保护系统研究与应用、煤机截齿防脱落改进、卧式简易压力机、综掘机二运皮带自移装置改造等技术创新创效项目33个，有效解决了一批影响和制约安全生产的疑难问题。由工作室成员陈茂同牵头完成的《张双楼煤矿东翼原煤运输系统优化改造》被评为“赢在徐州”—2017年徐州市职工技术创新竞赛“十佳合理化建议”</P>\n' +
            '<P>　　2018年，凝聚劳模创新工作室团队集体智慧编写的煤矿工匠丛书《机电设备故障诊断与维修》由中国矿业大学出版社正式出版发行，由吴建群牵头发明的《综采工作面液压系统失压自动保护系统》获得国家实用新型专利证书，助力矿井科技创新工作再上新台阶，弘扬了劳模精神和工匠精神。（通讯员 肖长华）</P></span>\n'
          },
          {
            title: '门头沟区劳模创新工作室',
            imgs: require('@/assets/images/cardPic/6.jpg'),
            author: '闫长禄',
            date:'2020.04.11',
            classify: '类型：创新工作室',
            content:'<span><!--Content_Start--><P style="TEXT-ALIGN: center"><IMG src="http://acftu.workercn.cn/html/files/2019-12/27/20191227101502196657878.jpg"></P>\n' +
            '<P>　　门头沟区第三家劳模创新工作室揭牌仪式在北京隆科兴科技集团股份有限公司举行。门头沟区人大常委会副主任，区总工会党组书记、主席陈波出席会议并为劳模创新工作室揭牌。</P>\n' +
            '<P>　　仪式上，劳动模范张晓忠代表工作室全体人员表示，一定会不忘初心、牢记使命，继续发扬劳模精神，引领职工投入到工作中。北京隆科兴科技集团股份有限公司董事长黄满虎谈到公司经过多年的努力时说：“公司在排水管道检测和非开挖修复领域取得了国内领先的地位，希望劳模创新工作室的建立可以有力带动科研人员继续进行科技创新，为门头沟地区发展做出贡献。”</P>\n' +
            '<P>　　近年来，门头沟区不断探索新形势下劳模服务管理工作新机制，全面提升劳模工作水平，营造了“学习劳模，争做劳模”的良好氛围。截至目前，门头沟区已经成立三家区级劳模创新工作室，对于提高自主创新能力、不断丰富发展劳模先进性、推动社会自主创新、建设高素质职工队伍有着重要的现实意义。</P>\n' +
            '<P>　　闫长禄 摄</P></span>\n'
          },
          {
            title: '蔡佳兴腐蚀技术职工创新工作室',
            imgs: require('@/assets/images/cardPic/7.jpg'),
            author: '蔡佳兴',
            date:'2019.11.07',
            classify: '类型：创新工作室',
            content:'<p>&emsp;&emsp;蔡佳兴腐蚀技术创新工作室，主要从事与低合金耐蚀钢、不锈钢、特种合金、耐腐蚀复合板的高效冶金和轧制有关的腐蚀控制技术、钢材涂层及喷涂防护技术研究、热轧钢表面氧化皮耐锈蚀技术、耐蚀钢用户使用技术、钢材腐蚀性评价方法与标准化、腐蚀数据积累、腐蚀行为与机理等研究工作，为新型耐蚀钢的研发、推广、应用提供数据支撑和技术支持，延长钢材服役寿命，提高钢构件在服役过程中安全性。工作室具有大气腐蚀户外暴晒场、电化学工作站、盐雾箱、周浸箱等先进的腐蚀设备，可开展钢材在模拟腐蚀环境下的加速腐蚀试验、在服役环境中的腐蚀试验、钢材在受力状态的腐蚀试验、不锈钢及特种材料复合板的腐蚀性出厂检验等多类腐蚀性能测试与科研试验。</p>' +
            '<p>&emsp;&emsp;目前，工作室成员已承担了基于耐候桥梁钢的典型地区腐蚀地图研究及应用、不锈钢复合板腐蚀性能研究等十多项研究课题，大力推进技术创新和产品性能改进。工作室成员获得已授权的发明专利及实用新型专利共计14项，在SCI、中文核心期刊等公开期刊上累计发表论文16篇。</p>'
          },
          {
            title: '方玉珍劳模创新工作室',
            imgs: require('@/assets/images/cardPic/8.png'),
            author: '方玉珍',
            date:'2018.10.19',
            classify: '类型：创新工作室',
            content:'<p>&emsp;&emsp;方玉珍劳模创新工作室”是以南钢首席操作师、南钢首届工匠、高级技师方玉珍名字命名，是为技术骨干建立一个锐意创新、攻坚克难的阵地和学习交流、展示才能的平台。职工创新是效益的倍增器，是企业发展不熄的“引擎”。</p>' +
            '<p>&emsp;&emsp;公辅事业部电厂供电车间以“方玉珍劳模创新工作室”为主导，全体人员以“安全保供、创新创效”为主题，弘扬“工匠精神”，发扬“劳模精神”，打造人才聚集、人才培养、科技创新的战略高地。</p>' +
            '<p>&emsp;&emsp;充分发挥专业特长，努力将创造力转化为推进企业发展的智慧和动力，重点是在电气设备检修技术上创新，加强关键技术攻关，适当实施技术改革和设备更新，在管理上创新，一是建立鼓励创新的制度，要保证想干事的员工都能有机会干，既要促进创新氛围的形成，又要能够包容创新的失败，鼓励班组成员创新，发挥好“劳模创新工作室”的作用，既可以不断改进、创新工作的方法，也可为员工获得赞赏创造机会。</p>' +
            '<p>&emsp;&emsp;让员工在富余时间来研究工作问题，解决好设备管理和工作协调问题，真正把创新工作深入到一线员工中去，让他们实实在在的举措促进生产、工艺、技术、管理的提升。</p>'
          },
          {
            title: '葛树东劳模创新工作室',
            imgs: require('@/assets/images/cardPic/9.png'),
            author: '葛树东',
            date:'2018.10.19',
            classify: '类型：创新工作室',
            content:'<p>&emsp;&emsp;葛树东是铁运中心检修段的机车验收员，他在机车司机和验收员岗位上已摸爬滚打30年，他刻苦钻研、精益求精，技术精湛。</p>' +
            '<p>&emsp;&emsp;2016年在第八届“鞍钢杯”全国钢铁行业职业技能竞赛中获 “内燃机车司机”第六名，被授予全国技术能手称号；2017年，他被评为首届“南钢工匠”，5月又被市总授予“南京市五一劳动奖章”。</p>'
          }
        ],
        code:'studio'
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
        const index = targetName.index;
        if(index) this.$router.replace({path: `/create/${index}`} || './')
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
.studio-wrapper {
  width: 950px;
  margin-left: 50px;
  .studio-info {
    float: left;
    margin-right: 45px;
    &:nth-child(2n) {
      margin-right: 0;
    }
  }
  .studio-info {
    width: 450px;
    height: 150px;
    position: relative;
    text-align: left;
    margin-bottom: 35px;
    display: flex;
    .head-img {
      width: 215px;
      height: 150px;
      overflow: hidden;
      img {
        text-align: center;
        // max-width: 100%;
        max-height: 100%;
        height: 100%;
        text-align: center;
      }
    }
    .studio-desc {
      width: 235px;
      padding: 0 20px;
      .name {
        margin: 0;
        height: 60px;
        line-height: 60px;
        font-size: 16px;
        color: #1f1f1f;
        position: relative;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        &::after {
          content: '';
          width: 100%;
          height: 1px;
          background: #eaeaea;
          position: absolute;
          bottom: 0;
          left: 0;
        }
      }
      .icon-desc {
        margin: 0;
        margin-top: 20px;
        display: flex;
        align-items: center;
        .icon {
          width: 16px;
          height: 16px;
        }
        .desc {
          font-size: 14px;
          margin-left: 10px;
          color: #ffa200;
        }
        &.leader {
          .desc {
            color: #979797;
          }
        }
      }
    }
  }
}
</style>

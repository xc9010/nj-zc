<template>
  <div class="mainBox">
    <div class="mainContent">
      <div class="news">
        <el-card class="box-card">
          <div slot="header" class="box-title">
            <span>运动专场</span>
          </div>
          <div >
            <div class="mainList">
              <el-collapse v-model="active">
                <el-collapse-item name="1" v-for="(item, index) in list" :key="index">
                  <template slot="title">
                    <el-link @click="handleClick(item)" target="_blank">{{item.title}}</el-link>
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

          </div>
        </el-card>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import Card from '../../components/Card'

  export default {
    components: { Card },
    name: 'Sports',
    computed: {
      ...mapGetters([
        'name'
      ])
    },
    data() {
      return {
        levelList: null,
        active: ['1','2','3','4'],
        list: [
          {
            title: '第三炼钢厂进行精炼炉炉长技术比武实操比赛',
            imgs:'http://nggh.nisco.cn/UploadFiles/TPXW/2017/6/2017062216162494970.jpg',
            author: '郭静 杨利伟',
            date: '2018-05-31',
            info: '为进一步激励广大员工学技术、练本领、比技能的热情，为一线职工切磋技艺、展示技能提供平台，全面掀起生产高潮。5月18日，由公司工会主办的“南钢第四届技术运动会精炼炉炉长技术比武实操比赛（三炼钢赛区 ）”如期进行，选手们个....',
            content:'<p><img alt="" src="http://nggh.nisco.cn/UploadFiles/TPXW/2017/6/2017062216162494970.jpg" style="height: 418px; width: 485px" /></p>' +
            '<p class="MsoNormal" style="margin: 0cm 0cm 10pt;"><font size="3"><font color="#000000"><span style="font-family: &quot;微软雅黑&quot;, &quot;sans-serif&quot;; mso-ascii-font-family: tahoma; mso-hansi-font-family: tahoma;">　为进一步激励广大员工学技术、练本领、比技能的热情，为一线职工切磋技艺、展示技能提供平台，全面掀起生产高潮。</span><span lang="EN-US"><font face="Tahoma">5</font></span><span style="font-family: &quot;微软雅黑&quot;, &quot;sans-serif&quot;; mso-ascii-font-family: tahoma; mso-hansi-font-family: tahoma;">月</span><span lang="EN-US"><font face="Tahoma">18</font></span><span style="font-family: &quot;微软雅黑&quot;, &quot;sans-serif&quot;; mso-ascii-font-family: tahoma; mso-hansi-font-family: tahoma;">日，由公司工会主办的&ldquo;南钢第四届技术运动会精炼炉炉长技术比武实操比赛（三炼钢赛区</span><font face="Tahoma"> </font><span style="font-family: &quot;微软雅黑&quot;, &quot;sans-serif&quot;; mso-ascii-font-family: tahoma; mso-hansi-font-family: tahoma;">）&rdquo;如期进行，选手们个个摩拳擦掌，表示要用优异的成绩向厂庆</span><span lang="EN-US"><font face="Tahoma">60</font></span><span style="font-family: &quot;微软雅黑&quot;, &quot;sans-serif&quot;; mso-ascii-font-family: tahoma; mso-hansi-font-family: tahoma;">周年献礼！</span></font></font></p>\n' +
            '<p class="MsoNormal" style="margin: 0cm 0cm 10pt;"><font size="3"><font color="#000000"><span style="font-family: &quot;微软雅黑&quot;, &quot;sans-serif&quot;; mso-ascii-font-family: tahoma; mso-hansi-font-family: tahoma;">　　此次技术比武得到了公司工会和领导的高度重视，建立了健全的工作体系，成立了各小组对口的评价队伍，从而为比赛有序开展创造了条件，提供了组织保障，同时还广泛宣传、动员，让大家充分认识到比赛的意义和重要性，为技术比武营造了良好的氛围。来自炼钢车间的</span><span lang="EN-US"><font face="Tahoma">6</font></span><span style="font-family: &quot;微软雅黑&quot;, &quot;sans-serif&quot;; mso-ascii-font-family: tahoma; mso-hansi-font-family: tahoma;">名精炼炉炉长参加了此次比赛，裁判员由一炼钢、二炼钢和本厂的技术骨干共同担任。上午</span><span lang="EN-US"><font face="Tahoma">8</font></span><span style="font-family: &quot;微软雅黑&quot;, &quot;sans-serif&quot;; mso-ascii-font-family: tahoma; mso-hansi-font-family: tahoma;">点</span><span lang="EN-US"><font face="Tahoma">10</font></span><span style="font-family: &quot;微软雅黑&quot;, &quot;sans-serif&quot;; mso-ascii-font-family: tahoma; mso-hansi-font-family: tahoma;">分，技术比武实操比赛动员会在第三炼钢厂会议室召开，厂领导、裁判员、工作人员及选手参加了会议。会上，厂党委书记孔凡杰指出技术比武是激发员工爱岗敬业、钻研业务热情和培养技术过硬员工梯队的有效方法，是推动企业快速健康发展的需要，希望大家能够以技术比武为契机，赛出风格、赛出水平，总结经验教训，不断提升个人的操作水平和团队协作精神，以适应日益增长的品种结构的调整和质量的要求。</span><span lang="EN-US"><font face="Tahoma">9</font></span><span style="font-family: &quot;微软雅黑&quot;, &quot;sans-serif&quot;; mso-ascii-font-family: tahoma; mso-hansi-font-family: tahoma;">点，实操比赛正式开始，为了配合此次比赛，厂部在生产组织上做好了调整和安排。根据抽签产生的第一名选手刘玉富沉着冷静，从严肃、沉稳的表现来看，对日常的每一个操作都一丝不苟，裁判员们更是一板一眼的对每一处进行细致的检查和打分。比赛现场，炉前工们为每一个参赛炉长默默加油，每一个参赛选手也在暗暗较劲，认真的观察其他炉长冶炼一炉钢所采用的技能和应急方式，大家都拿出了看家本领，通过对到站温度、初始渣况、炉子气氛的细心观察和供电电流、供电电压、初始脱氧、氩气流量的精心操作，确保成分和温度的均匀，为比赛数据采集提供最可靠的保障。</span></font></font></p>\n' +
            '<p class="MsoNormal" style="margin: 0cm 0cm 10pt;"><font size="3"><font color="#000000"><span style="font-family: &quot;微软雅黑&quot;, &quot;sans-serif&quot;; mso-ascii-font-family: tahoma; mso-hansi-font-family: tahoma;">　　经过一天紧张的比拼，</span><span lang="EN-US"><font face="Tahoma">6</font></span><span style="font-family: &quot;微软雅黑&quot;, &quot;sans-serif&quot;; mso-ascii-font-family: tahoma; mso-hansi-font-family: tahoma;">名参赛炉长通过互相学习和切磋，充分展现了自我实力，深刻体会到团队的力量和上下到工序配合的重要性，同时也认识到工作中的不足，暴露了问题和缺点，为以后的工作加强针对性的学习提供了方向。他们在</span><span lang="EN-US"><font face="Tahoma">5</font></span><span style="font-family: &quot;微软雅黑&quot;, &quot;sans-serif&quot;; mso-ascii-font-family: tahoma; mso-hansi-font-family: tahoma;">月</span><span lang="EN-US"><font face="Tahoma">18</font></span><span style="font-family: &quot;微软雅黑&quot;, &quot;sans-serif&quot;; mso-ascii-font-family: tahoma; mso-hansi-font-family: tahoma;">日这天用特别的方式向厂庆</span><span lang="EN-US"><font face="Tahoma">60</font></span><span style="font-family: &quot;微软雅黑&quot;, &quot;sans-serif&quot;; mso-ascii-font-family: tahoma; mso-hansi-font-family: tahoma;">周年献礼！</span></font></font></p>\n' +
            '<p class="MsoNormal" style="margin: 0cm 0cm 10pt;"><span style="font-family: &quot;微软雅黑&quot;, &quot;sans-serif&quot;; mso-ascii-font-family: tahoma; mso-hansi-font-family: tahoma;"><font color="#000000" size="3">　　</font></span></p>\n'
          },
          {
            title: '第一烧结厂技运会诞生65.12万吨新月产纪录',
            imgs:'http://nggh.nisco.cn/UploadFiles/TPXW/2017/6/2017060215180953430.jpg',
            author: '侯莉莎',
            date: '2018-06-04',
            info: '五月份，第一烧结厂以技术运动会为契机，全月共生产合格烧结矿65.12万吨，创造了新的月产纪录。为使一年一度的技运会既能打出生产好成绩，又能达到锻炼队伍，提升素质的目的，第一烧结厂认真组织技运会团体赛和....',
            content:'<p><img alt="" src="http://nggh.nisco.cn/UploadFiles/TPXW/2017/6/2017060215180953430.jpg" style="height: 418px; width: 485px" /></p>' +
            '<p align="center" style="margin: 0cm 0cm 10pt; text-align: center;"><b style="mso-bidi-font-weight: normal;"><span lang="EN-US" style="font-family: 宋体; font-size: 15pt;"><font color="#000000">&nbsp;</font></span></b></p>\n' +
            '<p style="margin: 0cm 0cm 0pt; line-height: 150%; text-indent: 24pt; mso-char-indent-count: 2.0;"><span style="line-height: 150%; font-family: 宋体; font-size: 12pt;"><font color="#000000">五月份，第一烧结厂以技术运动会为契机，全月</font></span><span style="color: black; line-height: 150%; font-family: 宋体; font-size: 12pt; mso-bidi-font-family: 宋体;">共生产合格烧结矿</span><font color="#000000"><span lang="EN-US" style="line-height: 150%; font-family: 宋体; font-size: 12pt;">65.12</span><span style="line-height: 150%; font-family: 宋体; font-size: 12pt;">万吨，创造了新的月产纪录。</span></font></p>\n' +
            '<p style="margin: 0cm 0cm 10pt; line-height: 150%; text-indent: 24pt; mso-char-indent-count: 2.0;"><font color="#000000"><span style="line-height: 150%; font-family: 宋体; font-size: 12pt;">为使一年一度的技运会既能打出生产好成绩，又能达到锻炼队伍，提升素质的目的，第一烧结厂认真组织技运会</span><span style="line-height: 150%; font-family: 宋体; font-size: 12pt; mso-bidi-font-family: 宋体;">团体赛和个人赛</span><span style="line-height: 150%; font-family: 宋体; font-size: 12pt;">，</span></font><span style="color: black; line-height: 150%; font-family: 宋体; font-size: 12pt; mso-bidi-font-family: 宋体;">细化比赛方案、出好比赛试题、监控比赛过程，做好成绩统计。</span><span style="line-height: 150%; font-family: 宋体; font-size: 12pt; mso-bidi-font-size: 11.0pt;"><font color="#000000">三个烧结主作业区</font></span><span style="color: black; line-height: 150%; font-family: 宋体; font-size: 12pt; mso-bidi-font-family: 宋体; mso-bidi-font-size: 11.0pt;">对生产成本起关键作用的重点指标和对生产的影响因素，如烧结矿产量、转鼓强度、二元碱度指标、质量事故和工艺停机等指标进行重点控制，配料、混合、烧结主控、整粒等岗位加强协调、全力配合，操作上采取稳定机速、控制料温、保证风量，出现设备问题立即处理与解决。</span><span style="line-height: 150%; font-family: 宋体; font-size: 12pt;"><font color="#000000">第一烧结厂在生产现场、厂区等主要位置悬挂横幅和标语，</font></span><span style="color: black; line-height: 150%; font-family: 宋体; font-size: 12pt; mso-bidi-font-family: 宋体;">设立龙虎榜展示，每周用电子大屏公布一周数据，并同步在第一烧结厂生产信息交流平台上发布最新技运会统计与信息，全厂</span><span style="line-height: 150%; font-family: 宋体; font-size: 12pt;"><font color="#000000">员工热情高涨投入创先争优，诞生<span lang="EN-US">65.12</span></font><font color="#000000">万吨月产新纪录。</font></span></p>\n' +
            '<p style="margin: 0cm 0cm 0pt; line-height: 150%; text-indent: 24pt; mso-char-indent-count: 2.0;"><span lang="EN-US" style="line-height: 150%; font-family: 宋体; font-size: 12pt;"><font color="#000000">&nbsp;</font></span></p>\n' +
            '<p style="margin: 0cm 0cm 0pt; line-height: 150%;"><span lang="EN-US" style="line-height: 150%; font-family: 宋体; font-size: 12pt;"><font color="#000000">&nbsp;</font></span></p>\n' +
            '<p style="margin: 0cm 0cm 0pt; line-height: 150%;"><span lang="EN-US" style="line-height: 150%; font-family: 宋体; font-size: 12pt;"><font color="#000000">&nbsp;</font></span></p>\n' +
            '<p style="margin: 0cm 0cm 0pt; line-height: 150%; text-indent: 24pt; mso-char-indent-count: 2.0;"><span lang="EN-US" style="line-height: 150%; font-family: 宋体; font-size: 12pt;"><span style="mso-spacerun: yes;"><font color="#000000">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </font></span></span><span style="line-height: 150%; font-family: 宋体; font-size: 12pt;"><font color="#000000">第一烧结厂<span lang="EN-US"><span style="mso-spacerun: yes;">&nbsp; </span></span></font><font color="#000000">侯莉莎 </font></span></p>\n'
          },
          {
            title: '第四届技运会助力生球班产纪录不断刷新-南京钢铁联合有限公司工会',
            imgs:'http://nggh.nisco.cn/UploadFiles/TPXW/2018/5/201805111642275362.jpg',
            author: '王薇',
            date: '2018-05-11',
            info: '一种高效利用侧待温辊道的中厚板控温轧制工艺，属于中厚板轧制工艺技术领域，用于实施两块钢板一组的中厚板控温轧制工艺，以提高轧制效率。其技术方案是：两块钢板交替进入和退出两组侧待温辊道，缩短了钢板进入....',
            content:'<p align="center" class="MsoNormal" style="margin: 0cm 0cm 10pt; text-align: center; mso-line-height-alt: 11.0pt;"><font color="#000000"><b style="mso-bidi-font-weight: normal;"><span style="font-family: &quot;微软雅黑&quot;, &quot;sans-serif&quot;; font-size: 16pt; mso-ascii-font-family: tahoma; mso-hansi-font-family: tahoma;">第四届技运会助力生球班产纪录不断刷新</span></b><b style="mso-bidi-font-weight: normal;"><span lang="EN-US" style="font-size: 16pt;">　　</span></b></font></p>\n' +
            '<p class="MsoNormal" style="margin: 0cm 11.2pt 10pt 0cm; text-indent: 30pt; mso-char-indent-count: 2.0; mso-line-height-alt: 11.0pt; mso-para-margin-right: 1.02gd;"><span lang="EN-US" style="font-family: 宋体; font-size: 15pt; mso-ascii-theme-font: minor-fareast; mso-fareast-theme-font: minor-fareast; mso-hansi-theme-font: minor-fareast;">　<font color="#000000">&nbsp;</font>　</span></p>\n' +
            '<p class="MsoNormal" style="margin: 0cm 11.2pt 10pt 0cm; text-indent: 30pt; mso-char-indent-count: 2.0; mso-line-height-alt: 11.0pt; mso-para-margin-right: 1.02gd;"><span style="font-family: 宋体; font-size: 15pt; mso-ascii-theme-font: minor-fareast; mso-fareast-theme-font: minor-fareast; mso-hansi-theme-font: minor-fareast;"><font color="#000000">根据公司第四届生产技术运动会活动要求，原料厂<span lang="EN-US">5</span>月初召开活动准备会议，制定生产技术运动会方案，团体赛为原料工序 和球团工序指标创水平一条龙冠军争霸赛，为了确保产量有效突破，各职能组与作业区班组加强专业技术之间配合，优化生产计划编排和设备故障处理，达到稳产顺行。各班组岗位细化指标、落实责任，推动一条龙竞赛的深入开展，营造浓厚的&ldquo;你追我赶、奋勇争先&rdquo;的竞赛氛围。开赛一周，各岗位员工士气高涨，<span lang="EN-US" style="mso-bidi-font-weight: bold;">5</span><span style="mso-bidi-font-weight: bold;">月<span lang="EN-US">3</span>日小夜班，球团工序生球产量丁班班产创新高<span lang="EN-US">2337.7</span>吨破班产记录，<span lang="EN-US">5</span>月<span lang="EN-US">5</span>日甲班大夜班再次以班产<span lang="EN-US">2375.4</span>吨刷新纪录。<span lang="EN-US">　　</span></span></font></span></p>\n' +
            '<p class="MsoNormal" style="margin: 0cm 11.2pt 10pt 0cm; text-indent: 30pt; mso-char-indent-count: 2.0; mso-line-height-alt: 11.0pt; mso-para-margin-right: 1.02gd;"><span lang="EN-US" style="font-family: 宋体; font-size: 15pt; mso-ascii-theme-font: minor-fareast; mso-fareast-theme-font: minor-fareast; mso-hansi-theme-font: minor-fareast; mso-bidi-font-weight: bold;">　<font color="#000000">&nbsp;</font>　</span></p>\n' +
            '<p class="MsoNormal" style="margin: 0cm 11.2pt 10pt 0cm; text-indent: 300pt; mso-char-indent-count: 20.0; mso-line-height-alt: 11.0pt; mso-para-margin-right: 1.02gd;"><span style="font-family: 宋体; font-size: 15pt; mso-ascii-theme-font: minor-fareast; mso-fareast-theme-font: minor-fareast; mso-hansi-theme-font: minor-fareast; mso-bidi-font-weight: bold;"><font color="#000000">原料厂：王薇<span lang="EN-US">　　</span></font></span></p>\n' +
            '<p class="MsoNormal" style="margin: 0cm 11.2pt 10pt 0cm; text-indent: 30pt; mso-char-indent-count: 2.0; mso-line-height-alt: 11.0pt; mso-para-margin-right: 1.02gd;"><span lang="EN-US" style="font-family: 宋体; font-size: 15pt; mso-ascii-theme-font: minor-fareast; mso-fareast-theme-font: minor-fareast; mso-hansi-theme-font: minor-fareast;">　<font color="#000000">&nbsp;</font>　</span></p>\n' +
            '<p><img alt="" src="http://nggh.nisco.cn/UploadFiles/TPXW/2018/5/201805111642275362.jpg" style="height: 418px; width: 485px"  /></p>\n'
          },
          {
            title: '新产业举办金贸库岗位技术比武活动',
            imgs:'http://nggh.nisco.cn/UploadFiles/TPXW/2019/6/201906131543188003.jpg',
            author: '陈恋',
            date: '2019-06-13',
            info: '为了进一步激发广大职工学业务、钻技术的热情，营造“尊重知识、尊重人才、尊重劳动、尊重技能”的良好风尚，切实提高岗位职业技能和业务技术水平，新产业投资集团根据公司相关要求，结合金贸库实际情况，特举行“岗位练兵强技能、技术比武展风采——第五届生产岗位技术大比武....',
            content:'     <div>&nbsp; &nbsp; &nbsp; &nbsp; 为了进一步激发广大职工学业务、钻技术的热情，营造&ldquo;尊重知识、尊重人才、尊重劳动、尊重技能&rdquo;的良好风尚，切实提高岗位职业技能和业务技术水平，新产业投资集团根据公司相关要求，结合金贸库实际情况，特举行&ldquo;岗位练兵强技能、技术比武展风采&mdash;&mdash;第五届生产岗位技术大比武&rdquo;岗位技术比武活动。</div>\n' +
            '<div>　　此次技术比武活动在公司领导统一安排部署下，以提高岗位技术水平，强化技能练兵为目标。班组长带领员工在强化安全生产的前提下，全力开展技术比武活动。活动期间，实行安全一票否决制，始终将安全放在一切工作的首位。本次活动持续一个月，库区将安排专职人员将各项生产数据及时更新、及时公布，严格按既定的活动方案进行评分，做到客观、公平、公正。评选结果将于活动结束后在全公司进行公布，针对表现优异的员工公司将予以表彰。</div>\n' +
            '<div><img alt="" src="http://nggh.nisco.cn/UploadFiles/TPXW/2019/6/201906131543188003.jpg" style="width: 600px; height: 450px;" /></div>\n'
          }
        ]
      }
    },
    methods: {
      handleClick(item) {
        this.$router.push({
          name: '详情',
          params: {
            article: item
          }
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
</style>

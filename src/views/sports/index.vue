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
  import navLeft from '../../components/news/navLeft'
  import cardConcertNav from '../../components/news/cardConcertNav'

  export default {
    components: { Card, navLeft, cardConcertNav },
    name: 'Sports',
    computed: {
      ...mapGetters([
        'name'
      ])
    },
    data() {
      return {
        tabType:'0',
        levelList: null,
        active: ['1','2','3','4'],
        three: [
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
        ],
        four:[
          {
            title: '中厚板卷厂产品检验工技术比武纪实',
            imgs:'http://nggh.nisco.cn/UploadFiles/TPXW/2018/5/201805211148414577.jpg',
            author: '中厚板卷厂',
            date: '2018-05-21',
            info: '在公司深入学习贯彻党的十九大精神，喜迎南钢建厂60周年之际，为更好地提高职工队伍的岗位职业技能和业务技术水平，充分调动职工的积极性，培育精益求精的工匠精神，提升职工的职业技能素质，努力打造一支高素质、高技能的职工队伍，板材事业部中厚板卷厂5月15日举办检验工技术运动会,共有30名检验工参加此次技术比....',
            content:'<p>&emsp;&emsp;在公司深入学习贯彻党的十九大精神，喜迎南钢建厂60周年之际，为更好地提高职工队伍的岗位职业技能和业务技术水平，充分调动职工的积极性，培育精益求精的工匠精神，提升职工的职业技能素质，努力打造一支高素质、高技能的职工队伍，板材事业部中厚板卷厂5月15日举办检验工技术运动会,共有30名检验工参加此次技术比武。</p>' +
            '<img alt="" src="http://nggh.nisco.cn/UploadFiles/TPXW/2018/5/201805211148414577.jpg" style="height: 418px; width: 485px"" />' +
            '<p>&emsp;&emsp;比武前，产品管理室组织所有检验工学习此次技术运动会的会议精神，对检验工进行岗位操作规程培训，技术运动会流程分为检验工理论知识考试和实际操作考试两部分。考评人根据理论知识考试、实际操作考试以及岗位业绩综合考评进行综合打分、排名。</p>' +
            '<img alt="" src="http://nggh.nisco.cn/UploadFiles/TPXW/2018/5/201805211149596055.jpg" style="height: 418px; width: 485px"" />' +
            '<p>&emsp;&emsp;运动会比赛结束后主管单位及参赛人员召开赛后分析会，总结经验，查找不足，吸取教训，对检验能力不足的检验工进行岗位培训。本次运动会能够进一步加强对检验工的管理、增进检验岗位的检验技能，促进员工的职业素养，保证安全检验、质量检验工作精细化。</p>' +
            '<img alt="" src="http://nggh.nisco.cn/UploadFiles/TPXW/2018/5/201805211150339954.jpg" style="height: 418px; width: 485px"" />'
          },
          {
            title: '公司第四届生产技术运动会探伤工技能竞赛落下帷幕',
            imgs:'http://nggh.nisco.cn/UploadFiles/TPXW/2018/5/201805211149596055.jpg',
            author: '孙昌松',
            date: '2018-05-30',
            info: '南钢第四届生产技术运动会---探伤工技能竞赛于5月29日在南钢大学落下帷幕！由特钢事业部、板材事业部共同参与的公司探伤工技术大比武，首先在各事业部内部进行了初赛，共选出12名（特钢6名、板材6名）种子选手参加公司探伤工技能竞赛，竞赛共分为理论考试、实践比武等两个部分，其中理论考试成绩占30%，实践比武....',
            content:'<p>&emsp;&emsp;公司第四届生产技术运动会探伤工技能竞赛落下帷幕</p>' +
            '<p>&emsp;&emsp;南钢第四届生产技术运动会探伤工技能竞赛于5月29日在南钢大学落下帷幕！由特钢事业部、板材事业部共同参与的公司探伤工技术大比武，首先在各事业部内部进行了初赛，共选出12名（特钢6名、板材6名）种子选手参加公司探伤工技能竞赛，竞赛共分为理论考试、实践比武等两个部分，其中理论考试成绩占30%，实践比武成绩占70%。</p>' +
            '<p>&emsp;&emsp;名参赛选手精心准备、放弃了自己的休息时间，刻苦学习，不断模拟实践，经过不到2周的了努力，12名选手就完成探伤工理论知识的考试。</p>' +
            '<p>&emsp;&emsp;竞赛的重头戏在实践比武，公司工会和各事业部都很重视，从比武所用样块的设计、采购、现场监造等方面精心筹划，制定计划、跟踪落实，确保了比武所需的设备、器材等在保密的情况下按计划到达南钢大学比赛现场。</p>' +
            '<p>&emsp;&emsp;月29日上午8:30，公司工会张主席亲临现场，给选手加油、鼓劲，并要求选手们要赛出水平、赛出风格、赛出南钢风采。并勉励所有选手要以技能竞赛为推手，不断提高技能，培养南钢具有国内一流水平的探伤工匠。</p>' +
            '<p>&emsp;&emsp;上午8:50，探伤工实践比武正式开始，实践考试共分为三个部分，首先是探伤实践技能知识的考试，主要考核探伤工对标准、设备应用、故障判断等方面的知识。接着就分组进行实际操作，为了公平竞争，实践考核兼顾到圆钢、板材的各自特点，分别对圆钢、板材进行手动探伤，12名选手共分为六组，每组2人，每组实践操作计划时间60分钟。每位选手有2各裁判全程跟踪比赛过程，对探伤的过程进行记录、评价。探伤选手根据自己实操探伤的结果撰写检测评价报告。经过近7个小时的紧张工作，选手比赛一丝不苟，评委评价公正认真。</p>' +
            '<p>&emsp;&emsp;全体选手比出了水平，赛出了风格，为进一步促进南钢所有探伤工热爱学习、提高技能，做好南钢质量卫士提供了动力源。</p>' +
            '<p>&emsp;&emsp;赛后，评委根据竞赛规则和评分细则对各选手的实践操作水平进行评价。</p>' +
            '<p>&emsp;&emsp;后续公司工会会根据每位选手的理论成绩、实操成绩进行综合评分，最终得出个位选手的竞赛成绩。</p>'
          },
          {
            title: '第三炼钢厂第四届生产技术运动会拉开帷幕',
            imgs:'http://nggh.nisco.cn',
            author: '卢亚然',
            date: '2018-05-09',
            info: '5月2日，第三炼钢厂职工技运会精炼炉长、连铸P3工、行车工等代表在会议室听取了公司关于第四届技运会的方案，标志着厂第四届职工技术运动会拉开帷幕。一年一届的职工技运会是南钢坚持实施“人才强企”战略的一项传统举措，历届技运会培养了大批技能型人才。第三炼钢厂本次共有三个工种分别参加公司级、事业部....',
            content:'<p>&emsp;&emsp;5月2日，第三炼钢厂职工技运会精炼炉长、连铸P3工、行车工等代表在会议室听取了公司关于第四届技运会的方案，标志着厂第四届职工技术运动会拉开帷幕。</p>' +
            '<p>&emsp;&emsp;一年一届的职工技运会是南钢坚持实施“人才强企”战略的一项传统举措，历届技运会培养了大批技能型人才。第三炼钢厂本次共有三个工种分别参加公司级、事业部级和厂级的比赛。</p>' +
            '<p>&emsp;&emsp;在4月底，厂工会连同生技科和相关车间制定了详细的比赛方案，理论、实际操作双管齐下。在厂区显著位置悬挂横幅，利用电子大屏滚动播放宣传标语，营造技运会氛围。技运会领导小组要求相关单位加强组织领导，加强高效推进，加强正向激励。对竞赛涌现出的技术状元和技术能手在立功和奖励的同时，加强宣传，营造学技术、亮技艺、比贡献的良好氛围。</p>'
          }
        ],
        five:[
          {
            title: '大干红五月原料厂实现产量“三连破”',
            imgs:'http://nggh.nisco.cn/UploadFiles/TPXW/2019/5/201905311553540519.png',
            author: '王薇',
            date: '2019-05-31',
            info: '5月份，原料厂围绕“大干红五月”、“第五届生产技术运动会”组织开展各项安全生产活动，团结凝聚各方力量，充分调动全员积极性，充分发挥党政工团各级组织作用，制定了劳动竞赛活动意见和技术比武方案，讨论制定比赛规程规则，成立工作领导组，为组织劳动竞赛和技术比武的有效开展提供保障。要求各单位要高度重视竞赛工作，切实做好竞赛目标的落实。通过全员发动，精心组织、协调奋战，高效运行，班产纪....',
            content:'<p>&emsp;&emsp;5月份，原料厂围绕“大干红五月”、“第五届生产技术运动会”组织开展各项安全生产活动，团结凝聚各方力量，充分调动全员积极性，充分发挥党政工团各级组织作用，制定了劳动竞赛活动意见和技术比武方案，讨论制定比赛规程规则，成立工作领导组，为组织劳动竞赛和技术比武的有效开展提供保障。要求各单位要高度重视竞赛工作，切实做好竞赛目标的落实。通过全员发动，精心组织、协调奋战，高效运行，班产纪录不断刷新。</p>' +
            '<p>&emsp;&emsp;全月生产优质球团矿182464吨，再次刷新2019年3月份181201吨的历史最高纪录；同时优化用料结构，合理组织生产总降本达2300万元，各项关键指标大幅提升。球团矿产量实现2019年的“三连破”，这既是巅峰更是起点。炼铁人将继续发扬开拓创新，攻坚克难的精神，不断超越，为“高效率、低成本”生产再立新功！</p>' +
            '<img alt="" src="/UploadFiles/TPXW/2019/5/201905311553540519.png" style="width: 600px; height: 450px;" />'
          },
          {
            title: '中棒厂第五届生产技术运动会取得圆满成功',
            imgs:'http://nggh.nisco.cn',
            author: '朱菊华',
            date: '2019-05-31',
            info: '火红的五月，迎来了南钢第五届生产技术运动会，根据公司工会和特钢事业部的总体部署，中棒厂工会开展了以“赛技能，夺状元，大干红五月”为主题的技术运动会。全月热轧产量73600吨，入库产量72600吨，双双打破了历史记录，取得了中棒历史上又一里程碑。在横班一条龙冠军赛中，甲作业区最后以领先30分的绝对优势，夺得本次比赛的桂冠。同时，共开展了8个岗位技....',
            content:'<p>&emsp;&emsp;火红的五月，迎来了南钢第五届生产技术运动会，根据公司工会和特钢事业部的总体部署，中棒厂工会开展了以&ldquo;赛技能，夺状元，大干红五月&rdquo;为主题的技术运动会。全月热轧产量73600吨，入库产量72600吨，双双打破了历史记录，取得了中棒历史上又一里程碑。在横班一条龙冠军赛中，甲作业区最后以领先30分的绝对优势，夺得本次比赛的桂冠。同时，共开展了8个岗位技能竞赛，通过严格的理论考试和生动的实践考试，杨勇等一批人取得了8项比赛的岗位技能能手，圆满完成了本次生产技术运动会的各项竞赛项目，取得了很好的成果。</p>' +
            '<p>&emsp;&emsp;指标量化为抓手：为了充分体现比赛的公平、公正，中棒厂工会在月初组织召开了专门的研讨会，对本次比武的活动方案征求了广大职工代表的意见，参赛的指标绝大多数是可以量化的技经指标，成绩取一个月的综合成绩。通过每周更新龙虎榜、大屏幕等方式调动员工积极性，从设备、质量、优化工艺和生产计划全方面指标细化，力争公平公正。</p>' +
            '<p>&emsp;&emsp;班产竞赛促成绩：在开展一条龙竞赛的同时，设置超班产奖励，超日产奖励。为保证本月产量突破原来历史记录，中棒厂在设置条龙冠军赛奖励的同时，对超过班产计划100吨的作业区按超出产量10元/吨进行奖励。极大地提高了员工的积极性。同时，在设置一条龙冠军赛的同时，将影响成本较大的成材率指标设置占比40%，要求各作业区时刻关注切头和回收情况，为成材率降本做出应有的贡献，在各个作业区的的共同努力下，红五月成材率比计划动态成材率提高0.49%，成材率共计降本270万元，达到了5月初制定的指标。</p>' +
            '<p>&emsp;&emsp;总结推广出成绩：狠抓成本，自三月份开始，中棒厂每周一都会组织开展一次四十分钟左右的成本分析会议，由专门的成本控制人员对上一周的成本进行汇报总结，从坯料成本、成材率、动力成本、轧辊成本、人工成本等各个方面进行全方位分析，对于降本稍微欠缺的作业区，大家一起研究出解决方案，齐心协力为降本增益做出贡献。对于好的经验和创意进行表扬，巩固成果，并由此制定出下个星期的降本重点计划。5月份，中棒厂克服产量等各方面的不利因素，完成降本230余万元。</p>'
          },
          {
            title: '高线厂工会组织完成事业部质检工实践比武项目',
            imgs:'http://nggh.nisco.cn/UploadFiles/TPXW/2019/5/201905290952454156.jpg',
            author: '郭丽伟',
            date: '2019-05-29',
            info: '5月28日，高线厂工会组织了线材成品检验技术实践比武，作为事业部比武项目，五家长材单位集中进行了理论考试，实践根据各家工艺不同分别组织实践考试。在高线厂实践考试赛场，邀请了精整厂技术人员一同监考，互相学习互相指导。作为每年的常规比赛项目，检验人员表示每年都能学到一些新的经验....',
            content:'<p>&emsp;&emsp;5月28日，高线厂工会组织了线材成品检验技术实践比武，作为事业部比武项目，五家长材单位集中进行了理论考试，实践根据各家工艺不同分别组织实践考试。在高线厂实践考试赛场，邀请了精整厂技术人员一同监考，互相学习互相指导。</p>' +
            '<p>&emsp;&emsp;作为每年的常规比赛项目，检验人员表示每年都能学到一些新的经验和技术，几个班的检验工一起交流切磋，机会也很难得。每年主题项目不一样，也使的比武更加有趣。</p>' +
            '<p>&emsp;&emsp;本次实践比武的项目是螺纹钢的弯曲试验，考验选手的规范性和操作的数量程度。今年的选题主要考虑到跟棒材同步比武，大家的实践类别都选取了类似的项目，增加可比性等。</p>' +
            '<p>&emsp;&emsp;厂工会希望通过开展成品检验技术比武活动，激发了广大员工钻研业务技术的积极性，推动员工整体技术素质的提高，进一步在全厂范围内形成了尊重技术、尊重劳动、尊重知识、尊重人才、尊重创新的良好氛围。</p>' +
            '<p>&emsp;&emsp;截止目前，实践成绩已报特钢事业部党工委。</p>' +
            '<p>&emsp;&emsp;高线厂 郭丽伟</p>' +
            '<img alt="" src="http://nggh.nisco.cn/UploadFiles/TPXW/2019/5/201905290952454156.jpg" style="width: 195px; height: 161px;" />&nbsp;&nbsp; <img alt="" src="http://nggh.nisco.cn/UploadFiles/TPXW/2019/5/201905290953519551.jpg" style="width: 138px; height: 160px;" />'
          }
        ],
        navItems: [
          {
            name: '第三届生技会',
            code:'three',
            active: true
          },
          {
            name: '第四届生技会',
            code:'four',
            active: false
          },
          {
            name: '第五届生技会',
            code:'five',
            active: false
          }
        ],
        listOption: [],
        code:'advise'
      }
    },
    created(){
      this.listOption = this.three
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
      handleTabClick(targetName) {
        const index = targetName.index;
        if(index) this.$router.replace({path: `/sports/${index}`} || './')
      },
      callback(item) {
        this.listOption = this[`${item.code}`]
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

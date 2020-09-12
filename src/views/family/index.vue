<template>
  <div class="mainBox">
    <div class="mainContent">
      <el-tabs :tab-position="position">
        <el-tab-pane label="我要入会">
          <Members></Members>
        </el-tab-pane>
        <el-tab-pane label="职工创新">
          <el-tabs type="border-card">
            <el-tab-pane label="合理化建议">
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
            </el-tab-pane>
            <el-tab-pane label="先进操作法">
              <div class="mainList">
                <el-collapse v-model="active">
                  <el-collapse-item name="1" v-for="(item, index) in operate" :key="index">
                    <template slot="title">
                      <el-link @click="handleClick(item)" target="_blank">{{item.title}}</el-link>
                    </template>
                    <Card :info="item.info" :date="item.date" :author="item.author"></Card>
                  </el-collapse-item>
                </el-collapse>
              </div>
            </el-tab-pane>
            <el-tab-pane label="创新增效">创新增效</el-tab-pane>
          </el-tabs>
        </el-tab-pane>
        <el-tab-pane label="红娘牵线">
          <Love></Love>
        </el-tab-pane>
        <el-tab-pane label="普惠服务">
          <el-tabs type="border-card">
            <el-tab-pane label="职工生日会">
            </el-tab-pane>
            <el-tab-pane label="工会在身边">
              <div class="mainList">
                <el-collapse v-model="active">
                  <el-collapse-item name="1" v-for="(item, index) in around" :key="index">
                    <template slot="title">
                      <el-link @click="handleClick(item)" target="_blank">{{item.title}}</el-link>
                    </template>
                    <Card :info="item.info" :date="item.date" :author="item.author"></Card>
                  </el-collapse-item>
                </el-collapse>
              </div>
            </el-tab-pane>
            <el-tab-pane label="困难帮扶">
            </el-tab-pane>
            <el-tab-pane label="女工关乎">
              <div class="mainList">
                <el-collapse v-model="active">
                  <el-collapse-item name="1" v-for="(item, index) in woman" :key="index">
                    <template slot="title">
                      <el-link @click="handleClick(item)" target="_blank">{{item.title}}</el-link>
                    </template>
                    <Card :info="item.info" :date="item.date" :author="item.author"></Card>
                  </el-collapse-item>
                </el-collapse>
              </div>
            </el-tab-pane>
            <el-tab-pane label="助学贷款">
            </el-tab-pane>
          </el-tabs>
        </el-tab-pane>
        <el-tab-pane label="工会风采">
          <el-tabs type="border-card">
            <el-tab-pane label="职工风采">
              <div class="mainList">
                <el-collapse v-model="active">
                  <el-collapse-item name="1" v-for="(item, index) in workers" :key="index">
                    <template slot="title">
                      <el-link @click="handleClick(item)" target="_blank">{{item.title}}</el-link>
                    </template>
                    <Card :info="item.info" :date="item.date" :author="item.author"></Card>
                  </el-collapse-item>
                </el-collapse>
              </div>
            </el-tab-pane>
            <el-tab-pane label="劳模先进">
            </el-tab-pane>
            <el-tab-pane label="工匠评优">
            </el-tab-pane>
            <el-tab-pane label="创新工作室">
            </el-tab-pane>
          </el-tabs>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import Card from '../../components/Card'
  import Members from '../../components/Members'
  import Love from '../../components/Love'
  import AllService from '../../components/AllService'

  export default {
    name: 'Family',
    components: { Card, Members, Love, AllService },
    data() {
      return {
        position: 'left',
        active: ['1','2','3','4'],
        list: [
          {
            title: '工作的系统化、流程化、无纸化',
            author: '武美玉',
            date: '2019-09-02',
            info: '建立合理化建议收集、反馈系统，对合理化建议实行电子表单化管理，发挥信息系统的自动跟踪分析功能。将用于合理化建议奖励的部分资金划....',
            content:'<p> &emsp;&emsp;建立合理化建议收集、反馈系统，对合理化建议实行电子表单化管理，发挥信息系统的自动跟踪分析功能。将用于合理化建议奖励的部分资金划拨至基层单位，由基层单位负责与本单位相关的合理化建议的评审及奖励工作，使合理化建' +
            '议得到及时有效实施，提升建议评审、奖励、实施的效率。将员工提交的跨业务、跨专业的合理化建议集中组织评审。并将合理化建议工作作为三支人才评定的重要依据纳入人才队伍建设，开展"每月一星"、合理化建议冠亚季军等奖励活动，引导员工持续改善与提高。</p>'
          },
          {
            title: '实行周提交、周评审、月反馈的工作流程',
            author: '郎闯',
            date: '2019-08-22',
            info: '总结分析合理化建议工作推进过程中存在的问题，制定改进措施，提高工作效率，层层提交、层层评审，自下而上地建立了"基层单位-专业评审组....',
            content:'<p>&emsp;&emsp;总结分析合理化建议工作推进过程中存在的问题，制定改进措施，提高工作效率，层层提交、层层评审，自下而上地建立了"基层单位-专业评审组-分公司级"三级推进机制。各单位进一步完善合理化建议活动实施方案，根据实际情况，同步建立了评审及奖励机制，积极查找工作中的改善点。将合理化建议工作与"五好一准确"优秀班组创建，主任工程师、两个带头人、技师津贴有机结合。技术人员还深入班组为员工修改、完善合理化建议，并帮助实施采纳的建议。</p>'
          },
          {
            title: '加大合理化建议奖励力度',
            author: '孙强',
            date: '2019-07-10',
            info: '将收集到的合理化建议分设参与奖、采纳奖、项目奖、节创价值奖等4个奖项，统一奖励。对于已实施的合理化建议在一年内因改善而降低成本或增....',
            content:'<p>&emsp;&emsp;将收集到的合理化建议分设参与奖、采纳奖、项目奖、节创价值奖等4个奖项，统一奖励。对于已实施的合理化建议在一年内因改善而降低成本或增加收入的，该公司按年节约或新创价值的2%提奖金，最高奖励达5万元。将可行性、经济性和' +
            '安全性检查效果明显的建议，由评审部门下发《合理化建议实施工作联系单》及详细实施计划，督促责任单位按照时间节点尽快实施，并跟踪阶段性效果;对于不能明确预测实施效果的建议，出具试验或试行方案，在小范围内对实施效果加以验证后再确定具体实施方案。在技术质量类合理化建议评审工作中加入"确认建议"流程。评审前，技术专责人先与合理化建议提交单位沟通，落实建议的真实性、准确性及必要性，作为评审参考，再提出采纳或不采纳的意见、理由。</p>'
          },
          {
            title: '建立公司级、分厂（单位）级、班组（科室）级三级管理模式',
            author: '陈中飞',
            date: '2019-07-05',
            info: '将合理化建议工作纳入"五好一准确"优秀班组创建工作中，实行自己提、自己改、改自己，提高班组的民-主管理能力。将年度合理化建议目标分解到....',
            content:'<p>&emsp;&emsp;将合理化建议工作纳入"五好一准确"优秀班组创建工作中，实行自己提、自己改、改自己，提高班组的民-主管理能力。将年度合理化建议目标分解到各单位，制定下发合理化建议工作' +
            '管理办法、推进方案、实施办法，开展精益生产、精细化管理和合理化建议劳动竞赛，细化合理化建议的收集、汇总、评审、实施、奖励、公示、存档程序。</p>'
          }
        ],
        operate: [
          {
            title: '棉包长丝、氨纶丝细纱接头法',
            author: '张晓燕',
            date: '2019-11-02',
            info: '棉包长丝、氨纶丝细纱生产是棉纺厂在2004年接产的新品种，按照传统的接头工艺方法根本不能实现长丝、氨纶丝细纱的接头，张晓....',
            content:'<p> &emsp;&emsp;棉包长丝、氨纶丝细纱生产是棉纺厂在2004年接产的新品种，按照传统的接头工艺方法根本不能实现长丝、氨纶丝细纱的接头，张晓燕等技术骨干针对生产中的瓶颈问题，经反复试验和研究，摸索总结出了新的接头工艺方法。此方法杜绝无丝纱和纱回弹异常流入后部，造成布面弹异常和纬节，提高布面质量。现已在天纺公司全部棉纺织厂中推广。</p>'
          },
          {
            title: '“四字”平地法',
            author: '赵希望',
            date: '2019-10-14',
            info: '赵希望同志长期从事平地机操作，不断总结研究各种型号平地机性能、工作原理和操作要领，还注意学习挖掘周围老师傅们的实践....',
            content:'<p> &emsp;&emsp;赵希望同志长期从事平地机操作，不断总结研究各种型号平地机性能、工作原理和操作要领，还注意学习挖掘周围老师傅们的实践经验，从而总结出了平地机“全、细、轻、稳”四字操作法，体现了把握工作现场全局，精确作业环节，又好又稳又快的特点。由于四字操作法易于掌握，实用性强，整平质量高，因此在公路系统中被广泛推广，在津涞、津静、' +
            '津港各公路和京沈、津蓟高速等十几项大型公路工程中，以此操作法为规范的平地作业效率和路面基础平整度得到了业主和监理的一致好评，被誉为“免验工序”，赢得了良好的经济效益和社会效益。</p>'
          },
          {
            title: '“三勤”洗钾法',
            author: '刘秀红',
            date: '2019-10-13',
            info: '刘秀红在洗钾岗位工作了7年。她热爱岗位，认真钻研洗钾岗位操作技能，不断摸索总结最佳的操作程序，发明了“三勤”洗钾法。该操作法以....',
            content:'<p> &emsp;&emsp;刘秀红在洗钾岗位工作了7年。她热爱岗位，认真钻研洗钾岗位操作技能，不断摸索总结最佳的操作程序，发明了“三勤”洗钾法。该操作法以眼勤、手勤、腿勤为工作着力点，科学定位了“三勤”排序和操作内容，保证了洗钾的高质量，具有很好的推广价值。发明“三勤”洗钾法后产品质量长期保持优质稳定，含纯始终控制在90-91.5%之内，使钾的损失率降低到最低值，他所在的班组产品质量始终位居各班之首，为企业创效154万余元。</p>'
          },
          {
            title: '新型装、平煤操作法',
            author: '葛振生',
            date: '2019-09-12',
            info: '此操作法主要是装煤工看到3个装煤口装满煤后，暂时停止装煤，通知推焦车司机开始平煤，待看到3号装煤口平通....',
            content:'<p> &emsp;&emsp;此操作法主要是装煤工看到3个装煤口装满煤后，暂时停止装煤，通知推焦车司机开始平煤，待看到3号装煤口平通后，将平煤杆拉出停在1号装煤口处，然后再从3号、2号装煤口依次各装一股煤，再通知推焦车司机开始平煤，此时平煤先多平短杆，再平长杆。此操作法解决了困扰焦炉生产30多年的炭化室焦侧装不满煤，装煤缺角的难题，提高了焦碳和化产品的产量，创造了可观的经济效益。</p>'
          }
        ],
        workers: [
          {
            title: '战高温、保生产、送清凉——第一炼铁厂在行动',
            imgs: 'http://nggh.nisco.cn/UploadFiles/xwdt/2020/8/202008201441005097.png',
            author: '房华',
            date: '2020-08-20',
            info: '近两天，南京热浪来袭，这对于钢铁厂来说，更是进入了烧烤模式，第一炼铁厂高炉出铁厂区域已经达到60℃，铁口附近更是到了近100℃的辐射温度，但炉前工以及各个条线的员工都有条不紊地进行着日常工作，汗水湿透了他们的工作服，丝毫未影响他们的工作热情。8月3日中....',
            content:'<p align="center" style="background: rgb(255, 255, 255); margin: 0pt 0pt 10.5pt; text-align: center; mso-pagination: widow-orphan; mso-outline-level: 2;"><span style="color: rgb(51, 51, 51); letter-spacing: 0.4pt; font-family: 宋体; font-size: 12pt; mso-spacerun: &quot;yes&quot;; mso-font-kerning: 0.0000pt;"><font face="宋体">战高温、保生产、送清凉</font>——第一炼铁厂在行动</span></p>\n' +
            '<p style="margin: 0pt; line-height: 150%; text-indent: 25.6pt; mso-char-indent-count: 2.0000;"><span style="background: rgb(255, 255, 255); color: rgb(51, 51, 51); line-height: 150%; letter-spacing: 0.4pt; font-family: 宋体; font-size: 12pt; mso-spacerun: &quot;yes&quot;; mso-font-kerning: 1.0000pt; mso-bidi-font-family: &quot;Times New Roman&quot;; mso-shading: rgb(255, 255, 255);"><font face="宋体">近两天，南京热浪来袭，这对于钢铁厂来说，更是进入了烧烤模式，第一炼铁厂高炉出铁厂区域已经达到</font>60℃，铁口附近更是到了近100℃的辐射温度，但炉前工以及各个条线的员工都有条不紊地进行着日常工作，汗水湿透了他们的工作服，丝毫未影响他们的工作热情。8月3日中午3号高炉工艺休风更换小套、吹管，时间紧、任务重，高炉三车间人员午饭都顾不上吃，抓紧时间完成检修任务。</span></p>\n' +
            '<p style="margin: 0pt; line-height: 150%; text-indent: 25.6pt; mso-char-indent-count: 2.0000;"><span style="background: rgb(255, 255, 255); color: rgb(51, 51, 51); line-height: 150%; letter-spacing: 0.4pt; font-family: 宋体; font-size: 12pt; mso-spacerun: &quot;yes&quot;; mso-font-kerning: 1.0000pt; mso-bidi-font-family: &quot;Times New Roman&quot;; mso-shading: rgb(255, 255, 255);"><font face="宋体">针对高温天气第一炼铁厂全面部署防暑降温工作：安全管理室负责降温药品的准备工作，综合室负责清凉饮料的准备工作；设备系统对现场液压等区域空调运行情况开展检查；施工项目提早开工、同时超过</font>35℃，按公司规定进行错峰施工。</span></p>\n' +
            '<p style="margin: 0pt; line-height: 150%; text-indent: 25.6pt; mso-char-indent-count: 2.0000;"><span style="background: rgb(255, 255, 255); color: rgb(51, 51, 51); line-height: 150%; letter-spacing: 0.4pt; font-family: 宋体; font-size: 12pt; mso-spacerun: &quot;yes&quot;; mso-font-kerning: 1.0000pt; mso-bidi-font-family: &quot;Times New Roman&quot;; mso-shading: rgb(255, 255, 255);"><font face="宋体">天气骤热，为切实做好防暑降温工作，第一炼铁厂从今天起开启</font>“夏日送清凉、点滴暖人心”活动，为始终坚持在岗，经受着现场生产高温“烤”验的员工和相关方人员送上冷饮，盐汽水等，并叮嘱大家要劳逸结合，安全作业，平安度夏。</span></p>\n' +
            '<p style="margin: 0pt; line-height: 150%; text-indent: 25.6pt; mso-char-indent-count: 2.0000;"><span style="background: rgb(255, 255, 255); color: rgb(51, 51, 51); line-height: 150%; letter-spacing: 0.4pt; font-family: 宋体; font-size: 12pt; mso-spacerun: &quot;yes&quot;; mso-font-kerning: 1.0000pt; mso-bidi-font-family: &quot;Times New Roman&quot;; mso-shading: rgb(255, 255, 255);"><font face="宋体">在第一炼铁厂的现场到处可见认真工作的人们，在为这涓涓而流的铁水奋斗着</font>……&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; （房华/文&nbsp;&nbsp; 孟昭杰/图）</span></p>\n' +
            '<p style="margin: 0pt; line-height: 150%; text-indent: 25.6pt; mso-char-indent-count: 2.0000;"><span style="background: rgb(255, 255, 255); color: rgb(51, 51, 51); line-height: 150%; letter-spacing: 0.4pt; font-family: 宋体; font-size: 12pt; mso-spacerun: &quot;yes&quot;; mso-font-kerning: 1.0000pt; mso-bidi-font-family: &quot;Times New Roman&quot;; mso-shading: rgb(255, 255, 255);">&nbsp;<span style="color: rgb(51, 51, 51); letter-spacing: 0.4pt; font-family: 宋体; font-size: 12pt; mso-spacerun: &quot;yes&quot;; mso-font-kerning: 0.0000pt;"><font face="宋体"><img alt="" src="http://nggh.nisco.cn/UploadFiles/xwdt/2020/8/202008201441005097.png" style="width: 482px; height: 701px;" /></font></span></span></p>\n'
          },
          {
            title: '小车队开展“第二十一次夏季百日安全竞赛活动”-南京钢铁联合有限公司工会',
            imgs: 'http://nggh.nisco.cn/UploadFiles/xwdt/2020/7/202007021645322105.jpg',
            author: '公司办公室',
            date: '2020-07-02',
            info: '公司办小车队为了贯彻全国第19个“安全生产月”落实国家、省、市、新区的统一布置，进一步加强安全生产宣传教育工作，牢固树立安全发展理念，提升员工安全素质，营造深厚的安全生产氛围。结合车队实际情况经研究决定在全队范围内开展“第二十一次夏季百日安全....',
            content:'<p><img alt="" src="http://nggh.nisco.cn/UploadFiles/xwdt/2020/7/202007021645322105.jpg" style="width: 1080px; height: 1438px;" /></p>\n' +
            '<p>&nbsp;</p>\n' +
            '<p style="margin:0cm;margin-bottom:.0001pt;text-align:justify;text-justify:\n' +
            'inter-ideograph;text-indent:28.0pt;mso-char-indent-count:2.0;line-height:150%;\n' +
            'layout-grid-mode:char;background:white"><span style="font-size:14.0pt;\n' +
            'line-height:150%;mso-ascii-font-family:宋体;mso-ascii-theme-font:minor-fareast;\n' +
            'mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:\n' +
            '宋体;mso-hansi-theme-font:minor-fareast;mso-bidi-font-family:宋体;mso-bidi-theme-font:\n' +
            'minor-fareast;color:black;mso-color-alt:windowtext">公司办小车队为了贯彻全国第<span lang="EN-US">19</span>个“安全生产月”落实国家、省、市、新区的统一布置，进一步加强安全生产宣传教育工作，牢固树立安全发展理念，提升员工安全素质，营造深厚的安全生产氛围。结合车队实际情况经研究决定在全队范围内开展“第二十一次夏季百日安全竞赛”活动，</span><span lang="EN-US" style="font-size:14.0pt;line-height:150%;mso-ascii-font-family:宋体;\n' +
            'mso-ascii-theme-font:minor-fareast;mso-hansi-font-family:宋体;mso-hansi-theme-font:\n' +
            'minor-fareast;mso-bidi-font-family:宋体;mso-bidi-theme-font:minor-fareast;\n' +
            'color:black;mso-color-alt:windowtext"> 6</span><span style="font-size:14.0pt;\n' +
            'line-height:150%;mso-ascii-font-family:宋体;mso-ascii-theme-font:minor-fareast;\n' +
            'mso-hansi-font-family:宋体;mso-hansi-theme-font:minor-fareast;mso-bidi-font-family:\n' +
            '宋体;mso-bidi-theme-font:minor-fareast;color:black;mso-color-alt:windowtext">月<span lang="EN-US">22</span>日上午，小车队组织召开“第二十一次夏季百日安全竞赛活动”动员大会，</span><span style="font-size:14.0pt;line-height:150%;mso-ascii-font-family:宋体;mso-ascii-theme-font:\n' +
            'minor-fareast;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;\n' +
            'mso-hansi-font-family:宋体;mso-hansi-theme-font:minor-fareast;mso-bidi-font-family:\n' +
            '宋体;mso-bidi-theme-font:minor-fareast;color:black;mso-color-alt:windowtext">活动时间：<span lang="EN-US">2020</span>年<span lang="EN-US">6</span>月<span lang="EN-US">22</span>日至<span lang="EN-US">9</span>月<span lang="EN-US">29</span>日，部分活动贯穿全年。</span></p>\n' +
            '<p>&nbsp;</p>\n' +
            '<p style="margin:0cm;margin-bottom:.0001pt;text-align:justify;text-justify:\n' +
            'inter-ideograph;text-indent:28.0pt;mso-char-indent-count:2.0;line-height:23.25pt;\n' +
            'background:white"><span style="font-size:14.0pt;mso-ascii-font-family:宋体;\n' +
            'mso-ascii-theme-font:minor-fareast;mso-hansi-font-family:宋体;mso-hansi-theme-font:\n' +
            'minor-fareast;mso-bidi-font-family:宋体;mso-bidi-theme-font:minor-fareast;\n' +
            'color:black;mso-color-alt:windowtext">夏季百日安全竞赛活动是小车队一年一度都要进行的一项重要安全竞赛活动，自公司<span lang="EN-US">1999</span>年公务车集中管理以来已经开展了第二十一次；</span><span style="font-size:14.0pt;\n' +
            'mso-ascii-font-family:宋体;mso-ascii-theme-font:minor-fareast;mso-fareast-font-family:\n' +
            '宋体;mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:宋体;mso-hansi-theme-font:\n' +
            'minor-fareast;mso-bidi-font-family:宋体;mso-bidi-theme-font:minor-fareast;\n' +
            'color:black;mso-color-alt:windowtext">“<b style="mso-bidi-font-weight:normal">消除事故隐患，筑牢安全防线</b>”是今年安全竞赛活动的主题，</span><span style="font-size:14.0pt;mso-ascii-font-family:宋体;mso-ascii-theme-font:minor-fareast;\n' +
            'mso-hansi-font-family:宋体;mso-hansi-theme-font:minor-fareast;mso-bidi-font-family:\n' +
            '宋体;mso-bidi-theme-font:minor-fareast;color:black;mso-color-alt:windowtext">为确保活动顺利有序地开展，车队成立活动</span><span style="font-size:14.0pt;mso-ascii-font-family:宋体;mso-ascii-theme-font:minor-fareast;\n' +
            'mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:\n' +
            '宋体;mso-hansi-theme-font:minor-fareast;mso-bidi-font-family:宋体;mso-bidi-theme-font:\n' +
            'minor-fareast;color:black;mso-color-alt:windowtext">领导小组</span><span style="font-size:14.0pt;mso-ascii-font-family:宋体;mso-ascii-theme-font:minor-fareast;\n' +
            'mso-hansi-font-family:宋体;mso-hansi-theme-font:minor-fareast;mso-bidi-font-family:\n' +
            '宋体;mso-bidi-theme-font:minor-fareast;color:black;mso-color-alt:windowtext">，</span><span style="font-size:14.0pt;mso-ascii-font-family:宋体;mso-ascii-theme-font:minor-fareast;\n' +
            'mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:\n' +
            '宋体;mso-hansi-theme-font:minor-fareast;mso-bidi-font-family:宋体;mso-bidi-theme-font:\n' +
            'minor-fareast;color:black;mso-color-alt:windowtext">强化组织领导、全面部署；加大宣传力度做起</span><span style="font-size:14.0pt;mso-ascii-font-family:宋体;mso-ascii-theme-font:minor-fareast;\n' +
            'mso-hansi-font-family:宋体;mso-hansi-theme-font:minor-fareast;mso-bidi-font-family:\n' +
            '宋体;mso-bidi-theme-font:minor-fareast;color:black;mso-color-alt:windowtext">，</span><span style="font-size:14.0pt;mso-ascii-font-family:宋体;mso-ascii-theme-font:minor-fareast;\n' +
            'mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:\n' +
            '宋体;mso-hansi-theme-font:minor-fareast;mso-bidi-font-family:宋体;mso-bidi-theme-font:\n' +
            'minor-fareast;color:black;mso-color-alt:windowtext">开展安全警示教育和科普宣传活动</span><span style="font-size:14.0pt;mso-ascii-font-family:宋体;mso-ascii-theme-font:minor-fareast;\n' +
            'mso-hansi-font-family:宋体;mso-hansi-theme-font:minor-fareast;mso-bidi-font-family:\n' +
            '宋体;mso-bidi-theme-font:minor-fareast;color:black;mso-color-alt:windowtext">等内容来营造竞赛活动氛围；同时要求车队全体驾驶员、修理工</span><span style="font-size:14.0pt;mso-ascii-font-family:宋体;mso-ascii-theme-font:minor-fareast;\n' +
            'mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:\n' +
            '宋体;mso-hansi-theme-font:minor-fareast;mso-bidi-font-family:宋体;mso-bidi-theme-font:\n' +
            'minor-fareast;color:black;mso-color-alt:windowtext">奋战<span lang="EN-US">100</span>天，实现全队零事故、零违章的目标。</span></p>\n' +
            '<p>&nbsp;</p>\n' +
            '<p style="margin:0cm;margin-bottom:.0001pt;text-align:justify;text-justify:\n' +
            'inter-ideograph;text-indent:7.0pt;mso-char-indent-count:.5;line-height:23.25pt;\n' +
            'background:white"><span lang="EN-US" style="font-size:14.0pt;mso-ascii-font-family:\n' +
            '宋体;mso-ascii-theme-font:minor-fareast;mso-hansi-font-family:宋体;mso-hansi-theme-font:\n' +
            'minor-fareast;mso-bidi-font-family:宋体;mso-bidi-theme-font:minor-fareast;\n' +
            'color:black;mso-color-alt:windowtext"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span></p>\n' +
            '<p>&nbsp;</p>\n' +
            '<p style="margin:0cm;margin-bottom:.0001pt;text-align:justify;text-justify:\n' +
            'inter-ideograph;text-indent:98.0pt;mso-char-indent-count:7.0;line-height:23.25pt;\n' +
            'background:white"><span lang="EN-US" style="font-size:14.0pt;mso-ascii-font-family:\n' +
            '宋体;mso-ascii-theme-font:minor-fareast;mso-hansi-font-family:宋体;mso-hansi-theme-font:\n' +
            'minor-fareast;mso-bidi-font-family:宋体;mso-bidi-theme-font:minor-fareast;\n' +
            'color:black;mso-color-alt:windowtext"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span><span style="font-size:14.0pt;mso-ascii-font-family:宋体;mso-ascii-theme-font:minor-fareast;\n' +
            'mso-hansi-font-family:宋体;mso-hansi-theme-font:minor-fareast;mso-bidi-font-family:\n' +
            '宋体;mso-bidi-theme-font:minor-fareast;color:black;mso-color-alt:windowtext">公司办公室<span lang="EN-US"><span style="mso-spacerun:yes">&nbsp; </span></span></span></p>\n' +
            '<p>&nbsp;</p>\n' +
            '<p style="margin:0cm;margin-bottom:.0001pt;text-align:justify;text-justify:\n' +
            'inter-ideograph;text-indent:7.0pt;mso-char-indent-count:.5;line-height:23.25pt;\n' +
            'background:white"><span lang="EN-US" style="font-size:14.0pt;mso-ascii-font-family:\n' +
            '宋体;mso-ascii-theme-font:minor-fareast;mso-hansi-font-family:宋体;mso-hansi-theme-font:\n' +
            'minor-fareast;mso-bidi-font-family:宋体;mso-bidi-theme-font:minor-fareast;\n' +
            'color:black;mso-color-alt:windowtext"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span><span style="font-size:14.0pt;mso-ascii-font-family:宋体;mso-ascii-theme-font:minor-fareast;\n' +
            'mso-hansi-font-family:宋体;mso-hansi-theme-font:minor-fareast;mso-bidi-font-family:\n' +
            '宋体;mso-bidi-theme-font:minor-fareast;color:black;mso-color-alt:windowtext">二〇二〇年六月二十二日</span></p>\n'
          },
          {
            title: '公司办小车队《细节关乎生命、安全文明出行》',
            imgs: 'http://nggh.nisco.cn/UploadFiles/xwdt/2019/10/201910280904150342.jpg',
            author: '佚名',
            date: '2019-10-28',
            info: '公司办公室小车队以 《细节关乎生命、安全文明出行》为主题的2019年“第二十次夏季百日安全竞赛”活动已圆满结束。在这一百天中，小车队按照公司的要求，结合....',
            content:'<p align="center" class="MsoNormal" style="text-align: center; margin: 0cm 0cm 0pt"><font color="#000000"><span style="font-size: 16pt; font-family: 黑体; mso-ascii-font-family: &quot;times new roman&quot;; mso-hansi-font-family: &quot;times new roman&quot;"><img alt="" src="http://nggh.nisco.cn/UploadFiles/xwdt/2019/10/201910280904150342.jpg" style="height: 334px; width: 336px" /></span></font></p>\n' +
            '<p align="center" class="MsoNormal" style="text-align: center; margin: 0cm 0cm 0pt"><font color="#000000"><span style="font-size: 16pt; font-family: 黑体; mso-ascii-font-family: &quot;times new roman&quot;; mso-hansi-font-family: &quot;times new roman&quot;"><img alt="" src="http://nggh.nisco.cn/UploadFiles/xwdt/2019/10/201910280904394633.jpg" style="height: 252px; width: 332px" /></span></font></p>\n' +
            '<p align="center" class="MsoNormal" style="text-align: center; margin: 0cm 0cm 0pt"><font color="#000000"><span style="font-size: 16pt; font-family: 黑体; mso-ascii-font-family: &quot;times new roman&quot;; mso-hansi-font-family: &quot;times new roman&quot;"><img alt="" src="http://nggh.nisco.cn/UploadFiles/xwdt/2019/10/201910280905156203.jpg" style="height: 225px; width: 336px" /></span></font></p>\n' +
            '<p align="center" class="MsoNormal" style="text-align: center; margin: 0cm 0cm 0pt">&nbsp;</p>\n' +
            '<p align="center" class="MsoNormal" style="text-align: center; margin: 0cm 0cm 0pt"><font color="#000000"><span style="font-size: 16pt; font-family: 黑体; mso-ascii-font-family: &quot;times new roman&quot;; mso-hansi-font-family: &quot;times new roman&quot;">公司办小车队《细节关乎生命、安全文明出行》</span><span lang="EN-US" style="font-size: 16pt; mso-fareast-font-family: 黑体">　　</span></font></p>\n' +
            '<p align="center" class="MsoNormal" style="text-align: center; margin: 0cm 0cm 0pt"><font color="#000000"><span style="font-size: 16pt; font-family: 黑体; mso-ascii-font-family: &quot;times new roman&quot;; mso-hansi-font-family: &quot;times new roman&quot;">百日安全竞赛活动圆满结束</span><span lang="EN-US" style="font-size: 16pt; mso-fareast-font-family: 黑体">　　</span></font></p>\n' +
            '<p align="left" class="MsoNormal" style="text-align: left; margin: 0cm 0cm 0pt; line-height: 24pt; text-indent: 28pt; mso-char-indent-count: 2.0; mso-line-height-rule: exactly"><span style="font-size: 14pt; font-family: 宋体"><font color="#000000">公司办公室小车队以 《细节关乎生命、安全文明出行》为主题的<span lang="EN-US"> 2019</span></font><font color="#000000">年“第二十次夏季百日安全竞赛”活动已圆满结束。在这一百天中，小车队按照公司的要求，结合</font><span lang="EN-US"><font color="#000000">6</font></span><font color="#000000">月份公司安全生产月活动，大力倡导“小细节”关系到“大安全”的理念，增加主动防御意识及减少被动型事故，减少车辆违章曝光次数，杜绝机械设备事故等为安全竞赛内容，时间从</font><span lang="EN-US"><font color="#000000">6</font></span><font color="#000000">月</font><span lang="EN-US"><font color="#000000">17</font></span><font color="#000000">日至</font><span lang="EN-US"><font color="#000000">9</font></span><font color="#000000">月</font><span lang="EN-US"><font color="#000000">24</font></span><font color="#000000">日止，目的是为了增强全队员工遵章守法意识，从思想上高度重视安全，安全这根弦丝毫不能放松，经过全队员工的共同努力，竞赛活动已圆满结束，较好地完成了竞赛既定目标，同时完成了各项工作任务。<span lang="EN-US">　　</span></font></span></p>\n' +
            '<p class="MsoNormal" style="margin: 0cm 0cm 0pt; line-height: 24pt; text-indent: 28pt; mso-char-indent-count: 2.0; mso-line-height-rule: exactly"><span style="font-size: 14pt; font-family: 宋体"><font color="#000000">竞赛期间全队安全行车<span lang="EN-US">45</span></font><font color="#000000">万公里，实现重大责任事故和机械事故为零的目标。</font><span style="mso-bidi-font-weight: bold"><font color="#000000">共完成出车任务<span lang="EN-US">4096</span></font><font color="#000000">趟次，接送内外客人</font><span lang="EN-US"><font color="#000000">82</font></span><font color="#000000">批次、</font><span lang="EN-US"><font color="#000000">425</font></span><font color="#000000">趟次，车辆检查</font><span lang="EN-US"><font color="#000000">168</font></span><font color="#000000">台次</font><span lang="EN-US"><font color="#000000">,</font></span></span><span lang="EN-US"><font color="#000000"> </font></span><font color="#000000">大修车辆</font><span lang="EN-US"><font color="#000000">2</font></span><font color="#000000">台，小修车辆</font><span lang="EN-US"><font color="#000000">706</font></span><font color="#000000">台次，车辆年检</font><span lang="EN-US"><font color="#000000">62</font></span><font color="#000000">台次，长途车辆检查</font><span lang="EN-US"><font color="#000000">68</font></span><font color="#000000">台次，外修救援</font><span lang="EN-US"><font color="#000000">17</font></span><font color="#000000">次，修旧利废创效益 </font><span lang="EN-US"><font color="#000000">14950</font></span><font color="#000000">元，比质比价降本</font><span lang="EN-US"><font color="#000000">34950 </font></span><font color="#000000">元。<span lang="EN-US">　　</span></font></span></p>\n' +
            '<p class="MsoNormal" style="margin: 0cm 0cm 0pt; line-height: 24pt; text-indent: 28pt; mso-char-indent-count: 2.0; mso-line-height-rule: exactly"><span style="font-size: 14pt; font-family: 宋体"><font color="#000000">本次竞赛活动评比出：<span lang="EN-US">　　</span></font></span></p>\n' +
            '<p class="MsoNormal" style="margin: 0cm 0cm 0pt; line-height: 24pt; text-indent: 28.1pt; mso-char-indent-count: 2.0; mso-line-height-rule: exactly"><b style="mso-bidi-font-weight: normal"><span style="font-size: 14pt; font-family: 宋体"><font color="#000000">一等奖二名</font></span></b><span style="font-size: 14pt; font-family: 宋体"><font color="#000000">：<span style="mso-bidi-font-weight: bold">李跃权、徐军</span></font><font color="#000000"> <span lang="EN-US">　　</span></font></span></p>\n' +
            '<p class="MsoNormal" style="margin: 0cm 0cm 0pt; line-height: 24pt; text-indent: 28.1pt; mso-char-indent-count: 2.0; mso-line-height-rule: exactly"><font color="#000000"><b style="mso-bidi-font-weight: normal"><span style="font-size: 14pt; font-family: 宋体">二等奖三名</span></b><span style="font-size: 14pt; font-family: 宋体">：<span style="mso-bidi-font-weight: bold">殷其发、竺玲明、王剑松，<span lang="EN-US">　　</span></span></span></font></p>\n' +
            '<p class="MsoNormal" style="margin: 0cm 0cm 0pt; line-height: 24pt; text-indent: 28.1pt; mso-char-indent-count: 2.0; mso-line-height-rule: exactly"><font color="#000000"><b style="mso-bidi-font-weight: normal"><span style="font-size: 14pt; font-family: 宋体">三等奖四名：</span></b><span style="font-size: 14pt; font-family: 宋体; mso-bidi-font-weight: bold">叶守森、李有亮、成伟、韩诚</span><span style="font-size: 14pt; font-family: 宋体"> <span lang="EN-US">　　</span></span></font></p>\n' +
            '<p class="MsoNormal" style="margin: 0cm 0cm 0pt; line-height: 24pt; text-indent: 28.1pt; mso-char-indent-count: 2.0; mso-line-height-rule: exactly"><font color="#000000"><b><span style="font-size: 14pt; font-family: 宋体">表杨：</span></b><span style="font-size: 14pt; font-family: 宋体; mso-bidi-font-weight: bold">王胜利、史克杰、袁文杰、耿金辉、梁宵、董萍萍<span lang="EN-US">　　</span></span></font></p>\n'
          },
          {
            title: '公司办开展“安全生产月”活动',
            imgs: 'http://nggh.nisco.cn/UploadFiles/xwdt/2019/6/201906281102223619.jpg',
            author: '佚名',
            date: '2019-06-27',
            info: '为认真落实公司“安全生产月”活动的相关精神，6月17日上午，公司办小车队组织召开“第二十次夏季百日安全竞赛活动”动员大会。公司办公室党总支书记、副主任张文超，安全能环部部长张宏，公司工会....',
            content:' <p><img alt="" src="http://nggh.nisco.cn/UploadFiles/xwdt/2019/6/201906281102223619.jpg" style="height: 343px; width: 490px" /></p>\n' +
            '<p><img alt="" src="http://nggh.nisco.cn/UploadFiles/xwdt/2019/6/201906281102426199.jpg" style="height: 386px; width: 494px" /></p>\n' +
            '<p><img alt="" src="http://nggh.nisco.cn/UploadFiles/xwdt/2019/6/201906281103043366.jpg" style="height: 410px; width: 495px" /></p>\n' +
            '<p class="MsoNormal" style="margin: 0cm 0cm 0pt; text-indent: 31.8pt; mso-char-indent-count: 2.0"><span style="font-size: 13.5pt; font-family: 宋体; color: #171819; letter-spacing: 1.2pt; mso-ascii-theme-font: minor-fareast; mso-fareast-font-family: 宋体; mso-fareast-theme-font: minor-fareast; mso-hansi-theme-font: minor-fareast">公司办开展“安全生产月”活动<span lang="EN-US">　　</span></span></p>\n' +
            '<p class="MsoNormal" style="margin: 0cm 0cm 0pt; text-indent: 31.8pt; mso-char-indent-count: 2.0"><span style="font-size: 13.5pt; font-family: 宋体; color: #171819; letter-spacing: 1.2pt; mso-ascii-theme-font: minor-fareast; mso-fareast-font-family: 宋体; mso-fareast-theme-font: minor-fareast; mso-hansi-theme-font: minor-fareast">为认真落实公司“安全生产月”活动的相关精神，<span lang="EN-US">6</span>月<span lang="EN-US">17</span>日上午，公司办小车队组织召开“第二十次夏季百日安全竞赛活动”动员大会。公司办公室党总支书记、副主任张文超，安全能环部部长张宏，公司工会副主席杨桥东及公司办小车队全体员工参加动员会。<span lang="EN-US">　　</span></span></p>\n' +
            '<p class="MsoNormal" style="margin: 0cm 0cm 0pt; text-indent: 31.8pt; mso-char-indent-count: 2.0"><span style="font-size: 13.5pt; font-family: 宋体; color: #171819; letter-spacing: 1.2pt; mso-ascii-theme-font: minor-fareast; mso-fareast-font-family: 宋体; mso-fareast-theme-font: minor-fareast; mso-hansi-theme-font: minor-fareast">“夏季百日安全竞赛活动”是小车队一年一度都要进行的一项重要安全竞赛活动，自公司<span lang="EN-US">1999</span>年公务车集中管理以来已经开展到第二十次。“细节关乎生命、安全文明出行”是今年安全竞赛活动的主题，动员大会上小车队卢晓峰队长宣读“第二十次夏季百日安全竞赛”活动的通知。为确保活动顺利有序地开展，车队成立活动领导小组，从加大宣传力度着手，通过开展安全警示<a name="_GoBack"></a>教育和科普宣传活动等内容来营造竞赛活动氛围，同时活动领导小组要求车队全体驾驶员、修理工奋战<span lang="EN-US">100</span>天，实现零事故、零违章的目标。<span lang="EN-US">　　</span></span></p>\n' +
            '<p class="MsoNormal" style="margin: 0cm 0cm 0pt; text-indent: 31.8pt; mso-char-indent-count: 2.0"><span style="font-size: 13.5pt; font-family: 宋体; color: #171819; letter-spacing: 1.2pt; mso-ascii-theme-font: minor-fareast; mso-fareast-font-family: 宋体; mso-fareast-theme-font: minor-fareast; mso-hansi-theme-font: minor-fareast">会上，张文超书记、张宏部长、杨桥东副主席就本次活动分别提出具体要求和建议，对车队多年来坚持开展“夏季百日安全竞赛活动”给予肯定，同时要求车队做好对人员、车辆动向的管理，安全行车贯穿全年；要以人为本，关心驾驶员身体及心理健康，建议开展家属助安全等活动内容；并要求落实好活动各项内容，努力争创公司级、市级工人先锋号等，最后预祝活动取得圆满成果。</span><span lang="EN-US" style="font-family: 宋体; mso-ascii-theme-font: minor-fareast; mso-fareast-font-family: 宋体; mso-fareast-theme-font: minor-fareast; mso-hansi-theme-font: minor-fareast">　　</span></p>\n'
          }
        ],
        around: [
          {
            title: '张主席慰问“田浩技师创新工作室”',
            imgs: 'http://nggh.nisco.cn/UploadFiles/xwdt/2020/8/202008181417310602.jpg',
            author: '陈虹',
            date: '2020-08-19',
            info: ' 8月18日，公司工会主席张六喜带领公司工会部门负责人，来到研究院“田浩技师创新工作室“，为高温下坚守岗位的人员送上冷饮、矿泉水、毛巾等防暑降温用品，并为田浩颁....',
            content:'<p><img alt="" src="http://nggh.nisco.cn/UploadFiles/xwdt/2020/8/202008181417310602.jpg" style="width: 563px; height: 563px;" /></p>\n' +
            '<p>&nbsp;</p>\n' +
            '<p><span style="mso-spacerun:yes">&nbsp;</span><span lang="EN-US"><span style="mso-spacerun:yes">&nbsp;&nbsp; </span>8</span>月<span lang="EN-US">18</span>日，公司工会主席张六喜带领公司工会部门负责人，来到研究院“田浩技师创新工作室“，为高温下坚守岗位的人员送上冷饮、矿泉水、毛巾等防暑降温用品，并为田浩颁发了江苏省”最美抗疫职工“荣誉证。（陈虹）</p>\n'
          },
          {
            title: '关爱职工 夏送清凉 公司慰问一线职工',
            imgs: 'http://nggh.nisco.cn/UploadFiles/ghgz/2020/8/202008040933445786.jpg',
            author: '赵莉',
            date: '2020-08-04',
            info: '骄阳似火，高温闷热， 8月3日下午，最高气温达到36度，公司工会主席张六喜，公司副总裁徐晓春，公司工会副主席杨桥东和工会部门负责人及部分工作人员，顶着烈日带着藿香正气水、人丹、花露水等清凉套装依次来到梅桂营站（上海铁路局南京东站梅桂营货运部....',
            content:'<p class="MsoNormal" style="text-indent:112.45pt;mso-char-indent-count:7.0;\n' +
            'layout-grid-mode:char;mso-layout-grid-align:none"><b><span style="font-size:\n' +
            '16.0pt;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;\n' +
            'mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:\n' +
            'minor-latin">关爱职工</span></b><b><span style="font-size:16.0pt"> </span></b><b><span style="font-size:16.0pt;font-family:宋体;mso-ascii-font-family:Calibri;\n' +
            'mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:minor-fareast;\n' +
            'mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">夏送清凉</span></b><b><span lang="EN-US" style="font-size:16.0pt"><o:p></o:p></span></b></p>\n' +
            '<p class="MsoNormal" style="text-indent:224.9pt;mso-char-indent-count:14.0;\n' +
            'layout-grid-mode:char;mso-layout-grid-align:none"><b><span style="font-size:\n' +
            '16.0pt;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;\n' +
            'mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:\n' +
            'minor-latin">公司慰问一线职工</span></b><b><span lang="EN-US" style="font-size:16.0pt"><o:p></o:p></span></b></p>\n' +
            '<p class="MsoNormal" style="text-indent:28.0pt;layout-grid-mode:char;mso-layout-grid-align:\n' +
            'none"><span style="font-size:14.0pt;font-family:宋体;mso-ascii-font-family:Calibri;\n' +
            'mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:minor-fareast;\n' +
            'mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">骄阳似火，高温闷热，</span><span style="font-size:14.0pt"> <span lang="EN-US">8</span></span><span style="font-size:14.0pt;font-family:宋体;mso-ascii-font-family:Calibri;\n' +
            'mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:minor-fareast;\n' +
            'mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">月</span><span lang="EN-US" style="font-size:14.0pt">3</span><span style="font-size:14.0pt;\n' +
            'font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;\n' +
            'mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:\n' +
            'minor-latin">日下午，最高气温达到</span><span lang="EN-US" style="font-size:14.0pt">36</span><span style="font-size:14.0pt;font-family:宋体;mso-ascii-font-family:Calibri;\n' +
            'mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:minor-fareast;\n' +
            'mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">度，公司工会主席张六喜，公司副总裁徐晓春，公司工会副主席杨桥东和工会部门负责人及部分工作人员，顶着烈日带着藿香正气水、人丹、花露水等清凉套装依次来到梅桂营站（上海铁路局南京东站梅桂营货运部）、燃料供应厂焦炉作业区、第一炼铁厂一号炉、第二炼钢厂转炉平台、保卫部门岗，慰问奋战在高温一线的职工。</span><span lang="EN-US" style="font-size:14.0pt"><o:p></o:p></span></p>\n' +
            '<p class="MsoNormal" style="text-indent:28.0pt;mso-char-indent-count:2.0;\n' +
            'layout-grid-mode:char;mso-layout-grid-align:none"><span style="font-size:14.0pt;\n' +
            'font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;\n' +
            'mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:\n' +
            'minor-latin">在慰问现场，张六喜和徐晓春与在岗位上战高温的职工一一握手，送上公司工会为大家准备的慰问品，并和现场职工做了交流，张主席表示在高温下作业的职工们辛苦了，持续的高温会给高温岗位上的职工带来身体上的不适，希望大家能做好防暑降温工作，同时叮嘱各生产一线的领导要及时关注并维护好职工身体健康，保障职工平安健康度过炎夏天。徐晓春表示，天气炎热，一线高温岗位的职工们非常辛苦，希望大家合理安排工作时间和休息时间，保护好身体，才能有效的工作，并鼓励职工保持干劲为完成南钢</span><span lang="EN-US" style="font-size:14.0pt">8</span><span style="font-size:14.0pt;\n' +
            'font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;\n' +
            'mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:\n' +
            'minor-latin">月份生产经营指标共同努力。</span><span lang="EN-US" style="font-size:14.0pt"><o:p></o:p></span></p>\n' +
            '<p class="MsoNormal" style="text-indent:28.0pt;mso-char-indent-count:2.0;\n' +
            'layout-grid-mode:char;mso-layout-grid-align:none"><span lang="EN-US" style="font-size:14.0pt">&nbsp;</span></p>\n' +
            '<p>&nbsp;</p>\n' +
            '<p class="MsoNormal" style="text-indent:28.0pt;layout-grid-mode:char;mso-layout-grid-align:\n' +
            'none"><span lang="EN-US" style="font-size:14.0pt">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ' +
            '<img alt="" src="http://nggh.nisco.cn/UploadFiles/ghgz/2020/8/202008040933445786.jpg" style="width: 5345px; height: 3563px;" />' +
            '<img alt="" src="http://nggh.nisco.cn/UploadFiles/ghgz/2020/8/202008040934088117.jpg" style="width: 5145px; height: 3430px;" />' +
            '<img alt="" src="http://nggh.nisco.cn/UploadFiles/ghgz/2020/8/202008040934316976.jpg" style="width: 3446px; height: 2297px;" />' +
            '<img alt="" src="http://nggh.nisco.cn/UploadFiles/ghgz/2020/8/202008040935241461.jpg" style="width: 4766px; height: 3177px;" />' +
            '<img alt="" src="http://nggh.nisco.cn/UploadFiles/ghgz/2020/8/202008040936285238.jpg" style="width: 4732px; height: 3155px;" />&nbsp;</span><span style="font-size:14.0pt;font-family:宋体;mso-ascii-font-family:Calibri;\n' +
            'mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:minor-fareast;\n' +
            'mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">文</span><span style="font-size:14.0pt"> <span lang="EN-US">/</span></span><span style="font-size:14.0pt;font-family:宋体;mso-ascii-font-family:Calibri;\n' +
            'mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:minor-fareast;\n' +
            'mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">图</span><span style="font-size:14.0pt"> <span lang="EN-US">&nbsp;&nbsp;</span></span><span style="font-size:14.0pt;\n' +
            'font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;\n' +
            'mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:\n' +
            'minor-latin">赵</span><span style="font-size:14.0pt"> &nbsp;</span><span style="font-size:14.0pt;\n' +
            'font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;\n' +
            'mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:\n' +
            'minor-latin">莉</span><span style="font-size:14.0pt"> &nbsp;<span lang="EN-US"><o:p></o:p></span></span></p>\n'
          },
          {
            title: '防洪抗台 保产保供”公司慰问抗洪保产一线员工',
            imgs: 'http://nggh.nisco.cn/UploadFiles/ghgz/2020/7/202007240922158238.jpg',
            author: '赵莉',
            date: '2020-07-24',
            info: '7月23日，公司工会张六喜、集团公司总裁余长林、公司副总裁徐晓春带着慰问品来到防汛、保料工作单位：铁路16#道口，21#道口水厂泵房，港池码头，原料厂4#料条，慰问抗战在洪水形势严峻下工作的一....',
            content:'<p align="center" class="MsoNormal" style="text-align:center"><b><span style="font-size:16.0pt;font-family:宋体;mso-ascii-font-family:Calibri;\n' +
            'mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:minor-fareast;\n' +
            'mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">&ldquo;防洪抗台</span></b><b><span lang="EN-US" style="font-size:16.0pt">&nbsp; </span></b><b><span style="font-size:16.0pt;font-family:宋体;mso-ascii-font-family:Calibri;\n' +
            'mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:minor-fareast;\n' +
            'mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">保产保供&rdquo;劳动竞赛见成效</span></b><b><span lang="EN-US" style="font-size:16.0pt"><o:p></o:p></span></b></p>\n' +
            '<p class="MsoNormal"><b><span lang="EN-US" style="font-size:16.0pt">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; --</span></b><b><span style="font-size:16.0pt;font-family:宋体;mso-ascii-font-family:Calibri;\n' +
            'mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:minor-fareast;\n' +
            'mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">公司慰问抗洪保产一线员工</span></b><b><span lang="EN-US" style="font-size:16.0pt"><o:p></o:p></span></b></p>\n' +
            '<p align="center" class="MsoNormal" style="text-align:center"><span lang="EN-US" style="font-size:11.0pt">&nbsp;</span></p>\n' +
            '<p class="MsoNormal" style="text-indent:28.0pt;layout-grid-mode:char;mso-layout-grid-align:\n' +
            'none"><span lang="EN-US" style="font-size:14.0pt">7</span><span style="font-size:\n' +
            '14.0pt;font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;\n' +
            'mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:\n' +
            'minor-latin">月</span><span lang="EN-US" style="font-size:14.0pt">23</span><span style="font-size:14.0pt;font-family:宋体;mso-ascii-font-family:Calibri;\n' +
            'mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:minor-fareast;\n' +
            'mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">日，公司工会张六喜、集团公司总裁余长林、公司副总裁徐晓春带着慰问品来到防汛、保料工作单位：铁路</span><span lang="EN-US" style="font-size:14.0pt">16#</span><span style="font-size:14.0pt;\n' +
            'font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;\n' +
            'mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:\n' +
            'minor-latin">道口，</span><span lang="EN-US" style="font-size:14.0pt">21#</span><span style="font-size:14.0pt;font-family:宋体;mso-ascii-font-family:Calibri;\n' +
            'mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:minor-fareast;\n' +
            'mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">道口水厂泵房，港池码头，原料厂</span><span lang="EN-US" style="font-size:14.0pt">4#</span><span style="font-size:14.0pt;\n' +
            'font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;\n' +
            'mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:\n' +
            'minor-latin">料条，慰问抗战在洪水形势严峻下工作的一线员工。</span><span lang="EN-US" style="font-size:\n' +
            '14.0pt"><o:p></o:p></span></p>\n' +
            '<p class="MsoNormal" style="text-indent:28.0pt;layout-grid-mode:char;mso-layout-grid-align:\n' +
            'none"><span style="font-size:14.0pt;font-family:宋体;mso-ascii-font-family:Calibri;\n' +
            'mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:minor-fareast;\n' +
            'mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">进入汛期以来长江水位持续上涨，并且已超出警戒线</span><span lang="EN-US" style="font-size:14.0pt">1.4m</span><span style="font-size:14.0pt;\n' +
            'font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;\n' +
            'mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:\n' +
            'minor-latin">，公司原辅料码头、低洼区域、梅桂营车站等区域不仅出现了江水、河水上漫，而且严重影响到公司的生产组织与保产保供。为确保公司正常的生产经营秩序，满足铁前正常的生产用料需求，公司工会组织开展了&ldquo;防洪抗台</span><span lang="EN-US" style="font-size:14.0pt">&nbsp; </span><span style="font-size:14.0pt;font-family:宋体;mso-ascii-font-family:Calibri;\n' +
            'mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:minor-fareast;\n' +
            'mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">保产保供&rdquo;劳动竞赛。公司成立防汛抗洪保产指挥部，每日召开推进会，协调解决保产保供遇到的难点与痛点，组建以祝总裁、张主席、徐副总牵头的防汛抗洪保产保供攻关微信群，实时跟进抗洪保供情况。</span><span lang="EN-US" style="font-size:14.0pt"><o:p></o:p></span></p>\n' +
            '<p class="MsoNormal" style="text-indent:28.0pt;mso-char-indent-count:2.0;\n' +
            'layout-grid-mode:char;mso-layout-grid-align:none"><span style="font-size:14.0pt;\n' +
            'font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;\n' +
            'mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:\n' +
            'minor-latin">公司防汛抗台指挥部、保料工作组成员，发挥出不怕吃苦，敢于挑战和团结奋进的精神，使用科学有效的技术手段安全有序的开展本阶段防洪抗台工作任务。</span><span lang="EN-US" style="font-size:14.0pt">7</span><span style="font-size:14.0pt;\n' +
            'font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;\n' +
            'mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:\n' +
            'minor-latin">月</span><span lang="EN-US" style="font-size:14.0pt">22</span><span style="font-size:14.0pt;font-family:宋体;mso-ascii-font-family:Calibri;\n' +
            'mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:minor-fareast;\n' +
            'mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">日炼铁产量破记录达到</span><span lang="EN-US" style="font-size:14.0pt">30166</span><span style="font-size:14.0pt;\n' +
            'font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;\n' +
            'mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:\n' +
            'minor-latin">吨，防汛抗洪保供小组有效利用涨退潮的窗口期，采取了汽车焦炭直供、梅桂营铁路线积水强排、朱家山铁路线防汛突击队现场值守、道路交通疏导指引、现场作业人员慰问、防汛抗洪指挥部统筹协调与推进等措施，快速扭转了库存下降的局面，焦炭、矿石、煤实现保供增储。在各部门系统性攻关能力、作业效率、信心士气越来越高。</span><span lang="EN-US" style="font-size:14.0pt">7</span><span style="font-size:14.0pt;\n' +
            'font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;\n' +
            'mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:\n' +
            'minor-latin">月</span><span lang="EN-US" style="font-size:14.0pt">22</span><span style="font-size:14.0pt;font-family:宋体;mso-ascii-font-family:Calibri;\n' +
            'mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:minor-fareast;\n' +
            'mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">日，共调进各类原燃料</span><span lang="EN-US" style="font-size:14.0pt">8.65</span><span style="font-size:14.0pt;\n' +
            'font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;\n' +
            'mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:\n' +
            'minor-latin">万吨，其中铁辅料</span><span lang="EN-US" style="font-size:14.0pt">6.43</span><span style="font-size:14.0pt;font-family:宋体;mso-ascii-font-family:Calibri;\n' +
            'mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:minor-fareast;\n' +
            'mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">万吨、燃料</span><span lang="EN-US" style="font-size:14.0pt">2.22</span><span style="font-size:14.0pt;\n' +
            'font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;\n' +
            'mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:\n' +
            'minor-latin">万吨，满足了公司持续性的高效安全生产的需求。公司、事业部、机关部室各位领导更是高度重视，频繁的涉水深入一线进行指挥，就管理措施、作业方法提出改进要求，就员工作业激情进行了鞭策，激发出来现场作业人员和作业设备的内在潜力，用新思维、新行动、新动力、高站位推动了防汛抗洪工作的开展。</span><span lang="EN-US" style="font-size:14.0pt"><o:p></o:p></span></p>\n' +
            '<p class="MsoNormal" style="text-indent:28.0pt;mso-char-indent-count:2.0;\n' +
            'layout-grid-mode:char;mso-layout-grid-align:none"><span style="font-size:14.0pt;\n' +
            'font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;\n' +
            'mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:\n' +
            'minor-latin">在慰问现场，张六喜表示目前的重点工作是保产保供保设施运行安全，各保障工作组要以大局为重，做好协调配合工作，组织开展好防汛保产保供竞赛，提高隐患意识和安全防护意识，希望广大职工继续加油，发扬不怕吃苦、勇于奉献的精神，确保打赢防洪保产攻坚战。公司副总裁徐晓春也给现场的员工加油鼓劲：昨天炼铁铁水产量破历史纪录，和各抗洪保供小组的工作是分不开的，希望各小组继续落实好供料，合理安排物流运输，满足铁前工序正常的生产需求，在严峻的汛情下紧紧围绕公司生产经营目标，安全有序的生产，争取突破新记录。</span><span lang="EN-US" style="font-size:14.0pt"><o:p></o:p></span></p>\n' +
            '<p class="MsoNormal" style="text-indent:28.0pt;layout-grid-mode:char;mso-layout-grid-align:\n' +
            'none"><span lang="EN-US" style="font-size:14.0pt">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span><span style="font-size:14.0pt;font-family:宋体;mso-ascii-font-family:\n' +
            'Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:minor-fareast;\n' +
            'mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">文</span><span style="font-size:14.0pt"> <span lang="EN-US">&nbsp;&nbsp;</span></span><span style="font-size:14.0pt;\n' +
            'font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;\n' +
            'mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:\n' +
            'minor-latin">田信雷</span><span style="font-size:14.0pt"> </span><span style="font-size:14.0pt;font-family:宋体;mso-ascii-font-family:Calibri;\n' +
            'mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:minor-fareast;\n' +
            'mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">赵莉</span><span style="font-size:14.0pt"> &nbsp;<span lang="EN-US"><o:p></o:p></span></span></p>\n' +
            '<p><span style="font-size:14.0pt;font-family:宋体;mso-ascii-font-family:Calibri;\n' +
            'mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:minor-fareast;\n' +
            'mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-bidi-font-family:\n' +
            '&quot;Times New Roman&quot;;mso-bidi-theme-font:minor-bidi;mso-font-kerning:1.0pt;\n' +
            'mso-ansi-language:EN-US;mso-fareast-language:ZH-CN;mso-bidi-language:AR-SA">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<img alt="" src="http://nggh.nisco.cn/UploadFiles/ghgz/2020/7/202007240922158238.jpg" style="width: 5917px; height: 4076px;" />图</span><span style="font-size:14.0pt;font-family:&quot;Calibri&quot;,sans-serif;mso-ascii-theme-font:\n' +
            'minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;\n' +
            'mso-hansi-theme-font:minor-latin;mso-bidi-font-family:&quot;Times New Roman&quot;;\n' +
            'mso-bidi-theme-font:minor-bidi;mso-font-kerning:1.0pt;mso-ansi-language:EN-US;\n' +
            'mso-fareast-language:ZH-CN;mso-bidi-language:AR-SA"> <span lang="EN-US">&nbsp;&nbsp;</span></span><span style="font-size:14.0pt;\n' +
            'font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;\n' +
            'mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:\n' +
            'minor-latin;mso-bidi-font-family:&quot;Times New Roman&quot;;mso-bidi-theme-font:minor-bidi;\n' +
            'mso-font-kerning:1.0pt;mso-ansi-language:EN-US;mso-fareast-language:ZH-CN;\n' +
            'mso-bidi-language:AR-SA">赵</span><span style="font-size:14.0pt;font-family:\n' +
            '&quot;Calibri&quot;,sans-serif;mso-ascii-theme-font:minor-latin;mso-fareast-font-family:\n' +
            '宋体;mso-fareast-theme-font:minor-fareast;mso-hansi-theme-font:minor-latin;\n' +
            'mso-bidi-font-family:&quot;Times New Roman&quot;;mso-bidi-theme-font:minor-bidi;\n' +
            'mso-font-kerning:1.0pt;mso-ansi-language:EN-US;mso-fareast-language:ZH-CN;\n' +
            'mso-bidi-language:AR-SA"> &nbsp;</span><span style="font-size:14.0pt;font-family:宋体;mso-ascii-font-family:Calibri;\n' +
            'mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:minor-fareast;\n' +
            'mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-bidi-font-family:\n' +
            '&quot;Times New Roman&quot;;mso-bidi-theme-font:minor-bidi;mso-font-kerning:1.0pt;\n' +
            'mso-ansi-language:EN-US;mso-fareast-language:ZH-CN;mso-bidi-language:AR-SA">莉</span><span style="font-size:14.0pt;font-family:&quot;Calibri&quot;,sans-serif;mso-ascii-theme-font:\n' +
            'minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;\n' +
            'mso-hansi-theme-font:minor-latin;mso-bidi-font-family:&quot;Times New Roman&quot;;\n' +
            'mso-bidi-theme-font:minor-bidi;mso-font-kerning:1.0pt;mso-ansi-language:EN-US;\n' +
            'mso-fareast-language:ZH-CN;mso-bidi-language:AR-SA"> &nbsp;</span></p>\n'
          },
          {
            title: '抗击疫情 我们与你同在',
            imgs: 'http://nggh.nisco.cn/UploadFiles/ghgz/2020/3/202003100824335070.jpg',
            author: '方雷',
            date: '2020-03-10',
            info: '继南钢工会为公司全体在岗职工发放12000只抗疫防护包以来 ，3月3日，南钢工会向武钢工会捐赠的100箱免洗手消毒液和2000只口罩也顺利到达武钢。南钢工会在对本单位职工的关心爱护以外还心系疫区兄弟单位，为他们送去南....',
            content:' <p><br />\n' +
            '<span style="font-size:16px;">继南钢工会为公司全体在岗职工发放12000只抗疫防护包以来&nbsp;，3月3日，南钢工会向武钢工会捐赠的100箱免洗手消毒液和2000只口罩也顺利到达武钢。南钢工会在对本单位职工的关心爱护以外还心系疫区兄弟单位，为他们送去南钢工会的关心和爱护，武钢工会的负责人在接收到捐赠物资后致电南钢工会表示了衷心的感谢。（方雷文 &nbsp;摄）<img alt="" src="http://nggh.nisco.cn/UploadFiles/ghgz/2020/3/202003100824335070.jpg" style="width: 1500px; height: 3457px;" /></span></p>\n'
          }
        ],
        woman:[
          {
            title: '公司三名女职工文字作品在全国和江苏省获奖-南京钢铁联合有限公司工会',
            imgs: 'http://nggh.nisco.cn/UploadFiles/ghgz/2020/8/202008181429353457.jpg',
            author: '女职委',
            date: '2020-08-18',
            info: '2020年三八期间，江苏省总工会女职工委员会在全省组织开展了新时代江苏女职工精神大讨论活动，引导全省女职工围绕“新时代江苏女职工精神品格”“她为什么冲锋在抗疫一线”“心目中最美的江苏女职工形象”“女职工与时代发展”等话题展开讨论，并用文字或视频方式书写下自己对女职工....',
            content:'<p><img alt="" src="http://nggh.nisco.cn/UploadFiles/ghgz/2020/8/202008181429353457.jpg" style="width: 769px; height: 550px;" /></p>\n' +
            '<p>&nbsp;</p>\n' +
            '<p style="text-indent:24.0pt;mso-char-indent-count:2.0"><span lang="EN-US" style="font-size:12.0pt">2020</span><span style="font-size:12.0pt;\n' +
            'font-family:宋体;mso-ascii-font-family:&quot;Times New Roman&quot;;mso-hansi-font-family:\n' +
            '&quot;Times New Roman&quot;">年三八期间，江苏省总工会女职工委员会在全省组织开展了新时代江苏女职工精神大讨论活动，引导全省女职工围绕“新时代江苏女职工精神品格”“她为什么冲锋在抗疫一线”“心目中最美的江苏女职工形象”“女职工与时代发展”等话题展开讨论，并用文字或视频方式书写下自己对女职工精神的理解、记录下心目中最美的江苏女职工形象，活动历时两个多月。公司工会女职工委员会在公司全体女职工中开展了征集活动，</span><span lang="EN-US" style="font-size:12.0pt">11</span><span style="font-size:12.0pt;\n' +
            'font-family:宋体;mso-ascii-font-family:&quot;Times New Roman&quot;;mso-hansi-font-family:\n' +
            '&quot;Times New Roman&quot;">个基层工会女职委共征集了</span><span lang="EN-US" style="font-size:12.0pt">49</span><span style="font-size:12.0pt;font-family:宋体;mso-ascii-font-family:&quot;Times New Roman&quot;;\n' +
            'mso-hansi-font-family:&quot;Times New Roman&quot;">条文字作品，其中既有“顶起半边天”“今日花木兰”“铿锵玫瑰”等的传统描述，更有“奉献”“担当”“独立”“进取”等高频热词。新时代女性的精神面貌和价值追求发生了巨大变化。</span></p>\n' +
            '<p>&nbsp;</p>\n' +
            '<p style="text-indent:24.0pt;mso-char-indent-count:2.0"><span style="font-size:12.0pt;font-family:宋体;mso-ascii-font-family:&quot;Times New Roman&quot;;\n' +
            'mso-hansi-font-family:&quot;Times New Roman&quot;">经省总女职委认真评审，本次活动全省共有</span><span lang="EN-US" style="font-size:12.0pt">100</span><span style="font-size:12.0pt;\n' +
            'font-family:宋体;mso-ascii-font-family:&quot;Times New Roman&quot;;mso-hansi-font-family:\n' +
            '&quot;Times New Roman&quot;">件文字作品入围。南钢新产业投资集团卞云丽、特钢事业部大棒厂张绫的两篇作品荣获“入围奖”。</span></p>\n' +
            '<p>&nbsp;</p>\n' +
            '<p style="text-indent:24.0pt;mso-char-indent-count:2.0"><span style="font-size:12.0pt;font-family:宋体;mso-ascii-font-family:&quot;Times New Roman&quot;;\n' +
            'mso-hansi-font-family:&quot;Times New Roman&quot;">另外，在</span><span lang="EN-US" style="font-size:12.0pt">2019</span><span style="font-size:12.0pt;font-family:\n' +
            '宋体;mso-ascii-font-family:&quot;Times New Roman&quot;;mso-hansi-font-family:&quot;Times New Roman&quot;">年三八节期间公司工会女职工举办的“家风家训故事”征集活动中，特钢事业部高线厂新进厂大学生陈敏的作品《一步一脚印》，被市总选中推荐参加全国“书香三八”读书征文活动，荣获优秀奖。</span><span style="font-size:12.0pt"> <span lang="EN-US"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span></span><span style="font-size:\n' +
            '12.0pt;font-family:宋体;mso-ascii-font-family:&quot;Times New Roman&quot;;mso-hansi-font-family:\n' +
            '&quot;Times New Roman&quot;">（女职委）</span></p>\n'
          },
          {
            title: '微画安全，助力生产',
            imgs: 'http://nggh.nisco.cn/UploadFiles/ghgz/2020/6/202006301047478500.jpg',
            author: '女职委',
            date: '2020-06-30',
            info: '在围绕中心服务大局、推进企业高质量发展的进程中，女职工从未缺席；在推进南钢安全生产工作中，女职工同样有担当有作为。“生命至上、安全第一”。在全国第十九个“安全生产月”之际，公司工会女职工委员会开展了以“微....',
            content:' <p><img alt="" src="http://nggh.nisco.cn/UploadFiles/ghgz/2020/6/202006301047478500.jpg" style="width: 524px; height: 295px;" /></p>\n' +
            '<p>&nbsp;</p>\n' +
            '<p align="center" style="text-align:center"><b><span style="font-size:22.0pt;font-family:仿宋">微‘画’安全 <span style="mso-spacerun:yes">&nbsp;</span>助力生产</span></b></p>\n' +
            '<p>&nbsp;</p>\n' +
            '<p align="center" style="text-align:center"><b><span style="font-size:14.0pt;font-family:仿宋">——公司工会女职工委员会举办安全绘画作品征集活动</span></b></p>\n' +
            '<p>&nbsp;</p>\n' +
            '<p style="text-indent:32.0pt;mso-char-indent-count:2.0;\n' +
            'line-height:26.0pt;mso-line-height-rule:exactly"><span style="font-size:16.0pt;\n' +
            'font-family:仿宋">在围绕中心服务大局、推进企业高质量发展的进程中，女职工从未缺席；在推进南钢安全生产工作中，女职工同样有担当有作为。“生命至上、安全第一”。在全国第十九个“安全生产月”之际，公司工会女职工委员会开展了以“微‘画’安全”为主题的女职工助力安全绘画作品征集活动。</span></p>\n' +
            '<p>&nbsp;</p>\n' +
            '<p style="text-indent:32.0pt;mso-char-indent-count:2.0;\n' +
            'line-height:26.0pt;mso-line-height-rule:exactly"><span style="font-size:16.0pt;\n' +
            'font-family:仿宋">公司各级女职工组织切实发挥女职工组织优势，立足女职工特有的细心、热心和责任心，以春风化雨、润物无声的方式，把参与安全生产的行动融入到每一项日常工作，渗透到每一个工作细节，时刻绷紧安全生产这根弦，不断扣牢企业、职工、家庭之间的安全纽带，从源头上防范和减少安全事故发生。打造有温度的安全“微”文化，通过开展“微‘画’安全”助力安全绘画作品征集活动，把安全生产的理念宣传到女职工和职工家庭，不断提升企业安全水平，展现女职工在推进安全生产中的巾帼风采。</span></p>\n' +
            '<p>&nbsp;</p>\n' +
            '<p style="text-indent:32.0pt;mso-char-indent-count:2.0;\n' +
            'line-height:26.0pt;mso-line-height-rule:exactly"><span style="font-size:16.0pt;\n' +
            'font-family:仿宋">通过积极组织动员，共征集绘画作品<span lang="EN-US">98</span>幅，作者有公司在岗女职工，也有职工子女，年龄最小的<span lang="EN-US">4</span>岁，最大的<span lang="EN-US">48</span>岁。绘画作品品类丰富，有国画、水粉、素描，也有漫画、电子画，内容紧扣安全主题，充分体现安全生产理念，展示了女职工和职工子女的绘画天赋。经过公司文联书画协会专家的认真评选，共评选出优秀作品<span lang="EN-US">20</span>幅，在办公楼门厅集中展示，获得一致好评。 <span lang="EN-US"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span>（女工委）</span></p>\n'
          },
          {
            title: '公司工会女工委六一前夕看望生病职工子女',
            imgs: 'http://nggh.nisco.cn/UploadFiles/ghgz/2020/6/202006031005183866.jpg',
            author: '高捷',
            date: '2020-06-03',
            info: '在第71个“六一”国际儿童节到来之际，公司工会女职工委员会委员们带着水果和慰问金，分别前往凤滨嘉园、鑫庭雅苑、杨庄南村、新华七村等职工家中，看望生急病、重病的职....',
            content:'<p><img alt="" src="http://nggh.nisco.cn/UploadFiles/ghgz/2020/6/202006031005183866.jpg" style="width: 744px; height: 992px;" />' +
            '<img alt="" src="http://nggh.nisco.cn/UploadFiles/ghgz/2020/6/202006031005327939.jpg" style="width: 200px; height: 150px;" /></p>\n' +
            '<p>&nbsp;</p>\n' +
            '<p style="text-indent:28.0pt;mso-char-indent-count:2.0"><span style="font-size:14.0pt;font-family:宋体">在第<span lang="EN-US">71</span>个“六一”国际儿童节到来之际，公司工会女职工委员会委员们带着水果和慰问金，分别前往凤滨嘉园、鑫庭雅苑、杨庄南村、新华七村等职工家中，看望生急病、重病的职工子女，为他们送去节日的祝福和特别的关爱。</span></p>\n' +
            '<p>&nbsp;</p>\n' +
            '<p style="text-indent:28.0pt;mso-char-indent-count:2.0"><span style="font-size:14.0pt;font-family:宋体">每年“六一”儿童节前夕，公司工会女职工委员会都会对特困、单亲家庭大病儿童以及<span lang="EN-US">14</span>周岁以下患重病、急病的职工子女进行梳理统计，今年梳理出长期患病或残疾的病儿<span lang="EN-US">9</span>名，患急病经各级医保、公司医改办报销后自费金额达到<span lang="EN-US">5000</span>元以上的病儿<span lang="EN-US">9</span>名。公司工会女职工委员会分别对他们进行了补助，并选择了四个病儿家庭上门慰问。</span></p>\n' +
            '<p>&nbsp;</p>\n' +
            '<p style="text-indent:28.0pt;mso-char-indent-count:2.0"><span style="font-size:14.0pt;font-family:宋体">女工委员们仔细询问了孩子的病情和治疗情况，鼓励职工们克服困难，坚定信心，对生病的孩子及时、尽最大努力给予治疗，让他们健康快乐成长，并祝小朋友们<span lang="EN-US">“</span>六一<span lang="EN-US">”</span>儿童节快乐！ （高捷 文 杨小丽、田甜）</span></p>\n'
          },
          {
            title: '公司工会举办女工干部培训班-南京钢铁联合有限公司工会',
            imgs: 'http://nggh.nisco.cn/UploadFiles/ghgz/2019/12/201912090945207564.jpg',
            author: '张中芳 高捷',
            date: '2019-12-09',
            info: '12月6日，公司工会女职工委员会举办为期一天的女职工干部培训班，邀请南京中医药大学曾智教授、南京市人社局生育保险科王小戟科长分别做题为《职场心灵和谐与自我修炼》以及《生育保....',
            content:'<p><img alt="" src="http://nggh.nisco.cn/UploadFiles/ghgz/2019/12/201912090945207564.jpg" style="height: 307px; width: 492px" /></p>\n' +
            '<p class="MsoNormal" style="margin: 0cm 0cm 0pt; line-height: 23pt; text-indent: 32.3pt; mso-line-height-rule: exactly"><font face="仿宋"><span lang="EN-US"><font color="#000000" size="5">12</font></span><font color="#000000" size="5">月</font><span lang="EN-US"><font color="#000000" size="5">6</font></span><font color="#000000" size="5">日，公司工会女职工委员会举办为期一天的女职工干部培训班，邀请南京中医药大学曾智教授、南京市人社局生育保险科王小戟科长分别做题为《职场心灵和谐与自我修炼》以及《生育保险相关政策解读》的专题讲解。公司各级工会女职工干部三十余人参加了培训。</font></font></p>\n' +
            '<p class="MsoNormal" style="margin: 0cm 0cm 0pt; line-height: 23pt; text-indent: 32.3pt; mso-line-height-rule: exactly"><font face="仿宋"><font size="5"><font color="#000000">公司工会副主席杨桥东做了开班动员。他希望参加培训的女工干部能将培训内容内化于心、外化于行；通过培训彼此之间分享工作经验，加强沟通联系；并介绍了明年公司工会的主要工作思路和重点工作。希望广大工会工作者紧紧围绕<span lang="EN-US">“</span></font></font><font color="#000000" size="5">服务企业，服务职工</font><span lang="EN-US"><font color="#000000" size="5">”</font></span><font color="#000000" size="5">的工作宗旨，努力做到</font><span lang="EN-US"><font color="#000000" size="5">“</font></span><font color="#000000" size="5">围绕中心转，跟着党政走，心中有职工</font><span lang="EN-US"><font color="#000000" size="5">”</font></span><font color="#000000" size="5">。</font></font></p>\n' +
            '<p class="MsoNormal" style="margin: 0cm 0cm 0pt; line-height: 23pt; text-indent: 32.3pt; mso-line-height-rule: exactly"><font color="#000000" face="仿宋" size="5">南京中医药大学卫生经济管理学院教授、博士，硕士研究生导师，国内知名管理科学培训专家曾智教授从保持心灵和谐是一种调适职场压力的境界和素质、职业发展中自我修炼的智慧、修炼自我，构建和谐的人际关系、加强团队建设，提升团队素养等四个方面阐述了“心灵和谐成为我们实践快乐人生的手段”这一主题。曾教授语言风趣生动，引经据典，从热门电视剧《甄嬛传》的人物分析入手，层层剖析，得出结论：面对现代社会的诸多压力，只有实现自我心灵革命，拥有和谐的心灵，才能享受美好人生。他为女工干部做了一次很好的心理疏导，参培女工干部们受益匪浅，意犹未尽。</font></p>\n' +
            '<p class="MsoNormal" style="margin: 0cm 0cm 0pt; line-height: 23pt; text-indent: 32.3pt; mso-line-height-rule: exactly"><font color="#000000" face="仿宋" size="5">南京市社保中心生育保险科科长王小戟从参保对象、缴费费率、享受生育保险待遇的条件、待遇标准、就医流程等几方面系统介绍了生育保险的相关政策法规，内容详实，政策性强，对女工干部的日常工作具有指导意义。</font></p>\n' +
            '<p class="MsoNormal" style="margin: 0cm 0cm 0pt; line-height: 23pt; text-indent: 32.3pt; mso-line-height-rule: exactly"><font color="#000000" face="仿宋" size="5">通过一天的学习培训，工会女职工干部的理论水平、专业技能和服务能力有了进一步提高。</font></p>\n' +
            '<p class="MsoNormal" style="margin: 0cm 0cm 0pt; line-height: 23pt; text-indent: 216pt; mso-line-height-rule: exactly; mso-char-indent-count: 13.5"><a name="_GoBack"></a><font face="仿宋"><span lang="EN-US"><font color="#000000" size="5">(</font></span><font color="#000000" size="5">文：张中芳 高捷 图：陈虹</font><span lang="EN-US"><font color="#000000" size="5">)</font></span></font></p>\n'
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
          name: 'infoDetail',
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
</style>

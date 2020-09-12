<template>
  <div class="mainBox">
    <div class="mainContent">
      <el-tabs :tab-position="position">
        <el-tab-pane label="工会要闻">
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
        </el-tab-pane>
        <el-tab-pane label="政策解读">
          <div class="mainList">
            <el-collapse v-model="active">
              <el-collapse-item name="1" v-for="(item, index) in policy" :key="index">
                <template slot="title">
                  <el-link @click="handleClick(item)" target="_blank">{{item.title}}</el-link>
                </template>
                <Card :info="item.info" :date="item.date" :author="item.author"></Card>
              </el-collapse-item>
            </el-collapse>
          </div>
        </el-tab-pane>
        <el-tab-pane label="主席信箱">主席信箱</el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import Card from '../../components/Card'

  export default {
    name: 'Notice',
    components: { Card },
    data() {
      return {
        position: 'left',
        active: ['1','2','3','4'],
        list: [
          {
            title: '艺术家园“艺之乒”周年庆在南钢举办',
            author: '陈虹',
            date: '2019-09-02',
            info: '9月1日，南京艺术家园“艺之乒”成立一周年庆活动在南钢举办，南钢工会主席张六喜等接待了艺术家们的到来。此次参加活动的有《江苏工人....',
            content:'<p><img alt="" src="http://nggh.nisco.cn/UploadFiles/ghgz/2020/9/202009020825161393.jpg" style="width: 439px; height: 332px;" /></p>' +
            '<p>&nbsp;</p>' +
            '<p style="text-indent:21.0pt"><span lang="EN-US">9</span>月<span lang="EN-US">1</span>日，南京艺术家园“艺之乒”成立一周年庆活动在南钢举办，南钢工会主席张六喜等接待了艺术家们的到来。此次参加活动的有《江苏工人报》著名漫画家禹天成、南京知名主持人方方等来自各界的艺术家们。（陈虹）</p>'
          },
          {
            title: '六一前夕看望生病职工子女',
            author: '佚名',
            date: '2019-06-03',
            info: '在第70个“六一”国际儿童节到来之际，公司党委副书记、工会主席张六喜，公司工会女职工委员会主任陈杰一行，带着水果、牛奶等.....',
            content:'<p><img alt="" src="http://nggh.nisco.cn/UploadFiles/ghgz/2019/6/201906031511373522.jpg" style="height: 418px; width: 485px" /></p>' +
            '<p><img alt="" src="http://nggh.nisco.cn/UploadFiles/ghgz/2019/6/201906031511529242.jpg" style="height: 362px; width: 487px" /></p>' +
            '<p class="MsoNormal" style="margin: 0cm 0cm 0pt; text-indent: 28pt; mso-char-indent-count: 2.0"><span style="font-size: 14pt; font-family: 宋体"><font color="#000000">在第<span lang="EN-US">70</span></font><font color="#000000">个&ldquo;六一&rdquo;国际儿童节到来之际，公司党委副书记、工会主席张六喜，公司工会女职工委员会主任陈杰一行，带着水果、牛奶等慰问品，分别前往南钢五村、湖滨村、六村等职工家中，看望生急病、重病的职工子女，为他们送去&ldquo;六一&rdquo;儿童节的关爱。<span lang="EN-US">　　</span></font></span></p>' +
            '<p class="MsoNormal" style="margin: 0cm 0cm 0pt; text-indent: 28pt; mso-char-indent-count: 2.0"><span style="font-size: 14pt; font-family: 宋体"><font color="#000000">每年&ldquo;六一&rdquo;儿童节前夕，公司工会女职工委员会都会对特困、单亲家庭大病儿童以及<span lang="EN-US">14</span></font><font color="#000000">周岁以下患重病、急病的职工子女进行梳理统计，今年梳理出长期患病或残疾的病儿</font><span lang="EN-US"><font color="#000000">10</font></span><font color="#000000">名，患急病经各级医保、公司医改办报销后自费金额达到</font><span lang="EN-US"><font color="#000000">5000</font></span><font color="#000000">元以上的病儿</font><span lang="EN-US"><font color="#000000">9</font></span><font color="#000000">名。公司工会女职工委员会分别对他们进行了补助，并选择了三个困难家庭上门慰问。<span lang="EN-US">　　</span></font></span></p>' +
            '<p class="MsoNormal" style="margin: 0cm 0cm 0pt; text-indent: 28pt; mso-char-indent-count: 2.0"><span style="font-size: 14pt; font-family: 宋体"><font color="#000000">公辅事业部铁运中心职工刘涛儿子刘嘉宝患重症肌无力、脑蛋白营养不良，公司工会女职委每年都会来看望他。十周岁的男孩子正是调皮玩耍的年纪，可他连舒服地坐着都是奢望，孩子的父母并没有放弃他，孩子可爱的神情和天真的话语惹得大家齐声笑了起来。张主席仔细询问了孩子的病情和治疗情况，鼓励他们要克服困难，坚定信心，尽最大努力照顾好孩子，让他们快乐成长。<span lang="EN-US">　　</span></font></span></p>' +
            '<p class="MsoNormal" style="margin: 0cm 0cm 0pt; text-indent: 28.5pt"><span style="font-size: 14pt; font-family: 宋体"><font color="#000000">板材事业部第一炼钢厂职工邓伟庆<span lang="EN-US">6</span></font><font color="#000000">岁的儿子邓兴成患儿童孤独症，长期康复治疗的负担很重。小兴成见到来看望他的张主席一行非常兴奋。张主席嘱咐孩子父亲及时给予治疗，不能耽误孩子健康快乐成长。<span lang="EN-US">　　</span></font></span></p>' +
            '<p class="MsoNormal" style="margin: 0cm 0cm 0pt; text-indent: 28.5pt"><span style="font-size: 14pt; font-family: 宋体"><font color="#000000">板材事业部中厚板卷厂石飞飞的双胞胎女儿先后患新生儿肺炎、急性坏死性小肠结肠炎等疾病，给家庭带来了沉重负担，张主席看到现在已<span lang="EN-US">9</span></font><font color="#000000">个月大的两个孩子精神状态很好，不禁由衷地高兴。<span lang="EN-US">　　</span></font></span></p>' +
            '<p class="MsoNormal" style="margin: 0cm 0cm 0pt; text-indent: 28.5pt"><span style="font-size: 14pt; font-family: 宋体"><font color="#000000">在看望了三个病儿家庭之后，张主席一行来到了六村幼儿园，看望了正在参加&ldquo;六一&rdquo;儿童节活动的幼儿园老师、家长和孩子们。他详细了解了幼儿园的设施、师资和生源情况，希望六村幼儿园和家长一道培养好孩子，让他们有个幸福快乐的童年，祝小朋友们<span lang="EN-US">&ldquo;</span></font><font color="#000000">六一</font><span lang="EN-US"><font color="#000000">&rdquo;</font></span><font color="#000000">国际儿童节快乐！</font><span lang="EN-US"><font color="#000000"><span style="mso-spacerun: yes">&nbsp; </span><span style="mso-spacerun: yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></font></span><font color="#000000">（文：张中芳高捷</font><span lang="EN-US"><span style="mso-spacerun: yes"><font color="#000000">&nbsp;&nbsp; </font></span></span><font color="#000000">摄影：魏南南）</font><span lang="EN-US">　　</span></span></p>'
          },
          {
            title: '田浩被授予“南京市十佳文明职工”称号',
            author: '方雷',
            date: '2019-05-27',
            info: '南钢研究院职工田浩被授予“南京市十佳文明职工”称号，并荣获“五一”劳动奖章。近日，南京市十佳文明职工代表-南钢研究院.........',
            content:'<p class="p" style="background: rgb(255,255,255); margin: 0pt auto; line-height: 16.8pt; text-indent: 24pt"><span style="font-size: 12pt; font-family: 微软雅黑; color: rgb(0,0,0); mso-spacerun: \'yes\'; mso-bidi-font-family: 宋体; mso-font-kerning: 0.0000pt"><font face="微软雅黑">南钢研究院职工田浩被授予&ldquo;南京市十佳文明职工&rdquo;称号，并荣获</font>&ldquo;五一&rdquo;劳动奖章。</span><span style="font-size: 12pt; font-family: 微软雅黑; color: rgb(0,0,0); mso-spacerun: \'yes\'; mso-bidi-font-family: 宋体; mso-font-kerning: 0.0000pt">　　</span></p>' +
            '<p class="p" style="background: rgb(255,255,255); margin: 0pt auto; line-height: 16.8pt; text-indent: 24pt"><span style="font-size: 12pt; font-family: 微软雅黑; color: rgb(0,0,0); mso-spacerun: \'yes\'; mso-bidi-font-family: 宋体; mso-font-kerning: 0.0000pt"><font face="微软雅黑">近日，</font></span><span style="font-size: 12pt; font-family: 微软雅黑; color: rgb(0,0,0); mso-spacerun: \'yes\'; mso-bidi-font-family: 宋体; mso-font-kerning: 0.0000pt"><font face="微软雅黑">南京市十佳文明职工代表</font>-南钢研究院职工田浩，受邀参加由南京广播电台录制的&ldquo;南京好人365&rdquo;访谈节目。&ldquo;南京好人365&rdquo;专栏节目每天讲述一位南京好人的感人故事，大力倡导关注好人、崇尚好人的社会导向，在全社会形成争做好人的良好风尚，积极传播和弘扬社会主义核心价值观。</span><span style="font-size: 12pt; font-family: 微软雅黑; color: rgb(0,0,0); mso-spacerun: \'yes\'; mso-bidi-font-family: 宋体; mso-font-kerning: 0.0000pt">　　</span></p>' +
            '<p class="MsoPlainText" style="margin: 0pt; text-indent: 27pt; mso-char-indent-count: 2.2500"><span style="font-size: 12pt; font-family: 微软雅黑; color: rgb(0,0,0); mso-spacerun: \'yes\'; mso-bidi-font-family: 宋体; mso-font-kerning: 0.0000pt">2000年,田浩18岁步入焊接行业，立志献身焊接事业，田浩是南京钢铁集团专门引进的高技术焊接人才， 2013年来到南钢研究院，田浩勤勤恳恳，默默奉献，对工作尽职尽责,对专业技能不断钻研，不断创新。2017年, 田浩被评为南钢集团的首届&ldquo;南钢工匠&rdquo;；2017年,他参加江苏省焊工大赛&ldquo;中建钢构杯&rdquo;，获得团体第三名，个人第五名；2017年,他被江苏省总工会授予&ldquo;江苏省五一创新能手荣誉称号&rdquo;；2018年,他被中国钢铁工业协会评为全国钢铁行业职业技能竞赛裁判员。工作中他兢兢业业，生活中他热心帮助他人，每年积极参加无偿献血；累计捐款10余次，同事中谁家有事，都会有他忙碌的身影</span><span style="font-size: 12pt; font-family: 微软雅黑; color: rgb(0,0,0); mso-spacerun: \'yes\'; mso-bidi-font-family: 宋体; mso-font-kerning: 0.0000pt">&hellip;</span><span style="font-size: 12pt; font-family: 微软雅黑; color: rgb(0,0,0); mso-spacerun: \'yes\'; mso-bidi-font-family: 宋体; mso-font-kerning: 0.0000pt">..</span><span style="font-size: 12pt; font-family: 微软雅黑; color: rgb(0,0,0); mso-spacerun: \'yes\'; mso-bidi-font-family: 宋体; mso-font-kerning: 0.0000pt">　　</span></p>' +
            '<p class="MsoPlainText" style="margin: 0pt; text-indent: 27pt; mso-char-indent-count: 2.2500"><span style="font-size: 12pt; font-family: 微软雅黑; color: rgb(0,0,0); mso-spacerun: \'yes\'; mso-bidi-font-family: 宋体; mso-font-kerning: 0.0000pt"><font face="微软雅黑">访谈现场，田浩的事迹让在场听众非常感动。田浩用他生活中的点点滴滴诠释如何践行社会主义核心价值观，是我们身边学习的好榜样！</font></span></p>' +
            '<p class="MsoPlainText" style="margin: 0pt; text-indent: 27pt; mso-char-indent-count: 2.2500"><span style="font-size: 12pt; font-family: 微软雅黑; color: rgb(0,0,0); mso-spacerun: \'yes\'; mso-bidi-font-family: 宋体; mso-font-kerning: 0.0000pt"><font face="微软雅黑"><img alt="" src="http://nggh.nisco.cn/UploadFiles/ghgz/2019/5/201905271502519833.jpg" style="height: 971px; width: 429px" /></font></span></p>' +
            '<p class="p" style="background: rgb(255,255,255); margin: 0pt auto; line-height: 16.8pt; text-indent: 24pt"><span style="font-size: 12pt; font-family: 微软雅黑; color: rgb(0,0,0); mso-spacerun: \'yes\'; mso-bidi-font-family: 宋体; mso-font-kerning: 0.0000pt">　&nbsp;　</span></p>' +
            '<p class="p" style="background: rgb(255,255,255); margin: 0pt auto; line-height: 16.8pt; text-indent: 24pt"><span style="font-size: 12pt; font-family: 微软雅黑; color: rgb(0,0,0); mso-spacerun: \'yes\'; mso-bidi-font-family: 宋体; mso-font-kerning: 0.0000pt">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;<font face="微软雅黑">研究院</font></span><span style="font-size: 12pt; font-family: 微软雅黑; color: rgb(0,0,0); mso-spacerun: \'yes\'; mso-bidi-font-family: 宋体; mso-font-kerning: 0.0000pt">　　</span></p>' +
            '<p class="p" style="background: rgb(255,255,255); margin: 0pt auto; line-height: 16.8pt; text-indent: 288pt; mso-char-indent-count: 24.0000"><span style="font-size: 12pt; font-family: 微软雅黑; color: rgb(0,0,0); mso-spacerun: \'yes\'; mso-bidi-font-family: 宋体; mso-font-kerning: 0.0000pt">&nbsp;<font face="微软雅黑">汪晶洁</font> &nbsp;<font face="微软雅黑">吴晓慧</font></span></p>'
          },
          {
            title: '公司工会召开庆“五一”劳模、先进座谈会',
            author: '高安俊',
            date: '2019-05-05',
            info: '4月30日上午，公司工会在公司新大楼202会议室召开庆“五一”劳模、先进座谈会。来自公司各事业部、直属单位的市级以上退休、在......',
            content:'<p class="MsoNormal" style="text-indent:28.0pt;mso-char-indent-count:2.0;&#10;line-height:200%;mso-pagination:widow-orphan"><span lang="EN-US" style="font-size: 14pt; line-height: 200%; font-family: 宋体;">4</span><span style="font-size: 14pt; line-height: 200%; font-family: 宋体;">月<span lang="EN-US">30</span>日上午，公司工会在公司新大楼<span lang="EN-US">202</span>会议室召开庆&ldquo;五一&rdquo;劳模、先进座谈会。来自公司各事业部、直属单位的市级以上退休、在职劳模、五一奖章代表；公司十佳先进人物代表；职工技术创新工作室领头人代表齐聚一堂致敬劳动者，共话南钢憧憬未来。公司党委副书记工会主席张六喜参加座谈会。　　<span lang="EN-US"><o:p></o:p></span></span></p>\n' +
            '<p class="MsoNormal" style="text-indent:28.0pt;mso-char-indent-count:2.0;&#10;line-height:200%;mso-pagination:widow-orphan"><span style="font-size: 14pt; line-height: 200%; font-family: 宋体;">会上劳模、先进代表纷纷发言，忆过去谈现在，畅谈感受和理想，对南钢充满希望和感激，感激南钢给了他们施展的平台，锻炼大家的意志，促进大家的共同成长，丰富阅历，无悔逝去的青春。　　</span></p>\n' +
            '<p class="MsoNormal" style="text-indent:28.0pt;mso-char-indent-count:2.0;&#10;line-height:200%;mso-pagination:widow-orphan"><span style="font-size: 14pt; line-height: 200%; font-family: 宋体;">工会主席张六喜说：在五一节到来之前，我代表公司工会向大家表达敬意，祝大家节日快乐！劳模是南钢宝贵的精神财富，是最有价值的无形品牌，是企业的脊梁。希望大家保持劳模的先进性，做时代的楷模，新时代新使命，永葆本色，不忘初心，自觉履行使命，保持政治性。<span lang="EN-US">(</span>公司工会：戴静<span lang="EN-US">&nbsp;</span>文<span lang="EN-US">/</span>图<span lang="EN-US">)<o:p></o:p></span></span></p>\n' +
            '<p class="MsoNormal" style="text-align: center;"><img alt="" style="height: 418px; width: 485px" src="http://nggh.nisco.cn/UploadFiles/upload/201905051137467074.jpg" style="width: 768px; height: 512px;" /></p>\n' +
            '<p class="MsoNormal" style="text-align: center;"><img alt="" style="height: 418px; width: 485px" src="http://nggh.nisco.cn/UploadFiles/upload/201905051138071860.jpg" style="width: 757px; height: 510px;" /></p>\n' +
            '<p class="MsoNormal" style="text-align: center;"><img alt="" style="height: 418px; width: 485px" src="http://nggh.nisco.cn/UploadFiles/upload/201905051138335245.jpg" style="width: 768px; height: 512px;" /></p>\n'
          }
        ],
        policy: [
          {
            title: '上海豫园商城党委来南钢对标党建工作',
            author: '匿名',
            date: '2018-11-03',
            info: '10月25日，上海豫园旅游商城股份有限公司党委书记、总裁梅红建，党委副书记范志韵率20多人来南钢对标党建工作。南钢党委书记陶魄，副书记、工会主席张六喜接待了来访....',
            content:' <p>&emsp;&emsp;10月25日，上海豫园旅游商城股份有限公司党委书记、总裁梅红建，党委副书记范志韵率20多人来南钢对标党建工作。南钢党委书记陶魄，副书记、工会主席张六喜接待了来访客人，党委工作部、公司办、人力资源部、保卫部、战略运营部、廉政督察部等部门负责人参加接待。&nbsp;</p>\n' +
            '\n' +
            '<p>&emsp;&emsp;来访客人首先参观了九龙湖、宽厚板厂生产线和南京钢铁博物馆，绿色生态化的厂区、壮观的生产现场给客人留下了深刻的印象。尤其是南京钢铁博物馆的参观，使客人们增长了钢铁制造的知识，了解了南钢乃至江苏省钢铁业的发展史，大家赞不绝口。&nbsp;</p>\n' +
            '\n' +
            '<p>&emsp;&emsp;在双方交流中，党委工作部部长王敏介绍了南钢卓越党建模式实施情况。上海豫园旅游商城党委书记梅红建说，上海豫园股份与南钢都是改制单位，不同的是涉及的领域不同。南钢的工作理念领先，方法先进，有许多值得学习的地方。南钢的卓越党建模式使人耳目一新，尤其在企业党建工作上有许多创新，提供了一条有价值的探索之路。&nbsp;</p>\n' +
            '\n' +
            '<p>&emsp;&emsp;陶魄表示，豫园商城股份是世界级著名品牌，有悠久的历史，值得南钢学习。两家企业都是混改企业，豫园商城是上海商贸行业混改典型，南钢是江苏省制造业混改典型，如何使党建工作做出混改企业的特色，这是我们的任务。习总书记提出，要推动经济高质量发展，这就要求我们要以新理念引领新常态，以经济高质量运行引领时代发展。经济高质量运行离不开党建引领，而党建工作必须与现代化管理相结合，与现代化管理对接。进入新时代，党建如何引领经济的高质量发展，是我们面临的课题，我们要互相沟通、共同切磋，坚持党建引领，为新时代社会主义事业添砖加瓦而努力。</p>\n' +
            '\n'
          },
          {
            title: '全国卓越党建现场会在南钢召开',
            author: '匿名',
            date: '2018-10-30',
            info: '10月16日，中国质量协会和南钢共同主办的2018全国第二期卓越绩效专题活动暨卓越党建现场会在南钢召开。国务院国资委行业协会商会党建工作局局长张涛、国资委行业协会商会党建工作局副局长方长安、国资委管理局副局长张丽、中央党校教授刘炳香、江苏省党建协会副会长黄文虎、南京市国资....',
            content:'  <p>&emsp;&emsp;10月16日，中国质量协会和南钢共同主办的2018全国第二期卓越绩效专题活动暨卓越党建现场会在南钢召开。&nbsp;</p>\n' +
            '\n' +
            '<p>&emsp;&emsp;国务院国资委行业协会商会党建工作局局长张涛、国资委行业协会商会党建工作局副局长方长安、国资委管理局副局长张丽、中央党校教授刘炳香、江苏省党建协会副会长黄文虎、南京市国资委副巡视员吴军、南京市国资委党建工作处调研员彭邦超、冶金工业质量经营联盟常务副理事长兼秘书长管炳春、江苏省质量管理协会会长张星际，以及主办方的中国质量协会副会长兼秘书长段永刚、南钢董事长黄一新、南钢党委书记陶魄、南钢党委副书记工会主席张六喜、南钢党委委员党委工作部部长王敏、中国质量协会咨询培训中心主任黄少兵等出席。会议由中国质量协会党委委员、副秘书长王琳主持。</p>\n' +
            '\n' +
            '<p>&emsp;&emsp;南钢董事长黄一新致欢迎辞，代表南钢全体党员干部和职工，对此次大会的召开表示热烈地祝贺，对前来参加会议的各位领导和来宾表示最诚挚地欢迎和最衷心地感谢。黄一新简要介绍了南钢60年发展历程，构建钢铁+新产业&ldquo;1+6&rdquo;相互赋能的复合产业链生态系统等情况，并表示&ldquo;交流创造价值，共享赢得未来&rdquo;，希望与会代表能够倾囊相授、倾心交流，激发更多思想火花、提炼更多精彩观点、汇聚更多远见卓识，不断推进党建工作水平再登新台阶、再上新水平。&nbsp;</p>\n' +
            '\n' +
            '<p>&emsp;&emsp;国务院国资委行业协会商会党建工作局局长张涛致辞表示，南钢探索卓越党建模式，为提升混合所有制企业党建工作的系统化、规范化、科学化、有效化水平，在凝聚企业力量、优化企业治理、促进企业创新、深化企业责任、提升企业核心竞争力、保障企业发展等方面，发挥正确有力引领、卓越推动作用，有许多经验、价值值得我们进一步研究、借鉴，进行新的开发、推广。&nbsp;</p>\n' +
            '\n' +
            '<p>&emsp;&emsp;张涛指出，做好新时代党的建设工作，要深入贯彻中央建设总要求，结合实际，系统把握6个方面的基本环节：愿做要做、做真做实、做全做稳、做紧做牢、做好做亮、做深做远，要研究建立科学、系统、有效的管理模式，要像南钢一样，在卓越党建模式上开展开拓性、创新性、有效性的科学尝试，为服务和推动新时代企业行业党的建设，保障和促进企业健康发展，做出应有的努力、更大的贡献。&nbsp;</p>\n' +
            '\n' +
            '<p>&emsp;&emsp;中国质量协会副会长兼秘书长段永刚致辞，介绍中国质量协会的使命，以及卓越绩效模式推广和开展企业党建质量管理体系认证服务等情况。段永刚表示，不断提高企业党的建设质量，是企业党建一个重大课题，值得深入探讨和研究。南钢在这方面做了很好的探索，首创性地把企业管理的先进理论&mdash;&mdash;卓越绩效模式的理念和方法创新性地应用到党建工作中。组织卓越党建现场会，就是希望总结分享南钢党建工作与现代化管理方法有效融合的经验成果，推动卓越绩效理念广泛深入应用。</p>\n' +
            '\n' +
            '<p>&emsp;&emsp;南钢党委委员、党委工作部部长王敏从南钢党建基本情况、卓越党建模式架构、卓越党建的初步成效等维度系统汇报了南钢卓越党建模式。</p>\n' +
            '\n' +
            '<p>&emsp;&emsp;南钢党委书记陶魄分享了践行卓越党建模式的体会。&ldquo;核心引领，同频共振，创新发展，共创共享，追求卓越&rdquo;是卓越党建的核心理念。陶魄表示，推行卓越党建模式，促进了企业党建工作的创新，促使党建工作真正落到了实处，更好地发挥了党组织在企业的优势，党建工作还可以完善企业管理。</p>\n' +
            '\n' +
            '<p>&emsp;&emsp;江苏省党建协会副会长黄文虎点评南钢卓越党建时表示，这次卓越党建现场会给我们启发很大、收获很大，企业所有制可以改，但企业党建工作的优良传统和突出优势，不仅不能丢而且还要发扬光大，党建工作必须不断丰富、发展、提高；这次卓越党建现场会的成果很多、亮点很多，作为混合所有制企业南钢探索的党建新路富有特色，一是始终强调政治引领，二是促进有效融合，三是健全组织体系，四是不断开拓创新。黄文虎表示，开拓的视野，先进的理念，期待南钢不断探索创新党建工作，为全省提供学习、推广的经验做法。</p>\n' +
            '\n' +
            '<p>&emsp;&emsp;中央党校教授、博士生导师刘炳香点评南钢卓越党建时总结为四点。一是方向对。围绕中心服务大局开展企业党建工作，把党建的政治优势转化为企业的发展优势。二是方法新。党建的传统方法结合管理的现代手段，科学化地统一了党建要求、企业要求和个人需求。三是效果好。体系完整、顺畅运转、党员活跃，组织的凝聚力、战斗力、生机活力大大增强。四是动力足。好的模式必然是可持续的有效、有用的，南钢做到了。</p>\n' +
            '\n' +
            '<p>&emsp;&emsp;与会代表对大会的成功举办和南钢的热情接待给予了高度评价。出席本次活动的有内蒙古包钢、中国电子科技集团公司、中国人民解放军第四七二四工厂、杭州老板电器股份有限公司、洛阳国宏投资集团有限公司、上海市第一人民医院等会员单位领导及党务工作者，南钢各基层党组织负责人，以及新华社、人民日报、新华日报、南京日报、金陵瞭望、新江北报等媒体代表。与会代表参观了南京钢铁博物馆、南京市国资委党员教育实境课堂示范点等，近距离体验南钢卓越党建模式落实落地。</p>\n'
          },
          {
            title: '姜兴宏一行调研南钢卓越党建模式',
            author: '匿名',
            date: '2018-10-30',
            info: '日前，中国冶金职工思想政治工作研究会会长姜兴宏一行，就南钢卓越党建模式来调研。党委工作部副部长陈佳对南钢卓越党建模式开展情况作了介绍。自2016年年底以来，南钢着力推进卓越党建模式，充分发挥核心引领作用，为企业发展提供思想保障；落实五大发展理念......',
            content:'<p>日前，中国冶金职工思想政治工作研究会会长姜兴宏一行，就南钢卓越党建模式来调研。</p>\n' +
            '\n' +
            '<p>党委工作部副部长陈佳对南钢卓越党建模式开展情况作了介绍。自2016年年底以来，南钢着力推进卓越党建模式，充分发挥核心引领作用，为企业发展提供思想保障；落实五大发展理念，以创新提升企业核心竞争力，建设智慧南钢；落实中央精准扶贫工作要求，积极履行社会责任，建设和谐南钢；落实生态文明建设要求，争做产城融合的典范，建设美丽南钢；创建合伙人机制，共享企业发展成果，建设幸福南钢。</p>\n' +
            '\n' +
            '<p>姜兴宏高度肯定了南钢在卓越党建方面所取得的成果。南钢党委紧跟形势，积极创新，形成了适合南钢又符中央要求的卓越党建模式，在党建工作中迈出了重要一步。同时积极探索，从实践操作方面着手，把党建工作细化到每项具体工作中，取得了实实在在的成效，与生产经营形成了良性互动。希望南钢进一步加强卓越党建模式建设，扩大影响力，扎根在支部，扎根在党员的心中，为党建工作提供更多的经验。</p>\n' +
            '\n' +
            '<p>陶魄对姜会长到南钢来指导表示欢迎。他指出，南钢卓越党建模式的精髓在于把党的七大建设同组织领导、目标理念和团队建设有机结合，使党建工作真正成为驱动企业持续健康发展的强大动力。</p>\n' +
            '\n' +
            '<p>陶魄强调，今年是贯彻党的十九大精神的开局之年，是落实中央对经济高质量发展要求的重要一年，南钢将在上级党组织的领导下，坚决贯彻习近平新时代中国特色社会主义思想和十九大精神，围绕企业发展目标，坚持与时俱进、奋发有为，努力为开创新时代南钢党建工作的新局面而努力奋斗。</p>\n' +
            '\n'
          },
          {
            title: '南钢启动党建贯标外审',
            author: '匿名',
            date: '2018-09-04',
            info: '8月18日，南钢党委召开党建贯标外审启动大会暨书记例会，各单位党政负责人、有关职能部室负责人、党支部书记代表及有关党务工作者参加了大会。会上介绍了此次外审工作安排，对卓越党建换版内容进行了培训。自2016年11月党建贯标发布，2017年1月卓越党建模式推进以来，南钢党委充分......',
            content:'<p>8月18日，南钢党委召开党建贯标外审启动大会暨书记例会，各单位党政负责人、有关职能部室负责人、党支部书记代表及有关党务工作者参加了大会。会上介绍了此次外审工作安排，对卓越党建换版内容进行了培训。</p>\n' +
            '\n' +
            '<p>自2016年11月党建贯标发布，2017年1月卓越党建模式推进以来，南钢党委充分发挥党组织的政治核心和领导核心作用，结合混改企业党建工作的实践，融合现代化管理理念，探索形成了南钢卓越党建模式。该模式运用成熟度评价和PDCA闭环管理，以卓越的过程导出卓越的结果，实现党建具体工作和现代化管理方法的有效融合。根据党建贯标外审安排，南钢将在9月中旬前完成外审工作，为此，要做好材料准备、系统培训、管理体系内部审核、管理评审等各项工作。</p>\n' +
            '\n' +
            '<p>南钢党委书记陶魄对卓越党建质量方针、卓越党建质量目标和贯标工作进行了解读和进一步要求。他要求，遵守卓越党建质量方针，开展卓越党建管理评审工作，要有持续性、有效性。各党组织负责人要结合卓越党建质量方针的内涵，明确管理承诺的内容，为解决实际问题提供帮助。</p>\n' +
            '\n' +
            '<p>会议还总结了二季度党建工作，并对三季度南钢党建工作做了部署。</p>'
          },
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

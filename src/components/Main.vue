<template>
  <div class="home">
    <div class="crousel">
      <img width="100%" height="400px" :src="require('@/assets/images/homebg.jpg')" alt="pic">
    </div>
    <div class="mainBox">
      <div class="content-item">
        <div class="con-left">
          <ContentHeader :refresh="false" title="新闻动态" more="查看全部" :border="false"></ContentHeader>
          <div class="new-item" v-for="item in news" :key="item.id">
            <div class="img">
              <img :src="item.imgs" alt="" srcset="">
            </div>
            <div class="h4">{{item.title}}</div>
            <div class="gray">{{item.date}}</div>
          </div>
        </div>
        <div class="con-right">
          <ContentHeader :refresh="false" title="创新工作室" more="查看全部" :border="false"></ContentHeader>
          <el-carousel height="400px" indicator-position="outside">
            <el-carousel-item v-for="item in 4" :key="item">
              <div class="office-item" v-for="i in studio" :key="i.id">
                <div class="left">
                  <img :src="i.imgs" alt="" srcset="">
                </div>
                <div class="right">
                  <div class="title">{{i.title}}</div>
                  <div class="content">{{i.author}}</div>
                  <div class="content">{{i.classify}}</div>
                </div>
              </div>
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
      <div class="homeItems">
        <ContentHeader :refresh="false" title="基层风采" more="查看全部" :border="false"></ContentHeader>
        <div class="jcfc-item" v-for="item in workers" :key="item.id">
          <div class="img">
            <img :src="item.imgs" alt="" srcset="">
          </div>
          <div class="title">{{item.title}}</div>
        </div>
      </div>
      <div class="clear"></div>
      <div class="homeItems">
        <div class="yd-tit">运动专题</div>
        <div class="line"></div>
        <div class="button-list">
          <span class="button-item" :class="i==0?'active':''" v-for="(item,i) in buttonList" :key="item.id">{{item}}</span>
        </div>
        <div class="clear"></div>
        <el-carousel indicator-position="outside">
          <el-carousel-item v-for="item in 4" :key="item">
            <div class="yd-item" v-for="i in three" :key="i.id">
              <div class="img">
                <img :src="i.imgs" alt="" srcset="">
              </div>
              <div class="title">{{i.title}}</div>
              <div class="date"><span class="el-icon-time"></span>{{i.date}}</div>
            </div>
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="content-item">
        <div class="con-left">
          <ContentHeader :refresh="false" title="技能培训" more="查看全部" :border="false"></ContentHeader>
          <div class="jn-item" v-for="item in lecture" :key="item.id">
            <div class="left">
              <img :src="item.imgs" alt="" srcset="">
            </div>
            <div class="right">
              <div class="title">{{item.title}}</div>
              <div class="content">{{item.content}}</div>
              <div class="date">{{item.date}}</div>
            </div>
          </div>
        </div>
        <div class="con-right">
          <ContentHeader :refresh="false" title="练兵比武" more="查看全部排名" :border="false"></ContentHeader>
          <div class="bw-list first">
            <span class="pm">排名</span>
            <span class="hy">行业</span>
            <span class="pm">热度</span>
          </div>
          <div class="bw-list" v-for="(item, index) in practise" :key="index">
            <span class="pm center">{{index+1}}</span>
            <span class="hy center">{{item.name}}</span>
            <span class="rd center">{{item.introduce}}</span>
          </div>
        </div>
      </div>
      <div class="homeItems">
        <div class="yd-tit">劳模风采</div>
        <div class="line"></div>
        <div class="lmfc-list">
          <div class="lmfc-item" v-for="item in model" :key="item.id">
            <div class="img">
              <img :src="item.imgs" alt="" srcset="">
            </div>
            <div class="title">{{item.name}}</div>
            <div class="author">{{item.introduce}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  import Breadcrumb from '@/components/Breadcrumb'
  import ContentHeader from '@/components/ContentHeader'
  import CardVideo from '@/components/CardVideo'
  import TipList from '@/components/TipList'
  export default {
    components: {
      Breadcrumb,
      ContentHeader,
      CardVideo,
      TipList,

    },
    data() {
      return {
        lecture: [
          {
            title: '线切割软件caxa精讲系列课之一',
            imgs: 'http://10.idqqimg.com/qqcourse_logo_ng/ajNVdqHZLLBKt3HSH4c4SeY4URiciaMfnwmaiahtBNbqDAQgyzIRtw1GbZKsfCwCn8mezh95711nco/356',
            author: '兴达教育',
            date: '2020-08-20',
            content: ''
          },
          {
            title: '德国职业教育法系列公益讲座',
            imgs: 'http://10.idqqimg.com/qqcourse_logo_ng/ajNVdqHZLLAD6MZdGeYr8gsI0ibIl2FKiagGvGnTNhiaFtJSXnPjxvhhNtcmhLHgjtHYfBanjJPzN0/356',
            author: '北京全道智源教育科技院',
            date: '2020-08-20',
            content: ''
          },
          {
            title: '工程造价工具软件实战课程',
            imgs: 'https://10.url.cn/qqcourse_logo_ng/ajNVdqHZLLDBXZtDROFa3C5cWyeDe6BiaNDRaicpqnVWxsWaOPhYw0X0eTlWWoE89ovnwHurXn0CE/356',
            author: '深圳市斯维尔科技股份有限公司',
            date: '2020-08-20',
            content: ''
          }
        ],
        news:  [
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
          },
          {
            title: '上海豫园商城党委来南钢对标党建工作',
            author: '匿名',
            date: '2018-11-03',
            imgs:'http://www.njsteel.com.cn/Upload/Images/7b7b3a32-e9a6-48c4-9793-4c019f6a7296.png',
            info: '10月25日，上海豫园旅游商城股份有限公司党委书记、总裁梅红建，党委副书记范志韵率20多人来南钢对标党建工作。南钢党委书记陶魄，副书记、工会主席张六喜接待了来访....',
            content:' <p>&emsp;&emsp;10月25日，上海豫园旅游商城股份有限公司党委书记、总裁梅红建，党委副书记范志韵率20多人来南钢对标党建工作。南钢党委书记陶魄，副书记、工会主席张六喜接待了来访客人，党委工作部、公司办、人力资源部、保卫部、战略运营部、廉政督察部等部门负责人参加接待。</p>' +
            '<p>&emsp;&emsp;来访客人首先参观了九龙湖、宽厚板厂生产线和南京钢铁博物馆，绿色生态化的厂区、壮观的生产现场给客人留下了深刻的印象。尤其是南京钢铁博物馆的参观，使客人们增长了钢铁制造的知识，了解了南钢乃至江苏省钢铁业的发展史，大家赞不绝口。</p>' +
            '<p>&emsp;&emsp;在双方交流中，党委工作部部长王敏介绍了南钢卓越党建模式实施情况。上海豫园旅游商城党委书记梅红建说，上海豫园股份与南钢都是改制单位，不同的是涉及的领域不同。南钢的工作理念领先，方法先进，有许多值得学习的地方。南钢的卓越党建模式使人耳目一新，尤其在企业党建工作上有许多创新，提供了一条有价值的探索之路。</p>' +
            '<p>&emsp;&emsp;陶魄表示，豫园商城股份是世界级著名品牌，有悠久的历史，值得南钢学习。两家企业都是混改企业，豫园商城是上海商贸行业混改典型，南钢是江苏省制造业混改典型，如何使党建工作做出混改企业的特色，这是我们的任务。习总书记提出，要推动经济高质量发展，这就要求我们要以新理念引领新常态，以经济高质量运行引领时代发展。经济高质量运行离不开党建引领，而党建工作必须与现代化管理相结合，与现代化管理对接。进入新时代，党建如何引领经济的高质量发展，是我们面临的课题，我们要互相沟通、共同切磋，坚持党建引领，为新时代社会主义事业添砖加瓦而努力。</p>'
          },
          {
            title: '全国卓越党建现场会在南钢召开',
            author: '匿名',
            date: '2018-10-30',
            imgs:'http://www.njsteel.com.cn/Upload/Images/143a57fb-8bc7-40f1-b089-ff79347436ea.png',
            info: '10月16日，中国质量协会和南钢共同主办的2018全国第二期卓越绩效专题活动暨卓越党建现场会在南钢召开。国务院国资委行业协会商会党建工作局局长张涛、国资委行业协会商会党建工作局副局长方长安、国资委管理局副局长张丽、中央党校教授刘炳香、江苏省党建协会副会长黄文虎、南京市国资....',
            content:'  <p>&emsp;&emsp;10月16日，中国质量协会和南钢共同主办的2018全国第二期卓越绩效专题活动暨卓越党建现场会在南钢召开。</p>' +
            '<p>&emsp;&emsp;国务院国资委行业协会商会党建工作局局长张涛、国资委行业协会商会党建工作局副局长方长安、国资委管理局副局长张丽、中央党校教授刘炳香、江苏省党建协会副会长黄文虎、南京市国资委副巡视员吴军、南京市国资委党建工作处调研员彭邦超、冶金工业质量经营联盟常务副理事长兼秘书长管炳春、江苏省质量管理协会会长张星际，以及主办方的中国质量协会副会长兼秘书长段永刚、南钢董事长黄一新、南钢党委书记陶魄、南钢党委副书记工会主席张六喜、南钢党委委员党委工作部部长王敏、中国质量协会咨询培训中心主任黄少兵等出席。会议由中国质量协会党委委员、副秘书长王琳主持。</p>' +
            '<p>&emsp;&emsp;南钢董事长黄一新致欢迎辞，代表南钢全体党员干部和职工，对此次大会的召开表示热烈地祝贺，对前来参加会议的各位领导和来宾表示最诚挚地欢迎和最衷心地感谢。黄一新简要介绍了南钢60年发展历程，构建钢铁+新产业&ldquo;1+6&rdquo;相互赋能的复合产业链生态系统等情况，并表示&ldquo;交流创造价值，共享赢得未来&rdquo;，希望与会代表能够倾囊相授、倾心交流，激发更多思想火花、提炼更多精彩观点、汇聚更多远见卓识，不断推进党建工作水平再登新台阶、再上新水平。</p>' +
            '<p>&emsp;&emsp;国务院国资委行业协会商会党建工作局局长张涛致辞表示，南钢探索卓越党建模式，为提升混合所有制企业党建工作的系统化、规范化、科学化、有效化水平，在凝聚企业力量、优化企业治理、促进企业创新、深化企业责任、提升企业核心竞争力、保障企业发展等方面，发挥正确有力引领、卓越推动作用，有许多经验、价值值得我们进一步研究、借鉴，进行新的开发、推广。</p>' +
            '<p>&emsp;&emsp;张涛指出，做好新时代党的建设工作，要深入贯彻中央建设总要求，结合实际，系统把握6个方面的基本环节：愿做要做、做真做实、做全做稳、做紧做牢、做好做亮、做深做远，要研究建立科学、系统、有效的管理模式，要像南钢一样，在卓越党建模式上开展开拓性、创新性、有效性的科学尝试，为服务和推动新时代企业行业党的建设，保障和促进企业健康发展，做出应有的努力、更大的贡献。</p>' +
            '<p>&emsp;&emsp;中国质量协会副会长兼秘书长段永刚致辞，介绍中国质量协会的使命，以及卓越绩效模式推广和开展企业党建质量管理体系认证服务等情况。段永刚表示，不断提高企业党的建设质量，是企业党建一个重大课题，值得深入探讨和研究。南钢在这方面做了很好的探索，首创性地把企业管理的先进理论&mdash;&mdash;卓越绩效模式的理念和方法创新性地应用到党建工作中。组织卓越党建现场会，就是希望总结分享南钢党建工作与现代化管理方法有效融合的经验成果，推动卓越绩效理念广泛深入应用。</p>' +
            '<p>&emsp;&emsp;南钢党委委员、党委工作部部长王敏从南钢党建基本情况、卓越党建模式架构、卓越党建的初步成效等维度系统汇报了南钢卓越党建模式。</p>' +
            '<p>&emsp;&emsp;南钢党委书记陶魄分享了践行卓越党建模式的体会。&ldquo;核心引领，同频共振，创新发展，共创共享，追求卓越&rdquo;是卓越党建的核心理念。陶魄表示，推行卓越党建模式，促进了企业党建工作的创新，促使党建工作真正落到了实处，更好地发挥了党组织在企业的优势，党建工作还可以完善企业管理。</p>' +
            '<p>&emsp;&emsp;江苏省党建协会副会长黄文虎点评南钢卓越党建时表示，这次卓越党建现场会给我们启发很大、收获很大，企业所有制可以改，但企业党建工作的优良传统和突出优势，不仅不能丢而且还要发扬光大，党建工作必须不断丰富、发展、提高；这次卓越党建现场会的成果很多、亮点很多，作为混合所有制企业南钢探索的党建新路富有特色，一是始终强调政治引领，二是促进有效融合，三是健全组织体系，四是不断开拓创新。黄文虎表示，开拓的视野，先进的理念，期待南钢不断探索创新党建工作，为全省提供学习、推广的经验做法。</p>' +
            '<p>&emsp;&emsp;中央党校教授、博士生导师刘炳香点评南钢卓越党建时总结为四点。一是方向对。围绕中心服务大局开展企业党建工作，把党建的政治优势转化为企业的发展优势。二是方法新。党建的传统方法结合管理的现代手段，科学化地统一了党建要求、企业要求和个人需求。三是效果好。体系完整、顺畅运转、党员活跃，组织的凝聚力、战斗力、生机活力大大增强。四是动力足。好的模式必然是可持续的有效、有用的，南钢做到了。</p>' +
            '<p>&emsp;&emsp;与会代表对大会的成功举办和南钢的热情接待给予了高度评价。出席本次活动的有内蒙古包钢、中国电子科技集团公司、中国人民解放军第四七二四工厂、杭州老板电器股份有限公司、洛阳国宏投资集团有限公司、上海市第一人民医院等会员单位领导及党务工作者，南钢各基层党组织负责人，以及新华社、人民日报、新华日报、南京日报、金陵瞭望、新江北报等媒体代表。与会代表参观了南京钢铁博物馆、南京市国资委党员教育实境课堂示范点等，近距离体验南钢卓越党建模式落实落地。</p>'
          }
        ],
        office: [
          {
            title: '起重机司',
            imgs: 'https://img.qeo.cn/s2016811728599373524A00098557.jpg',
            author: '上德教育培训',
            date: '2020-08-20',
            content: ''
          },
          {
            title: '安监局的电工证和国家',
            imgs: 'https://img.qeo.cn/s201314103732986A00241422.png',
            author: '上海则成安全技术有限公司',
            date: '2020-08-20',
            content: '安监局的电工证和国家电网的电工考试安监局的电的电工考试'
          },
          {
            title: '上海低压电工证电',
            imgs: 'https://img.qeo.cn/s10088005B00196975.jpg',
            author: '南钢教育培训',
            date: '2020-08-20',
            content: ''
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
        jcfc:[
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
          }
        ],
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
        model:[
          {
            imgs:require('@/assets/images/cardPicVertical/1.png'),
            name:'孙平',
            introduce:'南钢第二炼铁厂'
          },
          {
            imgs:require('@/assets/images/cardPicVertical/2.png'),
            name:'殷剑',
            introduce:'南钢第三炼钢厂'
          },
          {
            imgs:require('@/assets/images/cardPicVertical/3.jpg'),
            name:'李德波',
            introduce:'南钢第三炼钢厂职工创新工作室领头人'
          },
          {
            imgs:require('@/assets/images/cardPicVertical/4.png'),
            name:'周桂成',
            introduce:'南钢第一炼钢厂'
          },
          {
            imgs:require('@/assets/images/cardPicVertical/5.png'),
            name:'方玉珍',
            introduce:'南钢电厂'
          },
          {
            imgs:require('@/assets/images/cardPicVertical/6.png'),
            name:'刘莉',
            introduce:'南钢科技质量部'
          }
        ],
        practise:[
          {
            name:'孙平',
            introduce:'4627'
          },
          {
            name:'殷剑',
            introduce:'4127'
          },
          {
            name:'李德波',
            introduce:'3227'
          },
          {
            name:'周桂成',
            introduce:'3142'
          },
          {
            name:'方玉珍',
            introduce:'2945'
          },
          {
            name:'刘莉',
            introduce:'2715'
          },
          {
            name:'金虎',
            introduce:'2644'
          }
        ],
        buttonList: ['第六届','第五届','第四届']
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import url('../styles/elechange.css');
  .home{
    .homeItems{
      margin: 20px 0;
      clear: both;
    }
    .content-item{
      display: flex;
      .con-left{
        width: 720px;
        .new-item{
          float: left;
          width: 225px;
          margin-right: 15px;
          margin-top: 30px;
          &:nth-child(3n+1){
            margin-right: 0;
          }
          .img{
            width: 100%;
            img{
              width: 100%;
              height: 170px;
            }
          }
          .h4{
            line-height: 36px;
            font-weight: bold;
            font-size: 16px;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
          }
          .gray{
            font-size: 14px;
          }
        }
        .jn-item{
          width: 100%;
          display: flex;
          height: 135px;
          margin-top: 30px;
          .left{
            width: 214px;
            height: 100%;
            img{
              width: 100%;
              height: 100%;
            }
          }
          .right{
            margin-left: 20px;
            .title{
              font-weight: bold;
              padding-top: 10px;
            }
            .content{
              height: 80px;
              line-height: 24px;
              font-size: 12px;
            }
          }
        }
      }
      .con-right{
        width: 400px;
        margin-left: 80px;
        .office-item{
          width: 100%;
          display: flex;
          margin-top: 5px;
          .left{
            img{
              width: 130px;
              height: 130px;
            }
          }
          .right{
            margin-left: 10px;
            .title{
              font-size: 14px;
              font-weight: bold;
            }
            .content{
              font-size: 12px;
              margin-top: 5px;
              line-height: 18px;
            }
          }

        }
        .bw-list{
          border-bottom: 1px solid #eee;
          height: 80px;
          line-height: 80px;
          &.first{
            border-bottom: none;
            height: 32px;
            line-height: 32px;
          }
          span{
            display: inline-block;
            text-align: center;
            &.pm{
              width: 50px;
            }
            &.hy{
              width: 270px;
            }
            &.rd{
              // width: 150px;
            }
          }
        }
      }
    }
    .jcfc-item{
      width: 23.5%;
      margin-right: 2%;
      float: left;
      position: relative;
      margin-top: 20px;
      &:last-child{
        margin-right: 0;
      }
      .img{
        width: 100%;
        overflow: hidden;
        height: 186px;
        img{
          width: 100%;
        }
      }
      .title{
        font-size: 16px;
        font-weight: bold;
        line-height: 24px;
        margin-top: 10px;
      }
    }
    .clear{
      clear: both;
    }
    .yd-tit{
      font-size: 24px;
      line-height: 36px;
      text-align: center;
      padding-top: 40px;
    }
    .line{
      width: 57px;
      height: 5px;
      background: #409EFF;
      margin: 0 auto;
      margin-top: 10px;
    }
    .button-list{
      float: right;
      .button-item{
        display: inline-block;
        width: 96px;
        height: 42px;
        line-height: 42px;
        text-align: center;
        background: #eee;
        border-radius: 30px;
        margin-left: 20px;
        cursor: pointer;
        &.active{
          background: #409EFF;
          color: #fff;
        }
      }
    }
    .yd-item{
      float: left;
      margin-right: 30px;
      margin-top: 30px;
      &:last-child{
        margin-right: 0;
      }
      .img{
        width: 370px;
        height: 170px;
        overflow: hidden;
        img{
          width: 100%;
        }
      }
      .title{
        font-size: 16px;
        line-height: 24px;
        font-weight: bold;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
      }
      .date{
        color: rgb(97, 97, 97);
        font-size: 14px;
        line-height: 24px;
      }
    }
    .lmfc-list{
      display: flex;
      .lmfc-item{
        margin-right: 30px;
        text-align: center;
        margin-top: 30px;
        padding: 0 0 10px 0;
        cursor: pointer;
        &:hover{
          background-color: #409EFF;
        }
        &:last-child{
          margin-right: 0;
        }
        .img{
          width: 175px;
          height: 208px;
          img{
            width: 100%;
            height: 100%;
          }
        }
        .title,.author{
          margin-top: 10px;
          font-weight: bold;
        }
      }
    }
  }

</style>

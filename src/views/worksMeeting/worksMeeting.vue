<template>
<div class="list-wrapper">
  <card-zdh v-for="(item, index) in studio" :key="index" :data="item" :reverse="(index+1)%2==0"></card-zdh>
</div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import cardZdh from '../../components/news/cardZdh'

  export default {
    name: 'Live',
    components: { cardZdh },
    computed: {
      ...mapGetters([
        'name'
      ])
    },
    data() {
      return {
        levelList: null,
        studio:[
          {
            title: '2019年第一季度职代会',
            imgs: require('@/assets/images/kaihui.jpg'),
            author: '主持人：张主席',
            date:'2019.03.06',
            classify: '类型：职代会',
            content:'<video src="../video/2.ogg" height="480" width="640" controls>\n' +
            '<p>你的浏览器不支持video标签</p> \n' +
            '</video>' +
            '<p>会议时间：****年**月**日09：00&mdash;11：00</p>' +
            '<p>会议主题：职工代表大会</p>\n' +
            '<p>会议地点：会议室</p>\n' +
            '<p>主 持 人：***</p>\n' +
            '<p>应到人数：**人</p>\n' +
            '<p>实到人数：**人</p>\n' +
            '<p>请假人数：*人</p>\n' +
            '<p>记 录 人：***</p>\n' +
            '<p>审 核：***</p>\n' +
            '<p>今天职工代表大会主要有三个议程：</p>\n' +
            '<p>1、由***主席作<u>工作<a class="channel_keylink" href="https://www.unjs.com/baogao/">报告</a></u>。</p>\n' +
            '<p>2、****年修改的政策和<u>制度</u>通报并提交讨论，报公司工会予以审核;</p>\n' +
            '<p>3、听取职工代表对公司的建议和意见，当场予以回复，暂时不能回复的与相关部门沟通反馈后统一回复。</p>\n' +
            '<p>欢迎大家提出宝贵的意见。</p>\n' +
            '<p><strong>　　一、 由***主席作工作报告。(工作报告附后)</strong></p>\n' +
            '<p><strong>二、公司制度及文件介绍(附目录，过程略)</strong></p>\n' +
            '<p>《集体合同协议草案》</p>\n' +
            '<p>《工资集体协议草案》</p>\n' +
            '<p>《加班<a class="channel_keylink" href="https://www.unjs.com/fanwenwang/gzzd/">管理</a>细则》</p>\n' +
            '<p>《关于人事制度部分条款修订的通知》</p>\n' +
            '<p>《护理假管理规定》</p>\n' +
            '<p>《年休假管理细则》</p>\n' +
            '<p>《职工激励制度标准》</p>\n' +
            '<p>《职工生日福利方案》(投票选择)</p>\n' +
            '<p>《职工宿舍管理办法》</p>\n' +
            '<p>经民意调查，职工生日福利的问题仍延用原方案不变。</p>\n' +
            '<p>'
          },
          {
            title: '2019年第二季度职代会',
            imgs: require('@/assets/images/kaihui.jpg'),
            author: '主持人：李主席',
            date:'2019.05.06',
            classify: '类型：职代会',
            content:'<video src="../video/2.ogg" height="480" width="640" controls>\n' +
            '<p>你的浏览器不支持video标签</p> \n' +
            '</video>' +
            '<p>会议时间：****年**月**日09：00&mdash;11：00</p>' +
            '<p>会议主题：职工代表大会</p>\n' +
            '<p>会议地点：会议室</p>\n' +
            '<p>主 持 人：***</p>\n' +
            '<p>应到人数：**人</p>\n' +
            '<p>实到人数：**人</p>\n' +
            '<p>请假人数：*人</p>\n' +
            '<p>记 录 人：***</p>\n' +
            '<p>审 核：***</p>\n' +
            '<p>今天职工代表大会主要有三个议程：</p>\n' +
            '<p>1、由***主席作<u>工作<a class="channel_keylink" href="https://www.unjs.com/baogao/">报告</a></u>。</p>\n' +
            '<p>2、****年修改的政策和<u>制度</u>通报并提交讨论，报公司工会予以审核;</p>\n' +
            '<p>3、听取职工代表对公司的建议和意见，当场予以回复，暂时不能回复的与相关部门沟通反馈后统一回复。</p>\n' +
            '<p>欢迎大家提出宝贵的意见。</p>\n' +
            '<p><strong>一、 由***主席作工作报告。(工作报告附后)</strong></p>\n' +
            '<p><strong>二、公司制度及文件介绍(附目录，过程略)</strong></p>\n' +
            '<p>《集体合同协议草案》</p>\n' +
            '<p>《工资集体协议草案》</p>\n' +
            '<p>《加班<a class="channel_keylink" href="https://www.unjs.com/fanwenwang/gzzd/">管理</a>细则》</p>\n' +
            '<p>《关于人事制度部分条款修订的通知》</p>\n' +
            '<p>《护理假管理规定》</p>\n' +
            '<p>《年休假管理细则》</p>\n' +
            '<p>《职工激励制度标准》</p>\n' +
            '<p>《职工生日福利方案》(投票选择)</p>\n' +
            '<p>《职工宿舍管理办法》</p>\n' +
            '<p>经民意调查，职工生日福利的问题仍延用原方案不变。</p>\n' +
            '<p>'
          },
          {
            title: '2019年第三季度职代会',
            imgs: require('@/assets/images/kaihui.jpg'),
            author: '主持人：杨主席',
            date:'2019.09.06',
            classify: '类型：职代会',
            content:'<video src="../video/2.ogg" height="480" width="640" controls>\n' +
            '<p>你的浏览器不支持video标签</p> \n' +
            '</video>' +
            '<p>会议时间：****年**月**日09：00&mdash;11：00</p>' +
            '<p>会议主题：职工代表大会</p>\n' +
            '<p>会议地点：会议室</p>\n' +
            '<p>主 持 人：***</p>\n' +
            '<p>应到人数：**人</p>\n' +
            '<p>实到人数：**人</p>\n' +
            '<p>请假人数：*人</p>\n' +
            '<p>记 录 人：***</p>\n' +
            '<p>审 核：***</p>\n' +
            '<p>今天职工代表大会主要有三个议程：</p>\n' +
            '<p>1、由***主席作<u>工作<a class="channel_keylink" href="https://www.unjs.com/baogao/">报告</a></u>。</p>\n' +
            '<p>2、****年修改的政策和<u>制度</u>通报并提交讨论，报公司工会予以审核;</p>\n' +
            '<p>3、听取职工代表对公司的建议和意见，当场予以回复，暂时不能回复的与相关部门沟通反馈后统一回复。</p>\n' +
            '<p>欢迎大家提出宝贵的意见。</p>\n' +
            '<p><strong>一、 由***主席作工作报告。(工作报告附后)</strong></p>\n' +
            '<p><strong>二、公司制度及文件介绍(附目录，过程略)</strong></p>\n' +
            '<p>《集体合同协议草案》</p>\n' +
            '<p>《工资集体协议草案》</p>\n' +
            '<p>《加班<a class="channel_keylink" href="https://www.unjs.com/fanwenwang/gzzd/">管理</a>细则》</p>\n' +
            '<p>《关于人事制度部分条款修订的通知》</p>\n' +
            '<p>《护理假管理规定》</p>\n' +
            '<p>《年休假管理细则》</p>\n' +
            '<p>《职工激励制度标准》</p>\n' +
            '<p>《职工生日福利方案》(投票选择)</p>\n' +
            '<p>《职工宿舍管理办法》</p>\n' +
            '<p>经民意调查，职工生日福利的问题仍延用原方案不变。</p>\n'
          },
          {
            title: '2019年第四季度职代会',
            imgs: require('@/assets/images/kaihui.jpg'),
            author: '主持人：胡主席',
            date:'2019.11.06',
            classify: '类型：职代会',
            content:'<video src="../video/2.ogg" height="480" width="640" controls>\n' +
            '<p>你的浏览器不支持video标签</p> \n' +
            '</video>' +
            '<p>会议时间：****年**月**日09：00&mdash;11：00</p>' +
            '<p>会议主题：职工代表大会</p>\n' +
            '<p>会议地点：会议室</p>\n' +
            '<p>主 持 人：***</p>\n' +
            '<p>应到人数：**人</p>\n' +
            '<p>实到人数：**人</p>\n' +
            '<p>请假人数：*人</p>\n' +
            '<p>记 录 人：***</p>\n' +
            '<p>审 核：***</p>\n' +
            '<p>今天职工代表大会主要有三个议程：</p>\n' +
            '<p>1、由***主席作<u>工作<a class="channel_keylink" href="https://www.unjs.com/baogao/">报告</a></u>。</p>\n' +
            '<p>2、****年修改的政策和<u>制度</u>通报并提交讨论，报公司工会予以审核;</p>\n' +
            '<p>3、听取职工代表对公司的建议和意见，当场予以回复，暂时不能回复的与相关部门沟通反馈后统一回复。</p>\n' +
            '<p>欢迎大家提出宝贵的意见。</p>\n' +
            '<p><strong>　　一、 由***主席作工作报告。(工作报告附后)</strong></p>\n' +
            '<p><strong>二、公司制度及文件介绍(附目录，过程略)</strong></p>\n' +
            '<p>《集体合同协议草案》</p>\n' +
            '<p>《工资集体协议草案》</p>\n' +
            '<p>《加班<a class="channel_keylink" href="https://www.unjs.com/fanwenwang/gzzd/">管理</a>细则》</p>\n' +
            '<p>《关于人事制度部分条款修订的通知》</p>\n' +
            '<p>《护理假管理规定》</p>\n' +
            '<p>《年休假管理细则》</p>\n' +
            '<p>《职工激励制度标准》</p>\n' +
            '<p>《职工生日福利方案》(投票选择)</p>\n' +
            '<p>《职工宿舍管理办法》</p>\n' +
            '<p>经民意调查，职工生日福利的问题仍延用原方案不变。</p>'
          },
        ]
      }
    },
    methods: {
      handleClick(item) {
        this.$router.push({
//          name: '职代会详情',
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
.list-wrapper {
  margin: auto;
  width: 1200px;
  margin-top: 45px;

  .zdh-wrapper {
    margin-bottom: 40px;
  }
}

</style>

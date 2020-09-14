<template>
  <div class="news-detail">
    <div class="title">
      2019年第一季度职代会
    </div>
    <div class="sub-title">
      <div class="text-with-icon time">
        <div class="img-wrapper">
          <img :src="require('@/assets/images/icon/time.png')" />
        </div>
        <span>2019.08.27</span>
      </div>
      <div class="text-with-icon">
        <div class="img-wrapper">
          <img :src="require('@/assets/images/icon/man.png')" />
        </div>
        <span>参会人：张主席，杨主席</span>
      </div>
      <div class="text-with-icon">
        <div class="img-wrapper">
          <img :src="require('@/assets/images/icon/share.png')" />
        </div>
        <span>分享</span>
      </div>
      <div class="return">
        返回
      </div>
    </div>
    <div class="body">
          <img :src="require('@/assets/images/demo/i2.png')" />
会议时间：****年**月**日09：00—11：00<br />
会议主题：职工代表大会<br />
会议地点：会议室<br />
主 持 人：***<br />
应到人数：**人<br />
实到人数：**人<br />
请假人数：*人<br />
记 录 人：***<br />
审 核：***<br />
今天职工代表大会主要有三个议程：<br />
1、由***主席作工作报告。<br />
2、****年修改的政策和制度通报并提交讨论，报公司工会予以审核;<br />
3、听取职工代表对公司的建议和意见，当场予以回复，暂时不能回复的与相关部门沟通反馈后统一回复。<br />
欢迎大家提出宝贵的意见。<br />
一、 由***主席作工作报告。(工作报告附后)<br />
二、公司制度及文件介绍(附目录，过程略)<br />
《集体合同协议草案》<br />
《工资集体协议草案》<br />
《加班管理细则》<br />
《关于人事制度部分条款修订的通知》<br />
《护理假管理规定》<br />
《年休假管理细则》<br />
《职工激励制度标准》<br />
《职工生日福利方案》(投票选择)<br />
《职工宿舍管理办法》<br />
经民意调查，职工生日福利的问题仍延用原方案不变。<br />
    </div>
  </div>
</template>

<script>

export default {
   props: {
     data: {
       type: Object
     }
   },
   data() {
     return {
       levelList: null
     }
   }
}
</script>

<style lang="scss" scoped>

  .news-detail {
    width: 865px;
    .title {
      font-weight: bold;
      color: #3c3c3c;
      font-size: 24px;
    }
    .sub-title {
      display: flex;
      color: #999999;
      margin-top: 30px;
      padding-bottom: 30px;
      border-bottom: 1px solid #eeeeee;
      position: relative;
      .text-with-icon {
        &.time {
          color: #ffa200;
        }
        display: flex;
        margin-right: 30px;
        .img-wrapper {
          width: 15px;
          height: 15px;
          margin-right: 5px;
        }
      }
      .return {
        font-size: 14px;
        color: #6c6c6c;
        position: absolute;
        right: 5px;
      }
    }
    .body {
      color: #3c3c3c;
      font-size: 15px;
      line-height: 30px;
      padding-top: 30px;
      img {
        display: block;
      }
    }
  }
</style>

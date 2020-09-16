<template>
  <div class="home">
    <div class="crousel">
      <img width="100%" height="400px" :src="require('@/assets/images/demo/banner.png')" alt="pic">
    </div>
    <div class="home-banner-wrapper">
      <banner-list></banner-list>
      <!-- <div class="banner-list">
      <div class="banner-item" @click="push(1)">
        <div class="img-wrapper">
          <img :src="require('@/assets/images/demo/home/ruhui.png')" alt="pic">
        </div>
        <p class="icon-title">
          我要入会
        </p>
      </div>
      <div class="banner-item" @click="push(2)">
        <div class="img-wrapper">
          <img :src="require('@/assets/images/demo/home/bangfu.png')" alt="pic">
        </div>
        <p class="icon-title">
          困难帮扶
        </p>
      </div>
      <div class="banner-item" @click="push(3)">
        <div class="img-wrapper">
          <img :src="require('@/assets/images/demo/home/daikuan.png')" alt="pic">
        </div>
        <p class="icon-title">
          助学贷款
        </p>
      </div>
      <div class="banner-item" @click="push(4)">
        <div class="img-wrapper">
          <img :src="require('@/assets/images/demo/home/ruhui.png')" alt="pic">
        </div>
        <p class="icon-title">
          职代会
        </p>
      </div>
      <div class="banner-item" @click="push(5)">
        <div class="img-wrapper">
          <img :src="require('@/assets/images/demo/home/#25A5DA.png')" alt="pic">
        </div>
        <p class="icon-title">
          专家问诊
        </p>
      </div>
      </div> -->
    </div>
    <div class="mainBox">
      <div class="contetn-line-1">
        <div class="contetn-line-1-left">
          <home-card-title :title="'工会新闻'">
          </home-card-title>
          <card-news>
          </card-news>
          <card-with-date :data="o1"></card-with-date>
          <card-with-date :data="o1"></card-with-date>
        </div>
        <div class="contetn-line-1-right">
          <home-card-title :title="'创新直播'">
          </home-card-title>
          <img :src="require('@/assets/images/demo//home/new_1.png')" />
          <card-news-mini></card-news-mini>
          <card-news-mini></card-news-mini>
        </div>
      </div>
      <div class="contetn-line-2">
        <div class="news-block">
          <home-card-title-more :title="'职工创新'" @handleClick="handleClick"></home-card-title-more>
          <card-news-mini-reverse>
          </card-news-mini-reverse>
          <div class="info" v-for="count in 8" :key="count">
            战高温、保生产、送清凉——第一炼铁战高温、保生产、送清凉——第一炼铁
          </div>
        </div>
        <div class="news-block">
          <home-card-title-more :title="'职工创新'" @handleClick="handleClick"></home-card-title-more>
          <div class="info" v-for="count in 10" :key="count">
            战高温、保生产、送清凉——第一炼铁战高温、保生产、送清凉——第一炼铁
          </div>
        </div>
        <div class="news-block">
          <home-card-title-more :title="'职工创新'" @handleClick="handleClick"></home-card-title-more><div class="info" v-for="count in 10" :key="count">
            战高温、保生产、送清凉——第一炼铁战高温、保生产、送清凉——第一炼铁
          </div>
        </div>
        <!-- <div class="">
        </div> -->
      </div>
      <card-craftsman></card-craftsman>
      <div class="contetn-line-3">
        <home-card-title :title="'工会新闻'">
        </home-card-title>
        <div class="practise-wrapper">
          <div class="practise-item" v-for="(item, index) in practises" :key="index">
            <img class="icon" :src="item.img" />
            <p class="title">{{item.title}}</p>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="mainBox">
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
              <div class="office-item" v-for="i in office" :key="i.id">
                <div class="left">
                  <img :src="i.imgs" alt="" srcset="">
                </div>
                <div class="right">
                  <div class="title">{{i.title}}</div>
                  <div class="content">{{i.content}}</div>
                </div>
              </div>
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
      <div class="homeItems">
        <ContentHeader :refresh="false" title="基层风采" more="查看全部" :border="false"></ContentHeader>
        <div class="jcfc-item" v-for="item in jcfc" :key="item.id">
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
            <div class="yd-item" v-for="i in office" :key="i.id">
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
          <div class="jn-item" v-for="item in office" :key="item.id">
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
          <div class="bw-list" v-for="item in 6" :key="item">
            <span class="pm center">1</span>
            <span class="hy center">金融</span>
            <span class="rd center">4627</span>
          </div>
        </div>
      </div>
      <div class="homeItems">
        <div class="yd-tit">普惠帮扶</div>
        <div class="line"></div>
        <div class="phbf">
          <div class="img-list">
            <div class="img" :class="{'active':i==isActive}" v-for="(item,i) in phbf" :key="i" @click="passData(item,i)">
              <img :src="item.imgs" alt="" srcset="">
            </div>
          </div>
          <div class="big-content">
            <div class="left">
              <div class="title">{{imgCon.title}}</div>
              <div class="content">{{imgCon.content}}</div>
              <div class="date">活动时间：{{imgCon.date}}</div>
              <div><el-button type="primary">查看详情</el-button></div>
            </div>
            <div class="right">
              <img :src="imgCon.imgs" alt="" srcset="">
            </div>
          </div>
        </div>
      </div>
      <div class="homeItems">
        <div class="yd-tit">劳模风采</div>
        <div class="line"></div>
        <div class="lmfc-list">
          <div class="lmfc-item" v-for="item in news" :key="item.id">
            <div class="img">
              <img :src="item.imgs" alt="" srcset="">
            </div>
            <div class="title">{{item.title}}</div>
            <div class="author">{{item.author}}</div>
          </div>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb'
import ContentHeader from '@/components/ContentHeader'
import CardVideo from '@/components/CardVideo'
import TipList from '@/components/TipList'
import cardNews from '@/components/news/home/cardNews'
import cardWithDate from '@/components/news/home/cardWithDate'
import cardNewsMini from '@/components/news/home/cardNewsMini'
import homeCardTitle from '@/components/news/home/homeCardTitle'
import homeCardTitleMore from '@/components/news/home/homeCardTitleMore'
import cardCraftsman from '@/components/news/home/cardCraftsman'
import cardNewsMiniReverse from '@/components/news/home/cardNewsMiniReverse'
import bannerList from '@/components/news/home/bannerList'

export default {
  components: {
    Breadcrumb,
    ContentHeader,
    CardVideo,
    TipList,
    cardNews,
      cardWithDate, cardNewsMini, homeCardTitle, homeCardTitleMore, cardCraftsman, cardNewsMiniReverse, bannerList
  },
  data() {
    return {
      o1: {
          date: '2019-09-02',
          title: '工作的系统化、流程化、无纸化',
          info: '建立合理化建议收集、反馈系统，对合理化建议实行电子表单化管理，发挥信息系统的自动跟踪分析功能。将用于合理化建议奖励的部分资金划拨至基层单位，由基层单位负责与本单位相关的合理化建议的评审及..'
        },
        practises: [
          {
            img: require('@/assets/images/demo/home/钳工.png'),
            title: '钳工'
          }, 
          {
            img: require('@/assets/images/demo/home/安全.png'),
            title: '安全'
          }, 
          {
            img: require('@/assets/images/demo/home/炼钢工.png'),
            title: '炼钢工'
          }, 
          {
            img: require('@/assets/images/demo/home/女职工.png'),
            title: '女职权益'
          }, 
          {
            img: require('@/assets/images/demo/home/焊工.png'),
            title: '焊工'
          }, 
          {
            img: require('@/assets/images/demo/home/维修电工.png'),
            title: '维修电工'
          }, 
          {
            img: require('@/assets/images/demo/home/钳工.png'),
            title: '钳工'
          }, 
          {
            img: require('@/assets/images/demo/home/维修电工.png'),
            title: '维修电工'
          }, 
          {
            img: require('@/assets/images/demo/home/冷轧工.png'),
            title: '冷轧工'
          }, 
          {
            img: require('@/assets/images/demo/home/炼钢工.png'),
            title: '炼钢工'
          }, 
          {
            img: require('@/assets/images/demo/home/高炉炼铁.png'),
            title: '高炉炼铁'
          }, 
        ],
      lecture: [
        {
          title: '数控车床编程培训',
          imgs: 'https://img.qeo.cn/s201738205058560811A00210135.jpg',
          author: '南钢教育培训',
          date: '2020-08-20',
          content: ''
        },
        {
          title: '电工培训,焊工培训',
          imgs: 'https://img.qeo.cn/s2017120157169256795A00131067.jpg',
          author: '上德教育培训',
          date: '2020-08-20',
          content: ''
        },
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
        },
        {
          title: '安监局的电工证和国家电网的电工考试',
          imgs: 'https://img.qeo.cn/s201314103732986A00241422.png',
          author: '上海则成安全技术有限公司',
          date: '2020-08-20',
          content: ''
        },
        {
          title: '上海低压电工证电焊证登高作业架子工特种操作',
          imgs: 'https://img.qeo.cn/s10088005B00196975.jpg',
          author: '南钢教育培训',
          date: '2020-08-20',
          content: ''
        }
      ],
      news: [
        {
          title: '数控车床编程培训',
          imgs: 'https://img.qeo.cn/s201738205058560811A00210135.jpg',
          author: '南钢教育培训',
          date: '2020-08-20',
          content: ''
        },
        {
          title: '电工培训,焊工培训',
          imgs: 'https://img.qeo.cn/s2017120157169256795A00131067.jpg',
          author: '上德教育培训',
          date: '2020-08-20',
          content: ''
        },
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
        },
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
      buttonList: ['第六届','第五届','第四届'],
      phbf:[
        {
          title: '数控车床编程培训',
          imgs: 'https://img.qeo.cn/s201738205058560811A00210135.jpg',
          author: '南钢教育培训',
          date: '2020-08-20',
          content: ''
        },
        {
          title: '电工培训,焊工培训',
          imgs: 'https://img.qeo.cn/s2017120157169256795A00131067.jpg',
          author: '上德教育培训',
          date: '2020-08-20',
          content: ''
        },
        {
          title: '登高证，高压电工证',
          imgs: 'https://img.qeo.cn/s10089905A00227365.png',
          author: '上海则成安全技术有限公司',
          date: '2020-08-20',
          content: '上海则成安全技术有限公司上海则成安全技术有限公司上海则成安全技术有限公司上海则成安全技术有限公司上海则成安全技术有限公司上海则成安全技术有限公司上海则成安全技术有限公司'
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
        }
      ],
      isActive: 0,
      imgCon:{
        title: '数控车床编程培训',
        imgs: 'https://img.qeo.cn/s201738205058560811A00210135.jpg',
        author: '南钢教育培训',
        date: '2020-08-20',
        content: ''
      }
    }
  },
  methods: {
    passData(item,i) {
      this.imgCon = item
      this.isActive = i
    },
    handleClick() {
      console.log('1212')
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
            }
          }
          .h4{
            line-height: 36px;
            font-weight: bold;
            font-size: 16px;
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
        // height: 186px;
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
        width: 380px;
        img{
          width: 100%;
        }
      }
      .title{
        font-size: 16px;
        line-height: 24px;
        font-weight: bold;
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
        &:last-child{
          margin-right: 0;
        }
        .img{
          width: 170px;
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
    .phbf{
      height: 475px;
      width: 100%;
      position: relative;
      margin-top: 30px;
      .img-list{
        position: absolute;
        top: 315px;
        left: 0;
        display: flex;
        z-index: 10;
        .img{
          width: 224px;
          height: 146px;
          margin-right: 10px;
          img{
            width: 100%;
            height: 100%;
          }
          &.active{
            border:2px solid #409EFF;
          }
        }
      }
      .big-content{
        display: flex;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        .left{
          width: 375px;
          margin-right: 20px;
          .title{
            font-size: 18px;
            font-weight: bold;
            margin-top: 10px;
          }
          .content{
            line-height: 24px;
            margin-top: 10px;
            height: 150px;
          }
          .date{
            color: rgb(99, 99, 99);
            margin-top: 10px;
            margin-bottom: 20px;
          }
        }
        .right{
          width: 785px;
          height: 470px;
          img{
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }

.img-wrapper {
  // width: 15px;
  // height: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  img {
    display: block;
    max-height: 100%;
    max-width: 100%;
  }
}

  .home-banner-wrapper {
    margin-top: -75px;
    background: #FFFFFF;
    opacity: 0.8;
    .home-banner-list {
      margin: auto;
    }
    // .banner-list {
    //   margin: auto;
    //   margin-top: -75px;
    //   height: 75px;
    //   width: 1200px;
    //   display: flex;
    //   justify-content: space-around;
    //   .banner-item {
    //     display: flex;
    //     align-items: center;
    //     .img-wrapper {
    //       width: 40px;
    //       height: 40px;
    //       margin-right: 20px;
    //     }
    //     .icon-title {
    //       margin: 0;
    //       font-size: 20px;
    //     }
    //     &:nth-child(1) {
    //       .icon-title {
    //         color: #E34634;
    //       }
    //     }
    //     &:nth-child(2) {
    //       .icon-title {
    //         color: #EBB013;
    //       }
    //     }
    //     &:nth-child(3) {
    //       .icon-title {
    //         color: #3D3B8C;
    //       }
    //     }
    //     &:nth-child(4) {
    //       .icon-title {
    //         color: #25A5DA;
    //       }
    //     }
    //     &:nth-child(5) {
    //       .icon-title {
    //         color: #10A132;
    //       }
    //     }
    //   }
    // }
  }
.home-card-title-wrapper {
  margin-bottom: 25px;
}
.contetn-line-1 {
  width: 1200px;
  display: flex;
  margin-top: 50px;
  justify-content: space-between;
  .contetn-line-1-left {
    .home-news-card {
      margin-top: 30px;
    }
  }
  .contetn-line-1-right {
    .card-home-mini {
      margin-top: 30px;
    }
  }
}
.contetn-line-2 {
  width: 1200px;
  margin-top: 70px;
  display: flex;
  justify-content: space-between;
  .news-block {
    width: 365px;
    .home-card-title-more {
      margin-bottom: 20px;
    }
    .info {
      line-height: 40px;
      font-size: 18px;
      color: #444444;
      padding-left: 20px;
      position: relative;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      &:before {
        content: '';
        width: 6px;
        height: 6px;
        background: #666666;
        border-radius: 50%;
        position: absolute;
        left: 0;
        top: calc(50% - 3px);
      }
    }
  }
}
.card-craftsman {
  margin-top: 70px;
}
.contetn-line-3 {
  margin-top: 70px;
  margin-bottom: 70px;
  .practise-wrapper {
    display: flex;
    justify-content: space-around;
    .practise-item {
      text-align: center;
      .icon {
        display: block;
        width: 96px;
        height: 96px;
      }
      .title {
        margin: 0;
        font-size: 18px;
      }
    }
  }
}
</style>

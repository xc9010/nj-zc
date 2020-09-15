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
      }
    },
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

</style>

<template>
  <div class="news-nav">
    <nav-left :items="navItems" @callback="callback"/>
    <div class="nav-content">
      <div class="model-wrapper">
        <div class="model-person" v-for="(item, index) in model" :key="index" :data="item">
          <div class="head-img">
            <img :src="item.imgs">
          </div>
          <p class="name">{{item.name}}</p>
          <p class="company">{{item.introduce}}</p>
        </div>
      </div>
    </div>
  </div>
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
        navItems: [
          {
            name: '职工风采',
            code:'workers',
            active: false
          },
          {
            name: '劳模先进',
            code:'model',
            active: true
          },
          {
            name: '工匠评优',
            code:'craftsman',
            active: false
          },
          {
            name: '创新工作室',
            code:'studio',
            active: false
          }
        ],
        active: ['1', '2', '3', '4'],
        tabType: '0',
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
          },
          {
            imgs:require('@/assets/images/cardPicVertical/7.png'),
            name:'金虎',
            introduce:'南钢炼铁事业部闻'
          },
          {
            imgs:require('@/assets/images/cardPicVertical/8.png'),
            name:'周意来',
            introduce:'南钢燃料供应厂'
          },
          {
            imgs:require('@/assets/images/cardPicVertical/9.jpg'),
            name:'王月彪',
            introduce:'省五一奖章南钢科技质量部'
          },
          {
            imgs:require('@/assets/images/cardPicVertical/10.jpg'),
            name:'王思聪',
            introduce:'省五一奖章南钢宽厚板厂'
          },
          {
            imgs:require('@/assets/images/cardPicVertical/11.jpg'),
            name:'葛树东',
            introduce:'省五一奖章南钢铁运中心'
          },
          {
            imgs:require('@/assets/images/cardPicVertical/12.jpg'),
            name:'刘呈军',
            introduce:'市五一奖章南钢第二炼钢厂'
          },
          {
            imgs:require('@/assets/images/cardPicVertical/13.jpg'),
            name:'刘丽华',
            introduce:'市五一奖章南钢研究院军工部'
          },
          {
            imgs:require('@/assets/images/cardPicVertical/14.png'),
            name:'唐运章',
            introduce:'市五一奖章南钢中厚板卷厂'
          }
        ],
        code:'model'
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
          console.log(item.code)
          this.$router.push('/union/workers')
        }else if(item.code === 'studio'){
          this.$router.push('/union/studio')
        }else {
          this.$router.push('/union/studio')
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
.model-wrapper {
  width: 950px;
  margin-left: 50px;
  .model-person {
    float: left;
    margin-right: 25px;
    &:nth-child(5n) {
      margin-right: 0;
    }
  }
  .model-person {
    width: 160px;
    position: relative;
    text-align: center;
    padding-bottom: 15px;
    .head-img {
      width: 160px;
      height: 190px;
      overflow: hidden;
      img {
        text-align: center;
        // max-width: 100%;
        max-height: 100%;
        height: 100%;
        text-align: center;
      }
    }
    .name {
      margin: 0;
      margin-top: 20px;
      font-size: 16px;
      color: #1f1f1f;
    }
    .company {
      margin: 0;
      margin-top: 15px;
      font-size: 14px;
      color: #909090;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
    }
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
}
</style>

<template>
  <div class="news-nav">
    <nav-left :items="navItems" @callback="callback"/>
    <div class="nav-content">
      <div class="model-wrapper">
        <div class="model-person" v-for="(item, index) in craftsman" :key="index" :data="item">
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
            active: false
          },
          {
            name: '工匠评优',
            code:'craftsman',
            active: true
          },
          {
            name: '创新工作室',
            code:'studio',
            active: false
          }
        ],
        active: ['1', '2', '3', '4'],
        tabType: '0',
        craftsman:[
          {
            imgs:require('@/assets/images/cardPicVertical/15.jpg'),
            name:'葛树东',
            introduce:'“机车工匠”'
          },
          {
            imgs:require('@/assets/images/cardPicVertical/16.png'),
            name:'葛树东',
            introduce:'“南钢工匠”'
          },
          {
            imgs:require('@/assets/images/cardPicVertical/17.jpg'),
            name:'殷剑',
            introduce:'南钢工匠'
          },
          {
            imgs:require('@/assets/images/cardPicVertical/18.png'),
            name:'王月彪',
            introduce:'“南钢工匠”'
          },
          {
            imgs:require('@/assets/images/cardPicVertical/19.jpg'),
            name:'张红军',
            introduce:'全国机冶行业工匠”'
          }
        ],
        code:'craftsman'
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
          this.$router.push('/union/craftsman')
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

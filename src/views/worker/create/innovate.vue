<template>
  <div class="news-nav">
    <nav-left :items="navItems" @callback="callback"/>
    <div class="nav-content">
      <div class="studio-wrapper">
        <div class="studio-info" v-for="(item, index) in innovate" :key="index" :data="item"  @click="handleClick(item)">
          <div class="head-img">
            <img :src="item.imgs">
          </div>
          <div class="studio-desc">
            <p class="name">{{item.title}}</p>
            <p class="icon-desc">
              <img class="icon" :src="require('@/assets/images/list.png')">
              <span class="desc">
                {{item.classify}}
              </span>
            </p>
            <p class="icon-desc leader">
              <img class="icon" :src="require('@/assets/images/man.png')">
              <span class="desc">
                {{item.author}}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import Card from '../../../components/Card'
  import navLeft from '../../../components/news/navLeft'
  import CardPic from '../../../components/CardPic'
  import cardConcertNav from '../../../components/news/cardConcertNav'


  export default {
    name: 'Live',
    components: { Card, CardPic, navLeft, cardConcertNav },
    data() {
      return {
        active: ['1', '2', '3', '4'],
        tabType: '0',
        navItems: [
          {
            name: '合理化建议',
            code:'advise',
            active: false
          },
          {
            name: '先进操作法',
            code:'operate',
            active: false
          },
          {
            name: '创新增效',
            code:'innovate',
            active: true
          }
        ],
        innovate: [
          {
            title: '测量高炉炉料撞击点的装置',
            imgs: require('@/assets/images/cardPic/1.jpg'),
            author: '发明人：侯健',
            date: '2014.7.30',
            classify: '类型：新技术',
            content: '<p> &emsp;&emsp;一种测量高炉炉料撞击点的装置，属于高炉布料检测设备技术领域，用于测量高炉布料时炉料撞击点。</p>' +
            '<p> &emsp;&emsp;其技术方案是：炉料收集槽为U型槽，炉料收集槽垂直放置，U型槽的开口朝向炉膛方向，炉料收集槽槽体内有多个横向隔板，隔板从槽口向槽底向下倾斜，密封盖板覆盖在炉料收集槽的开口处，密封盖板的上端与盖板牵引装置相连接，盖板牵引装置的后部固定在炉外固定支架上，炉料收集槽的上端与盖板牵引装置的前端相连接。</p>' +
            '<p> &emsp;&emsp;本实用新型可以准确测量出炉料最大角度的落点，解决目前靠理论计算、目测估计导致布料准确性下降的问题。本实用新型的结构简单、使用方便、效果良好、适应性强，适用于同一高炉检修，或者在怀疑溜槽跑偏、磨损等对布料不准时进行纠偏。</p>'
          },
          {
            title: '炉除尘风机的风道加固装置',
            imgs: require('@/assets/images/cardPic/2.jpg'),
            author: '发明人：王琦',
            date: '2014.8.20',
            classify: '类型：新技术',
            content: '<p> &emsp;&emsp;一种高炉除尘风机的风道加固装置，属于高炉除尘设备维修技术领域，用于对高炉除尘风机的进口风道和出口风道进行加固。</p>' +
            '<p> &emsp;&emsp;其技术方案是：它包括空心轴和挡板，空心轴为圆筒体，沿水平方向垂直穿过风道的两侧壁，空心轴的轴线与风道的纵轴垂直，且与风道的上顶面平行，空心轴的两端连接挡板，挡板与风道两侧壁的外壁焊接连接。</p>' +
            '<p> &emsp;&emsp;本实用新型在风道上增加了空心轴，空心轴通过挡板与风道连接牢固，空心轴对风道壁起到了支撑作用，提高了风道的强度，大大降低了其振动幅度，保证了除尘风机的安全可靠运行。本实用新型结构简单、效果明显，有效消除了除尘风机进口风道和出口风道的大幅度振动，消除了振动噪音，延长了风道的使用寿命。</p>'
          },
          {
            title: '磁力固定异型长杆点火枪',
            imgs: require('@/assets/images/cardPic/3.jpg'),
            author: '发明人：宗亮',
            date: '2015.10.21',
            classify: '类型：新技术',
            content: '<p> &emsp;&emsp;本实用新型提出的一种磁力固定的异形长杆点火枪，在进行高炉煤气放散塔点火枪故障处理时,不需要用电气焊拆除原来的坏枪,由于本枪体进行了变形,有110度的弯,可以方便的插入焦炉煤气点火口中,并且安装上两个磁力固定的底座,就可以接线使用了,由于本枪体的杆长1600MM,使接头和连接线路有效的避开了可能的火焰燃烧区域,防止了线路和接头的损坏.降低了故障率,使工人每休风就要上塔修复,变成每年上去进行常规检查一次,有效的降低了工人的工作强度和危险程度.</p>'
          },
          {
            title: '改进的密封碳环结构',
            imgs: require('@/assets/images/cardPic/4.jpg'),
            author: '发明人：史良',
            date: '2016.1.6',
            classify: '类型：新技术',
            content: '<p> &emsp;&emsp;本实用新型解决的技术问题是提供一种改进的密封碳环，该碳环通过在内径径向开设凹槽，实现对磨损粉末和煤气杂质的收集，使碳环与透平转子之间的间隙始终保持在合理范围之内，从而降低碳环磨损量，保证密封效果。</p>' +
            '<p> &emsp;&emsp;并且结合了浮环式密封与迷宫密封两方面优点，通过多个凹槽产生的密封气压力腔，与多个碳环密封面所产生的极薄的气膜，共同构成了无形的迷宫密封，通过这样的原理，使得密封更加合理与完善，并保持了碳环稳定性，减少摩擦导致的碳环过早损坏，避免了漏气与动静摩擦，使得碳环在较长时间内保证其完整的功能性，为机组稳定运行提供了有力的支撑。</p>'
          }
        ],
        code:'innovate'
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
        if(item.code === 'advise'){
          this.$router.push('/create/advise')
        }else if (item.code === 'operate'){
          this.$router.push('/create/operate')
        }else {
          this.$router.push('/create/innovate')
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
.studio-wrapper {
  width: 950px;
  margin-left: 50px;
  .studio-info {
    float: left;
    margin-right: 45px;
    &:nth-child(2n) {
      margin-right: 0;
    }
  }
  .studio-info {
    width: 450px;
    height: 150px;
    position: relative;
    text-align: left;
    margin-bottom: 35px;
    display: flex;
    .head-img {
      width: 215px;
      height: 150px;
      overflow: hidden;
      img {
        text-align: center;
        // max-width: 100%;
        max-height: 100%;
        height: 100%;
        text-align: center;
      }
    }
    .studio-desc {
      width: 235px;
      padding: 0 20px;
      .name {
        margin: 0;
        height: 60px;
        line-height: 60px;
        font-size: 16px;
        color: #1f1f1f;
        position: relative;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
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
      .icon-desc {
        margin: 0;
        margin-top: 20px;
        display: flex;
        align-items: center;
        .icon {
          width: 16px;
          height: 16px;
        }
        .desc {
          font-size: 14px;
          margin-left: 10px;
          color: #ffa200;
        }
        &.leader {
          .desc {
            color: #979797;
          }
        }
      }
    }
  }
}
</style>

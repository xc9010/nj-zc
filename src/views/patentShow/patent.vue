<template>
  <div class="mainBox">
    <div class="patent-list">
      <patent v-for="(item, index) in list" :key="index" :data="item">
      </patent>
    </div>
    <div style="text-align: center;  padding: 10px">
      <el-pagination
        background
        layout="prev, pager, next"
        :total="1000">
      </el-pagination>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import patent from '../../components/news/patent'


  export default {
    name: 'Live',
    components: { patent },
    data() {
      return {
        active: ['1', '2', '3', '4'],
        tabType: '0',
        list: [
          {
            title: '曲线轨道钢筋混凝土整体道口板专用轨撑',
            imgs:require('@/assets/images/zhuanli.jpg'),
            author: '裴新会',
            date: '2016-01-20',
            info: '本实用新型涉及一种布袋除尘灰排放装置，属于高炉除尘设备技术领域。本实用新型采用气体输灰与吸排组合方式，打开球阀和放灰蝶阀即可实现吸排车对除尘灰的吸排，当发生高炉灰潮湿、堵....',
            content:'<p>&emsp;&emsp;本实用新型涉及一种布袋除尘灰排放装置，属于高炉除尘设备技术领域。</p>' +
            '<p>&emsp;&emsp;本实用新型采用气体输灰与吸排组合方式，打开球阀和放灰蝶阀即可实现吸排车对除尘灰的吸排，当发生高炉灰潮湿、堵塞放灰管或排灰管时，利用中压氮气的高速流动将高炉除尘灰冲开、冲散，彻底解决了堵灰和污染问题，中压氮气有助于排灰管中保持正压，杜绝灰尘外泄。</p>' +
            '<p>&emsp;&emsp;本实用新型结构简单、维护成本低廉、排灰效果显著，推广前景广阔。</p>'
          },
          {
            title: '板带轧机旋转辊道固定装置',
            imgs:require('@/assets/images/zhuanli.jpg'),
            author: '陈阳',
            date: '2015-10-21',
            info: '本实用新型一种板带轧机旋转辊道固定装置，属于轧机设备技术领域。包括沿其高度方向开有螺孔的方形固定装置本体和辊道支架，固定装置本体底面沿其宽度方向固定有纵向定位键，纵向定位键与辊道支架上开设的纵向定位槽匹配连接；纵向定位键两侧沿固定装置本体底面长度方向开有轴向定位卡槽，轴向定位卡槽与辊道支架上的轴向定位台匹配连接；把合螺栓穿过固定装置本体角部的螺孔实现固定装置本体与....',
            content:'<p>&emsp;&emsp;本实用新型一种板带轧机旋转辊道固定装置，属于轧机设备技术领域。</p>' +
            '<p>&emsp;&emsp;包括沿其高度方向开有螺孔的方形固定装置本体和辊道支架，固定装置本体底面沿其宽度方向固定有纵向定位键，纵向定位键与辊道支架上开设的纵向定位槽匹配连接；纵向定位键两侧沿固定装置本体底面长度方向开有轴向定位卡槽，轴向定位卡槽与辊道支架上的轴向定位台匹配连接；把合螺栓穿过固定装置本体角部的螺孔实现固定装置本体与辊道支架的固定。</p>' +
            '<p>&emsp;&emsp;本实用新型纵向定位键和轴向定位卡槽的设计既加强了纵向定位，又保证了轴向定位；把合螺栓可以实现固定装置本体的牢固固定。这样就保证旋转辊道能够抵御钢坯及钢板的交变冲击，杜绝发生超差摆动和跳动，确保辊道稳定运行。</p>'
          },
          {
            title: '利用侧待温辊道的中厚板控温轧制工艺',
            imgs:require('@/assets/images/zhuanli.jpg'),
            author: '陈子刚',
            date: '2016-09-07',
            info: '一种高效利用侧待温辊道的中厚板控温轧制工艺，属于中厚板轧制工艺技术领域，用于实施两块钢板一组的中厚板控温轧制工艺，以提高轧制效率。其技术方案是：两块钢板交替进入和退出两组侧待温辊道，缩短了钢板进入....',
            content:'<p>&emsp;&emsp;一种高效利用侧待温辊道的中厚板控温轧制工艺，属于中厚板轧制工艺技术领域，用于实施两块钢板一组的中厚板控温轧制工艺，以提高轧制效率。</p>' +
            '<p>&emsp;&emsp;其技术方案是：两块钢板交替进入和退出两组侧待温辊道，缩短了钢板进入和退出侧待温辊道的时间，使得待温钢板的总运输时间恰好等于钢板的待温时间，保证了钢板待温厚度和终轧温度满足工艺要求。</p>' +
            '<p>&emsp;&emsp;本发明突破了现有模式中的第一块钢板先上第二组侧待温辊道，然后再运到第一组侧待温辊道的常规轧制工艺，新轧制工艺的运输路径及逻辑关系简单高效，</p>' +
            '<p>&emsp;&emsp;充分利用了侧待温辊道的空间，解决了在线辊道空间狭小、钢板只能单轧的问题，实现了长度大于25m的控温钢板在线两块一组轧制，提高了轧制节奏和轧制效率。</p>'
          },
          {
            title: '便携式关闭敞车车门的装置',
            imgs:require('@/assets/images/zhuanli.jpg'),
            author: '李宇坤',
            date: '2015-10-21',
            info: '本实用新型涉及一种便携式关闭敞车车门的装置，属于铁路设备维护技术领域，用于解决现有技术中敞车车门关闭费时、费力和搭扣座容易损坏的技术问题。构成中包括固定座和压板，固定座左端固定有向右上弯曲的钩型框....',
            content:'<p>&emsp;&emsp;本实用新型涉及一种便携式关闭敞车车门的装置，属于铁路设备维护技术领域，用于解决现有技术中敞车车门关闭费时、费力和搭扣座容易损坏的技术问题。</p>' +
            '<p>&emsp;&emsp;构成中包括固定座和压板，固定座左端固定有向右上弯曲的钩型框，右端通过旋转螺栓与压板下部转动连接，压板平面垂直于水平面和下开门门带平面，压板右侧沿压板高度方向固定有其内装配板杆的套筒。</p>' +
            '<p>&emsp;&emsp;本实用新型利用杠杆原理，向左扳动板杆带动压板沿旋转螺栓向左旋转压迫下开门门带下端，促使其向搭扣座内移动，待压进搭扣座后锁闭搭扣座实现敞车车门的关闭，单人即可扳动扳杆实现敞车车门的关闭，而且整体仅2KG左右，方便携带，具有快速、安全等优点，同时避免了搭扣座的损坏。</p>'
          },
          {
            title: '钢铁表面处理剂一新型除锈防锈剂',
            imgs:require('@/assets/images/zhuanli.jpg'),
            author: '李宇坤',
            date: '2015-10-21',
            info: '....',
            content:''
          },
          {
            title: '一种钢铁制造用铁水预处理装置',
            imgs:require('@/assets/images/zhuanli.jpg'),
            author: '李宇坤',
            date: '2015-10-21',
            info: '....',
            content:''
          },
          {
            title: '一种钢铁件表面热处理和防锈防油的处理方法',
            imgs:require('@/assets/images/zhuanli.jpg'),
            author: '李宇坤',
            date: '2015-10-21',
            info: '....',
            content:''
          },
          {
            title: '钢铁废渣球磨水洗选矿暨渣浆液处理工艺及装置',
            imgs:require('@/assets/images/zhuanli.jpg'),
            author: '李宇坤',
            date: '2015-10-21',
            info: '....',
            content:''
          }
        ]
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
      }
    }
  }
</script>

<style lang="scss" scoped>
.patent-list {
  padding-top: 55px;
  width: 1200px;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  background: #ffffff;

  .patent-wrapper {
    margin-right: 26px;
    margin-bottom: 45px;
    &:nth-child(4n) {
      margin-right: 0;
    }
  }
}
// .patent-wrapper {
//   width: 280px;
//   height: 285px;
//   display: block;
//   background: #eeeeee;
//   // margin-left: 50px;
// .patent-img-wrapper {
//   height: 230px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   .patent-img {
//     width: 240px;
//     height: 165px;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     img {
//       max-height: 100%;
//       max-width: 100%;
//     }
//   }
// }
//   .patent-title {
//     display: block;
//     margin: 0;
//     height: 55px;
//     line-height: 55px;
//     font-size: 16px;
//     color: #ffffff;
//     text-align: center;
//     background: #aaaaaa;
//   }
// }
</style>

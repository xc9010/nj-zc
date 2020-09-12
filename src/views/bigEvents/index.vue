<template>
  <div class="mainBox">
    <div class="news">
      <el-card class="box-card">
        <div slot="header" class="box-title">
          <span>大事纪</span>
        </div>
        <div>
          <el-timeline>
            <el-timeline-item
              :placement="item.position"
              v-for="(item, index) in activities"
              :key="index"
              :icon="item.icon"
              :type="item.type"
              :color="item.color"
              :size="item.size"
              :timestamp="item.timestamp"
            >

              <CardPic :info="innovate"></CardPic>

            </el-timeline-item>
          </el-timeline>

        </div>
      </el-card>
    </div>

  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import CardPic from '../../components/CardPic'

  export default {
    name: 'Live',
    components: { CardPic },
    computed: {
      ...mapGetters([
        'name'
      ])
    },
    data() {
      return {
        activities: [
          {
          content: '支持使用图标',
          timestamp: '2018-04-12 20:46',
          size: 'large',
          type: 'primary',
          position: 'top',
          icon: 'el-icon-check'
        }, {
          content: '支持自定义颜色',
          timestamp: '2018-04-03 20:46',
          position: 'top',
          type: 'primary',
          icon: 'el-icon-check'
        }, {
          content: '支持自定义尺寸',
          position: 'top',
          type: 'primary',
          icon: 'el-icon-check',
          timestamp: '2018-04-03 20:46',
          size: 'large'
        }, {
          content: '默认样式的节点',
          icon: 'el-icon-check',
          type: 'primary',
          position: 'top',
          timestamp: '2018-04-03 20:46'
        }
        ],
        innovate: [
          {
            title: '测量高炉炉料撞击点的装置',
            imgs: require('@/assets/images/cardPic/1.jpg'),
            author: '发明人：侯健',
            date: '2014.7.30',
            classify: '类型：新技术',
            content: '<p>一种测量高炉炉料撞击点的装置，属于高炉布料检测设备技术领域，用于测量高炉布料时炉料撞击点。其技术方案是：炉料收集槽为U型槽，炉料收集槽垂直放置，U型槽的开口朝向炉膛方向，炉料收集槽槽体内有多个横向隔板，隔板从槽口向槽底向下倾斜，密封盖板覆盖在炉料收集槽的开口处，密封盖板的上端与盖板牵引装置相连接，盖板牵引装置的后部固定在炉外固定支架上，炉料收集槽的上端与盖板牵引装置的前端相连接。本实用新型可以准确测量出炉料最大角度的落点，解决目前靠理论计算、目测估计导致布料准确性下降的问题。本实用新型的结构简单、使用方便、效果良好、适应性强，适用于同一高炉检修，或者在怀疑溜槽跑偏、磨损等对布料不准时进行纠偏。</p>'
          }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
</style>

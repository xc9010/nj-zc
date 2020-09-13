<template>
  <div>
    <div class="mainBox">
      <el-card class="box-card">
        <div slot="header" class="box-title">
          <span>创新直播</span>
        </div>
        <div class="liveHeader">
          <DetailVideo video></DetailVideo>
        </div>
      </el-card>
    </div>
    <div class="liveBody">
      <el-row :gutter="10">
        <el-col :span="16">
          <div class="bodyLeft">
            <div class="detailTitle">视频介绍</div>
            <div class="detailsBox">dheuwhdiweudheiuwhduehdewhduiehduewhdue</div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="bodyRight">
            <ContentHeader :refresh="false" title="热门视频"></ContentHeader>
            <TipList></TipList>
          </div>
        </el-col>
      </el-row>
    </div>

  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import DetailVideo from '../../components/DetailVideo'
  import ContentHeader from '../../components/ContentHeader'
  import TipList from '../../components/TipList'

  export default {
    name: 'Live',
    components: { DetailVideo, ContentHeader, TipList },
    computed: {
      ...mapGetters([
        'name'
      ])
    }
  }
</script>

<style lang="scss" scoped>
  .liveBody{
    margin: 10px 200px;
    .bodyLeft{
      padding: 10px;
      background-color: #fff;
      .detailTitle{
        margin: 10px 0;
        font-weight: bold;
      }
      .detailsBox{
        border: 1px solid #eee;
        padding: 20px;
      }
    }
    .bodyRight{
      padding: 10px;
      background-color: #fff;
    }
  }
</style>

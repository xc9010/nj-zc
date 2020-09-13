<template>
  <div class="mainBox">
    <div class="">
      <div class="class">
        <el-card class="box-card">
          <div >
            <el-row :gutter="20">
              <el-col :span="16">
                <ContentHeader :refresh="true" title="工匠讲堂"></ContentHeader>
                <div class="flex cardItem">
                  <CardVideo></CardVideo>
                  <CardVideo></CardVideo>
                  <CardVideo></CardVideo>
                  <CardVideo></CardVideo>
                </div>
                <div class="flex cardItem">
                  <CardVideo></CardVideo>
                  <CardVideo></CardVideo>
                  <CardVideo></CardVideo>
                  <CardVideo></CardVideo>
                </div>
              </el-col>
              <el-col :span="8">
                <ContentHeader :refresh="false" title="排行榜"></ContentHeader>
                <TipList></TipList>
              </el-col>
            </el-row>
          </div>
        </el-card>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import CardVideo from '../../components/CardVideo'
  import ContentHeader from '../../components/ContentHeader'
  import TipList from '../../components/TipList'

  export default {
    name: 'PatentShow',
    components: { CardVideo, ContentHeader, TipList },
    computed: {
      ...mapGetters([
        'name'
      ])
    }
  }
</script>

<style lang="scss" scoped>
  .class{
    .cardItem{
      display: flex;
      justify-content: space-between;
      margin-bottom: 10px;
    }
  }
</style>

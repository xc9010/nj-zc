<template>
  <div class="mainBox">
    <div class="mainContent">
      <el-tabs :tab-position="position">
        <el-tab-pane label="工会要闻">
          <div class="mainList">
            <el-collapse v-model="active">
              <el-collapse-item name="1">
                <template slot="title">
                  <el-link @click="goto('/details')" target="_blank">一致性 Consistency</el-link>
                </template>
                <Card></Card>
              </el-collapse-item>
              <el-collapse-item title="反馈 Feedback" name="2">
                <Card></Card>
              </el-collapse-item>
              <el-collapse-item title="效率 Efficiency" name="3">
                <Card></Card>
              </el-collapse-item>
              <el-collapse-item title="可控 Controllability" name="4">
                <Card></Card>
              </el-collapse-item>
            </el-collapse>
          </div>
          <div style="text-align: center;  padding: 10px">
            <el-pagination
              background
              layout="prev, pager, next"
              :total="1000">
            </el-pagination>
          </div>
        </el-tab-pane>
        <el-tab-pane label="政策解读">政策解读</el-tab-pane>
        <el-tab-pane label="主席信箱">主席信箱</el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import Card from '../../components/Card'

  export default {
    name: 'Notice',
    components: { Card },
    data() {
      return {
        position: 'left',
        active: ['1','2','3','4']
      }
    },
    computed: {
      ...mapGetters([
        'name'
      ])
    },
    methods: {
      goto(url) {
        console.log(url)
        this.$router.push(url || './')
      }
    }
  }
</script>

<style lang="scss" scoped>
</style>

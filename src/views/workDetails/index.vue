<template>
  <div class="mainBox">
    <div class="mainContent">
      <el-page-header @back="goBack">
      </el-page-header>
      <div class="details">
        <el-form :label-position="position" label-width="80px">
          <el-form-item label="主提案人">
            <el-card shadow="always">
              总是显示
            </el-card>
          </el-form-item>
          <el-form-item label="单位">
            <el-card shadow="always">
              总是显示
            </el-card>
          </el-form-item>
          <el-form-item label="联系方式">
            <el-card shadow="always">
              总是显示
            </el-card>
          </el-form-item>
          <el-form-item label="提案类别">
            <el-card shadow="always">
              总是显示
            </el-card>
          </el-form-item>
          <el-form-item label="案由">
            <el-card shadow="always">
              总是显示
            </el-card>
          </el-form-item>
          <el-form-item label="提案内容">
            <el-card shadow="always">
              总是显示
            </el-card>
          </el-form-item>
          <el-form-item label="建议措施">
            <el-card shadow="always">
              总是显示
            </el-card>
          </el-form-item>
          <el-form-item label="责任单位">
            <el-card shadow="always">
              总是显示
            </el-card>
          </el-form-item>
          <el-form-item label="答复意见">
            <el-card shadow="always">
              总是显示
            </el-card>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'WorkDetails',
    data() {
      return {
        position: 'top',

      }
    },
    computed: {
      ...mapGetters([
        'name'
      ])
    },
    created() {
      // console.log(this.$route.params.article)
    },
    methods: {
      goBack() {
        this.$router.back()
      }
    }
  }
</script>

<style lang="scss" scoped>
  .details{
    padding: 50px;

  }
</style>

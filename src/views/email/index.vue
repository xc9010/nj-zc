<template>
  <div class="mainBox">
    <div>
      <div class="news">
        <el-card class="box-card">
            <div slot="header" class="box-title">
              <span>主席信箱</span>
            </div>
            <div >
              <Email></Email>
            </div>
          </el-card>
      </div>
    </div>
  </div>
</template>

<script>

  import { mapGetters } from 'vuex'
  import Card from '../../components/Card'
  import Email from '../../components/Email'
  export default {
    components: { Card, Email },
    data() {
      return {
        levelList: null,
      }
    },
    computed: {
      ...mapGetters([
        'name'
      ])
    },
    methods: {
      handleClick(item) {
        this.$router.push({
          path: 'details',
          params: {
            article: item
          }
        })
      },
      goto(url) {
        console.log(url)
        this.$router.push(url || './')
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>

<template>
  <section class="app-main">
    <div class="bread">
      <breadcrumbinfo class="breadcrumb-container" />
      <breadcrumb class="breadcrumb-container" />
    </div>
    <transition name="fade-transform" mode="out-in">
      <router-view :key="key" />
    </transition>
  </section>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb'
import Breadcrumbinfo from '@/components/Breadcrumbinfo'
export default {
  name: 'AppMain',
  components: {
    Breadcrumb,
    Breadcrumbinfo
  },
  created () {
    // console.log(this.$route)
  },
  computed: {
    key() {
      return this.$route.path
    }
  }
}
</script>

<style scoped>
.app-main {
  /*50 = navbar  */
  width: 100%;
  position: relative;
  overflow: hidden;
  /*background-color: #efeff0;*/
  /*background: url('../../assets/images/bg.jpg') no-repeat fixed top;*/
}
.bread{
  width: 1200px;
  height: 55px;
  line-height: 55px;
  margin: auto;
  background: #e0e9ef;
  /* margin: 10px 200px; */
  padding: 0;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
}

.breadcrumb-container {
  margin-right: 30px;
}
.fixed-header+.app-main {
  padding-top: 50px;
}
</style>

<style lang="scss">
// fix css style bug in open el-dialog
.el-popup-parent--hidden {
  .fixed-header {
    padding-right: 15px;
  }
}
</style>

<template>
  <section class="app-main">
    <div style="position: relative">
      <img style="display: block" :src="require('@/assets/images/header-bg/2.jpg')">
      <div class="bread">
        <breadcrumbinfo class="breadcrumb-container" />
        <breadcrumb class="breadcrumb-container" />
      </div>
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
  /*margin-top: -60px;*/
  background: rgba(255, 255,255,0.9);
  padding: 0;
  display: flex;
  justify-content: space-between;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
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

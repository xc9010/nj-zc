<template>
  <div class="mainBox">
    <!--<breadcrumb class="breadcrumb-container" />-->
    mainbox
  </div>
</template>

<script>

  import Breadcrumb from '@/components/Breadcrumb'
  export default {
    components: {
      Breadcrumb,
    },
  }
</script>

<style lang="scss" scoped>
  .hamburger-container {
    line-height: 46px;
    height: 100%;
    float: left;
    cursor: pointer;
    transition: background .3s;
    -webkit-tap-highlight-color:transparent;

    &:hover {
      background: rgba(0, 0, 0, .025)
    }
  }
</style>

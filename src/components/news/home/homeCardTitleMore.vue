<template>
<div class="home-card-title-more">
  <home-card-title :title="'工会新闻'">
  </home-card-title>
  <p class="more" @click="handleClick">
    更多>>
  </p>
</div>
</template>

<script>

import homeCardTitle from '@/components/news/home/homeCardTitle'
export default {
  components: {
    homeCardTitle
  },
   props: {
     title: {
       type: String,
       default: function() {
         return ''
       }
    }
   },
   data() {
     return {
     }
   },
   methods: {
     handleClick() {
       this.$emit('handleClick')
     }
   }
}
</script>

<style lang="scss" scoped>
.home-card-title-more {
  width: 365px;
  height: 40px;
  display: flex;
  justify-content: space-between;
  .home-card-title-wrapper {
    &::after {
      content: '';
      width: 360px;
      height: 1px;
      background: #CCCCCC;
      position: absolute;
      bottom: 0;
    }
  }
  .more {
    margin: 0;
    font-size: 18px;
    color: #444444;
  }
}

</style>

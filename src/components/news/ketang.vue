<template>
  <div class="ketang-wrapper">
    <div class="ketang-img-wrapper">
      <div class="ketang-img">
        <img :src="data.imgs" />
      </div>
    </div>
    <p class="ketang-title">
      {{data.title}}
    </p>
    <p class="ketang-sub-title">
      {{data.author}}
    </p>
  </div>
</template>

<script>

export default {
   props: {
     data: {
       type: Object
     }
   },
   data() {
     return {
       levelList: null
     }
   }
}
</script>

<style lang="scss" scoped>
.ketang-wrapper {
  width: 255px;
  height: 190px;
  display: block;
  // background: #eeeeee;
  padding: 0 25px;
  .ketang-img-wrapper {
    // height: 205px;
    display: flex;
    justify-content: center;
    align-items: center;
    .ketang-img {
      width: 205px;
      height: 115px;
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        max-height: 100%;
        max-width: 100%;
      }
    }
  }
  .ketang-title {
    display: block;
    margin: 0;
    margin-top: 30px;
    // height: 20px;
    // line-height: 20px;
    font-weight: bold;
    font-size: 15px;
    color: #181818;
    text-align: left;
  }
  .ketang-sub-title {
    display: block;
    margin: 0;
    margin-top: 20px;
    // height: 20px;
    // line-height: 20px;
    font-size: 14px;
    color: #b0b0b0;
    text-align: left;

  }
}

</style>

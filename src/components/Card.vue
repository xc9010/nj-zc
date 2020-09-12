<template>
<div class="card">
  <div class="cardMain">
    <div>
      集团集团集团集团集团集团集团集团集团集团集团集团集团集团集团
      集团集团集团集团集团集团集团集团集团集团集团集团集团集团集团
    </div>
    <div class="flex cardTips">
      <span>2020-07-28</span>
      <span>admin</span>
    </div>
  </div>
</div>
</template>

<script>

  export default {
    data() {
      return {
        levelList: null
      }
    },
  }
</script>

<style lang="scss" scoped>
  .card{
    .cardMain{
      padding: 10px;
      .cardTips{
        padding-top: 10px;
        span:first-child{
          flex: 0.3;
        }
      }
    }
  }

</style>

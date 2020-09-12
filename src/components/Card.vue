<template>
<div class="card">
  <div class="cardMain">
    <div>
      {{info}}
      <!--9月1日，南京艺术家园“艺之乒”成立一周年庆活动在南钢举办，南钢工会主席张六喜等接待了艺术家们的到来。此次参加活动的有《江苏工人.....-->
    </div>
    <div class="flex cardTips">
      <span>
        <!--2020-09-02-->
        {{date}}
      </span>
      <span>
        <!--陈虹-->
        {{author}}
      </span>
    </div>
  </div>
</div>
</template>

<script>

  export default {
    props: {
      author: {
        type: String
      },
      date: {
        type: String
      },
      info:  {
        type: String
      }
    },
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

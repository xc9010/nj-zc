<template>
  <div class="mainBox">
    <div class="mainContent" style="height: 500px;">
      闯关练习
    </div>
  </div>
</template>


<script>

  export default {
    name: 'PreExam',
    data() {
      return {
        examId: '',
        loading: false,
        loadingText: '开始考试',
        postForm: {}
      }
    },

  }
</script>

<style scoped>

  .pre-exam div {

    line-height: 42px;
    color: #555555;
  }

</style>


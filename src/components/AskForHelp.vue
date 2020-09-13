<template>
<div class="askForHelp">
  <div class="askHeader">
    <DetailVideo></DetailVideo>
  </div>
  <div class="askBody">
    <p>可以向专家提出咨询</p>
    <div style="height: 300px; margin-bottom: 20px">
      <quill-editor v-model="content" ref="myQuillEditor" style="height: 80%;" :options="editorOption">
      </quill-editor>
    </div>
    <el-button type="primary">我要提问</el-button>
  </div>
  <div class="discuss">
    <Discuss></Discuss>
  </div>
</div>
</template>

<script>
  import { quillEditor } from 'vue-quill-editor'
  import 'quill/dist/quill.core.css'
  import 'quill/dist/quill.snow.css'
  import 'quill/dist/quill.bubble.css'
  import Discuss from './Discuss'
  import DetailVideo from './DetailVideo'
  export default {
    components: { quillEditor, Discuss, DetailVideo },
    data() {
      return {
        levelList: null,
        editorOption: {},
        content: ''
      }
    },
  }
</script>

<style lang="scss" scoped>
  .askForHelp{
    .askHeader{

    }
    .askBody{
      margin: 10px 0;
    }
    .discuss{
      margin: 10px 0;
    }

  }
</style>

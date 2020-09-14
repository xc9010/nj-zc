<template>
  <div class="mainBox card-exports">
    <card-expert>
    </card-expert>
    <div style="height: 300px; margin-bottom: 20px; margin-top: 40px;">
      <quill-editor v-model="content" ref="myQuillEditor" style="height: 80%;" :options="editorOption">
      </quill-editor>
    </div>
    <p class="btn-submit">
      提交
    </p>
    <div class="qs-list">
      <div class="qs-item">
        <card-question>
        </card-question>
      </div>
      <div class="qs-item">
        <card-question>
        </card-question>
      </div>
      <div class="qs-item">
        <card-question>
        </card-question>
      </div>
      <div class="qs-item">
        <card-question>
        </card-question>
      </div>
      <div class="qs-item">
        <card-question>
        </card-question>
      </div>
    </div>
  <!-- <div class="mainBox">
      <el-card class="box-card">
        <div slot="header" class="box-title">
          <span>专家问诊</span>
        </div>
        <div>
          <AskForHelp></AskForHelp>
        </div>
      </el-card>
    </div> -->
  </div>
</template>

<script>
  import { quillEditor } from 'vue-quill-editor'
  import { mapGetters } from 'vuex'
  import AskForHelp from '../../components/AskForHelp'
  import cardExpert from '../../components/news/cardExpert'
  import cardQuestion from '../../components/news/cardQuestion'

  export default {
    name: 'Experts',
    components: { AskForHelp, quillEditor, cardExpert, cardQuestion },
    computed: {
      ...mapGetters([
        'name'
      ])
    }
  }
</script>

<style lang="scss" scoped>
.img-wrapper {
  // width: 15px;
  // height: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  img {
    display: block;
    max-height: 100%;
    max-width: 100%;
  }
}
.btn-submit {
  margin: 0;
  display: block;
  width: 130px;
  height: 45px;
  line-height: 45px;
  color: #ffffff;
  background: #d31b2a;
  border-radius: 5px;
  text-align: center;
  letter-spacing: 10px;
}

.qs-list {
  margin-top: 40px;
  .qs-item {
    padding: 40px 0;
    border-bottom: 1px dashed #e0e0e0;
  }
}
</style>

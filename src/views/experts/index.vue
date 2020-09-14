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

      <div class="qs-item"  v-for="(item, index) in data" :key="index">
        <card-question :data="item">
        </card-question>
      </div>
    </div>
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
    },
    data(){
      return{
        data: [
          {
            name: '吴伟',
            question:'我这几天不知晓怎么回事小腹疼痛小便带血，小腹疼痛小便带血女性是什么问题？',
            answer: '一般再次出现了小便带血等，还是护理不好随着有泌尿系感染可能会大，看一看如何尿频等症状，建议尽快到医院决定尿常规等仔细检查看几下，遵医嘱按排用药的，但是平时应当多喝水勤排尿等，在饮食方面还是不要吃辛辣的食物等，同时遵医嘱多留意增强营养的。'
          },
          {
            name: '王瑞娟',
            question:'身边许多朋友都在节食，总是在谈论什么时候节食是最佳的，只知晓月经期间节食还不错，那月经期间吃什么东西减肥最快？',
            answer: '你好在月经期间节食这种观点是并不是科学的，所以说在月经期间如果说想要节食的话，也不要有意的去实施节食，因为节食是个长期的过程，你必须要长期持久的实施，要在饮食方面办到吃辛辣刺激的食物，少吃多餐，不要暴饮暴食，办到营养配搭恰当'
          },
          {
            name: '牛艳林',
            question:'医生我今年35岁，男。最近培训的时候总是觉着身体不舒服，去医院仔细检查才知晓竟然得了小三阳，我有点难以置信。想问医生治疗好小三阳患者方法是什么？',
            answer: '乙肝小三阳患者一般是指体内传染了乙肝病毒，一般是要采取口服抗病毒的药物来彻底清除乙肝病毒，同时还要密切仔细观察肝功能的变动，平时也要留意多活动来大幅提高人体的抵抗力，少吃对肝脏刺激性比较大的食品，以免严重肝脏的压力，同时还要留意要戒酒，少吸烟。'
          },
          {
            name: '朱亦堃',
            question:'甲亢患者，外带血糖血脂高，在吃甲亢药，经仔细检查血糖血脂分高0.7和0.5，我讨厌吃瓜.菜.辣味！我的饮食有问题吗？甲亢和血糖高有关系吗',
            answer: '患甲状腺功能亢進可以再次出现血糖升高的，建议内分泌科详查，再做救治，对于甲状腺疾病没什么特效的疗法。只有适不适合，每一个患者的病情都不一样，所以治疗方法也不能够一概而论，救治不对症还会严重病情。制订最擅长患者的治疗方案，方才能超越个好的治疗效果。 "特别注意饮食方面，要控制好总热量，合理调整膳食结构，尽量减少胆固醇的摄入。'
          }
        ]
      }
    },
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

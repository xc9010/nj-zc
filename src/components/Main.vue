<template>
  <div class="home">
    <div class="crousel">
      <img width="100%" height="400px" :src="require('@/assets/images/homebg.jpg')" alt="pic">
    </div>
    <div class="mainBox">
      <div class="homeItems">
        <el-row :gutter="20">
          <el-col :span="16">
            <ContentHeader :refresh="false" title="新闻动态" more="查看更多" :border="false"></ContentHeader>
            <div class="flex cardItem">
              <CardVideo :info="lecture[0]"></CardVideo>
              <CardVideo :info="lecture[1]"></CardVideo>
              <CardVideo :info="lecture[2]"></CardVideo>
              <CardVideo :info="lecture[2]"></CardVideo>
            </div>
            <div class="flex cardItem">
              <CardVideo :info="lecture[3]"></CardVideo>
              <CardVideo :info="lecture[4]"></CardVideo>
              <CardVideo :info="lecture[5]"></CardVideo>
              <CardVideo :info="lecture[5]"></CardVideo>
            </div>
          </el-col>
          <el-col :span="8">
            <ContentHeader :refresh="false" title="创新工作室" more="查看更多" :border="false"></ContentHeader>
            <TipList></TipList>
          </el-col>
        </el-row>
      </div>
      <div class="homeItem">
        <ContentHeader :refresh="false" title="基层风采" more="查看更多" :border="false"></ContentHeader>
      </div>

      <div class="homeItems">
        <el-row :gutter="20">
          <el-col :span="16">
            <ContentHeader :refresh="false" title="技能培训" more="查看更多" :border="false"></ContentHeader>
            <div class="flex cardItem">
              <CardVideo :info="lecture[0]"></CardVideo>
              <CardVideo :info="lecture[1]"></CardVideo>
              <CardVideo :info="lecture[2]"></CardVideo>
              <CardVideo :info="lecture[2]"></CardVideo>
            </div>
            <div class="flex cardItem">
              <CardVideo :info="lecture[3]"></CardVideo>
              <CardVideo :info="lecture[4]"></CardVideo>
              <CardVideo :info="lecture[5]"></CardVideo>
              <CardVideo :info="lecture[5]"></CardVideo>
            </div>
          </el-col>
          <el-col :span="8">
            <ContentHeader :refresh="false" title="练兵比武" more="查看更多" :border="false"></ContentHeader>
            <TipList></TipList>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>

  import Breadcrumb from '@/components/Breadcrumb'
  import ContentHeader from '@/components/ContentHeader'
  import CardVideo from '@/components/CardVideo'
  import TipList from '@/components/TipList'
  export default {
    components: {
      Breadcrumb,
      ContentHeader,
      CardVideo,
      TipList,

    },
    data() {
      return {
        lecture: [
          {
            title: '数控车床编程培训',
            imgs: 'https://img.qeo.cn/s201738205058560811A00210135.jpg',
            author: '南钢教育培训',
            date: '2020-08-20',
            content: ''
          },
          {
            title: '电工培训,焊工培训',
            imgs: 'https://img.qeo.cn/s2017120157169256795A00131067.jpg',
            author: '上德教育培训',
            date: '2020-08-20',
            content: ''
          },
          {
            title: '登高证，高压电工证',
            imgs: 'https://img.qeo.cn/s10089905A00227365.png',
            author: '上海则成安全技术有限公司',
            date: '2020-08-20',
            content: ''
          },
          {
            title: '叉车考叉车驾驶培训',
            imgs: 'https://img.qeo.cn/s2018326108557715199A00242476.jpg',
            author: '南钢教育培训',
            date: '2020-08-20',
            content: ''
          },
          {
            title: '塔吊司机培训',
            imgs: 'https://img.qeo.cn/s201632517438360005A00159671.jpg',
            author: '南钢教育培训',
            date: '2020-08-20',
            content: ''
          },
          {
            title: '起重机司',
            imgs: 'https://img.qeo.cn/s2016811728599373524A00098557.jpg',
            author: '上德教育培训',
            date: '2020-08-20',
            content: ''
          },
          {
            title: '安监局的电工证和国家电网的电工考试',
            imgs: 'https://img.qeo.cn/s201314103732986A00241422.png',
            author: '上海则成安全技术有限公司',
            date: '2020-08-20',
            content: ''
          },
          {
            title: '上海低压电工证电焊证登高作业架子工特种操作',
            imgs: 'https://img.qeo.cn/s10088005B00196975.jpg',
            author: '南钢教育培训',
            date: '2020-08-20',
            content: ''
          }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  .home{
    .homeItems{
      margin: 10px 0;
    }
  }
</style>

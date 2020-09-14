<template>
  <div class="mainBox">
    <div class="video-wrapper">
      <card-video></card-video>
      <div class="sidebyside">
        <div class="video-desc">
          <p class="video-desc-btn">
            <!-- c2c2c2 -->
            视频介绍
          </p>
          <div class="video-desc-info">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;南钢始建于1958年,1996年完成公司制改造,由南京钢铁厂改为南京钢铁集团有限公司（以下简称“南钢集团公司”）。1999年3月，南钢集团公司以部分钢铁主业资产投入发起设立了南京钢铁股份有限公司（以下简称“公司”）。2000年9月19日，公司在上海证券交易所上市（600282），控股股东为南钢集团公司；2003年4月，南钢集团公司进行三联动改革，以资产出资与上海复星集团合资成立南京钢铁联合有限公司，公司控股股东变更为南京钢铁联合有限公司；2010年10月，经中国证监会批准，公司完成重大资产重组，南钢钢铁主业实现整体上市，控股股东变更为南京南钢钢铁联合有限公司。
    公司座落于大企业积聚、经济发达的南京江北化工园区和高新开发区，西由南京长江大桥、长江三桥、纬七路长江隧道，东由南京长江二桥、长江四桥与南京都市圈相通，紧临宁通、宁洛、宁连、宁淮、宁合等多条高速公路，南临长江黄金水道，拥有包括2个万吨级在内的数个自备货运码头，厂区内设铁路专用线与京沪铁路相连，交通运输十分便捷。
          </div>
        </div>
        <rank-video></rank-video>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import DetailVideo from '../../components/DetailVideo'
  import ContentHeader from '../../components/ContentHeader'
  
  import cardVideo from '../../components/news/cardVideo'
  import rankVideo from '../../components/news/rankVideo'
  import TipList from '../../components/TipList'

  export default {
    name: 'Live',
    components: { DetailVideo, ContentHeader, TipList, cardVideo, rankVideo },
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
  img {
    display: block;
    max-height: 100%;
    max-width: 100%;
  }
}
.sidebyside {
  width: 1200px;
  display: flex;
  justify-content: space-between;
}
.video-desc {
  width: 835px;
  .video-desc-btn {
    border: 1px solid #c2c2c2;
    color: #222222;
    font-size: 14px;
    width: 105px;
    height: 35px;
    line-height: 35px;
    text-align: center;
    background: #fafafa;
  }
  .video-desc-info {
    margin-top: 30px;
    line-height: 35px;
    color: #474747;
  }
}
</style>

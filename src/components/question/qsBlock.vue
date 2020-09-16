<template>
  <div class="type-wrapper">
    <div class="type-header" :style="{backgroundColor:bgColor}">
      <div class="header-left">
        <div class="img-wrapper">
          <img :src="typeImg" />
          <!-- require('@/assets/images/icon/trophy.png') -->
        </div>
      </div>
      <div class="split-vertical">
      </div>
      <p class="title">
        {{title}}
      </p>
      <div class="arrow-down img-wrapper">
        <img :src="require('@/assets/images/icon/arrow_down.png')" />
      </div>
    </div>
    <div class="type-body">
      <div class="type-item" v-for="(item, i) in list" :key="i" @click="handleClick(item)">
          <div class="type-icon img-wrapper">
            <!-- <img class="img-wrapper" :src="require('@/assets/images/icon/question/03.png')" /> -->
            <img class="img-wrapper" :src="item.icon">
          </div>
        <p class="title">
          <!-- 医疗知识 -->
          {{item.name}}
        </p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    bgColor: {
      type: String,
      default: '#e45935'
    },
    typeImg: {
      type: String,
      default: function() {
        return require('@/assets/images/icon/trophy.png')
      }
    },
    title: {
      type: String,
      default: '题库'
    },
    list: {
      type: Array,
      default: function() {
        return []
      }
    }
  },
  data() {
    return {
    }
  },
  computed: {
    classObject: function () {
      return {
        active: this.isActive && !this.error,
        'text-danger': this.error && this.error.type === 'fatal'
      }
    }
  },
  methods: {
    handleClick(item) {
      this.$emit('handleClick', item)
    }
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

.type-wrapper {
  width: 860px;
  .type-header {
    position: relative;
    background: #e45935;
    height: 50px;
    width: 860px;
    display: flex;
    .header-left {
      height: 50px;
      width: 60px;
      display: flex;
      align-items: center;
      justify-content: center;
      // border-right: 1px solid #ffffff;
      .img-wrapper {
        width: 40px;
        height: 40px;
      }
    }
    .split-vertical {
      width: 1px;
      height: 50px;
      background: rgba($color: #ffffff, $alpha: 0.2);
      margin-right: 15px;
    }
    .title {
      font-size: 16px;
      font-weight: bold;
      color: #fff;
    }
    .arrow-down {
      position: absolute;
      right: 0;
      top: 20px;
      right: 15px;
      display: flex;
      align-items: center;
      justify-content: center;
      &img-wrapper {
        width: 20px;
        height: 20px;
      }
    }
  }
  .type-body {
    // padding: 0 50px;
    display: flex;
    flex-wrap: wrap;
    .type-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 130px;
      height: 200px;
      .type-icon {
        &.img-wrapper {
          width: 90px;
          height: 90px;
        }
      }
      .title {
        margin-top: 15px;
        color: #3b3b3b;
        font-size: 16px;
      }
      margin-right: 52px;
      &:nth-child(5n) {
        margin-right: 0px;
      }
    }
  }
}
</style>

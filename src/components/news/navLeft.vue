<template>
  <div class="nav-container">
    <div v-for="(item, index) in items" :key="index" :class="['nav-item', activeIndex === index ? 'active': '' ]" @click="handleClick(item, index)">
      <div class="active"></div>
      <p>
        {{item.name}}
      </p>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    activeIndex: {
      type: Number,
      defult: 0
    },
    items: {
      type: Array,
      default: function() {
        return []
      }
    }
  },
  created() {
    console.log('左侧组件created', this.items, this.activeIndex)
  },
  methods: {
    handleClick(item, index) {
      // this.items.forEach(m => {
      //   m.active = false
      // })
      // item.active = true
      console.log('左边组件', item , index)
      this.$emit('callback', item, index)
    }
  }
  // data() {
  //   return {
  //     levelList: null
  //   }
  // },
}
</script>

<style lang="scss" scoped>
.nav-container {
  .nav-item {
    height: 45px;
    line-height: 45px;
    width: 200px;
    margin-bottom: 15px;
    display: flex;
    align-items: center;
    .active {
      width: 5px;
      height: 100%;
      margin-right: 25px;
      background-color: transparent;
    }
    font-size: 15px;
    &.active {
      color: #ffffff;
      background-image: linear-gradient(to right, #ffa200, transparent);
      .active {
        background-color: #d90e1e;
      }
      &.active:hover {
        color: #ffffff;
      }
    }
    &:hover {
      color: #d90e1e;
      .active {
        background-color: #d90e1e;
      }
    }
  }
}
</style>

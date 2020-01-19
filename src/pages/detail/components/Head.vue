<template>
   <div class="head" :style = "opacityStyle" v-show="headShow">
    <router-link to ="/">
      <div class = "head-left iconfont  iconfanhui back-icon" />
    </router-link>
    <p class = "head-content">景点详情</p>
  </div>
</template>

<script>
export default {
  components: {},
  data () {
    return {
      headShow: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    // 页面滚动时,控制头部区域的显隐
    handleScroll () {
      const top = document.documentElement.scrollTop
      let opacity = 0
      if (top >= 150) {
        opacity = 1
      } else if (top >= 50) {
        opacity = (top - 50) / 100
      }
      this.opacityStyle = {opacity}
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  unmounted () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang = "less" scoped>
.head {
  position: fixed;
  display: flex;
  align-items: center;
  top: 0;
  width: 100%;
  line-height: 0.84rem;
  background-color: @bgColor;
  color:#fff;
  height: .84rem;
  .head-left{
    color: #fff;
    text-indent: .2rem;
    font-size: .4rem;
  }
  .head-content{
    flex: 1;
    text-align: center;
    text-indent: -.7rem;
    font-size: .33rem;
  }
}
</style>

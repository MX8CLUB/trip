<!--  -->
<template>
   <ul ref = "alphabet" class='alphabet' @click = "handleClickAlphabet">
     <li v-for = "(item,index) in alphabetList"
      :data-alphabet = "item"
      :ref = "item"
      :key = "index"
      @touchstart.prevent="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
    >
      {{item}}
    </li>
   </ul>
</template>

<script>

export default {
  components: {},
  props: {
    alphabetList: Array
  },
  data () {
    return {
      touchFlag: false
    }
  },
  methods: {
    // 计算手指当前处于第几个字母
    computeAlphabetNum () {
      return parseInt()
    },
    // 手指在字母表上开始触摸时
    handleTouchStart () {
      this.touchFlag = true
    },
    // 手指在字母表上结束触摸时
    handleTouchEnd () {
      this.touchFlag = false
    },
    // 手指在字母表上滚动时
    handleTouchMove (e) {
      // 做防抖处理,提升性能
      if (this.timer) {
        clearTimeout(this.timer)
      }
      this.timer = setTimeout(() => {
        let nowY = e.touches[0].clientY
        let index = parseInt((nowY - this.startY) / this.distance)
        this.$emit('changeAlphabet', this.alphabetList[index])
      }, 100)
    },
    // 点击字母列表时
    handleClickAlphabet (e) {
      console.log(e.target.dataset.alphabet)
      if (this.timer) {
        clearTimeout(this.timer)
      }
      this.$emit('changeAlphabet', e.target.dataset.alphabet)
    }
  },
  updated () {
    console.log(this.$refs['A'][0].offsetTop)
  },
  created () {},
  mounted () {
    // 计获取每个字母间隔多少px
    this.distance = parseInt(getComputedStyle(window.document.documentElement)['font-size']) * 0.45
    // // 计算整个字母列表到屏幕顶部的距离
    this.startY = this.$refs.alphabet.offsetTop
  }
}
</script>

<style lang = "less" scoped>
.alphabet{
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  right: .1rem;
  top: 2.8rem;
  /* transform: translateY(-40%); */
  width: .3rem;
  li{
    color: @bgColor;
    height: .45rem;
    line-height: .45rem;
  }
}
</style>

<template>
  <div>
   <div class='banner' @click = "handleGallary" >
    <img src="//img1.qunarzz.com/sight/p0/1603/b5/b5437c6af5adf13290.water.jpg_600x330_2faa07c2.jpg">
    <div class = "banner-info">
      <p class = "banner-title">龙门古镇(AAAA景区)</p>
      <div class = "banner-icons"><span class="iconfont icontupian"></span>&nbsp;&nbsp;15</div>
    </div>
    <router-link to="/" tag = "div" class = "back iconfont  iconfanhui back-icon" />

   </div>
   <fade-animation>
    <Gallary v-if = "gallaryShow" :imgList = "imgList" @handleGallary = "handleGallary"/>
   </fade-animation>
  </div>
</template>

<script>
import Gallary from 'common/gallary/gallary'
import FadeAnimation from 'common/fadeAnimation/FadeAnimation'

export default {
  components: {
    Gallary,
    FadeAnimation
  },
  data () {
    return {
      gallaryShow: false, // 滑动相册是否打开
      imgList: [
        'http://img1.qunarzz.com/sight/p0/1904/c2/c26e1e4ffe899843a3.water.jpg_r_800x800_67a1106e.jpg',
        'http://img1.qunarzz.com/sight/p0/201403/07/a7ac8435f6dfd5abe6159315747d17d5.jpg_350x240_0a9f587d.jpg'
      ]
    }
  },
  methods: {
    handleGallary () {
      // console.log('handleGallary')
      this.gallaryShow = !this.gallaryShow
    }
  },
  created () {},
  mounted () {
    // this.$router.afterEach((to, from, next) => {
    //   window.scrollTo(0, 0)
    // })
  },
  activated () {
    this.gallaryShow = false
  }
}
</script>

<style lang = "less" scoped>
.banner{
  position: relative;
  width: 100%;
  height:54%;

  img{
    width: 100%;
  }

  .banner-info{
    position: absolute;
    display: flex;
    justify-content: space-between;
    color: #fff;
    left: 0;
    right: 0;
    bottom: 0;
    height: .5rem;
    line-height: .5rem;
    font-size: .36rem;
    padding: .2rem;
    background-image: linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,.8));

    .banner-icons{
      font-size: 0.24rem;
      background: rgba(0, 0, 0, 0.5);
      border-radius: 0.5rem;
      padding: .1rem .25rem;
      height: .3rem;
      line-height: .3rem;
    }
  }
  .back{
    position: absolute;
    top: 0.4rem;
    left: 0.25rem;
    width: .72rem;
    height: .72rem;
    line-height: .72rem;
    text-align: center;
    background-color: rgba(0, 0, 0, 0.5);
    color: #fff;
    font-size: 0.45rem;
    border-radius: 50%;
  }
}
</style>

<template>
   <div class='gallary' @click.stop="handleGallary">
      <swiper :options="swiperOptions"  class="wrapper">
        <swiper-slide v-for="(item,index) in imgList" :key = "index">
          <img class = "gallary-img" :src="item" />
        </swiper-slide>
         <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
   </div>
</template>

<script>
export default {
  components: {},
  props: {
    imgList: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction' // 分数样式分页器
        },
        loop: true, // 循环滑动
        observeParents: true, // 父元素变化时刷新
        observer: true // 自身变化时刷新
      }
    }
  },
  methods: {
    handleGallary () {
      this.$emit('handleGallary')
    }
  }
}
</script>

<style lang = "less" scoped>
.gallary{
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 999;
  background-color: black;

  & /deep/ .swiper-container{
    overflow: inherit;
  }

  .wrapper{
    height: 0;
    width: 100%;
    padding-bottom: 70%;
    .gallary-img{
      width: 100%;
    }

    & /deep/ .swiper-pagination{
      bottom: -1rem;
      color: #fff;
      overflow: inherit;
    }
  }
}
</style>

<!--  -->
<template>
   <div class='swiper'>
    <swiper v-if = "swiperImg.length > 0" :options="swiperOption" class="swiper-container">
      <swiper-slide v-for="(item,index) in swiperImg" :key = "index" class="swiper-item" >
        <img :src="item.imgUrl" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
   </div>
</template>

<script>

import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

export default {
  components: {
    swiper,
    swiperSlide
  },
  props: {
    swiperImg: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        }, // 这样写小圆点就有了
        autoplay: true,
        loop: true
      }
    }
  },
  methods: {},
  created () {},
  mounted () {}
}
</script>

<style lang = "less" scoped>
.swiper /deep/ .swiper-pagination-bullet-active{
background: #fff;
}
.swiper{
  overflow: hidden;
  width: 100%;
  height:0px;
  padding-bottom: 33%;
  /* background-color: #eee; */
  img{
    width: 100%;
  }
}
</style>

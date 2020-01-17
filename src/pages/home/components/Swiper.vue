<!--  -->
<template>
   <div class='swiper'>
    <swiper :options="swiperOption" class="swiper-container">
      <swiper-slide  class="swiper-item" >
        <img src="https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20201/7b45da191f638f13455777030853a1ea.jpg_750x200_883fe3a8.jpg" />
      </swiper-slide>
      <swiper-slide  class="swiper-item" >
       <img src="https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20201/9c4bd16baa22bcd6810b714b225b5c33.jpg_750x200_95d6ad38.jpg" />
      </swiper-slide>
      <swiper-slide  class="swiper-item">
        <img src="https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20201/1586638277619f1041ebd03877cfccee.jpg_750x200_8db6a58a.jpg" />
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
  padding-bottom: 27%;
  background-color: #eee;
  img{
    width: 100%;
  }
}
</style>

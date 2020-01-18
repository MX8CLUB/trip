<!--  -->
<template>
   <div class='wrapper'>
    <Header :city="city" />
    <Swiper :swiperImg = "swiperImg"/>
    <Icons :iconList = "iconList"/>
    <Recommend :recommendList = "recommendList" />
    <Weekend :weekendList = "weekendList"/>
   </div>
</template>

<script>
import Header from '@/pages/home/components/Header'
import Swiper from '@/pages/home/components/Swiper'
import Icons from '@/pages/home/components/Icons'
import Recommend from '@/pages/home/components/Recommend'
import Weekend from '@/pages/home/components/Weekend'
import * as requireConfig from '@/config/require'

export default {
  components: {
    Header,
    Swiper,
    Icons,
    Recommend,
    Weekend
  },
  data () {
    return {
      city: '城市',
      swiperImg: [],
      iconList: [],
      recommendList: []
    }
  },
  methods: {},
  created () {},
  mounted () {
    this.$axios.post('/api/getHomeData').then((res) => {
      console.log(res)
      if (res && res.data && res.data.code == requireConfig.REQUIRE_OK) {
        console.log(res)
        let list = res.data.list
        this.city = list.city
        this.swiperImg = list.swiperList
        this.iconList = list.iconList
        this.recommendList = list.recommendList
        this.weekendList = list.weekendList
      }
    })
  }
}
</script>

<style lang = "less" scoped>
  .wrapper{
    /* background-color: #eee; */
  }
</style>

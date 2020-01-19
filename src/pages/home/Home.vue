<!--  -->
<template>
   <div class='wrapper'>
    <Header />
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
import { mapState } from 'vuex'

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
      lastCity: '', // 缓存city,用以判断是否需要重新获取首页数据
      swiperImg: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    }
  },
  computed: {
    ...mapState(['city'])
  },
  mounted () {
    this.lastCity = this.city
    this.getHomeData()
  },
  activated () {
    console.log(this.city, this.lastCity)
    if (this.city !== this.lastCity) {
      this.getHomeData()
      this.lastCity = this.city
    }
  },
  methods: {
    getHomeData () {
      this.$axios.post('/api/getHomeData').then((res) => {
        console.log(res)
        if (res && res.data && res.data.code == requireConfig.REQUIRE_OK) {
          console.log(res)
          let list = res.data.data
          this.swiperImg = list.swiperList
          this.iconList = list.iconList
          this.recommendList = list.recommendList
          this.weekendList = list.weekendList
        }
      })
    }
  }

}
</script>

<style lang = "less" scoped>
</style>

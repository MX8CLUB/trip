<!--  -->
<template>
   <div class='wrapper'>
    <Header />
    <Swiper />
    <Icons />
    <Recommend />
    <Weekend />
   </div>
</template>

<script>
import Header from '@/pages/home/components/Header'
import Swiper from '@/pages/home/components/Swiper'
import Icons from '@/pages/home/components/Icons'
import Recommend from '@/pages/home/components/Recommend'
import Weekend from '@/pages/home/components/Weekend'

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
    }
  },
  methods: {},
  created () {},
  mounted () {}
}
</script>

<style lang = "less" scoped>
  .wrapper{
    /* background-color: #eee; */
  }
</style>

<!--  -->
<template>
  <swiper v-if = "pages.length > 0" :options="swiperOption" class="swiper-container" >
    <swiper-slide  v-for="(page,index) in pages" :key = "index" class='icons'>
      <div class = "icon" v-for = "(item , index) in page" :key = "index">
        <img :src="item.imgUrl" :alt="item.text" />
        <p>{{item.desc}}</p>
      </div>
   </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>

</template>

<script>
export default {
  props: {
    iconList: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        }, // 这样写小圆点就有了
        loop: true
      }
    }
  },
  computed: {
    pages () {
      let pages = []
      this.iconList.map((item, index) => {
        let page = parseInt(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  },
  methods: {},
  created () {},
  mounted () {}
}
</script>

<style lang = "less" scoped>
  .icons{
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    overflow: hidden;
    width: 100%;
    .icon{
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: center;
      width: 25%;
      padding: .2rem 0;
      overflow: hidden;
      img{
        width: 55px;
        min-height: 55px;
        margin: 0 auto;
      }
      p{
        .textOverflow();
      }
    }
  }
</style>

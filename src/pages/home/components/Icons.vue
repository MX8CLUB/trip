<!--  -->
<template>
  <swiper :options="swiperOption" class="swiper-container">
    <swiper-slide v-for="(page,index) in pages" :key = "index" class='icons'>
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
  components: {},
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        }, // 这样写小圆点就有了
        loop: true
      },
      'iconList': [{
        'id': '0001',
        'imgUrl': 'http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png',
        'desc': '景点门票'
      }, {
        'id': '0002',
        'imgUrl': 'http://img1.qunarzz.com/piao/fusion/1711/df/86cbcfc533330d02.png',
        'desc': '滑雪季'
      }, {
        'id': '0003',
        'imgUrl': 'http://img1.qunarzz.com/piao/fusion/1710/a6/83f636bd75ae6302.png',
        'desc': '泡温泉'
      }, {
        'id': '0004',
        'imgUrl': 'http://img1.qunarzz.com/piao/fusion/1611/35/2640cab202c41b02.png',
        'desc': '动植园'
      }, {
        'id': '0005',
        'imgUrl': 'http://img1.qunarzz.com/piao/fusion/1611/d0/e09575e66f4aa402.png',
        'desc': '游乐园'
      }, {
        'id': '0006',
        'imgUrl': 'http://img1.qunarzz.com/piao/fusion/1611/59/569d3c096e542502.png',
        'desc': '必游榜单'
      }, {
        'id': '0007',
        'imgUrl': 'http://img1.qunarzz.com/piao/fusion/1611/17/4bd370f3eb1acd02.png',
        'desc': '演出'
      }, {
        'id': '0008',
        'imgUrl': 'http://img1.qunarzz.com/piao/fusion/1611/7f/b1ea3c8c7fb6db02.png',
        'desc': '城市观光'
      }, {
        'id': '0009',
        'imgUrl': 'http://img1.qunarzz.com/piao/fusion/1611/a9/ffc620dbda9b9c02.png',
        'desc': '一日游'
      }]
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

<template>
  <div class>
    <Banner />
    <Head />
    <TicketList :ticketList="categoryList" :isStart="true" />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
  </div>
</template>

<script>
import Banner from './components/Banner'
import Head from './components/Head'
import TicketList from './components/TicketList'

export default {
  components: {
    Banner,
    Head,
    TicketList
  },
  data () {
    return {
      'sightName': '大连圣亚海洋世界(AAAA景区)',
      'bannerImg': 'http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_600x330_bf9c4904.jpg',
      'gallaryImgs': ['http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_800x800_70debc93.jpg', 'http://img1.qunarzz.com/sight/p0/1709/76/7691528bc7d7ad3ca3.img.png_800x800_9ef05ee7.png'],
      'categoryList': [
        {
          'title': '成人票',
          'children': [
            {
              'title': '成人三馆联票',
              'children': [
                {'title': '成人三馆联票 - 第一连锁店销售'},
                {'title': '成人三馆联票 - 第二连锁店销售'},
                {'title': '成人三馆联票 - 第三连锁店销售'}
              ]
            },
            {
              'title': '成人五馆联票',
              'children': [
                {'title': '成人五馆联票 (指定场馆)'},
                {'title': '成人五馆联票 (任意场馆)'}
              ]
            }
          ]
        },
        {
          'title': '学生票',
          'children': [
            {'title': '普通学生票'},
            {
              'title': '特殊学生票',
              'children': [
                {'title': '特殊学生票 - 残疾学生票'},
                {'title': '特殊学生票 - 退伍学生票'}
              ]
            }
          ]
        },
        {
          'title': '儿童票'
        }, {
          'title': '特惠票'
        }
      ]
    }
  },
  methods: {},
  created () {},
  mounted () {}
}
</script>

<style lang = "less" scoped>
</style>

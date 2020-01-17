<!--  -->
<template>
  <div class="wrapper">
    <div class="title"><span class = "iconfont iconicon-test" /> 周末去哪儿</div>
    <ul class="list">
      <li class="item" v-for=" (item,index) in weekendList" :key = "item.id">
        <img :src= "item.imgUrl" />
        <div class="content">
          <h3>{{item.title}}</h3>
          <p>{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import ComponentStar from '@/common/componentStar/ComponentStar'

export default {
  components: {
    ComponentStar
  },
  data () {
    return {
      'weekendList': [{
        'id': '0001',
        'imgUrl': 'http://img1.qunarzz.com/sight/source/1510/6e/1ea71e2f04e.jpg_r_640x214_aa6f091d.jpg',
        'title': '北京温泉排行榜',
        'desc': '细数北京温泉，温暖你的冬天'
      }, {
        'id': '0002',
        'imgUrl': 'http://img1.qunarzz.com/sight/source/1505/aa/7baaf8a851d221.jpg_r_640x214_1431200f.jpg',
        'title': '北京必游TOP10',
        'desc': '来北京必去的景点非这些地方莫属'
      }, {
        'id': '0003',
        'imgUrl': 'http://img1.qunarzz.com/sight/source/1505/9e/21df651e19af5d.jpg_r_640x214_3ea5bb38.jpg',
        'title': '寻找北京的皇城范儿',
        'desc': '数百年的宫廷庙宇，至今依旧威严霸气'
      }, {
        'id': '0004',
        'imgUrl': 'http://img1.qunarzz.com/sight/source/1505/ce/bc89bc2f0e33ea.jpg_r_640x214_3e408453.jpg',
        'title': '学生最爱的博物馆',
        'desc': '周末干嘛？北京很多博物馆已经免费开放啦'
      }, {
        'id': '0005',
        'imgUrl': 'http://img1.qunarzz.com/sight/source/1505/b2/fde1bfcd057a52.jpg_r_640x214_bbf3fa44.jpg',
        'title': '儿童剧场，孩子的乐园',
        'desc': '带宝贝观看演出，近距离体验艺术的无穷魅力'
      }]
    }
  },
  methods: {},
  created () {},
  mounted () {}
}
</script>

<style lang = "less" scoped>
.wrapper {
  margin-top: 0.2rem;
  background-color: #eee;
  .title {
    width: 100%;
    background-color: #eee;
    line-height: 0.8rem;
    font-size: 0.32rem;
    color: black;
    text-indent: 0.4rem;
    text-align: center;
    .iconfont{
      display: inline-block;
      color: #ff7f46;
      font-size: .3rem !important;
      text-indent: .2rem;
    }
  }
  .list {
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    background-color: #fff;
    .item{
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      width: 100%;
      margin-bottom: .16rem;
      img{
        width: 100%;
        border-radius: .15rem;
      }
      .content{
        margin-top: .14rem;
        text-indent: .2rem;
        color: #212121;
        font-size: .28rem;
        line-height: .48rem;
        width: 80%;
        .textOverflow();
        p{
          color: #616161;
          font-size: .24rem;
          line-height: .42rem;
        }
      }
    }
  }
}
</style>

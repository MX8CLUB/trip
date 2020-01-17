<!--  -->
<template>
  <div class="wrapper">
    <div class="title"><span class = "iconfont iconaixin_shixin" /> 猜你喜欢</div>
    <ul class="list">
      <li class="item" v-for=" (item,index) in recommendList" :key = "item.id">
        <div class="content">
          <img :src= "item.imgUrl" />
          <div class="text">
            <h3 class="item-title">{{item.title}}</h3>
            <div class="comment">
              <ComponentStar :starNum="item.starNum" />
              <span>{{item.commentsNum}}条评论</span>
            </div>
            <div class="detail">
              <p class="price">
                <span class="money">{{item.price}}</span>起
              </p>
              <p class="place">{{item.place}}</p>
            </div>
          </div>
        </div>
        <p class="recomment">{{item.desc}}</p>
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
      recommendList: [
        {
          id: '0001',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_140x140_80f63803.jpg',
          title: '故宫',
          starNum: 7,
          commentsNum: 6134,
          price: 769,
          place: '海淀区',
          desc: '东方宫殿建筑代表，世界宫殿建筑典范'
        },
        {
          id: '0002',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1511/d2/d2aec2dfc5aa771290.water.jpg_140x140_abb362a7.jpg',
          title: '南山滑雪场',
          starNum: 9,
          commentsNum: 6644,
          price: 989,
          place: '朝阳区',
          desc: '北京专业级滑雪圣地'
        },
        {
          id: '0003',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1501/f4/f467729126949c3a.water.jpg_140x140_ef235b1c.jpg',
          title: '天安门广场',
          starNum: 8,
          commentsNum: 36134,
          price: 20,
          place: '中南海',
          desc: '我爱北京天安门，天安门上太阳升'
        },
        {
          id: '0004',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1501/40/40b2b6c951b28fdd.water.jpg_140x140_1c863e5c.jpg',
          title: '水立方',
          starNum: 7,
          commentsNum: 3134,
          price: 120,
          place: '海淀区',
          desc: '中国的荣耀，阳光下的晶莹水滴'
        },
        {
          id: '0005',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/201308/23/b283071686e64dfec8d65eac.jpg_140x140_8c5a7c49.jpg',
          title: '温都水城养生馆',
          starNum: 6,
          commentsNum: 8388,
          price: 769,
          place: '中南海',
          desc: '各种亚热带植物掩映其间仿佛置身热带雨林'
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
.wrapper {
  margin-top: 0.2rem;
  .title {
    width: 100%;
    line-height: 0.8rem;
    font-size: 0.32rem;
    color: black;
    text-indent: 0.4rem;
    .iconfont{
      display: inline-block;
      color: #ff5f54;
      font-size: .3rem !important;
      text-indent: .2rem;
    }
    &::before{
      content: "";
      display: block;
      height: .2rem;
      background-color: #eee;
    }
  }
  .list {
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    .item {
      width: 100%;
      min-height: 2.4rem;
      .content {
        display: flex;
        width: 100%;
        height: 100%;
        margin: 0.2rem 0.1rem;
        img {
          width: 2rem;
          border-radius: .15rem;
        }
        .text {
          flex: 1;
          padding: 0.25rem;
          color: black;
          h3 {
            font-size: 0.32rem;
            font-weight: 500;
          }
          .comment {
            display: flex;
            height: 0.34rem;
            margin-top: 0.15rem;
            span {
              font-size: 0.24rem;
              line-height: 0.34rem;
              color: #616161;
              text-indent: 0.2rem;
            }
          }
          .detail {
            display: flex;
            width: 95%;
            justify-content: space-between;
            margin-top: 0.3rem;
            height: 0.4rem;
            line-height: 0.4rem;
            font-size: 0.24rem;
            color: #616161;
            .price {
              .money {
                color: #ff8300;
                font-size: 0.4rem;
                &::before {
                  font-size: 0.24rem;
                  content: "¥";
                }
              }
            }
          }
        }
      }
      .recomment {
        text-indent: 2.5rem;
        color: #f55;
        font-size: 0.24rem;
        line-height: 0.34rem;
        .textOverflow();
      }
      &::after {
        content: "";
        display: block;
        width: 95%;
        height: 1px;
        margin: 0 auto;
        background-color: #eee;
      }
    }
  }
}
</style>

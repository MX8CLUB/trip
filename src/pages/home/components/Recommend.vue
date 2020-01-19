<!--  -->
<template>
  <div class="wrapper">
    <div class="title"><span class = "iconfont iconaixin_shixin" /> 猜你喜欢</div>
    <ul class="list">
      <router-link  tag = "li"
        :to="'/detail/' + item.id" class="item"
        v-for=" (item,index) in recommendList" :key = "item.id">
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
      </router-link>
    </ul>
  </div>
</template>

<script>
import ComponentStar from '@/common/componentStar/ComponentStar'

export default {
  components: {
    ComponentStar
  },
  props: {
    recommendList: Array
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
        width: 95%;
        height: 100%;
        margin: 0.2rem auto;
        img {
          width: 2rem;
          height: 100%;
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

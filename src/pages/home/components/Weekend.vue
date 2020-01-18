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
  props: {
    weekendList: Array
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
  background-color: #eee;
  .title {
    width: 100%;
    background-color: #eee;
    line-height: 0.8rem;
    font-size: 0.32rem;
    color: black;
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
    width: 97%;
    margin:0 auto;
    flex-direction: column;
    align-items: center;
    .item{
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      width: 100%;
      margin-bottom: .16rem;
      img{
        width: 100%;
        border-radius: .15rem;
        over-flow:hidden;
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

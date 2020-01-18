<!--  -->
<template>
   <div class='list' ref = "wrapper">
     <div>
      <div class = "area">
        <p>当前城市</p>
        <div class="btnList">
          <div class="btn">北京</div>
        </div>
      </div>
      <div class = "area">
        <p>热门城市</p>
        <div class="btnList">
          <div class="btn">北京</div>
          <div class="btn">北京</div>
          <div class="btn">北京</div>
          <div class="btn">北京</div>
          <div class="btn">北京</div>
          <div class="btn">北京</div>
        </div>
      </div>
      <div class = "area">
        <p>当前城市</p>
        <div class="btnList">
          <div class="btn">北京</div>
        </div>
      </div>
      <div class = "area">
        <p>热门城市</p>
        <div class="btnList">
          <div class="btn">北京</div>
          <div class="btn">北京</div>
          <div class="btn">北京</div>
          <div class="btn">北京</div>
          <div class="btn">北京</div>
          <div class="btn">北京</div>
        </div>
      </div><div class = "area">
        <p>当前城市</p>
        <div class="btnList">
          <div class="btn">北京</div>
        </div>
      </div>
      <div class = "area">
        <p>热门城市</p>
        <div class="btnList">
          <div class="btn">北京</div>
          <div class="btn">北京</div>
          <div class="btn">北京</div>
          <div class="btn">北京</div>
          <div class="btn">北京</div>
          <div class="btn">北京</div>
        </div>
      </div>
      <div class = "area">
        <p>当前城市</p>
        <div class="btnList">
          <div class="btn">北京</div>
        </div>
      </div>
      <div class = "area">
        <p>热门城市</p>
        <div class="btnList">
          <div class="btn">北京</div>
          <div class="btn">北京</div>
          <div class="btn">北京</div>
          <div class="btn">北京</div>
          <div class="btn">北京</div>
          <div class="btn">北京</div>
        </div>
      </div><div class = "area">
        <p>当前城市</p>
        <div class="btnList">
          <div class="btn">北京</div>
        </div>
      </div>
      <div class = "area">
        <p>热门城市</p>
        <div class="btnList">
          <div class="btn">北京</div>
          <div class="btn">北京</div>
          <div class="btn">北京</div>
          <div class="btn">北京</div>
          <div class="btn">北京</div>
          <div class="btn">北京</div>
        </div>
      </div>
      <div class = "area">
        <p>当前城市</p>
        <div class="btnList">
          <div class="btn">北京</div>
        </div>
      </div>
      <div class = "area">
        <p>热门城市</p>
        <div class="btnList">
          <div class="btn">北京</div>
          <div class="btn">北京</div>
          <div class="btn">北京</div>
          <div class="btn">北京</div>
          <div class="btn">北京</div>
          <div class="btn">北京</div>
        </div>
      </div>
     </div>
   </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  components: {},
  data () {
    return {
    }
  },
  methods: {},
  created () {},
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper)
  }
}
</script>

<style lang = "less" scoped>
.list{
    overflow: scroll;
    position: absolute;
    top: 1.7rem;
    bottom: 0;
  .area{
    p{
      background-color: #EBEBED;
      font-size: .2rem;
      font-weight: 600;
      line-height: .5rem;
      text-indent: .2rem;
    }

    .btnList{
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;
      padding: .15rem 0;
      padding-right: .4rem;
      .btn{
        width: 1rem;
        padding: .1rem .2rem;
        margin: .1rem .15rem;
        border: 1px solid #ccc;
        text-align: center;
      }
    }
  }
}
</style>

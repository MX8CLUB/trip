<!--  -->
<template>
   <div class='list' ref = "wrapper">
     <div @click = "handleHostCity">
      <div class = "area">
        <p>当前城市</p>
        <div class="btnList">
          <div class="btn">{{this.city}}</div>
        </div>
      </div>
      <div class = "area">
        <p>热门城市</p>
        <div class="btnList">
          <div :data-city = "item.name"  v-for = "item in hostCityList" :key = "item.id" class="btn">{{item.name}}</div>
        </div>
      </div>
      <div class = "area" v-for = "(cityArr,index) in cityList" :key = "index" >
        <p :ref="index">{{index}}</p>
        <div class="city-list">
          <div v-for = "(item) in cityArr" :key = "item.id"
               :data-city = "item.name" class="city-item">{{item.name}}</div>
        </div>
      </div>
     </div>
   </div>
</template>

<script>
import BScroll from 'better-scroll'
import {mapState, mapMutations} from 'vuex'

export default {
  props: {
    nowCity: String,
    hostCityList: Array,
    cityList: Object | Array,
    alphabetIndex: String
  },
  methods: {
    // 滚动到指定位置
    scrollTo () {
      // 获取指定的元素
      let ele = this.$refs[this.alphabetIndex][0]
      this.scroll.scrollToElement(ele)
    },
    // 点击某个城市时,切换当前城市,回到主页
    handleHostCity (e) {
      let data = e.target.dataset.city
      this.changeCity(data)
      this.$router.push('/')
    },
    ...mapMutations(['changeCity'])
  },
  computed: {
    ...mapState(['city'])
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper, { click: true })
  },
  watch: {
    alphabetIndex () {
      this.scrollTo()
    }
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
        width: 1.2rem;
        padding: 0.1rem 0.1rem;
        margin: 0.1rem 0.15rem;
        border: 1px solid #ccc;
        border-radius: 0.1rem;
        text-align: center;
        .textOverflow();
      }
    }

    .city-list{
      display: flex;
      flex-direction: column;

      .city-item{
        text-indent: .1rem;
        padding: .2rem;
        &::after{
          content: "";
          display: block;
          width: 95%;
          height: 1px;
          margin: .2rem auto;
          margin-bottom: 0;
          background-color: #ccc;
        }
      }
    }
  }
}
</style>

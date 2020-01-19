<!--  -->
<template>
  <div class="head">
    <div class = "head-left iconfont  iconfanhui back-icon" />
    <p class = "head-center" > <span class="iconfont iconxinbaniconshangchuan-"/> 输入城市/景点/游玩主题</p>
    <router-link to ="/city">
      <p class = "head-right">  {{this.city}} <span class="iconfont iconln_jiantouxia arrow-icon"/></p>
    </router-link>
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  data () {
    return {

    }
  },
  methods: {},
  computed: {
    ...mapState(['city'])
  }
}
</script>

<style lang = "less" scoped>
.head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 0.86rem;
  background-color: @bgColor;
  color:#fff;

  .head-left{
    width: .64rem;
    font-size: .4rem;
    text-align: center;
  }
  .head-center{
    flex: 1;
    height: 0.64rem;
    line-height: .64rem;
    border-radius: 0.1rem;
    margin-left : 0.2rem;
    padding-left : 0.2rem;
    margin-right: 0.2rem;
    background-color: #fff;
    color: #ccc;
  }
  .head-right{
    width: 1.5rem;
    text-align: center;
    color:#fff;
    .textOverflow();
    .arrow-icon{
      font-size: .24rem;
    }
  }
}
</style>

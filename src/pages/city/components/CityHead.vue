<!--  -->
<template>
   <div class="head">
    <router-link to ="/">
      <div class = "head-left iconfont  iconfanhui back-icon" />
    </router-link>
    <p class = "head-content">城市选择</p>
  </div>
</template>

<script>
export default {
  components: {},
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
.head {
  display: flex;
  align-items: center;
  line-height: 0.84rem;
  background-color: @bgColor;
  color:#fff;
  height: .84rem;
  .head-left{
    color: #fff;
    text-indent: .2rem;
    font-size: .4rem;
  }
  .head-content{
    flex: 1;
    text-align: center;
    text-indent: -.7rem;
    font-size: .33rem;
  }
}
</style>

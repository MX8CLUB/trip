<!--  -->
<template>
   <div class='search'>
     <input type="text" placeholder="输入城市名或拼音">
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
.search{
  height: .65rem;
  padding: .1rem;
  text-align: center;
  background-color: @bgColor;
  input{
    width: 95%;
    height: .65rem;
    line-height: .65rem;
    text-align: center;
    color: #666;
    border-radius: .12rem;
  }
}
</style>

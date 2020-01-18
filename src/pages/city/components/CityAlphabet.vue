<!--  -->
<template>
   <div class='alphabet'>
     <p>A</p>
     <p>A</p>
     <p>A</p>
     <p>A</p>
     <p>A</p>
     <p>A</p>
     <p>A</p>
     <p>A</p>
     <p>A</p>
     <p>A</p>
     <p>A</p>
     <p>A</p>
     <p>A</p>
     <p>A</p>
     <p>A</p>
     <p>A</p>
     <p>A</p>
     <p>A</p>
     <p>A</p>
     <p>A</p>
     <p>A</p>
     <p>A</p>
     <p>A</p>
     <p>A</p>
     <p>A</p>
     <p>A</p>
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
.alphabet{
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  right: .1rem;
  top: 50%;
  transform: translateY(-40%);
  width: .3rem;
  p{
    margin-bottom: .1rem;
    color: @bgColor;
  }
}
</style>

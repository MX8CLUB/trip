<template>
   <transition>
    <slot></slot>
  </transition>
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
  .v-enter, .v-leave-to{
    opacity: 0
  }
  .v-enter-active, .v-leave-active{
    transition: opacity .8s
  }
</style>

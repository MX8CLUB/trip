<template>
  <div id="app" >
    <router-view />
  </div>
</template>

<script>
import '@/assets/iconfont/iconfont.css'

export default {
  name: 'App',
  components: {}
}
</script>

<style>
#app {
  touch-action:none;
  touch-action:pan-y;
}

</style>

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastClick'
import './assets/reset.css'
import './assets/border.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import Mock from '@/mock'
import axiox from 'axios'
import store from '@/store'

Vue.use(VueAwesomeSwiper)
Vue.use(Mock)
Vue.prototype.$axios = axiox

Vue.config.productionTip = false
fastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

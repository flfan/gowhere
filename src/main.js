import Vue from 'vue'
import App from './App.vue'
import router from './router'
import fastclick from 'fastclick'
import './assets/styles/reset.css'
import './assets/styles/border.css'
import '@styles/iconfont.css'
import Store from './store'

import VueAwesomeSwiper from 'vue-awesome-swiper'

// require styles
import 'swiper/dist/css/swiper.css'

Vue.use(VueAwesomeSwiper /*, { default global options } */)

Vue.config.productionTip = false
fastclick.attach(document.body)

new Vue({
  router,
  store: Store,
  render: h => h(App)
}).$mount('#app')

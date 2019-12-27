import Vue from 'vue'
import App from './App.vue'
import Bg from './Bg.vue'
import store from './store';
import VModal from 'vue-js-modal'
 
Vue.use(VModal)

new Vue({
  el: '#bg',
  render: h => h(Bg)
})

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})



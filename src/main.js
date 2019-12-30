import Vue from 'vue'
import App from './App.vue'
import Bg from './assets/components/Bg.vue'
import store from './assets/store/index.js';
import VModal from 'vue-js-modal';
import 'babel-polyfill';
 
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



import Vue from 'vue';
import Vuex from 'vuex';
import Axios from 'axios';
import VueAxios from 'vue-axios'

Vue.use(Vuex);
Vue.use(VueAxios, Axios);

export default new Vuex.Store({
  state: {
    forSale: null,
    inCart: [],
  },
  getters: {
    forSale: state => state.forSale,
    inCart: state => state.inCart,
  },
  mutations: {
    SET_FORSALE : (state,payload) => { state.foSale = payload },
    ADD_TO_CART(state, invId) { state.inCart.push(invId); },
    REMOVE_FROM_CART(state, index) { state.inCart.splice(index, 1);}, 
  },
  actions: {
    GET_FORSALE : async (context,payload) => {
      let { data } = await Axios.get('http://localhost:4000/forsale')
      context.commit('SET_FORSALE',data)
    },
    addToCart(context, invId) { context.commit('ADD_TO_CART', invId); },
    removeFromCart(context, index) { context.commit('REMOVE_FROM_CART', index); },
  },
});
import Vue from 'vue';
import Vuex from 'vuex';
import Axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    forSale: null,
    inCart: [],
  },
  getters: {
    forSale: state => state.forSale,
    inCart: state =>  state.inCart,
    cartItems (state){
      return  state.inCart.map(cartItem => {
        const item = state.forSale.find(item => item.invId === cartItem.id)
        return {
          id: cartItem.id,
          title: item.name,
          price: item.price,
          info: item.description,
          img: item.cover,  
          quantity: cartItem.quantity,
          sum: item.price * cartItem.quantity,
        }
      })
    }
  },
  mutations: {
    ADD_TO_CART(state, invId) { 
      state.inCart.push({ 
        id: invId,
        quantity: 1,
      }) 
    },
    INCREMENT_ITEM_QUANTITY(state, cartItem) {
      cartItem.quantity++
    },
    DECREMENT_ITEM_QUANTITY(state, cartItem) {
      cartItem.quantity--
    },
    REMOVE_FROM_CART(state, index) { state.inCart.splice(index, 1);}, 
    setForSale: (state, payload) => {
      state.forSale = payload;
    },
  
    addForSale: (state, payload) => {
      state.forSale.push(payload);
    },
  },
  actions: {
    addToCart(context, invId) { 
      const cartItem = context.state.inCart.find(item => item.id === invId)
      if (!cartItem){
        context.commit('ADD_TO_CART', invId); 
      } else {
        context.commit('INCREMENT_ITEM_QUANTITY', cartItem);
      }
    },
    incrementItemQuantity(context, id) {
      const cartItem = context.state.inCart.find(item => item.id === id);
      context.commit('INCREMENT_ITEM_QUANTITY', cartItem);
    },
    decrementItemQuantity(context, id) {
      const cartItem = context.state.inCart.find(item => item.id === id);
      context.commit('DECREMENT_ITEM_QUANTITY', cartItem);
    },
    removeFromCart(context, index) { context.commit('REMOVE_FROM_CART', index); },
    getForSale: async (context, payload) => {
      let {data} = await Axios.get('/src/assets/data/items.json');
      context.commit('setForSale', data);
    },
    saveForSale: async (context, payload) => {
      let {data} = await Axios.post('/src/assets/data/items.json');
      context.commit('addForSale', payload);
    },
  },
});
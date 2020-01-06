<template>
  <header>
        <div class="logo">Online Store</div>
        <div class="cart-nav" @click="show">
            <div class="count">{{ numInCart }}</div>
            <div class="label">cart</div>
        </div>
        <modal name="cart" height="auto" :scrollable="true">
            <div class="modal-header">
                <div class="title">Shopping cart</div>
                <div class="close" @click="hide">&#935;</div>
            </div>
            <div class="modal-body">
                <div class="item" v-for="(item, index) in cart">
                    <div class="img" :style="{ backgroundImage: `url('${item.cover}')` }"></div>
                    <div class="info">
                        <div class="text">
                            <div class="title">{{ item.name }}</div>
                            <div class="description">{{ item.description }}</div>
                            <div class="price">${{ item.price }}</div>
                        </div>
                        <div class="counting">
                            <integer-plusminus :min="1" v-model="item.times"></integer-plusminus>
                            <div class="cost">${{ item.price }}</div>
                            <button class="btn" @click="removeFromCart(index)">Remove</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button class="btn" @click="addToCart(invId)">Check out</button>
                <div class="total">${{ total }}</div>
            </div>
        </modal>
    </header>
</template>
<script>
import { IntegerPlusminus } from 'vue-integer-plusminus'
export default {
    name: 'header',
    data: {
        showModal: false,
    },
    computed: {
        inCart() { return this.$store.getters.inCart; },
        numInCart() { return this.inCart.length; },
        cart() {
            return this.$store.getters.inCart.map((cartItem) => {
                return this.$store.getters.forSale.find((forSaleItem) => {
                    return cartItem === forSaleItem.invId;
                });
            });
        },
        total() {
            return this.cart.reduce((acc, cur) => acc + cur.price, 0);
        },
    },
    components: { IntegerPlusminus },
    methods: {
        show () {
            this.$modal.show('cart');
        },
        hide () {
            this.$modal.hide('cart');
        },
        removeFromCart(index) {
            this.$store.dispatch('removeFromCart', index);
        },
    },
};
</script>
<style lang="scss">
    header{
        display: flex;
        justify-content: space-between;
        margin-bottom: 6rem;
        margin-top: 2rem;
        .logo{
            font-weight: 400;
            font-size: 48px;
            color:white;
            letter-spacing: 2.5px;
            transition: 0.3s ease-in-out;
            cursor:default;
            font-weight: 300;
            &:hover{
                letter-spacing: -3px;
            }
        }
    }
    .cart{
        &-nav{
            display:flex;
            cursor: pointer;
            padding-top:10px;
            .label{
                color:white;
                font-size: 16px;
                padding: 10px;
            }
            .count{
                transition: 0.3s ease-in-out;
                color:#5eb4ff;
                background: #ffff86;
                padding: 10px;
                padding-top: 8px;
                border-radius: 20px;
                font-weight: 600;
                -webkit-box-shadow: 1px 1px 1.5px 0px rgba(0,0,0,0.15);
                -moz-box-shadow: 1px 1px 1.5px 0px rgba(0,0,0,0.15);
                box-shadow: 1px 1px 1.5px 0px rgba(0,0,0,0.15);
            }
            &:hover{
                .count{
                    color:black;
                    background: white;
                    padding-top:15px;
                }
            }
        }
    }
    .v--modal-overlay {
        background-color:#5eb4ff70;
    }
    .v--modal-overlay .v--modal-box{
        border-radius: 15px;
        border-top-left-radius: 50px;
        border-bottom-right-radius: 300px;
        overflow:initial;
    }
    .v--modal-block-scroll {
        width: initial;
    }
</style>
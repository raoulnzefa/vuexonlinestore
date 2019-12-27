<template>
  <header>
        <div class="logo">Online Store</div>
        <div class="cart-nav" @click="show">
            <div class="count">{{ numInCart }}</div>
            <div class="label">cart</div>
        </div>
        <modal name="cart" height="auto">
            <div class="cart-header">
                <div class="title">Shopping cart</div>
                <div class="close" @click="hide">&#935;</div>
            </div>
            <div class="cart-body">
                <div class="item">
                    <div class="img" :style="{ backgroundImage: `url('${cover}')` }"></div>
                    <div class="text">
                        <div class="title">{{ name }}</div>
                        <div class="description">{{ description }}</div>
                        <div class="price">${{ price }}</div>
                    </div>
                    <div class="counting">
                        <integer-plusminus></integer-plusminus>
                        <div class="price">${{ price }}</div>
                        <button class="btn" @click="addToCart(invId)">Remove</button>
                    </div>
                </div>
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
    },
    components: { IntegerPlusminus },
    methods: {
        show () {
            this.$modal.show('cart');
        },
        hide () {
            this.$modal.hide('cart');
        }
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
    .cart{
        &-header{
            display: flex;
            justify-content: space-between;
            padding: 35px 50px;
            width: calc(100% - 100px);       
            .title{
                font-size: 18px;
                font-weight: 700;
                cursor: default;
            }
            .close{
                font-weight: 900;
                cursor: pointer;
                color:#5eb4ff;
                font-size: 24px;
                margin-top:-5px;
                transition:0.3s ease-in-out;
                &:hover{
                    color:black;
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
</style>
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
                <div class="item" v-for="item in products">
                    <div class="img" :style="{ backgroundImage: `url('${item.img}')` }"></div>
                    <div class="info">
                        <div class="text">
                            <div class="title">{{ item.title }}</div>
                            <div class="description">{{ item.info }}</div>
                            <div class="price">${{ item.price }}</div>
                        </div>
                        <div class="counting">
                            <div class="plusminus">
                                <div class="plusminus-btn" @click="decrementItemQuantity(item.id)">-</div>
                                <div class="plusminus-num">{{item.quantity}}</div>
                                <div class="plusminus-btn" @click="incrementItemQuantity(item.id)">+</div>
                            </div>
                            <div class="cost">${{ item.sum }}</div>
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
export default {
    name: 'header',
    data: {
        showModal: false,
    },
    computed: {
        inCart() { return this.$store.getters.inCart; },
        numInCart() { return this.inCart.length; },
        cart() {
            return this.$store.getters.inCart.map((inCartItem) => {
                return this.$store.getters.forSale.find((forSaleItem) => {
                    return inCartItem.id === forSaleItem.invId;
                });
            });
        },
        total() {
            return this.$store.getters.cartItems.reduce((acc, cur) => acc + cur.price * cur.quantity, 0);
        },
        products () {
            return this.$store.getters.cartItems;
        },
    },
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
        incrementItemQuantity(id) {
            this.$store.dispatch('incrementItemQuantity', id);
        },
        decrementItemQuantity(id) {
            this.$store.dispatch('decrementItemQuantity', id);
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
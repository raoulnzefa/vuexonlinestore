<template>
  <header>
        <div class="logo">Online Shop</div>
        <div class="cart-nav">
            <div class="count">{{ numInCart }}</div>
            <div class="label">cart</div>
        </div>
    </header>
</template>
<script>
export default {
  name: 'header',
  computed: {
    inCart() { return this.$store.getters.inCart; },
    numInCart() { return this.inCart.length; },
  },
};
</script>
<style scoped lang="scss">
    header{
        display: flex;
        justify-content: space-between;
        margin-bottom: 7rem;
        margin-top: 2rem;
        .logo{
            font-weight: 400;
            font-size: 48px;
            color:white;
            letter-spacing: 4px;
            transition: 0.3s ease-in-out;
            cursor:default;
            font-weight: 300;
            &:hover{
                letter-spacing: -2px;
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
                padding-top: 5px;
                border-radius: 20px;
                font-weight: 600;
                font-family: 'Open Sans', sans-serif;
                -webkit-box-shadow: 1px 1px 1.5px 0px rgba(0,0,0,0.15);
                -moz-box-shadow: 1px 1px 1.5px 0px rgba(0,0,0,0.15);
                box-shadow: 1px 1px 1.5px 0px rgba(0,0,0,0.15);
            }
            &:hover{
                .count{
                    color:#ffff86;
                    background: #5eb4ff;
                    padding-top:10px;
                }
            }
        }
    }
</style>
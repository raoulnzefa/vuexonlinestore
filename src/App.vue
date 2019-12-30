<template>
    <div class="container">
        <Header/>
        <section class="slider">
            <div class="items">
                <Item
                    v-for="item in forSale"
                    :key="item.invId"
                    :invId="item.invId"
                    :name="item.name"
                    :description="item.description"
                    :cover="item.cover"
                    :price="item.price" />
            </div>
        </section>
    </div>
</template>
<script>
import Header from './assets/components/Header.vue';
import Item from './assets/components/Item.vue';

export default {
    name: 'app',
    computed: {
        forSale() { return this.$store.getters.forSale; },
        inCart() { return this.$store.getters.inCart; },
    },
    components: {
        Item,
        Header
    },
};
</script>
<style lang="scss">
    @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800&display=swap&subset=cyrillic');
    *{
        font-family: 'Open Sans', sans-serif;
    }
    .container{
        position: relative;
        z-index: 6;
        max-height: 100%;
        margin: 0 20px;
    }
    .items{
        display:flex;
        width: 100%;
        overflow-x:scroll;
        overflow-y:hidden;
        height: 470px;
        padding-top: 25px;
        &::-webkit-scrollbar {
        width: 10px;
        }
        
        &::-webkit-scrollbar-track {
            background:none;
        }
        
        &::-webkit-scrollbar-thumb {
        background-color: #5eb4ff;
        width: 0.5rem;
        border-radius: 10px;
        }
        .item{
            min-width: calc(25% - 20px);
            padding: 10px 10px;
            transition: 0.3s ease-in-out;
            cursor: default;
            .card{
                padding: 10px 20px;
                width: calc(100% - 40px);
                background-color: white;
                border-radius:5px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                -webkit-box-shadow: 2px 2px 3px 0px rgba(0,0,0,0.21);
                -moz-box-shadow: 2px 2px 3px 0px rgba(0,0,0,0.21);
                box-shadow: 2px 2px 3px 0px rgba(0,0,0,0.21);
                transition: 0.3s ease-in-out;
                .title{
                    font-size: 15px;
                    font-weight: 700;
                }
                .img{
                    max-width:100%;
                    height:200px;
                    background-position: center;
                    background-repeat: no-repeat;
                    background-size: contain;
                    margin:1rem 0 3rem;
                }
                .description{
                    font-size: 12px;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    overflow: hidden; 
                }
                .price{
                    text-align: right;
                    font-size: 28px;
                    font-weight: 800;
                    margin-bottom:1rem;
                }
            }
            &:hover{
                min-width: calc(25% - 10px);
                padding: 10px 5px; 
                margin:-20px 0;
                .card{
                    -webkit-box-shadow: 3px 25px 10px 0px rgba(0,0,0,0.07);
                    -moz-box-shadow: 3px 25px 10px 0px rgba(0,0,0,0.07);
                    box-shadow: 3px 25px 10px 0px rgba(0,0,0,0.07);
                }
            }
        }
    }
    .btn{
        background: #5eb4ff;
        color:white;
        border:none;
        border-radius:2px;
        padding: 10px 20px;
        cursor: pointer;
        transition: 0.3s ease-in-out;
        font-weight: 600;
        font-size: 16px;
        &:hover{
            background: #ffff86;
            color: #5eb4ff;
        }
    }
</style>
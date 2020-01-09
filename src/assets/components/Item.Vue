<template>
    <div class="item">
        <div class="card">
            <div class="img" :style="{ backgroundImage: `url('${cover}')` }" @click="$modal.show('item-' + invId)"></div>
            <div class="title"  @click="$modal.show('item-' + invId)">{{ name }}</div>
            <div class="description" @click="$modal.show('item-' + invId)">{{ description }}</div>
            <div class="price">${{ price }}</div>
            <button class="btn" @click="addToCart(invId)">Add to cart</button>
        </div>
        <modal :name="'item-'+ invId" height="auto" :scrollable="true">
          <div class="modal-header">
              <div class="title">{{ name }}</div>
              <div class="close" @click="$modal.hide('item-' + invId)">&#935;</div>
          </div>
          <div class="modal-body">
            <div class="img" :style="{ backgroundImage: `url('${cover}')` }"></div>
            <div class="description">{{ description }}</div>  
          </div>
          <div class="modal-footer">
            <div class="price">${{ price }}</div>
            <button class="btn" @click="addToCart(invId)">Add to cart</button>
          </div>
        </modal>
    </div>
</template>
<script>
export default {
  name: 'item',
  props: ['invId', 'name', 'description', 'cover', 'price'],
  data: {
    showItem: false,
  },
  methods: {
    addToCart(invId) {
      this.$store.dispatch('addToCart', invId);
    },
  },
};
</script>
<style lang="scss" scoped>
  .modal{
    &-body{
      padding: 35px 40px 30px;
      .img{
        width:200px;
        height: 200px;
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;
        margin-bottom:10px;
      }
      .description{
        margin-bottom: 50px;
      }
    }
    &-footer{
      padding: 0 40px 20px;
      display: flex;
      .price{
        font-weight: 800;
        font-size: 26px;
        margin-right: 20px;
      }
    }
  }
  .v--modal-overlay .v--modal-box{
      border-radius: 15px;
      overflow: initial;
  }
</style>
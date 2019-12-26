<template>
    <div class="item">
        <div class="card">
            <div class="img" :style="{ backgroundImage: `url('${cover}')` }"></div>
            <div class="title">{{ name }}</div>
            <div class="description">{{ description }}</div>
            <div class="price">${{ price }}</div>
            <button class="btn" @click="addToCart(invId)">Add to cart</button>
        </div>
    </div>
</template>
<script>
export default {
  name: 'item',
  props: ['invId', 'name', 'description', 'cover', 'price'],
  methods: {
    addToCart(invId) {
      this.$store.dispatch('addToCart', invId);
    },
  },
};
</script>
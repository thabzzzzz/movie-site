import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
  state: () => ({
    cart: [],
  }),
  actions: {
    addToCart(product) {
        console.log(product.title)
      this.cart.push({
        movie: product.movie,
        quantity: 1,
      });
    },
  },
});
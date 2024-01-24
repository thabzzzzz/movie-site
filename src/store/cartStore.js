import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
  state: () => ({
    cart: [],
  }),
  actions: {
    addToCart(product) {
      // Ensure that the product has a 'movie' property before pushing it to the cart
      
        // Check if the movie is already in the cart
        const existingCartItem = this.cart.find((item) => item.product.id === product.id);

        if (existingCartItem) {
          // If the movie is already in the cart, increment the quantity
          existingCartItem.quantity += 1;
        } else {
          // If the movie is not in the cart, add a new cart item
          this.cart.push({
         product,
            quantity: 1,
          });
        }
      
    },
  },
});

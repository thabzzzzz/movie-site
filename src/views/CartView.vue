<template>
    <div>
      <h2>Your Cart</h2>
      <ul>
        <li v-for="cartItem in cartItems" :key="cartItem.product.id">
          <p v-if="cartItem">{{ cartItem.product.title }} ({{ cartItem.quantity }}) </p>
          <p v-else>Movie information not available</p>
        </li>
      </ul>
      
    </div>
  </template>
  
  <script setup>
  import { useCartStore } from '../store/cartStore';
  import Footer from '../components/Footer.vue';
  const cartStore = useCartStore();
  const cartItems = cartStore.cart;
  </script>
  
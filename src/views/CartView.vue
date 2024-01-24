<template>
    <div>
      <h2>Your Cart</h2>
      <ul>
        <li v-for="cartItem in cartItems" :key="cartItem.id">
          <p v-if="cartItem">{{ cartItem.title }} </p>
          <p v-else>Movie information not available</p>
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>
  import { useCartStore } from '../store/cartStore';
  const cartStore = useCartStore();
  const cartItems = cartStore.cart;
  </script>
  
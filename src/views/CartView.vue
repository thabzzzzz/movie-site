<template>
    <div>
      <h2 class="line-divider font-2xl"><span class="">Your Cart</span></h2>
      <h3>{{ itemsHeading }}</h3>
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

  <style scoped>
  .line-divider{
  margin-bottom: 40px;
}
    h2 {
   width: 100%; 
   text-align: center; 
   border-bottom: 4px solid #000; 
   line-height: 0.1em;
   margin: 10px 0 20px; 
  
} 

h2 span { 
    background:#fff; 
    padding:0 10px; 
    font-size: 40px;
    top:5px;
    position: relative;
    font-family: satoshi;
    
}
  </style>
  
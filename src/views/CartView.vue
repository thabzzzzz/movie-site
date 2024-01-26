<template>
 <div>
    <h2 class="line-divider font-2xl">
      <span class="">Backlog</span>
    </h2>
    <div class="cartmain mx-20">
      <h3>
        {{ cartItemCount }} {{ itemLabel }}
      </h3>
      <hr>
      <table class="cart-table">
        <thead>
          <tr>
            <th>Product Details</th>
            <th class="text-center">Quantity</th>
            <th class="text-center">Total</th>
            <th class="text-center">Runtime</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="cartItem in cartItems" :key="cartItem.product.id">
            <td class="product-details" v-if="cartItem">
              <div class="flex items-center">
                <div class="w-20">
                  <img class="h-24" :src="cartItem.product.image" :alt="cartItem.product.title">
                </div>
                <div class="flex flex-col justify-between ml-4 flex-grow">
                  <span class="font-bold text-sm">{{ cartItem.product.title }}</span>
                  <span class="text-red-500 text-xs">{{ cartItem.product.brand }}</span>
                  <br>
                  <a href="#" class="font-semibold hover:text-red-500 text-gray-500 text-xs">Remove</a>
                </div>
              </div>
            </td>
            <td class="text-center">{{ cartItem.quantity }}</td>
            <td class="text-center">{{ cartItem.quantity * cartItem.product.price }}</td>
            <td class="text-center">{{ cartItemRuntime[cartItem.product.id] || 'N/A' }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>



<script setup>
import { useCartStore } from '../store/cartStore';
import { ref, onMounted } from 'vue';

const cartStore = useCartStore();
const cartItems = ref(cartStore.cart);
const cartItemRuntime = ref({});

onMounted(async () => {
  // Fetch movie runtimes when component is mounted
  await fetchMovieRuntimes();
});

async function fetchMovieRuntimes() {
  if (Array.isArray(cartItems.value)) {
    for (const cartItem of cartItems.value) {
      await fetchMovieRuntime(cartItem.product.id);
    }
  }
}

async function fetchMovieRuntime(movieId) {
  try {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=672d8a2f825f32332973ed7e2de2efa1`);
    const data = await response.json();

    // Log the data received from the API
    console.log(data);

    // Update the reactive variable with movie runtime
    cartItemRuntime.value[movieId] = data.runtime || 'N/A';
  } catch (error) {
    console.error(`Error fetching movie runtime for movie ID ${movieId}:`, error);
  }
}
</script>



<style scoped>
.line-divider {
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
  background: #fff;
  padding: 0 10px;
  font-size: 40px;
  top: 5px;
  position: relative;
  font-family: satoshi;
}

hr {
  border: none;
  height: 2px;
  background-color: #858585; /* Change color as needed */
  margin: 0; /* Remove default margin */
}

h3 {
  font-family: monsterrat2;
  font-size: 20px;
}

.cart-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

.cart-table th, .cart-table td {
  padding: 8px;
  text-align: left;
}

.cart-table th {
  background-color: transparent;
  color: #858585; /* Set the desired grey color */
}

.cart-table .product-details {
  width: 40%;
}

.cart-table .product-details img {
  width: 100%;
}

.cart-table .text-center {
  text-align: center;
}

.cart-table tbody tr:hover {
  background-color: #f5f5f5;
}
</style>
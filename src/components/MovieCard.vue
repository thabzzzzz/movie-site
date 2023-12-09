<script setup>
  defineProps({
    movie:Object
  })
</script>

<template>
    <div class="max-w-sm rounded overflow-hidden shadow-lg">
        <div class=" flex justify-center pt-3">
      <img class="w-full" :src="movie.poster" :alt="movie.title">
</div>
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">{{movie.title}}</div>
   
  </div>
  <div class="px-6 pt-4 pb-2">
 <span>{{ movie.runtime }}</span>
 <span>{{ movie.year }}</span>
  </div>
</div>
</template>
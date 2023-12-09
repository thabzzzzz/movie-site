<script setup>
  defineProps({
    movie:Object
  })
</script>

<template>
    <div class="p-10">
      <div class="max-w-sm rounded overflow-hidden shadow-lg">
        <img class="w-full card-img" :src="movie.poster" :alt="movie.title">
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{{ movie.title }}</div>
       <span>{{ movie.runtime }}</span>
       <span>{{ movie.year }}</span>
      </div>
    </div>
    </div>
</template>

<style scoped>
  .card-img{
    width:300px;
    height: 440px;
  }
</style>
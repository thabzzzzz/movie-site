<script setup>
  defineProps({
    movie:Object
  })
</script>

<template>
    <div class="p-10">
      <div class="max-w-sm rounded overflow-hidden shadow-lg ">
        <img class="w-full card-img mx-auto" :src="movie.poster" :alt="movie.title">
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{{ movie.title }}</div>
        <p>Runtime: <i>{{ movie.runtime }}</i> </p>  
        <p>Year: <i>{{ movie.year }}</i></p> 
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
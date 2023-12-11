<script setup>
import MovieDetails from '../views/MovieDetails.vue';

  defineProps({
    movie:Object
  })
</script>

<template>
<!-- component -->
<div class="  py-6 flex flex-col justify-center sm:py-12 m-5">
  
  <div class="py-3 sm:max-w-xl sm:mx-auto">
    <div class="bg-white shadow-lg border-gray-100 	 border sm:rounded-3xl p-8 flex space-x-8 movie-card">
      <div class="h-60 overflow-visible w-1/2">
          <img class="rounded-3xl shadow-lg card-img " :src="movie.poster" :alt="movie.title">
      </div>
      <div class="flex flex-col w-1/2 space-y-4">
        <div class="flex justify-between items-start">

        <RouterLink :to="{name:'MovieDetails', params:{id:movie.id}}">
          <h2 class=" font-bold">{{movie.title}}</h2>
        </RouterLink>
        
        
        </div>
        <div>
          <div class="text-sm text-gray-400 genre"> {{ movie.type}}</div>
          <div class="text-lg text-gray-800">{{ movie.year }}</div> <br>
          <div class="bg-yellow-400 font-bold rounded-xl p-2 w-12 text-center ">{{movie.rating}}</div>
        </div>
        
      </div>

    </div>
  </div>
  
</div>
</template>

<style scoped>
  .card-img{
    width:330px;
    height: 320px;
   
  }

  .movie-card{
    height: 400px;
  }

  .genre{
    text-transform: capitalize;
  }
</style>
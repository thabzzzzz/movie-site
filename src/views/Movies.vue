<script setup>
    import { ref, onMounted } from 'vue'
    import MovieCard from '../components/MovieCard.vue';

    const movieList = ref([]);
    const isLoading = ref(true);

    onMounted( async()=>{
     const result = await    fetch('http://localhost:3000/movies')
     const respose = await result.json();
    movieList.value = respose;
    isLoading.value= false;
    })
</script>

<template>
    <div>
      <h1 class="heading pl-10">Movies</h1>
      <div class="max-w-sm mx-auto" v-if="isLoading" >
        <span class="text-2xl font-bold text-black-700"  >Now loading...</span>
      </div>
      <div class="grid grid-cols-3   "  v-else>
        <MovieCard v-for="movie in movieList" :key="movie.id" :movie="movie" />

      </div>
    </div>
</template>

<style scoped>
@font-face {
    font-family: oxygen;
    src: url(../assets/fonts/oxygen.ttf);
}
    .heading{
        font-size: 60px;
        font-family: oxygen;
    }
</style>
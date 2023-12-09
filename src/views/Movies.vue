<script setup>
    import { ref, onMounted } from 'vue'
    import MovieCard from '../components/MovieCard.vue';

    const movieList = ref([]);
    onMounted(()=>{
     fetch('http://localhost:3000/movies')
     .then((response)=>response.json())
     .then(apiMovies =>{
        movieList.value = apiMovies
     })
    })
</script>

<template>
    <div>
      <h1 class="heading pl-10">Movies</h1>
      <div class="grid grid-cols-4 ">
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
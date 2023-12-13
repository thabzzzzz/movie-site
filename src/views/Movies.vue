<script setup>
    import { ref, onMounted } from 'vue'
    import MovieCard from '../components/MovieCard.vue';
    import autoAnimate from "@formkit/auto-animate"

    const movieList = ref([]);
    const isLoading = ref(true);
    const selectedSort = ref('');
    let container= ref();

    onMounted( async()=>{
     const result = await    fetch('http://localhost:3000/movies')
     const respose = await result.json();
    movieList.value = respose;
    isLoading.value= false;
    })

    const sortMovies = () => {
    if (selectedSort.value === 'name') {
      movieList.value.sort((a, b) => a.title.localeCompare(b.title));
    } else if (selectedSort.value === 'rating') {
      movieList.value.sort((a, b) => b.rating - a.rating);
    }
  
    autoAnimate(container.value);
  };
</script>

<template>
    <div>
      <h1 class="heading pl-10">Movies</h1>
      <div class="flex items-center justify-center mb-4">
      <span class="mr-2">Sort by:</span>
      <select v-model="selectedSort" @change="sortMovies">
        <option value="">Select</option>
        <option value="name">Name</option>
        <option value="rating">Rating</option>
      </select>
    </div>
      <div class="max-w-sm mx-auto" v-if="isLoading" >
        <span class="text-2xl font-bold text-black-700"  >Now loading...</span>
      </div>
      <div class="grid grid-cols-3   "  v-else ref="container" >
        <MovieCard v-for="movie in movieList" :key="movie.id" :movie="movie"  />

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
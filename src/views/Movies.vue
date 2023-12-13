<script setup>
    import { ref, onMounted } from 'vue'
    import MovieCard from '../components/MovieCard.vue';
    import autoAnimate from "@formkit/auto-animate"

    const movieList = ref([]);
    const isLoading = ref(true);
    const selectedSort = ref('');
    let container= ref();

    onMounted(async () => {
    const apiKey = '672d8a2f825f32332973ed7e2de2efa1'; // Replace with your actual TMDb API key
    const apiUrl = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&api_key=${apiKey}`;
    
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      movieList.value = data.results;
      isLoading.value = false;
    } catch (error) {
      console.error("Error fetching movies:", error);
      isLoading.value = false;
    }
  });

    const sortMovies = () => {
    if (selectedSort.value === 'name') {
      movieList.value.sort((a, b) => a.title.localeCompare(b.title));
    } else if (selectedSort.value === 'rating') {
      movieList.value.sort((a, b) => b.vote_average - a.vote_average);
    }
  
    autoAnimate(container.value);
  };
  
</script>

<template>
    <div  >
      <h1 class="heading pl-10" >Trending</h1>
      <div class="flex items-center justify-center mb-4" >
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
      <div class="grid grid-cols-3   "  v-else ref="container" data-aos="fade-up" >
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
<template>
    <section>
        <div class="container">
       
            <div class="text-bold" v-if="isLoading">Now loading..</div>
   
    
    <div class="grid grid-cols-2 gap-2 mb-10" v-else >
        <div class="ml-10"><h1 class="heading">{{queryMovie.title}}</h1>
        
            <div><img class="poster" :src="`https://image.tmdb.org/t/p/original${queryMovie.poster_path}`" :alt="queryMovie.title"></div>
        
        </div>
        
        <div class="ml-10 movie-details">
            <div class="deets">
                {{ queryMovie.runtime }}
            </div>
            <br>
            <div class="deets">
                {{ queryMovie.release_date }}
            </div>
            <div class="deets">
                {{ queryMovie.genre }}
            </div>
            <div class="deets">
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" @click="$router.back()">
                Back
                </button>
            </div>
        </div>
     
    </div>
</div>
    </section>
</template>

<script setup>
    import { ref,onMounted } from 'vue'
    import {useRouter} from 'vue-router'

    const props = defineProps({
        id:{
            type:String,
            required:true
        }

    })

    const queryMovie = ref([])
    const isLoading = ref(true)
    const router = useRouter()
   

    onMounted(async () => {
  try {
    const movieId = props.id; // Get the movie ID from props
    const apiKey = '672d8a2f825f32332973ed7e2de2efa1'; // Replace with your actual TMDb API key
    const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`);
    const data = await response.json();
    if (response.ok) {
      queryMovie.value = data; // Fetch specific movie details based on movieId
    } else {
      router.push({ name: 'NotFound' });
    }
    isLoading.value = false;
  } catch (error) {
    console.error("Error fetching movie details:", error);
    isLoading.value = false;
  }
});

    
</script>

<style  scoped>
    h1{
        margin-bottom: 40px;
    }
    @font-face {
    font-family: oxygen;
    src: url(../assets/fonts/oxygen.ttf);
}
    .heading{
        font-size: 60px;
        font-family: oxygen;
        text-align: center;
    }

    .poster{
        height: 600px;
        width: 400px;
        display: block;
  margin-left: auto;
  margin-right: auto;
    }

    .movie-details {
    display: flex;
    flex-direction: column;
    align-items: flex-start; /* Align items to the left */
    justify-content: center; /* Vertically center items */
    height: 600px; /* Set a fixed height or adjust based on your layout */
  }

  .deets {
    /* Adjust styling for individual items */
    margin-bottom: 20px; /* Space between items */
  }
    
</style>
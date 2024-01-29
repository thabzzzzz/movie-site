<template>
  <div v-if="modalStore.show" class="modal">
    <div class="modal-content">
      <button @click="closeModal" class="close-button"><p class="font-bold">Close</p></button>

      <!-- Debugging: Log trailerKey -->
      

      <!-- Simplified conditional rendering -->
      <div v-if="trailerKey">
        <iframe
        width="1120"
  height="630"
          :src="`https://www.youtube.com/embed/${trailerKey}`"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </div>
      <div v-else>
        <p>No trailer available</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useModalStore } from '../store/modalStore';
import { useMovieStore } from '../store/movieStore'; // Import the movie store

const modalStore = useModalStore();
const movieStore = useMovieStore(); // Use the movie store
const trailerKey = ref(null);

const closeModal = () => {
  console.log('modal false');
  modalStore.toggleModal(false);
};

onMounted(async () => {
  // Fetch movie trailer when modal is opened
  const movieId = movieStore.queryMovie.id; // Access movie data from movieStore
  console.log('Movie ID:', movieId); 
  await fetchTrailer(movieId);
});

const fetchTrailer = async (movieId) => {
  const apiKey = '672d8a2f825f32332973ed7e2de2efa1';
  const apiUrl = `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${apiKey}`;
  
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    console.log('API Response:', data); // Debugging statement

    if (data.results && data.results.length > 0) {
      console.log('Videos:', data.results); // Debugging statement

      // Check if there's a trailer among the videos
      const trailer = data.results.find(video => video.type === 'Trailer');
      
      if (trailer) {
        trailerKey.value = trailer.key;
        console.log('Found Trailer:', trailer); // Debugging statement
      } else {
        console.log('No Trailer Found'); // Debugging statement
      }
    } else {
      console.log('No Videos in API Response'); // Debugging statement
    }
  } catch (error) {
    console.error('Error fetching trailer:', error);
  }
};;
</script>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  position: relative; /* Added for proper positioning */
  background: white;
  padding: 40px;
  border-radius: 8px;
}

.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  color: #F05E24;
}
@media (max-width: 760px) {
  .modal-content {
    width: 640px; /* Set the desired width */
    height: 500px; /* Set the desired height for the modal content */
    max-height: 90vh; /* Set a maximum height to ensure it fits within the viewport */
  }

  iframe {
    width: 100%; /* Make the iframe fill the width of its container */
    height: 400px; /* Set the desired height for the iframe */
  }
}
</style>

<!-- Modal.vue -->
<template>
  <div v-if="modalStore.show" class="modal">
    <div class="modal-content">
      <button @click="closeModal" class="close-button"><p class="font-bold">Close</p></button>
      <p>Modal Content</p>
    </div>
  </div>
</template>

<script setup>
<<<<<<< HEAD
import { useModalStore } from '../store/modalStore';
=======
import { ref, onMounted } from 'vue';
import { GraphQLClient } from 'graphql-request';
import { useModalStore } from '../store/modalStore';
import { useMovieStore } from '../store/movieStore';
>>>>>>> 897f5f60d8e48f7509f17d3ac7931be44d568fe5

const modalStore = useModalStore();

const closeModal = () => {
  console.log('modal false');
  modalStore.toggleModal(false);
};
<<<<<<< HEAD
=======

const trailerUrl = ref('');

onMounted(async () => {
  try {
    const { title, release_date } = queryMovie;
    const releaseYear = release_date ? new Date(release_date).getFullYear() : '';

    // Construct a GraphQL query for searching YouTube
    const searchQuery = encodeURIComponent(`${title} official trailer ${releaseYear}`);
    const gqlQuery = `
      query {
        search(query: "${searchQuery}", type: VIDEO, part: SNIPPET, maxResults: 1) {
          items {
            id {
              videoId
            }
          }
        }
      }
    `;

    // Set up your GraphQL client with the appropriate endpoint
    const graphQLClient = new GraphQLClient('/.netlify/functions/youtube-trailer');

    // Make the GraphQL query
    const response = await graphQLClient.request(gqlQuery, {
      headers: {
        Authorization: 'Bearer AIzaSyC7UEh4uRpo1slT7RB_BNlPMKAAsBQcuRQ', // Replace with your actual API key
      },
    });

    // Extract the trailer video ID from the GraphQL response
    const trailerVideoId = response.search.items[0]?.id.videoId;

    // Construct the trailer URL
    trailerUrl.value = trailerVideoId ? `https://www.youtube.com/embed/${trailerVideoId}?autoplay=1` : '';
  } catch (error) {
    console.error('Error fetching trailer:', error);
  }
});
>>>>>>> 897f5f60d8e48f7509f17d3ac7931be44d568fe5
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
</style>

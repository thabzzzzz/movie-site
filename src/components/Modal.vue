<!-- Modal.vue -->

<template>
    <div v-if="showModal" class="modal-overlay">
      <div class="modal-content">
        
        <iframe
          width="560"
          height="315"
          :src="videoUrl"
          title="YouTube video player"
          frameborder="0"
          allowfullscreen
        ></iframe>
        <button @click="closeModal">Close</button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const showModal = ref(false);
  
  const closeModal = () => {
    showModal.value = false;
  };
  </script>
  
  <style scoped>
  /* Add your modal styles here */
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .modal-content {
    background: white;
    padding: 20px;
    border-radius: 8px;
  }
  
  button {
    margin-top: 10px;
  }
  </style>
  
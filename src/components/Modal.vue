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
import { useModalStore } from '../store/modalStore';

const modalStore = useModalStore();

const closeModal = () => {
  console.log('modal false');
  modalStore.toggleModal(false);
};
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

<!-- Modal.vue -->
<template>
  <div v-if="modalStore.show" class="modal">
    <div class="modal-content">
      <slot></slot>
      <button @click="closeModal">Close</button>
    </div>
  </div>
</template>

<script setup>
import { useModalStore } from '../store/modalStore'; // Adjust the path as needed

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
  background: white;
  padding: 20px;
  border-radius: 8px;
}
</style>

<template>
  <Modal @close="close" @keydown.esc="close">
    <div class="title">¿Seguro que quienes eliminar este video?</div>
    <div class="actions">
      <Button outline @click="cancelDelete">Cancelar</Button>
      <Button @click="deleteVideo">Eliminar</Button>
    </div>
  </Modal>
</template>

<script setup lang="ts">
import Modal from "@/components/UI/Modal.vue";
import Button from "@/components/UI/Button.vue";

const emit = defineEmits<{
  (e: "cancelDelete"): void;
  (e: "deleteVideo"): void;
  (e: "closeModal"): void;
}>();

function cancelDelete() {
  emit("cancelDelete");
}

function deleteVideo() {
  emit("deleteVideo");
}

function close() {
  emit("closeModal");
}
</script>

<style scoped>
.title {
  font-size: 1.5rem;
}

.actions {
  margin-top: 2rem;
  display: flex;
  justify-content: end;
}

@media only screen and (min-width: 768px) {
  button + button {
    margin-left: 1.25rem;
  }
}
</style>

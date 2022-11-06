<template>
  <Modal @close="close">
    {{ video.id }}
  </Modal>
</template>

<script setup lang="ts">
import Modal from "@/components/UI/Modal.vue";
import type { Video } from "@/Types/Video";

defineProps<{
  video: Video;
}>();

const emit = defineEmits<{
  (e: "closeModal"): void;
}>();

function close() {
  emit("closeModal");
}
</script>

<style scoped></style>

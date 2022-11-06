<template>
  <Modal @close="close">
    <section class="wrapper">
      <YTVideoContainer :video="video"/>
      <div>
        <h1>{{ video.snippet.title }}</h1>
        <!--        format \n new line-->
        <p>{{ video.snippet.description }}</p>
      </div>
    </section>
  </Modal>
</template>

<script setup lang="ts">
import Modal from "@/components/UI/Modal.vue";
import type {Video} from "@/Types/Video";
import YTVideoContainer from "@/components/YTVideoContainer.vue";

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

<style scoped>
.wrapper {
}

@media only screen and (min-width: 1024px) {
  .wrapper {
    display: flex;
  }
}
</style>

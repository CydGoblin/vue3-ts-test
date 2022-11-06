<template>
  <!--  TODO close on click outside/scape-->
  <Modal @close="close">
    <section class="wrapper">
      <div class="video-wrapper">
        <YTVideoContainer :video="video" />
      </div>
      <div>
        <h1>{{ video.snippet.title }}</h1>
        <p v-html="video.snippet.description"></p>
      </div>
    </section>
  </Modal>
</template>

<script setup lang="ts">
import Modal from "@/components/UI/Modal.vue";
import type { Video } from "@/Types/Video";
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
h1 {
  line-height: 1.2;
  margin: 1rem 0;
}

@media only screen and (min-width: 1024px) {
  .wrapper {
    display: flex;
    /*align-items: center;*/
  }

  .video-wrapper {
    width: 50%;
    flex-shrink: 0;
    margin-right: 2rem;
  }

  h1 {
    margin: 0 0 1rem 0;
  }
}
</style>

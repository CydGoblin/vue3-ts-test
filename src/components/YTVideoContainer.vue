<template>
  <div class="youtube-video-container">
    <iframe
      width="560"
      height="315"
      :src="videoLink"
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>
</template>

<script setup lang="ts">
import type { Video } from "@/Types/Video";
import { computed, toRefs } from "vue";

const props = defineProps<{
  video: Video;
}>();

const { video } = toRefs(props);

const videoLink = computed(() => {
  return `https://www.youtube.com/embed/${video.value.id}`;
});
</script>

<style scoped>
.youtube-video-container {
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
  width: 100%;
}

iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

@media only screen and (min-width: 1200px) {
  .youtube-video-container {
    margin-right: 2rem;
    max-width: 480px;
  }
}
</style>

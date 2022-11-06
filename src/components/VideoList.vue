<template>
  <div class="list">
    <VideoItem :video="video" v-for="video in items" :key="video.id" />
  </div>
</template>

<!-- TODO add pinia? provide/inject?-->
<script setup lang="ts">
import VideoItem from "@/components/VideoItem.vue";
import type { Video } from "@/Types/Video";

defineProps<{
  items: Video[];
}>();
</script>

<style scoped>
.list {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 70px;
  padding: 70px;
}

@media only screen and (min-width: 768px) {
  .list {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media only screen and (min-width: 1024px) {
  .list {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>

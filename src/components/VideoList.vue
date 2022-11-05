<template>
  <div class="list">
    <VideoItem :video="video" v-for="video in items" :key="video.id" />
  </div>
</template>

<!-- TODO add pinia?-->
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
  grid-template-columns: repeat(3, 1fr);
  gap: 70px;
  padding: 70px;
}
</style>

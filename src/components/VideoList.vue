<template>
  <div class="list" v-if="items">
    <VideoItem
      :video="video"
      v-for="video in items"
      :key="video.id"
      @open="openVideo"
      @delete="removeVideo"
    />
  </div>
  <div class="empty" v-else>Aún no hay video agregados</div>
</template>

<script setup lang="ts">
import VideoItem from "@/components/VideoItem.vue";
import type { Video } from "@/Types/Video";

defineProps<{
  items: Video[];
}>();

const emit = defineEmits<{
  (e: "deleteVideo", data: Video): void;
  (e: "openVideo", data: Video): void;
}>();

function openVideo(video: Video) {
  emit("openVideo", video);
}

function removeVideo(video: Video) {
  emit("deleteVideo", video);
}
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

.empty {
  font-size: 2.5rem;
  margin-top: 70px;
  padding: 2rem;
}
</style>

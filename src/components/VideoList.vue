<template>
  <select class="select" v-model="sortBy">
    <option value="longer">Mayor duración</option>
    <option value="shorter">Menor duración</option>
  </select>
  <div class="list" v-if="items">
    <VideoItem
      :video="video"
      v-for="video in videosSorted"
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
import { computed, ref, toRefs } from "vue";
import { YTTimeToSeconds } from "@/composables/YTTime";

const props = defineProps<{
  items: Video[];
}>();

const { items } = toRefs(props);

const emit = defineEmits<{
  (e: "deleteVideo", data: Video): void;
  (e: "openVideo", data: Video): void;
}>();

const sortBy = ref("shorter");

function openVideo(video: Video) {
  emit("openVideo", video);
}

function removeVideo(video: Video) {
  emit("deleteVideo", video);
}

const videosSorted = computed(() => {
  const clone = items.value;

  if (sortBy.value === "longer") {
    return clone.sort((videoA, videoB) => {
      if (
        YTTimeToSeconds(videoA.contentDetails.duration) >
        YTTimeToSeconds(videoB.contentDetails.duration)
      ) {
        return -1;
      }
      if (
        YTTimeToSeconds(videoA.contentDetails.duration) <
        YTTimeToSeconds(videoB.contentDetails.duration)
      ) {
        return 1;
      }
      return 0;
    });
  }

  return clone.sort((videoA, videoB) => {
    if (
      YTTimeToSeconds(videoA.contentDetails.duration) <
      YTTimeToSeconds(videoB.contentDetails.duration)
    ) {
      return -1;
    }
    if (
      YTTimeToSeconds(videoA.contentDetails.duration) >
      YTTimeToSeconds(videoB.contentDetails.duration)
    ) {
      return 1;
    }
    return 0;
  });
});
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

.select {
  align-self: end;
  padding: 0.25rem 0.5rem;
}

.empty {
  font-size: 2.5rem;
  margin-top: 70px;
  padding: 2rem;
}
</style>

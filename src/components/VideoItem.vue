<template>
  <div class="wrapper">
    <button class="item" @click="openVideo(video)">
      <img
        class="item__thumbnail"
        :src="video.snippet.thumbnails.high.url"
        alt="video title"
      />
      <span v-if="isLive" class="item__time live">Live</span>
      <span class="item__time" v-else>
        {{ YTDurationFormat(video.contentDetails.duration) }}
      </span>
    </button>
    <button class="item__close" @click="removeVideo(video)">
      <img src="@/assets/CloseSquareIcon.svg" :alt="video.snippet.title" />
    </button>
  </div>
</template>

<script setup lang="ts">
import type { Video } from "@/Types/Video";
import { YTDurationFormat } from "@/composables/YTTime";
import { computed, toRefs } from "vue";

const props = defineProps<{
  video: Video;
}>();

const { video } = toRefs(props);

const emit = defineEmits<{
  (e: "delete", data: Video): void;
  (e: "open", data: Video): void;
}>();

function openVideo(video: Video) {
  emit("open", video);
}

function removeVideo(video: Video) {
  emit("delete", video);
}

const isLive = computed(() => {
  return video.value.contentDetails.duration === "P0D";
});
</script>

<style scoped>
.wrapper {
  position: relative;
}
.item {
  box-shadow: 0 20px 20px rgba(0, 0, 0, 0.07);
  transition: box-shadow 200ms ease;
}

.item:hover {
  box-shadow: 0 8px 8px rgba(0, 0, 0, 0.2);
}

.item__thumbnail {
  width: 100%;
}

.item__close {
  position: absolute;
  z-index: 1;
  top: 0.5rem;
  right: 0.5rem;
  width: 24px;
  height: 24px;
  opacity: 0.7;
  transition-property: box-shadow, transform;
  transition-duration: 200ms;
  transition-timing-function: ease;
}

.item__close:hover {
  transform: scale(1.1);
  opacity: 0.85;
}

.item__time {
  position: absolute;
  bottom: 1rem;
  right: 0.5rem;
  padding: 0 0.5rem;
  color: var(--light);
  background: var(--dark);
  opacity: 0.85;
}

.item__time.live {
  background: red;
  color: white;
  opacity: 1;
}
</style>

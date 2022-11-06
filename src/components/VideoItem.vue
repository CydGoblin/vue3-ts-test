<template>
  <div class="wrapper">
    <button class="item" @click="openVideo(video)">
      <img
        class="item__thumbnail"
        :src="video.snippet.thumbnails.high.url"
        alt="video title"
      />
      <span class="item__time">
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

defineProps<{
  video: Video;
}>();

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

function YTDurationFormat(duration: string) {
  let match = duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/)!;

  const time = match.slice(1).map((x) => {
    if (x != null) {
      return x.replace(/\D/, "");
    }
  });

  const hours = parseInt(time[0]!) || 0;
  const minutes = parseInt(time[1]!) || 0;
  const seconds = parseInt(time[2]!) || 0;

  const hoursFormat = hours > 0 ? hours + ":" : "";
  const secondsFormat = seconds < 10 ? `${seconds}0` : seconds;

  return `${hoursFormat}${minutes}:${secondsFormat}`;
}
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
  bottom: 0.5rem;
  right: 0.5rem;
  padding: 0 0.5rem;
  color: var(--light);
  background: var(--dark);
  opacity: 0.85;
}
</style>

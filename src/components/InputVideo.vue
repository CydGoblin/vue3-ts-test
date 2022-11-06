<template>
  <form @submit.prevent="addVideo" class="add-video">
    <input
      v-model="url"
      type="url"
      placeholder="Añadir video"
      class="add-video__input"
    />
    <button class="add-video__btn font-montserrat">Añadir</button>
  </form>
</template>

<script setup lang="ts">
import axios from "axios";
import { ref } from "vue";
import type { Video, YoutubeResponse } from "@/Types/Video";

const emit = defineEmits<{
  (e: "addVideo", data: Video): void;
}>();

const url = ref("");

async function addVideo() {
  // TODO disabled btn on empty with computed
  // TODO parse video id form url
  // TODO url validation
  // TODO no aceptar duplicados

  try {
    const videoId = parseId(url.value);
    const response = await axios.get(
      `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=AIzaSyDNGGbbjXAo1SE76jmkPub3Tqt9D0ms6d0&part=snippet%2CcontentDetails`
    );
    emit("addVideo", (response.data as YoutubeResponse).items[0]);
  } catch (e) {
    // TODO better error handle
    throw new Error("Video not found");
  }
}

function parseId(id: string) {
  const pattern =
    /^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=|attribution_link\?a=.+?watch.+?v(?:%|=)))((\w|-){11})(?:\S+)?$/;
  return id.match(pattern)![1];
}
</script>

<style scoped>
/* TODO add scss*/
.add-video {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.add-video__input {
  flex-grow: 1;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: var(--border-radius);
  padding: 1rem 1.25rem;
}

.add-video__btn {
  border: 0;
  background: var(--primary);
  color: white;
  border-radius: var(--border-radius);
  padding: 1.25rem 5rem;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2), 0 1px 4px rgba(0, 0, 0, 0.12),
    0 2px 2px rgba(0, 0, 0, 0.14);
  margin-top: 1rem;
}

@media only screen and (min-width: 768px) {
  .add-video {
    flex-direction: row;
  }

  .add-video__input {
    flex-grow: 1;
    border: 1px solid rgba(0, 0, 0, 0.3);
    border-radius: var(--border-radius) 0 0 var(--border-radius);
  }

  .add-video__btn {
    margin-top: 0;
    border-radius: 0 var(--border-radius) var(--border-radius) 0;
  }
}
</style>

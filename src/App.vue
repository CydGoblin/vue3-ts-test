<template>
  <main class="main">
    <h1>Añadir nuevo video</h1>
    <AddVideoInput @addVideo="addVideo" />
    <VideoList :items="videoList" v-if="videoList.length" />
    <div class="empty" v-else>Aún no hay video agregados</div>
  </main>
</template>

<script setup lang="ts">
import AddVideoInput from "@/components/AddVideoInput.vue";
import VideoList from "@/components/VideoList.vue";
import type { Video } from "@/Types/Video";
import YoutubeResponse from "../test/mocks/YoutubeResponse";
import { reactive } from "vue";

// const videoList: Video[] = reactive(YoutubeResponse.items);
const videoList: Video[] = reactive([]);

// TODO restore from firestore on mounted
function addVideo(video: Video) {
  videoList.push(video);
}
// TODO Empty state
</script>

<style scoped>
.main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  max-width: 1024px;
  margin: auto;
  padding: 2rem;
}

h1 {
  margin-bottom: 1rem;
  margin-right: auto;
}

.empty {
  font-size: 2.5rem;
  margin-top: 70px;
  padding: 2rem;
}
</style>

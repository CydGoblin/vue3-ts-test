<template>
  <main class="main">
    <h1>Añadir nuevo video</h1>
    <AddVideoInput @addVideo="addVideo" :videoIdList="videoIdList" />
    <VideoList
      :items="videoList"
      @openVideo="openVideo"
      @deleteVideo="openDeleteModal"
    />
    <DeleteConfirmModal
      v-if="showDeleteModal"
      @cancelDelete="cancelDelete"
      @deleteVideo="deleteVideo"
      @closeModal="cancelDelete"
    />
    <OpenVideoModal
      v-if="showOpenVideoModal"
      :video="videoOpened"
      @closeModal="closeVideo"
    />
  </main>
</template>

<script setup lang="ts">
import AddVideoInput from "@/components/InputVideo.vue";
import VideoList from "@/components/VideoList.vue";
import DeleteConfirmModal from "@/components/DeleteConfirmModal.vue";
import OpenVideoModal from "@/components/OpenVideoModal.vue";
import type { Video } from "@/Types/Video";
import {
  addVideoToCollection,
  deleteVideoFromCollection,
  loadVideosCollection,
} from "@/firebase";
import { computed, ref } from "vue";

const videoList = loadVideosCollection();

const videoIdToDelete = ref<Video | null>(null);

const videoOpened = ref<Video | null>(null);

function openVideo(video: Video) {
  videoOpened.value = video;
}

const showDeleteModal = computed(() => {
  return !!videoIdToDelete.value;
});

const showOpenVideoModal = computed(() => {
  return !!videoOpened.value;
});

const videoIdList = computed(() => {
  return videoList.value.map((video) => video.id);
});

async function addVideo(video: Video) {
  await addVideoToCollection(video);
}

async function deleteVideo() {
  await deleteVideoFromCollection(videoIdToDelete.value!._id!);
  videoIdToDelete.value = null;
}

function openDeleteModal(video: Video) {
  videoIdToDelete.value = video;
}

async function cancelDelete() {
  videoIdToDelete.value = null;
}

function closeVideo() {
  videoOpened.value = null;
}
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
</style>

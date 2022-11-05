<template>
  <div class="list">
    <VideoItem />
  </div>
</template>

<script setup lang="ts">
import VideoItem from "@/components/VideoItem.vue";
</script>

<style scoped>
.list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 70px;
  padding: 70px;
}
</style>

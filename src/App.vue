<script setup lang="ts">
import AddVideoInput from "@/components/AddVideoInput.vue";
import VideoList from "@/components/VideoList.vue";
</script>

<template>
  <header></header>

  <main class="main">
    <h1>Añadir nuevo video</h1>
    <AddVideoInput />
    <VideoList />
  </main>
</template>

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

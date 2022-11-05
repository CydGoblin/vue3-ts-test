<template>
  <form @submit.prevent="addVideo" class="add-video">
    <input type="text" placeholder="Añadir video" class="add-video__input" />
    <button class="add-video__btn">Añadir</button>
  </form>
</template>
<script setup lang="ts">
function addVideo() {
  console.log("add video");
}
</script>

<style scoped>
.add-video {
  display: flex;
  width: 100%;
}
.add-video__input {
  flex-grow: 1;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 0.5rem 0 0 0.5rem;
  padding: 1rem 1.25rem;
}
.add-video__btn {
  border: 0;
  background: var(--primary);
  color: white;
  border-radius: 0 0.5rem 0.5rem 0;
  padding: 1.25rem 5rem;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2), 0 1px 4px rgba(0, 0, 0, 0.12),
    0 2px 2px rgba(0, 0, 0, 0.14);
}
</style>

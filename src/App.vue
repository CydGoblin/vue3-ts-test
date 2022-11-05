<script setup lang="ts">
import AddVideoInput from "@/components/AddVideoInput.vue";
</script>

<template>
  <header></header>

  <main class="main">
    <h1>Añadir nuevo video</h1>
    <AddVideoInput />
  </main>
</template>

<style scoped>
.main {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
</style>

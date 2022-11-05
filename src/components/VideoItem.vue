<template>
  <div class="list__item" v-for="video in [1, 2, 3, 4, 5]" :key="video">
    <img src="@/assets/thumbnail.jpg" alt="video title" />
  </div>
</template>
<script setup lang="ts"></script>
<style scoped>
.list__item {
  box-shadow: 0 20px 20px rgba(0, 0, 0, 0.07);
}

.list__item img {
  width: 100%;
}
</style>

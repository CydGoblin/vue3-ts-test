<template>
  <div :class="type">{{ msg }}</div>
</template>

<script setup lang="ts">
const props = defineProps<{
  type: string;
  msg: string;
}>();
</script>

<style scoped>
.error {
  background: rgba(var(--red), 0.15);
  color: rgb(var(--red));
  padding: 0.2rem 1rem;
  border: 1px solid rgb(var(--red));
  border-radius: 3px;
}

.success {
  background: rgba(var(--green), 0.15);
  color: rgb(var(--green));
  padding: 0.2rem 1rem;
  border: 1px solid rgb(var(--green));
  border-radius: 3px;
}
</style>

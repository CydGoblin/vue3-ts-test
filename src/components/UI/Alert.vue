<template>
  <div class="alert" :class="type">
    <span>{{ msg }}</span>
    <button class="close" @click="close">
      <img src="@/assets/CloseSquareIcon.svg" alt="" />
    </button>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  type: string;
  msg: string;
}>();

const emit = defineEmits<{
  (e: "close"): void;
}>();

function close() {
  emit("close");
}
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

.alert {
  position: relative;
  width: 100%;
  display: flex;
}

.close {
  width: 18px;
  height: 18px;
  opacity: 0.7;
  margin-left: auto;
  justify-self: center;
  align-self: center;
}
</style>

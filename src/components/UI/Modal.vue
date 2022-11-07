<template>
  <div
    ref="overlay"
    class="overlay"
    @keydown.esc="close"
    tabindex="0"
    @click="close"
  >
    <div class="modal">
      <button class="close" @click="close">
        <img src="@/assets/CloseIcon.svg" alt="" />
      </button>
      <div>
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";

const emit = defineEmits<{
  (e: "close"): void;
}>();

function close() {
  emit("close");
}

const overlay = ref<HTMLElement | null>(null);

onMounted(() => {
  overlay.value!.focus();
});
</script>

<style scoped>
.overlay {
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
}

.modal {
  position: relative;
  background-color: #fefefe;
  margin: 3rem auto;
  padding: 2rem;
  border: 1px solid #888;
  width: 80%;
  max-width: 1024px;
  border-radius: var(--border-radius);
  box-shadow: 0 20px 20px rgba(0, 0, 0, 0.07);
}

.close {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  z-index: 20;
  width: 24px;
  height: 24px;
}

@media only screen and (min-width: 1200px) {
  .close {
    top: 1rem;
    right: 1rem;
  }
}
</style>

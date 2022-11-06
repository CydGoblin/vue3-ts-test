<template>
  <div class="overlay">
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
const emit = defineEmits<{
  (e: "close"): void;
}>();

function close() {
  emit("close");
}
</script>

<style scoped>
.overlay {
  position: fixed;
  z-index: 20;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: auto;
  /*  TODO Fix scroll*/
}

.close {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  z-index: 20;
  width: 24px;
  height: 24px;
}

.modal {
  background: var(--light);
  max-width: 1024px;
  box-shadow: 0 20px 20px rgba(0, 0, 0, 0.07);
  border-radius: var(--border-radius);
  margin: 2rem;
  padding: 2rem;
  width: 100%;
  position: relative;
}

@media only screen and (min-width: 1200px) {
  .modal {
    margin: 0;
  }

  .close {
    top: 1rem;
    right: 1rem;
  }
}
</style>

<template>
  <button
    class="item"
    v-for="video in [1, 2, 3, 4, 5]"
    :key="video"
    @click="openVideo"
  >
    <img
      class="item__thumbnail"
      src="@/assets/thumbnail.jpg"
      alt="video title"
    />
    <button class="item__close" @click="removeVideo">
      <img src="@/assets/CloseIcon.svg" alt="" />
    </button>
    <!--    <div class="item__time">0:40</div>-->
  </button>
</template>

<script setup lang="ts">
function openVideo() {
  console.log("open Video");
}
function removeVideo() {
  console.log("remove video");
}
</script>

<style scoped>
.item {
  box-shadow: 0 20px 20px rgba(0, 0, 0, 0.07);
  position: relative;
  transition: box-shadow 200ms ease;
}

.item:hover {
  box-shadow: 0 8px 8px rgba(0, 0, 0, 0.2);
}

.item__thumbnail {
  width: 100%;
}

.item__close {
  position: absolute;
  z-index: 10;
  top: 0.5rem;
  right: 0.5rem;
  width: 24px;
  height: 24px;
  opacity: 0.7;
  transition-property: box-shadow, transform;
  transition-duration: 200ms;
  transition-timing-function: ease;
}

.item__close:hover {
  transform: scale(1.1);
  opacity: 0.85;
}

/*.item__time {*/
/*  position: absolute;*/
/*  bottom: 0;*/
/*  right: 0;*/
/*  background: var(--dark);*/
/*}*/
</style>

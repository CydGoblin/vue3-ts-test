<template>
  <form @submit.prevent="addVideo" class="add-video">
    <input
      v-model="url"
      type="url"
      placeholder="Añadir video"
      class="add-video__input"
      required
      ref="input"
    />
    <Button class="add-video__btn" :disabled="disabled" @click="addVideo"
      >Añadir</Button
    >
  </form>
  <Alert
    v-if="showAlert"
    :type="alert.type"
    :msg="alert.msg"
    @close="closeAlert"
  />
</template>

<script setup lang="ts">
import axios from "axios";
import { computed, ref, toRefs } from "vue";
import type { Video, YoutubeResponse } from "@/Types/Video";
import Button from "@/components/UI/Button.vue";
import Alert from "@/components/UI/Alert.vue";

const props = defineProps<{
  videoIdList: string[];
}>();

const emit = defineEmits<{
  (e: "addVideo", data: Video): void;
}>();

const url = ref("");

const input = ref<HTMLInputElement | null>(null);

const alert = ref({ type: "error", msg: "" });
const showAlert = ref(false);

const { videoIdList } = toRefs(props);

const disabled = computed(() => {
  return !url.value;
});

async function addVideo() {
  alert.value.msg = "";
  const isValidInput = input.value ? input.value.validity.valid : false;
  const videoId = parseId(url.value);

  const isDuplicated = videoIdList.value.includes(videoId);

  if (isValidInput && !isDuplicated) {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=AIzaSyDNGGbbjXAo1SE76jmkPub3Tqt9D0ms6d0&part=snippet%2CcontentDetails`
      );

      if (response.data.items.length > 0) {
        console.log("Si hay items");
        emit("addVideo", (response.data as YoutubeResponse).items[0]);
        alert.value = { type: "success", msg: "Video añadido" };
        showAlert.value = true;
        url.value = "";
      } else {
        console.log("No hay item");
        alert.value = { type: "error", msg: "Video no encontrado o inválido" };
        showAlert.value = true;
        input.value!.focus();
      }
    } catch (e) {
      alert.value = { type: "error", msg: "Video no encontrado o inválido" };
      input.value!.focus();
      throw new Error("Video not found");
    }
  } else {
    if (!isValidInput) {
      alert.value = { type: "error", msg: "URL inválida" };
    }
    if (isDuplicated) {
      alert.value = {
        type: "error",
        msg: "Este video ya existe en la colección",
      };
    }
    showAlert.value = true;
    input.value!.focus();
  }
}

function parseId(id: string) {
  const pattern =
    /^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=|attribution_link\?a=.+?watch.+?v(?:%|=)))((\w|-){11})(?:\S+)?$/;
  return id.match(pattern) ? id.match(pattern)![1] : "";
}

function closeAlert() {
  showAlert.value = false;
}
</script>

<style scoped>
.add-video {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 1rem;
}

.add-video__input {
  flex-grow: 1;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: var(--border-radius);
  padding: 1rem 1.25rem;
}

.add-video__btn {
  background: var(--primary);
  border-radius: var(--border-radius);
  padding: 1.25rem 5rem;
  margin-top: 1rem;
}

@media only screen and (min-width: 768px) {
  .add-video {
    flex-direction: row;
  }

  .add-video__input {
    flex-grow: 1;
    border: 1px solid rgba(0, 0, 0, 0.3);
    border-radius: var(--border-radius) 0 0 var(--border-radius);
  }

  .add-video__btn {
    margin-top: 0;
    border-radius: 0 var(--border-radius) var(--border-radius) 0;
  }
}
</style>

import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import type { Video } from "@/Types/Video";
import { ref, onUnmounted } from "vue";

const config = {
  apiKey: "AIzaSyDMHM1Dkz83PnilZclHQFI22xCS6Mi5RkQ",
  authDomain: "afex-vue.firebaseapp.com",
  projectId: "afex-vue",
  storageBucket: "afex-vue.appspot.com",
  messagingSenderId: "721444474634",
  appId: "1:721444474634:web:df4be0fabd8b397df774f3",
  measurementId: "G-H44R3DWLF6",
};

const firebaseApp = firebase.initializeApp(config);

const db = firebaseApp.firestore();
export const videosCollection = db.collection("videos");

export const addVideoToCollection = (video: Video) => {
  return videosCollection.add(video);
};

export const getVideoFromCollection = async (id: string) => {
  const video = await videosCollection.doc(id).get();
  return video.exists ? video.data() : null;
};

export const updateVideoInCollection = (id: string, video: Video) => {
  return videosCollection.doc(id).update(video);
};

export const deleteVideoFromCollection = (id: string) => {
  return videosCollection.doc(id).delete();
};

export const loadVideosCollection = () => {
  const videos = ref<Video[]>([]);
  const close = videosCollection.onSnapshot((snapshot) => {
    videos.value = snapshot.docs.map((doc) => doc.data() as Video);
  });
  onUnmounted(close);
  return videos;
};

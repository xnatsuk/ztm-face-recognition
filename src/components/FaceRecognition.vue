<script setup>
import { ref, watch } from 'vue';
import { fetchImageData, calculateFaceLocation, displayFaceBox } from '@/services/clarifai.service';
import { useUserStore } from '@/stores/user.store';

const imageUrl = ref('');
const imageRef = ref(null);
const listFace = ref([]);

const onClick = async () => {
  const userStore = useUserStore();
  await fetchImageData(imageUrl).then((response) => {
    displayFaceBox(calculateFaceLocation(response, imageRef), listFace);
    userStore.updateScore();
  });
};

// clears the provided image and it's face boxes everytime the url is changed.
watch(imageUrl, () => {
  listFace.value = [];
});
</script>

<template>
  <div class="flex justify-center">
    <img v-if="!imageUrl" class="max-w-xl" src="https://weandai.org/wp-content/uploads/2020/12/148-1-870x570.png" />
    <div v-show="imageUrl" style="position: relative">
      <img class="max-w-xl" ref="imageRef" :src="imageUrl" />
      <div v-for="face in listFace" class="bounding-box" :style="face.style"></div>
    </div>
  </div>
  <div class="hero py-12 bg-base-200">
    <div class="hero-content text-center">
      <div class="max-w-md">
        <h1 class="text-5xl font-bold">Hello there!</h1>
        <p class="py-6">I will detect faces in your pictures. Give it a try.</p>
        <input
          class="input input-bordered input-primary shadow-lg w-full max-w-sm"
          v-model.trim="imageUrl"
          @keyup.enter="onClick"
          placeholder="Image Url"
        />
        <button class="btn btn-primary shadow-lg my-6 px-8" @click="onClick">Detect</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.bounding-box {
  position: absolute;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 0 0 3px hsl(var(--a)) inset;
}
</style>

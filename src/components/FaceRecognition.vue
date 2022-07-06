<script setup>
import { ref, watch } from 'vue';

const USER_ID = 'xnatsuk';
const PAT = '98611af52c7245c19fdfcee30cd39f6e';
const APP_ID = 'face-app';

let imageUrl = ref('');
let imageRef = ref(null);
let listFace = ref([]);

// clears the provided image and it's face boxes everytime the url is changed.
watch(imageUrl, () => { listFace.value = [] })

const fetchData = async () => {
   const raw = JSON.stringify({
      user_app_id: {
         user_id: USER_ID,
         app_id: APP_ID
      },
      inputs: [{ data: { image: { url: imageUrl.value } } }],
   });

   const requestOptions = {
      method: 'POST',
      headers: {
         Accept: 'application/json',
         Authorization: 'Key ' + PAT
      },
      body: raw
   };

   const response = await fetch('https://api.clarifai.com/v2/models/face-detection/outputs', requestOptions);
   if (!response.ok) throw new Error('An error occurred: ' + response.status);

   return await response.json();
}

const calculateFaceLocation = async () => {
   let faceArray = [];
   let faceBox = await fetchData();
   const image = imageRef.value; // access to <img> to manipulate the DOM.
   const width = Number(image.width);
   const height = Number(image.height);
   for (let faceObject of faceBox.outputs[0].data.regions) {
      let box = faceObject.region_info.bounding_box;
      faceArray.push({
         topRow: box.top_row * height,
         rightCol: width - box.right_col * width,
         bottomRow: height - box.bottom_row * height,
         leftCol: box.left_col * width
      });
   }
   console.log(faceArray)
   // return an array of objects in which we calculated the value 
   // of face boxes arround each face recognized by the API.
   return faceArray
}

const onClick = async () => {
   const displayFaceBox = async () => {
      let faceArray = await calculateFaceLocation()
      listFace.value = [];
      for (let face of faceArray) {
         let style = {
            top: face.topRow + 'px',
            right: face.rightCol + 'px',
            bottom: face.bottomRow + 'px',
            left: face.leftCol + 'px'
         }
         listFace.value.push({style})
      }
   };

   await displayFaceBox()
}

</script>

<template>
   <div class="flex justify-center">
      <img v-if="!imageUrl" class="max-w-xl" src="https://weandai.org/wp-content/uploads/2020/12/148-1-870x570.png" />
      <div v-show="imageUrl" style="position:relative" >
         <img class="max-w-xl" ref="imageRef" :src="imageUrl" />
         <div v-for="face in listFace" class="bounding-box" :style="face.style"></div>
      </div>
   </div>
   <div class="hero py-12 bg-base-200">
      <div class="hero-content text-center">
         <div class="max-w-md">
            <h1 class="text-5xl font-bold">Hello there!</h1>
            <p class="py-6">I will detect faces in your pictures. Give it a try.</p>
            <input class="input input-bordered input-primary shadow-lg w-full max-w-sm"
            v-model.trim="imageUrl"
            @keyup.enter="onClick" 
            placeholder='Image Url' />
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

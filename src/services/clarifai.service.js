import axios from 'axios';

const API_URL = 'https://api.clarifai.com/v2/models/face-detection/outputs';
const USER_ID = import.meta.env.VITE_USER_ID;
const PAT = import.meta.env.VITE_PAT;
const APP_ID = import.meta.env.VITE_APP_ID;

export async function fetchImageData(imageUrl) {
  return await axios
    .post(
      API_URL,
      {
        user_app_id: {
          user_id: USER_ID,
          app_id: APP_ID,
        },
        inputs: [{ data: { image: { url: imageUrl.value } } }],
      },
      {
        headers: {
          Accept: 'application/json',
          Authorization: `Key ${PAT}`,
        },
      }
    )
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error;
    });
}

export function calculateFaceLocation(faceBox, imageRef) {
  const faceArray = [];
  const image = imageRef.value; // access to <img> to manipulate the DOM.
  const width = Number(image.width);
  const height = Number(image.height);
  for (let faceObject of faceBox.outputs[0].data.regions) {
    let box = faceObject.region_info.bounding_box;
    faceArray.push({
      topRow: box.top_row * height,
      rightCol: width - box.right_col * width,
      bottomRow: height - box.bottom_row * height,
      leftCol: box.left_col * width,
    });
  }
  //console.log(faceArray);
  // return an array of objects in which we calculated the value
  // of the boxes arround each face recognized by the API.
  return faceArray;
}

export function displayFaceBox(faceArray, listFace) {
  listFace.value = [];
  for (let face of faceArray) {
    let style = {
      top: face.topRow + 'px',
      right: face.rightCol + 'px',
      bottom: face.bottomRow + 'px',
      left: face.leftCol + 'px',
    };
    listFace.value.push({ style });
  }
}

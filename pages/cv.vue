<template>
  <div class="flex justify-center">
    <div class="flex mb-36 flex-col px-4 gap-4 w-11/12 mb-4 w-11/12 md:w-3/5 lg:w-2/5 xl:w-2/5">
      <div class="flex flex-row items-center gap-4 my-2">
        <div class="border border-blue-500 h-24 w-24 rounded-full">
        </div>
        <h2>Johon Doe</h2>
      </div>

      <div class="border rounded-md px-4 py-8">
        <h1 class="font-semibold text-xl">Commencez</h1>
        <div class="grid grid-cols-2 gap-2 my-4">
          <button v-if="!uploading" @click="handleUpload"
                  class="border focus:ring-2 gap-2 py-2 border-gray-400 justify-center text-blue-600 font-semibold rounded-lg flex flex-row items-center">
          <span class="w-4">
            <svg version="1.1" id="Layer_1" fill="blue" xmlns="http://www.w3.org/2000/svg"
                 xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                 viewBox="0 0 485 485" style="enable-background:new 0 0 485 485;" xml:space="preserve">
            <g>
              <rect y="448.107" width="485" height="30"/>
              <polygon points="227.5,64.32 227.5,403.107 257.5,403.107 257.5,64.32 291.894,98.713 313.106,77.5 242.5,6.893 171.894,77.5
                193.106,98.713"/>
            </g>
            </svg>
          </span>
            <span>Uploader CV</span>
          </button>
          <input id='fileid' type='file' @change="submitCv" hidden/>
          <div v-if="uploading" class="lds-spinner">
            <p class="flex flex-row justify-center">
            <div v-for="i in 12"></div>
            </p>
          </div>
          <button
            class="border px-8 text-center border-gray-400 text-blue-600 font-semibold rounded-lg flex justify-center flex-row items-center">
            Construire CV
          </button>
        </div>


        <p class="text-gray-500">
          En continuant, vous acceptez de créer un CV public et acceptez de partager vos données avec les employeurs.
          job4all ne recommande pas de télécharger des CV avec des photos.
        </p>
      </div>

      <div class="border rounded-md px-4 py-4">
        <div class="flex flex-row justify-between items-center">
          <h1 class="font-semibold text-xl">Informations de contact</h1>

          <svg version="1.1" class="w-4 h-4" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
               xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
               viewBox="0 0 59.985 59.985" style="enable-background:new 0 0 59.985 59.985;" xml:space="preserve">
            <g>
              <path d="M5.243,44.844L42.378,7.708l9.899,9.899L15.141,54.742L5.243,44.844z"/>
              <path d="M56.521,13.364l1.414-1.414c1.322-1.322,2.05-3.079,2.05-4.949s-0.728-3.627-2.05-4.949S54.855,0,52.985,0
                s-3.627,0.729-4.95,2.051l-1.414,1.414L56.521,13.364z"/>
              <path d="M4.099,46.527L0.051,58.669c-0.12,0.359-0.026,0.756,0.242,1.023c0.19,0.19,0.446,0.293,0.707,0.293
                c0.106,0,0.212-0.017,0.316-0.052l12.141-4.047L4.099,46.527z"/>
              <path d="M43.793,6.294l1.415-1.415l9.899,9.899l-1.415,1.415L43.793,6.294z"/>
            </g>
        </svg>

        </div>


        <p class="text-gray-500 my-4">
          yehadjialexis@gmail.com
        </p>

        <button class="text-blue-800 font-bold">
          Ajouter un numero de telephone
        </button>
      </div>

      <div class="border rounded-md px-4 py-4">
        <div class="flex flex-row justify-between items-center">
          <h1 class="font-semibold text-xl">Preferences de job</h1>

          <svg version="1.1" class="w-4 h-4" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
               xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
               viewBox="0 0 59.985 59.985" style="enable-background:new 0 0 59.985 59.985;" xml:space="preserve">
            <g>
              <path d="M5.243,44.844L42.378,7.708l9.899,9.899L15.141,54.742L5.243,44.844z"/>
              <path d="M56.521,13.364l1.414-1.414c1.322-1.322,2.05-3.079,2.05-4.949s-0.728-3.627-2.05-4.949S54.855,0,52.985,0
                s-3.627,0.729-4.95,2.051l-1.414,1.414L56.521,13.364z"/>
              <path d="M4.099,46.527L0.051,58.669c-0.12,0.359-0.026,0.756,0.242,1.023c0.19,0.19,0.446,0.293,0.707,0.293
                c0.106,0,0.212-0.017,0.316-0.052l12.141-4.047L4.099,46.527z"/>
              <path d="M43.793,6.294l1.415-1.415l9.899,9.899l-1.415,1.415L43.793,6.294z"/>
            </g>
        </svg>

        </div>


        <p class="text-gray-500 my-4">
          Les employeurs à la recherche de candidats peuvent les voir lorsque votre CV est rendu public.
        </p>

        <p class="text-gray-500 my-4">
          Enregistrez des détails spécifiques, tels que le salaire et les horaires souhaités, qui nous aideront à vous
          trouver de meilleurs emplois.
        </p>
      </div>
    </div>
    <p class="text-center absolute bottom-0 justify-center mb-12 mt-12 w-full">
      © 2022 <span class="underline"> job4all</span> - <span class="underline">Cookies, Privacy and Terms</span>
    </p>
  </div>
</template>

<script lang="ts">
import {ref} from 'vue'

export default {
  data(){
    return {
      uploading: false,
      cv: null,
    }
  },
  methods: {
    handleUpload() {
      document.getElementById('fileid').click();
    },
    async submitCv(event){
      this.uploading = true

      alert("axios will post now")

      // var myHeaders = new Headers();
      // myHeaders.append("apikey", "{API-KEY}");
      //
      // var requestOptions = {
      //   method: 'GET',

      //   redirect: 'follow',
      //   headers: myHeaders
      // };
      //
      // fetch("https://api.apilayer.com/resume_parser/url?url={url}", requestOptions)
      //   .then(response => response.text())
      //   .then(result => console.log(result))
      //   .catch(error => console.log('error', error));

      let data = await this.$axios.$post('http://127.0.0.1:7000/api/post-cv', event.target.files[0], {
        headers: {
          'Content-Type': 'application/json'
        }
      })

      console.log(data)
    }
  }
}
</script>

<style scoped>
.lds-spinner {
  color: official;
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-spinner div {
  transform-origin: 40px 40px;
  animation: lds-spinner 1.2s linear infinite;
}
.lds-spinner div:after {
  content: " ";
  display: block;
  position: absolute;
  top: 3px;
  left: 37px;
  width: 6px;
  height: 18px;
  border-radius: 20%;
  background: #000;
}
.lds-spinner div:nth-child(1) {
  transform: rotate(0deg);
  animation-delay: -1.1s;
}
.lds-spinner div:nth-child(2) {
  transform: rotate(30deg);
  animation-delay: -1s;
}
.lds-spinner div:nth-child(3) {
  transform: rotate(60deg);
  animation-delay: -0.9s;
}
.lds-spinner div:nth-child(4) {
  transform: rotate(90deg);
  animation-delay: -0.8s;
}
.lds-spinner div:nth-child(5) {
  transform: rotate(120deg);
  animation-delay: -0.7s;
}
.lds-spinner div:nth-child(6) {
  transform: rotate(150deg);
  animation-delay: -0.6s;
}
.lds-spinner div:nth-child(7) {
  transform: rotate(180deg);
  animation-delay: -0.5s;
}
.lds-spinner div:nth-child(8) {
  transform: rotate(210deg);
  animation-delay: -0.4s;
}
.lds-spinner div:nth-child(9) {
  transform: rotate(240deg);
  animation-delay: -0.3s;
}
.lds-spinner div:nth-child(10) {
  transform: rotate(270deg);
  animation-delay: -0.2s;
}
.lds-spinner div:nth-child(11) {
  transform: rotate(300deg);
  animation-delay: -0.1s;
}
.lds-spinner div:nth-child(12) {
  transform: rotate(330deg);
  animation-delay: 0s;
}
@keyframes lds-spinner {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}


</style>

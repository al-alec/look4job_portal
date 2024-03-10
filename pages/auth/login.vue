<template>
  <div class="min-h-screen justify-center flex flex-col items-center bg-gray-200 pt-8">

    <div class="flex flex-col justify-center w-11/12 sm:w-3/5 md:w-1/2 lg:w-3/5 xl:w-2/5">

      <LogoCard>
        <h1 class="text-lg lg:text-2xl font-bold">Pret pour la prochaine etape?</h1>
        <p class="mt-2 text-gray-400">Créer un compte ou connectez vous</p>

        <button class="border border-2 border-gray-300 justify-center rounded-md px-2 w-full my-4 py-2 flex flex-row items-center">
          <svg aria-hidden="true" class="native svg-icon iconGoogle ml-4" width="18" height="18" viewBox="0 0 18 18">
            <path
              d="M16.51 8H8.98v3h4.3c-.18 1-.74 1.48-1.6 2.04v2.01h2.6a7.8 7.8 0 002.38-5.88c0-.57-.05-.66-.15-1.18Z"
              fill="#4285F4"></path>
            <path d="M8.98 17c2.16 0 3.97-.72 5.3-1.94l-2.6-2a4.8 4.8 0 01-7.18-2.54H1.83v2.07A8 8 0 008.98 17Z"
                  fill="#34A853"></path>
            <path d="M4.5 10.52a4.8 4.8 0 010-3.04V5.41H1.83a8 8 0 000 7.18l2.67-2.07Z" fill="#FBBC05"></path>
            <path d="M8.98 4.18c1.17 0 2.23.4 3.06 1.2l2.3-2.3A8 8 0 001.83 5.4L4.5 7.49a4.77 4.77 0 014.48-3.3Z"
                  fill="#EA4335"></path>
          </svg>
          <span class="ml-8 text-md lg:text-xl text-gray-500">Continuer avec google</span>
        </button>

        <button class="border border-2 border-gray-300 rounded-md px-2 w-full py-2 flex flex-row items-center justify-center">
          <svg version="1.1" class="ml-4" id="Capa_1" xmlns="http://www.w3.org/2000/svg" width="18" height="18"
               xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
               viewBox="0 0 112.196 112.196" style="enable-background:new 0 0 112.196 112.196;" xml:space="preserve">
              <g>
                <circle style="fill:#3B5998;" cx="56.098" cy="56.098" r="56.098"/>
                <path style="fill:#FFFFFF;" d="M70.201,58.294h-10.01v36.672H45.025V58.294h-7.213V45.406h7.213v-8.34
                  c0-5.964,2.833-15.303,15.301-15.303L71.56,21.81v12.51h-8.151c-1.337,0-3.217,0.668-3.217,3.513v7.585h11.334L70.201,58.294z"/>
              </g>
          </svg>

          <span class="ml-8 text-md lg:text-xl text-gray-500">Continuer avec facebook</span>
        </button>

        <div class="flex flex-row justify-center items-center gap-2 my-6">
          <hr class="w-full border dorder-2 border-gray-300"/>
          <span>Ou</span>
          <hr class="w-full border dorder-2 border-gray-300"/>
        </div>

        <div>
          <div class="flex flex-col gap-2">
            <label class="text-lg font-semibold">Adresse email *</label>
            <input type="email" class="border border-gray-400 rounded-lg text-xl px-4 py-4"
                   placeholder="Votre adresse mail"/>
          </div>

          <div class="flex flex-col mt-4">
            <button @click="handleLogin"
                    class="flex flex-row bg-blue-600 hover:bg-blue-800 w-full py-4 text-white justify-center rounded-lg items-center gap-2">
              <span>Continuer</span>
              <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 12L20 12L14 18M14 6L17 9" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round"
                      stroke-linejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </LogoCard>

      <DownloadAppSection/>
    </div>
  </div>
</template>


<script setup lang="ts">

import { ref } from "vue"
import { useRouter} from 'vue-router';
import LogoCard from "@/components/core/LogoCard.vue";
import DownloadAppSection from "@/components/core/DownloadAppSection.vue";
const router = useRouter()

const openNav = () => {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

const closeNav = () => {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
  document.body.style.backgroundColor = "white";
}


const handleLogin = () => {
  router.push('/auth/password')
}
</script>

<style>

</style>

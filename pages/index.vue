<template>
  <div class="relative">
    <nav class="flex sticky top-0 bg-white z-10 relative flex-row items-center text-sm font-semibold border-b-2 w-full">
      <img src="~/assets/logo.png" class="w-24 ml-2"/>
      <div class="justify-between flex flex-row items-center w-full mt-4 px-5">
        <ul class="hidden lg:flex flex-row gap-4 items-center">
          <li>
            Trouver emplois
            <div class="w-16 h-1 rounded-lg bg-blue-500 absolute bottom-0"></div>
          </li>
          <li>Entreprises</li>
          <li>Rechercher des salaires</li>
        </ul>

        <ul class="hidden lg:flex flex-row gap-4">
          <li>Uploader votre CV</li>
          <li class="text-blue-500 font-bold">
            <router-link to="/auth/login" class="text-blue-500 hover:underline cursor-pointer">
            Se connecter
            </router-link>
          </li>
          <li>|</li>
          <li>Employeur / Rechercher talent</li>
        </ul>
      </div>
      <div class="flex flex-row lg:hidden mr-4">
        <button class="bg-blue-800 text-white flex items-center mr-6 px-8 py-2 flex-row rounded-lg">
          S'inscrire
        </button>
        <button>
          <svg version="1.1" class="w-8 h-8 text-white" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
               viewBox="0 0 384.97 384.97" style="enable-background:new 0 0 384.97 384.97;" xml:space="preserve">
              <g>
                <g id="Menu_1_">
                  <path d="M12.03,120.303h360.909c6.641,0,12.03-5.39,12.03-12.03c0-6.641-5.39-12.03-12.03-12.03H12.03
                    c-6.641,0-12.03,5.39-12.03,12.03C0,114.913,5.39,120.303,12.03,120.303z"/>
                  <path d="M372.939,180.455H12.03c-6.641,0-12.03,5.39-12.03,12.03s5.39,12.03,12.03,12.03h360.909c6.641,0,12.03-5.39,12.03-12.03
                    S379.58,180.455,372.939,180.455z"/>
                  <path d="M372.939,264.667H132.333c-6.641,0-12.03,5.39-12.03,12.03c0,6.641,5.39,12.03,12.03,12.03h240.606
                    c6.641,0,12.03-5.39,12.03-12.03C384.97,270.056,379.58,264.667,372.939,264.667z"/>
                </g>
              </g>
          </svg>

        </button>
      </div>
    </nav>

    <!--    section-->
    <section class="relative flex flex-col">
      <div class="flex flex-row justify-center mt-12">
        <img class="w-1/2" src="~assets/hero.svg"/>
      </div>
      <h1 class="text-center my-2 text-3xl px-2 mb-4 font-bold">Des <span
        class="text-purple-800">emplois</span> et des <span
        class="text-purple-800">talents </span> que vous ne trouverez nulle part ailleurs</h1>
      <p class="text-center text-xl underline underline-offset-4 cursor-pointer">Votre prochain job n'attend que vous.
        Créer un compte</p>
    </section>

    <section class="flex flex-col pb-12 border-b-2 pl-4 justify-center">
      <div class="flex flex-col lg:flex-row mx-4 pt-12 justify-center gap-4">
        <div class="flex relative w-full lg:w-1/4">
          <span type="submit" class="absolute left-2 top-3 ml-2 text-gray-300">
            Quoi?
          </span>
          <input
            class="border-2 border-blue-400 bg-red transition h-12 px-5 pl-16 pr-16 rounded-md focus:outline-none w-full text-black text-lg "
            type="search" name="search" placeholder="Poste, mot clé, ou nom entreprise"/>
          <button type="submit" class="absolute right-2 top-3 mr-4">
            <svg version="1.1" class="text-blue-400 h-6 w-6 fill-current" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                 viewBox="0 0 53.627 53.627" style="enable-background:new 0 0 53.627 53.627;" xml:space="preserve">
                  <path d="M53.627,49.385L37.795,33.553C40.423,30.046,42,25.709,42,21C42,9.42,32.58,0,21,0S0,9.42,0,21s9.42,21,21,21
                    c4.709,0,9.046-1.577,12.553-4.205l15.832,15.832L53.627,49.385z M2,21C2,10.523,10.523,2,21,2s19,8.523,19,19s-8.523,19-19,19
                    S2,31.477,2,21z M35.567,36.093c0.178-0.172,0.353-0.347,0.525-0.525c0.146-0.151,0.304-0.29,0.445-0.445l14.262,14.262
                    l-1.415,1.415L35.123,36.537C35.278,36.396,35.416,36.238,35.567,36.093z"/>
            </svg>

          </button>
        </div>


        <div class="flex relative w-full items-center lg:w-1/4">
          <span type="submit" class="absolute left-2 top-3 ml-2 text-gray-300">
            Ou?
          </span>
          <input
            class="border-2 border-blue-400 bg-red transition h-12 px-5 pr-16 pl-16 rounded-md focus:outline-none w-full text-black text-lg "
            type="search" name="search" placeholder="Ville, quartier"/>
          <button type="submit" class="absolute right-2 top-3 mr-4">
            <svg class="text-blue-400 h-6 w-6 fill-current" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                 viewBox="0 0 368.666 368.666" style="enable-background:new 0 0 368.666 368.666;" xml:space="preserve">
                <g id="XMLID_2_">
                  <g>
                    <g>
                      <path d="M184.333,0C102.01,0,35.036,66.974,35.036,149.297c0,33.969,11.132,65.96,32.193,92.515
                        c27.27,34.383,106.572,116.021,109.934,119.479l7.169,7.375l7.17-7.374c3.364-3.46,82.69-85.116,109.964-119.51
                        c21.042-26.534,32.164-58.514,32.164-92.485C333.63,66.974,266.656,0,184.333,0z M285.795,229.355
                        c-21.956,27.687-80.92,89.278-101.462,110.581c-20.54-21.302-79.483-82.875-101.434-110.552
                        c-18.228-22.984-27.863-50.677-27.863-80.087C55.036,78.002,113.038,20,184.333,20c71.294,0,129.297,58.002,129.296,129.297
                        C313.629,178.709,304.004,206.393,285.795,229.355z"/>
                      <path d="M184.333,59.265c-48.73,0-88.374,39.644-88.374,88.374c0,48.73,39.645,88.374,88.374,88.374s88.374-39.645,88.374-88.374
                        S233.063,59.265,184.333,59.265z M184.333,216.013c-37.702,0-68.374-30.673-68.374-68.374c0-37.702,30.673-68.374,68.374-68.374
                        s68.373,30.673,68.374,68.374C252.707,185.341,222.035,216.013,184.333,216.013z"/>
                    </g>
                  </g>
                </g>

          </svg>

          </button>
        </div>

        <button class="bg-blue-400 text-white px-2 rounded-lg hover:bg-blue-500 focus:ring-4 py-2 uppercase">Trouver un emploi</button>

      </div>
      <p class="text-center mt-6">
        <router-link to="/auth/login" class="text-blue-500 hover:underline cursor-pointer">Uploader votre CV</router-link> - Ca ne va prendre que quelques secondes
      </p>
      <p class="text-center mt-6"><a class="text-blue-500">Vous etes employé?</a> - Rechercher un talent  </p>
    </section>


    <section class="mb-4">
      <div class="justify-center flex flex-row">
        <h1 class="text-xl font-bold mt-2 mb-2">Recherches populaires</h1>
      </div>
      <div class="flex flex-row px-2 gap-2 flex-wrap justify-center">
        <button v-for="i in populaires" class="bg-gray-200 px-2 py-2 rounded-lg flex flex-row items-center gap-1">
          <svg version="1.1" class="text-black h-4 w-4  fill-current" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
               viewBox="0 0 53.627 53.627" style="enable-background:new 0 0 53.627 53.627;" xml:space="preserve">
                  <path d="M53.627,49.385L37.795,33.553C40.423,30.046,42,25.709,42,21C42,9.42,32.58,0,21,0S0,9.42,0,21s9.42,21,21,21
                    c4.709,0,9.046-1.577,12.553-4.205l15.832,15.832L53.627,49.385z M2,21C2,10.523,10.523,2,21,2s19,8.523,19,19s-8.523,19-19,19
                    S2,31.477,2,21z M35.567,36.093c0.178-0.172,0.353-0.347,0.525-0.525c0.146-0.151,0.304-0.29,0.445-0.445l14.262,14.262
                    l-1.415,1.415L35.123,36.537C35.278,36.396,35.416,36.238,35.567,36.093z"/>
            </svg>
          <span> {{ i }} </span>
        </button>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">

import { ref } from "vue"
// import NavBar from '~/components/core/NavBar.vue'

let open = ref(false)
let populaires = ref(['Server', 'Remote', 'Backend developer', 'MySQL', 'UI/UX Designer'])

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
  document.body.style.backgroundColor = "white";
}

</script>

<style scoped>
nav li{
  cursor: pointer;
}
</style>



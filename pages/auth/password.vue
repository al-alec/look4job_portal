<template>
  <div class="h-screen justify-center flex flex-col items-center bg-gray-200">

    <div class="flex flex-col justify-center w-11/12 sm:w-3/5 md:w-1/2 lg:w-3/5 xl:w-1/4">
    <LogoCard>
      <h1 class="text-2xl font-bold">Creer votre compte</h1>
      <p class="mt-2 mb-2 text-gray-400">Créer votre compte avec <span class="font-bold">test@test.com</span></p>

      <div>
        <form>
          <div class="flex flex-col">
            <label class="text-lg font-semibold">Mot de passe *</label>
            <span class="text-gray-400 my-2">Utilisez au moin 8 caracteres</span>
            <input type="password" class="border border-gray-400 rounded-lg text-xl px-4 py-4"
                   placeholder="Definissez un mot de passe"/>
          </div>

          <p class="text-gray-500 my-2">
            Lorsque vous créez un compte ou que vous vous connectez, vous acceptez les <span class="underline text-blue-400 cursor-pointer">Conditions</span>, les <span class="underline text-blue-400 cursor-pointer">politiques de cookies</span> et de <span class="underline text-blue-400 cursor-pointer">confidentialité</span> de job4all. Vous acceptez de recevoir des messages marketing de la part de job4all et pouvez refuser de recevoir de tels messages en suivant le lien de désinscription figurant dans nos messages, ou comme indiqué dans nos conditions.
          </p>

          <div class="flex flex-col mt-4">
            <button @click.prevent="handleLogin"
                    class="flex flex-row bg-blue-600 hover:bg-blue-800 w-full py-4 text-white justify-center rounded-lg items-center gap-2">
              <span>Continuer</span>
              <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 12L20 12L14 18M14 6L17 9" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round"
                      stroke-linejoin="round"/>
              </svg>
            </button>
          </div>
        </form>
      </div>
    </LogoCard>

      <DownloadAppSection/>
  </div>
  </div>
</template>

<script lang="ts">
import {ref} from 'vue'
import {useRoute, useRouter} from 'vue-router'
import LogoCard from "@/components/core/LogoCard.vue";
import DownloadAppSection from "@/components/core/DownloadAppSection.vue";

export default {
  components: {DownloadAppSection, LogoCard},
  setup() {

    const router = useRouter()

    const handleLogin = async () => {
      return router.push('/cv')
    }

    return {
      handleLogin
    }
  }
}

</script>

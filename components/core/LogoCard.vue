<template>
  <div class="border border-2 bg-white mt-2 border-gray-300 py-12 px-8 rounded-lg flex flex-col">
    <div class="w-full flex flex-row justify-center mb-8">
      <img src="~/assets/logo.png" class="w-24 ml-2 rounded-lg"/>
    </div>
    <slot/>
  </div>
</template>

<script>
export default {
  name: "LogoCard"
}
</script>

<style scoped>

</style>

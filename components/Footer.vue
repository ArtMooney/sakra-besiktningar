<script setup>
import { HeartIcon } from "@heroicons/vue/24/solid";
import imageLogo from "assets/images/sakra-logo.png";
</script>

<template>
  <div class="relative m-6 flex flex-col items-center">
    <router-link to="/">
      <img
        :src="imageLogo"
        alt="footer logo"
        class="relative mr-2 mb-3 h-auto w-32"
      />
    </router-link>

    <div class="flex items-center gap-4">
      <router-link to="/" class="pt-0.5 hover:underline">Hem</router-link>
      <router-link to="/" class="pt-0.5 hover:underline">Tjänster</router-link>
      <router-link to="/" class="pt-0.5 hover:underline"
        >Kontakta oss
      </router-link>
    </div>

    <div class="my-4 w-1/3 border-t border-gray-300"></div>

    <a
      class="bottom-3 col-span-1 flex text-xs opacity-50 hover:text-black/75 md:col-span-3"
      href="https://www.framecore.se"
      target="_blank"
    >
      Powered by
      <span><HeartIcon class="h-4 w-4 px-0.5 text-red-600"></HeartIcon></span>
      FrameCore
    </a>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

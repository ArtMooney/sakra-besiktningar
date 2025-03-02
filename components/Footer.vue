<script setup>
import { HeartIcon } from "@heroicons/vue/24/solid";
import imageLogo from "assets/images/sakra-logo.png";
</script>

<template>
  <div
    class="relative grid grid-cols-1 place-items-center gap-4 py-12 text-center text-neutral-400 no-underline md:grid-cols-3 md:px-28 md:text-start lg:py-24 xl:px-72"
  >
    <div class="absolute top-0 right-0 bottom-0 left-0 bg-[#31382df5]/80"></div>

    <router-link to="/">
      <img
        :src="imageLogo"
        alt="footer logo"
        class="relative mb-6 h-36 min-h-36 w-36 min-w-36 md:mb-4 md:h-40 md:min-h-40 md:w-40 md:min-w-40"
      />
    </router-link>

    <div class="relative flex flex-col">
      <router-link class="mb-3 hover:text-neutral-300" to="/"
        >Dokument
      </router-link>
      <router-link class="mb-3 hover:text-neutral-300" to="/"
        >Hemvärnsgården
      </router-link>
      <router-link class="mb-3 hover:text-neutral-300" to="/"
        >Bli medlem
      </router-link>
    </div>

    <div
      class="relative col-span-1 my-12 h-0.5 w-2/3 bg-neutral-500/75 md:col-span-3"
    ></div>

    <a
      class="absolute bottom-3 col-span-1 flex text-xs text-white/50 opacity-50 hover:text-white/75 md:col-span-3"
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

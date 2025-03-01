<script setup>
import Button from "./elements/Button.vue";
import imageLogo from "../assets/images/färdig jpeg.png";
import { Bars2Icon, XMarkIcon } from "@heroicons/vue/24/solid";
</script>

<template>
  <div
    id="navbar"
    class="font-gunplay relative z-10 flex items-center justify-between bg-white p-4 py-2"
  >
    <router-link to="/">
      <img
        :src="imageLogo"
        alt="navbar logo"
        class="h-auto w-24 p-1 md:w-32 md:p-2"
      />
    </router-link>

    <Bars2Icon
      @click="showNavbar = !showNavbar"
      class="block h-8 w-8 cursor-pointer md:hidden"
    />

    <div
      class="fixed top-0 right-0 bottom-0 left-0 flex flex-col justify-center gap-5 bg-white p-4 pb-10 text-center md:static md:flex-row md:items-center md:bg-transparent md:p-0"
      :class="showNavbar ? 'absolute md:flex' : 'hidden md:flex'"
    >
      <XMarkIcon
        v-if="showNavbar"
        @click="showNavbar = !showNavbar"
        class="absolute top-4 right-4 h-8 w-8 cursor-pointer"
      />

      <NuxtLink to="/" class="hover:underline"> Hem</NuxtLink>
      <NuxtLink to="/" class="hover:underline">Tjänster</NuxtLink>
      <Button text="Kontakta oss" link="/contact" type="button" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",

  data() {
    return {
      showNavbar: false,
    };
  },
};
</script>

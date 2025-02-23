<script setup>
import Button from "./elements/Button.vue";
import imageLogo from "../assets/images/färdig jpeg.png";
import { IonIcon } from "@ionic/vue";
import { menuOutline } from "ionicons/icons";
</script>

<template>
  <div
    id="navbar"
    class="relative z-10 flex items-center justify-between bg-white p-4 py-2 font-gunplay"
  >
    <router-link to="/">
      <img :src="imageLogo" alt="navbar logo" class="h-auto w-24 md:w-32" />
    </router-link>

    <ClientOnly>
      <ion-icon
        @click="showNavbar = !showNavbar"
        :icon="menuOutline"
        class="h-10 w-10 md:hidden block"
      ></ion-icon>
    </ClientOnly>

    <div
      class="absolute inset-0 top-32 text-center flex flex-col gap-5 bg-white p-6 pt-14 md:static md:flex-row md:items-center md:bg-transparent md:p-0"
    >
      <NuxtLink to="/" class="hover:underline"> Hem</NuxtLink>
      <NuxtLink to="/" class="hover:underline">Services</NuxtLink>
      <Button text="Kontakta" link="/contact" type="button" />
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

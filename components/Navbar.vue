<script setup>
import Button from "./elements/Button.vue";
import imageLogo from "../assets/images/färdig jpeg.png";
import { IonIcon } from "@ionic/vue";
import { menuOutline, closeOutline } from "ionicons/icons";
</script>

<template>
  <div
    id="navbar"
    class="font-gunplay relative z-10 flex items-center justify-between bg-white p-4 py-2"
  >
    <router-link to="/">
      <img :src="imageLogo" alt="navbar logo" class="h-auto w-24 md:w-32" />
    </router-link>

    <ClientOnly>
      <ion-icon
        @click="showNavbar = !showNavbar"
        :icon="menuOutline"
        class="block h-8 w-8 md:hidden"
      ></ion-icon>
    </ClientOnly>

    <div
      class="fixed top-0 right-0 bottom-0 left-0 flex flex-col justify-center gap-5 bg-white p-4 pb-10 text-center md:static md:flex-row md:items-center md:bg-transparent md:p-0"
      :class="showNavbar ? 'absolute md:flex' : 'hidden md:flex'"
    >
      <ClientOnly>
        <ion-icon
          @click="showNavbar = !showNavbar"
          :icon="closeOutline"
          class="absolute top-4 right-4 h-8 w-8 cursor-pointer"
        ></ion-icon>
      </ClientOnly>
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

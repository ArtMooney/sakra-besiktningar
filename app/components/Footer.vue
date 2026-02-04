<script setup>
import { HeartIcon } from "@heroicons/vue/24/solid";

const staticContentStore = useStaticContentStore();
const staticContent = computed(
  () => staticContentStore.getContentByTitle("component - Footer").content,
);
</script>

<template>
  <div class="relative m-6 flex flex-col items-center">
    <router-link to="/">
      <NuxtImg
        src="sakra-logo.png"
        alt="footer logo"
        class="relative mr-2 mb-4 h-auto w-32"
        sizes="536px"
        width="536"
        height="245"
        densities="x1"
      />
    </router-link>

    <div class="flex items-center gap-4">
      <router-link
        to="/"
        class="pt-0.5 hover:underline"
        :class="[currentPath === '/' && 'border-t-3 border-t-[#ffc000]']"
      >
        {{ staticContent.buttons.home }}
      </router-link>

      <router-link
        to="/tjanster"
        class="pt-0.5 hover:underline"
        :class="[
          currentPath === '/tjanster' && 'border-t-3 border-t-[#ffc000]',
        ]"
      >
        {{ staticContent.buttons.services }}
      </router-link>

      <router-link
        to="/kontakta-oss"
        class="pt-0.5 hover:underline"
        :class="[
          currentPath === '/kontakta-oss' && 'border-t-3 border-t-[#ffc000]',
        ]"
      >
        {{ staticContent.buttons.contactUs }}
      </router-link>

      <router-link
        to="/admin"
        class="pt-0.5 hover:underline"
        :class="[currentPath === '/admin' && 'border-t-3 border-t-[#ffc000]']"
      >
        Admin
      </router-link>
    </div>

    <CompanyInfo class="mt-10" />

    <div class="my-4 w-1/3 border-t border-gray-300"></div>

    <a
      class="bottom-3 col-span-1 flex text-xs opacity-20 hover:text-black/75 md:col-span-3"
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

  computed: {
    currentPath() {
      return this.$route.path;
    },
  },
};
</script>

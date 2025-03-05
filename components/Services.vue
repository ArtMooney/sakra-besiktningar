<script setup>
import { ChevronDoubleDownIcon } from "@heroicons/vue/24/solid";
</script>

<template>
  <div>
    <ServicesTop />
    <ServicesBottom />

    <ChevronDoubleDownIcon
      class="fixed bottom-4 left-4 h-12 w-12 text-white transition-opacity duration-500 ease-in-out"
      :class="[fadeOutDownIcon && 'opacity-0']"
    />
  </div>
</template>

<script>
export default {
  name: "Services",

  data() {
    return {
      fadeOutDownIcon: false,
    };
  },

  methods: {
    handleScroll() {
      const scrolled = window.scrollY;
      if (scrolled > 500) {
        this.fadeOutDownIcon = true;
      }
    },
  },

  beforeMount() {
    window.addEventListener("scroll", this.handleScroll);
  },

  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

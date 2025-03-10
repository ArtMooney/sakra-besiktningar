<script setup>
import { ChevronDownIcon } from "@heroicons/vue/24/solid";
</script>

<template>
  <div class="relative overflow-hidden">
    <h2
      class="absolute right-auto left-auto z-1 mt-24 w-full px-4 text-center text-4xl text-white md:text-6xl lg:mt-20"
    >
      Kontakta oss
    </h2>

    <div class="h-[60vh] w-full">
      <img
        src="../assets/images/portar.jpg"
        alt=""
        class="relative h-full w-full object-cover"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "PointBlock",

  props: {
    title: {
      type: String,
      required: false,
    },
    pointLines: {
      type: Array,
      required: false,
    },
  },

  data() {
    return {
      accordionOpen: false,
      clickedIndex: 0,
    };
  },

  methods: {
    toggleAccordion(index) {
      this.clickedIndex = index;
      this.accordionOpen = !this.accordionOpen;
    },
  },
};
</script>

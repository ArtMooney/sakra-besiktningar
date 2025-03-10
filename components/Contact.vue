<script setup>
import { ChevronDownIcon } from "@heroicons/vue/24/solid";
</script>

<template>
  <div class="h-96 bg-[coral]">KONTAKTA OSS</div>
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

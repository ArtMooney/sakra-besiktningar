<script setup>
import IconChevronDown from "~icons/gg/chevron-down";
</script>

<template>
  <div>
    <div
      class="flex cursor-pointer items-center justify-between sm:justify-start"
      @click="accordionOpen = !accordionOpen"
    >
      <div class="mb-1 flex items-center justify-center gap-2">
        <p v-html="title" class="font-semibold select-none"></p>

        <IconChevronDown
          class="size-5 shrink-0 transition-transform duration-200 ease-in-out"
          :class="[accordionOpen && 'rotate-180']"
        />
      </div>
    </div>

    <div
      class="grid transition-all duration-300 ease-in-out"
      :class="accordionOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'"
    >
      <div class="overflow-hidden">
        <p v-html="formatText(text)"></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Accordion",

  props: {
    title: {
      type: String,
      required: false,
    },
    text: {
      type: String,
      required: false,
    },
  },

  data() {
    return {
      accordionOpen: false,
    };
  },
};
</script>

<template>
  <div class="relative my-8 w-full border-neutral-200 px-4">
    <div class="flex flex-col bg-neutral-100 p-8 px-8 shadow-md">
      <div class="flex cursor-pointer flex-col items-start justify-between">
        <h4 v-if="title" class="mt-2 mb-6 font-bold">{{ title }}</h4>

        <p v-html="formatText(text)"></p>
      </div>
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
    text: {
      type: String,
      required: false,
    },
  },
};
</script>

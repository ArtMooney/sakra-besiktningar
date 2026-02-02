<template>
  <div class="flex text-left sm:px-0">
    <div class="flex flex-col gap-2 bg-white p-8 sm:max-w-[95%]">
      <h4 v-if="title" class="font-bold">{{ title }}</h4>

      <p v-html="formatText(text)" class="leading-8"></p>
    </div>
  </div>
</template>

<script>
export default {
  name: "PointBlob",

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

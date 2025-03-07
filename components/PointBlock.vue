<template>
  <div class="relative my-8 w-full border-neutral-200 px-4">
    <div class="flex flex-col bg-neutral-100 p-8 px-8 shadow-md">
      <h4 v-if="title" class="font-bold">{{ title }}</h4>

      <ul v-if="pointLines" class="flex flex-col space-y-4 leading-normal">
        <li v-for="line in pointLines" v-html="line"></li>
      </ul>
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
};
</script>

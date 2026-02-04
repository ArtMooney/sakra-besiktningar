<template>
  <div class="flex text-left sm:px-0">
    <div class="flex flex-col gap-2 bg-white p-8 sm:max-w-[95%]">
      <h4 v-if="title" class="font-bold">{{ title }}</h4>

      <div v-html="splitText(text)" class="[&_p]:mb-4"></div>
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

  methods: {
    splitText(text) {
      const lines = formatText(text).split("<br>");
      const elements = lines.map(
        (line) => `<p >${line.replace(/\*/g, "•")}</p>`,
      );

      return elements.join("");
    },
  },
};
</script>

<script setup>
import { ChevronDoubleDownIcon } from "@heroicons/vue/24/solid";

const staticContentStore = useStaticContentStore();
const staticContent = computed(
  () => staticContentStore.getContentByTitle("component - Services").content,
);
</script>

<template>
  <div class="relative overflow-hidden">
    <div
      class="absolute inset-0 -mt-12 flex flex-col items-center overflow-hidden"
    >
      <NuxtImg
        src="modern-office-elevators.jpg"
        alt="futuristic background image with lots of elevators"
        class="parallax-background h-[130rem] w-full object-cover sm:h-[130rem]"
        sizes="1000px md:2000px"
        width="2000"
        height="3000"
        densities="x1"
        placeholder
      />
    </div>

    <div class="absolute inset-0 flex items-center overflow-hidden opacity-30">
      <NuxtImg
        src="flat-clouds.png"
        alt="an extra background layer with clouds"
        class="parallax-clouds h-full w-full object-cover"
        sizes="1000px md:2000px"
        width="2000"
        height="3000"
        loading="lazy"
      />
    </div>

    <div
      class="relative mt-12 mb-20 flex h-[50vh] flex-col items-center justify-center px-8 text-center"
    >
      <h2 class="bg-white px-20 pt-5 pb-3 text-4xl md:text-6xl">
        {{ staticContent.heading.title }}
      </h2>
    </div>

    <div class="relative flex w-full justify-end">
      <ChevronDoubleDownIcon
        class="mr-4 mb-2 h-12 w-12 max-w-screen-2xl text-white transition-opacity duration-500 ease-in-out"
        :class="[fadeOutDownIcon && 'opacity-0']"
      />
    </div>

    <PointBlob
      class="relative mb-32 justify-end pl-4"
      :title="staticContent.pointBlock1.title"
      :text="formatText(staticContent.pointBlock1.text)"
    />

    <PointBlob
      class="relative mb-32 justify-start pr-4"
      :title="staticContent.pointBlock2.title"
      :text="formatText(staticContent.pointBlock2.text)"
    />

    <PointBlob
      class="relative mb-32 justify-end pl-4"
      :title="staticContent.pointBlock3.title"
      :text="formatText(staticContent.pointBlock3.text)"
    />

    <PointBlob
      class="relative mb-32 justify-start pr-4"
      :title="staticContent.pointBlock4.title"
      :text="formatText(staticContent.pointBlock4.text)"
    />

    <PointBlob
      class="relative mb-32 justify-end pl-4"
      :title="staticContent.pointBlock5.title"
      :text="formatText(staticContent.pointBlock5.text)"
    />
  </div>

  <PointBlock
    :title="staticContent.pointBlock6.title"
    :text="formatText(staticContent.pointBlock6.text)"
  />

  <PointBlock
    :title="staticContent.pointBlock7.title"
    :text="formatText(staticContent.pointBlock7.text)"
  />

  <div class="relative my-8 w-full border-neutral-200 px-4">
    <div class="flex flex-col bg-neutral-100 p-8 px-8 shadow-md">
      <div
        class="flex cursor-pointer flex-col items-start justify-between gap-5"
      >
        <h4 class="mt-2 mb-6 font-bold">
          {{ staticContent.Accordion1.title }}
        </h4>

        <Accordion
          :title="staticContent.Accordion1.title"
          :text="formatText(staticContent.Accordion1.text)"
        />

        <Accordion
          :title="staticContent.Accordion2.title"
          :text="formatText(staticContent.Accordion2.text)"
        />

        <Accordion
          :title="staticContent.Accordion3.title"
          :text="formatText(staticContent.Accordion3.text)"
        />

        <Accordion
          :title="staticContent.Accordion4.title"
          :text="formatText(staticContent.Accordion4.text)"
        />
      </div>
    </div>
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

      const parallaxElements = document.querySelectorAll(
        ".parallax-background, .parallax-clouds",
      );

      parallaxElements.forEach(function (el, index) {
        const rate = index === 0 ? 0.65 : 0.5;
        const translateY = scrolled * rate;
        el.style.transform = `translateY(${translateY}px)`;
      });
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

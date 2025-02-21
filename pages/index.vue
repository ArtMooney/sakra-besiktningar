<template>
  <div class="w-full h-[200vh]">
    <div
      class="absolute bottom-0 left-0 right-0 top-0 flex items-center overflow-hidden"
    >
      <img
        src="../assets/images/sky_3000px.jpg"
        alt=""
        class="parallax-background h-full w-full object-cover"
      />
    </div>

    <div
      class="absolute bottom-0 left-0 right-0 top-0 bg-gradient-to-b from-neutral-900 to-black/75 sm:to-black/50"
    ></div>

    <img
      src="../assets/images/kund/hiss_fri.png"
      class="object-contain w-full h-full relative"
    />
  </div>
</template>

<script>
export default {
  name: "StartPage",
  setup() {
    definePageMeta({
      ssr: true,
    });
  },

  methods: {
    handleScroll() {
      const scrolled = window.scrollY;
      const parallaxElements = document.querySelectorAll(
        ".parallax-background",
      );
      parallaxElements.forEach(function (el) {
        const rate = 0.25;
        const translateY = scrolled * rate;
        el.style.transform = `translateY(${translateY}px)`;
      });
    },
  },
};
</script>

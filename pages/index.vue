<template>
  <div class="w-full h-screen">
    <img
      src="../assets/images/sky_3000px.jpg"
      class="object-cover w-full h-full"
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

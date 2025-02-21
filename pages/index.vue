<template>
  <div class="relative">
    <div class="absolute inset-0 flex items-center overflow-hidden">
      <img
        src="../assets/images/sky_3000px.jpg"
        alt=""
        class="parallax-background h-full w-full"
      />
    </div>

    <div class="absolute inset-0 flex items-center overflow-hidden">
      <img
        src="../assets/images/flat_clouds.png"
        alt=""
        class="parallax-clouds h-full w-full"
      />
    </div>

    <img
      src="../assets/images/hiss_fri.png"
      class="object-contain w-full h-full relative"
    />

    <img
      src="../assets/images/hiss_fri.png"
      class="object-contain w-full h-full relative"
    />

    <img
      src="../assets/images/hiss_fri.png"
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

    handleScrollClouds() {
      const scrolled = window.scrollY;
      const parallaxElements = document.querySelectorAll(".parallax-clouds");
      parallaxElements.forEach(function (el) {
        const rate = 0.15;
        const translateY = scrolled * rate;
        el.style.transform = `translateY(${translateY}px)`;
      });
    },
  },

  beforeMount() {
    window.addEventListener("scroll", this.handleScroll);
    window.addEventListener("scroll", this.handleScrollClouds);
  },

  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
    window.removeEventListener("scroll", this.handleScrollClouds);
  },
};
</script>

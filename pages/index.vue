<template>
  <div class="relative">
    <div class="absolute inset-0 flex items-center overflow-hidden">
      <img
        src="../assets/images/sky_3000px.jpg"
        alt=""
        class="parallax-background h-full w-full"
      />
    </div>

    <img
      src="../assets/images/kund/hiss_fri.png"
      class="object-contain w-full h-full relative"
    />

    <img
      src="../assets/images/kund/hiss_fri.png"
      class="object-contain w-full h-full relative"
    />

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
        const rate = 0.2;
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

<template>
  <div class="relative">
    <div class="absolute inset-0 flex items-center overflow-hidden">
      <img
        src="../assets/images/sky_3000px.jpg"
        alt=""
        class="parallax-background h-full w-full object-cover"
      />
    </div>

    <div class="absolute inset-0 flex items-center overflow-hidden">
      <img
        src="../assets/images/flat_clouds.png"
        alt=""
        class="parallax-clouds h-full w-full object-cover"
      />
    </div>

    <div
      class="relative flex h-[60vh] flex-col items-center justify-center px-8 text-white"
    >
      <h1 class="text-6xl">Säkra besiktningar</h1>
      <p>-Ackrediterad besiktning</p>
    </div>

    <img
      src="../assets/images/hiss_fri.png"
      class="relative h-full w-full object-cover"
    />
  </div>
</template>

<script>
export default {
  name: "Home",
  methods: {
    handleScroll() {
      const scrolled = window.scrollY;
      const parallaxElements = document.querySelectorAll(
        ".parallax-background, .parallax-clouds",
      );

      parallaxElements.forEach(function (el, index) {
        const rate = index === 0 ? 0.4 : 0.2;
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

<template>
  <div class="relative overflow-hidden pb-96">
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
      class="relative flex h-[50vh] flex-col items-center justify-center px-8 text-center text-white"
    >
      <h1 class="text-4xl md:text-6xl">Säkra besiktningar</h1>
      <p>-Ackrediterad besiktning</p>
    </div>

    <img
      src="../assets/images/hiss_fri.png"
      class="relative h-full w-full min-w-[200vw] -translate-x-20 object-cover sm:min-w-0 sm:translate-x-0"
    />

    <div
      class="relative mt-20 grid place-items-center px-4 text-left sm:mt-12 sm:grid-cols-2 sm:px-8"
    >
      <div
        class="flex flex-col gap-2 bg-white p-8 sm:col-start-2 sm:col-end-2 sm:max-w-96"
      >
        <p class="font-bold">Besiktning</p>
        <p>
          Vi utför ackrediterad och oberoende besiktning av hissar, portar och
          lyftanordningar. Vi bidrar till ert arbete med att göra era
          anordningar säkra, funktionsdugliga samt att de uppfyller gällande
          krav från lagstiftning.
        </p>
      </div>
    </div>

    <img
      src="../assets/images/hookblock-rotated.png"
      class="relative -mt-20 h-auto w-full object-cover md:-mt-96"
    />

    <div
      class="relative -mt-20 grid place-items-center px-4 text-left sm:grid-cols-2 sm:px-8 md:-mt-48 lg:-mt-[32rem]"
    >
      <div
        class="flex flex-col gap-2 bg-white p-8 sm:col-start-1 sm:col-end-1 sm:max-w-96"
      >
        <p class="font-bold">Lokal Partner</p>
        <p>
          Genom att anlita Säkra besiktningar så gynnar ni en lokal aktör som
          prioriterar era behov och levererar pålitliga tjänster.
        </p>
      </div>
    </div>

    <div
      class="relative mt-20 grid place-items-center px-4 text-left sm:mt-12 sm:grid-cols-2 sm:px-8"
    >
      <div
        class="flex flex-col gap-2 bg-white p-8 sm:col-start-2 sm:col-end-2 sm:max-w-96"
      >
        <p class="font-bold">Personlig Service</p>
        <p>
          Vi erbjuder personlig kontakt och flexibla lösningar anpassade till
          era behov. Vi strävar efter att erbjuda tjänster som matchar era
          önskemål för att skapa en smidig och professionell process.
        </p>
      </div>
    </div>
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

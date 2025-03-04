<script setup>
import { ChevronDoubleDownIcon } from "@heroicons/vue/24/solid";
</script>

<template>
  <div class="relative h-[100vh] overflow-hidden pb-96">
    <div class="absolute inset-0 flex items-center overflow-hidden">
      <img
        src="../assets/images/tractor-in-field.jpg"
        alt=""
        class="parallax-background -mt-12 h-full w-full object-cover"
      />
    </div>

    <!--    <div class="absolute inset-0 flex items-center overflow-hidden">-->
    <!--      <img-->
    <!--        src="../assets/images/flat_clouds.png"-->
    <!--        alt=""-->
    <!--        class="parallax-clouds h-full w-full object-cover"-->
    <!--      />-->
    <!--    </div>-->

    <div
      class="relative flex h-96 flex-col items-center justify-center px-8 text-center text-white"
    >
      <h1 class="text-4xl md:text-6xl">Besiktning av</h1>
    </div>

    <!--    <img-->
    <!--      src="../assets/images/skylift.png"-->
    <!--      class="relative h-full w-full min-w-[200vw] -translate-x-20 object-cover sm:min-w-0 sm:translate-x-0"-->
    <!--    />-->

    <!--    <div-->
    <!--      class="relative right-0 mt-20 flex justify-end pl-4 text-left sm:mt-12 sm:px-0"-->
    <!--    >-->
    <!--      <div-->
    <!--        class="flex flex-col gap-2 bg-white p-8 sm:col-start-2 sm:col-end-2 sm:max-w-2/3"-->
    <!--      >-->
    <!--        <h4 class="font-bold">Besiktning</h4>-->
    <!--        <p>-->
    <!--          Vi utför ackrediterad och oberoende besiktning av hissar, portar och-->
    <!--          lyftanordningar. Vi bidrar till ert arbete med att göra era-->
    <!--          anordningar säkra, funktionsdugliga samt att de uppfyller gällande-->
    <!--          krav från lagstiftning.-->
    <!--        </p>-->
    <!--      </div>-->
    <!--    </div>-->

    <!--    <img-->
    <!--      src="../assets/images/hookblock-rotated.png"-->
    <!--      class="relative -mt-20 h-auto w-full object-cover md:-mt-96"-->
    <!--    />-->

    <!--    <div-->
    <!--      class="relative left-0 -mt-24 flex justify-start pr-4 text-left sm:grid-cols-2 sm:px-0 md:-mt-96 lg:-mt-[32rem]"-->
    <!--    >-->
    <!--      <div-->
    <!--        class="flex flex-col gap-2 bg-white p-8 sm:col-start-1 sm:col-end-1 sm:max-w-2/3"-->
    <!--      >-->
    <!--        <h4 class="font-bold">Lokal Partner</h4>-->
    <!--        <p>-->
    <!--          Genom att anlita Säkra besiktningar så gynnar ni en lokal aktör som-->
    <!--          prioriterar era behov och levererar pålitliga tjänster.-->
    <!--        </p>-->
    <!--      </div>-->
    <!--    </div>-->

    <!--    <div-->
    <!--      class="relative right-0 z-1 mt-96 flex justify-end pl-4 text-left sm:grid-cols-2 sm:px-0"-->
    <!--    >-->
    <!--      <div-->
    <!--        class="flex flex-col gap-2 bg-white p-8 sm:col-start-2 sm:col-end-2 sm:max-w-2/3"-->
    <!--      >-->
    <!--        <h4 class="font-bold">Personlig Service</h4>-->
    <!--        <p>-->
    <!--          Vi erbjuder personlig kontakt och flexibla lösningar anpassade till-->
    <!--          era behov. Vi strävar efter att erbjuda tjänster som matchar era-->
    <!--          önskemål för att skapa en smidig och professionell process.-->
    <!--        </p>-->
    <!--      </div>-->
    <!--    </div>-->

    <!--    <img-->
    <!--      src="../assets/images/green-lift.png"-->
    <!--      class="absolute bottom-0 -left-30 h-auto w-[34rem] min-w-[34rem] sm:left-0"-->
    <!--    />-->

    <!--    <ChevronDoubleDownIcon-->
    <!--      class="fixed bottom-4 left-4 h-12 w-12 text-white transition-opacity duration-500 ease-in-out"-->
    <!--      :class="[fadeOutDownIcon && 'opacity-0']"-->
    <!--    />-->
  </div>
</template>

<script>
export default {
  name: "Home",

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

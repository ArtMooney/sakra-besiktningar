<script setup>
import { ChevronDoubleDownIcon } from "@heroicons/vue/24/solid";
</script>

<template>
  <div>
    <ServicesTop />

    <div
      class="relative flex min-h-96 w-full items-center justify-center bg-black text-white"
    >
      <div class="flex flex-col gap-2 p-8 sm:col-start-2 sm:col-end-2">
        <h4 class="font-bold">Kranar</h4>
        <p>
          • Besiktningskrav enligt AFS 2023:11<br />
          • Besiktningsintervall 12 mån<br />
          • Arbete med kranar innebär ofta att tung last hanteras nära
          arbetstagare. En felfunktion av kranen kan därför leda till allvarliga
          konsekvenser<br />
          • Kranar omfattar telfer på balk, svängkran på vägg, pelarsvängkran,
          traverssystem med mera<br />
          • Definition av kran: En lyftanordning där lasten med hjälp av ett
          icke styrt lastbärande organ kan lyftas och sänkas vertikalt och
          dessutom förflyttas horisontellt.<br />
          • Undantagna kravet på montagebesiktning är kranar som flyttas
          horisontellt med handkraft<br />
          • Undantagna kravet på samtliga besiktningar är kranar vars maxlast
          understiger 500 kg. Krav på periodisk kontroll av kunnig person
          kvarstår<br />
          • Vi utför även frivillig besiktning av kranar med maxlast
          understigande 500 kg för att ni ska uppfylla kravet på periodisk
          kontroll och bidra till en säkrare arbetsplats. (Besiktningstjänsten
          faller inte under företagets ackreditering av Swedac då besiktningen
          är frivillig.)<br />
        </p>
      </div>
    </div>

    <ServicesBottom />

    <ChevronDoubleDownIcon
      class="fixed bottom-4 left-4 h-12 w-12 text-white transition-opacity duration-500 ease-in-out"
      :class="[fadeOutDownIcon && 'opacity-0']"
    />
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

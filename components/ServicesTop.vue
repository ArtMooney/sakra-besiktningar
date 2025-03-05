<template>
  <div class="relative overflow-hidden pb-32">
    <div class="absolute inset-0 flex items-center overflow-hidden">
      <img
        src="../assets/images/futuristic-elevator.jpg"
        alt=""
        class="parallax-background -mt-12 h-full w-full object-cover"
      />
    </div>

    <div
      class="relative flex h-[50vh] flex-col items-center justify-center px-8 text-center text-white"
    >
      <h2 class="text-4xl md:text-6xl">Besiktning av</h2>
    </div>

    <div class="relative right-0 mb-96 flex justify-end pl-4 text-left sm:px-0">
      <div
        class="flex flex-col gap-2 bg-white p-8 sm:col-start-2 sm:col-end-2 sm:max-w-[95%]"
      >
        <h4 class="font-bold">Motordrivna portar</h4>

        <ul class="flex flex-col space-y-4">
          <li class="leading-normal">
            • Besiktningskrav enligt Boverkets föreskrift BFS 2011:12 med
            ändringar
          </li>
          <li class="leading-normal">
            • Krav på första besiktning eller att det framgår av EG-försäkran om
            överensstämmelse att installationen ingår i CE-märkningen
          </li>
          <li class="leading-normal">• Besiktningsintervall 24 månader</li>
          <li class="leading-normal">
            • Omfattar olika typer av motordrivna portar så som takskjutportar,
            vikportar samt grindar
          </li>
          <li class="leading-normal">
            • Undantaget krav på besiktning är portar i anslutning till
            småbostadshus
          </li>
        </ul>
      </div>
    </div>

    <div
      class="relative left-0 mb-96 flex justify-start pr-4 text-left sm:grid-cols-2 sm:px-0"
    >
      <div
        class="flex flex-col gap-2 bg-white p-8 sm:col-start-1 sm:col-end-1 sm:max-w-2/3"
      >
        <h4 class="font-bold">Lastbryggor</h4>
        <ul class="flex flex-col space-y-4">
          <li class="leading-normal">• Besiktningskrav enligt AFS 2023:11</li>
          <li class="leading-normal">• Besiktningsintervall 12 månader</li>
          <li class="leading-normal">
            • Första återkommande besiktning är 24 månader efter att anordningen
            togs i bruk första gången
          </li>
          <li class="leading-normal">
            • Ofta högt slitage vid regelbunden användning
          </li>
        </ul>
      </div>
    </div>

    <div
      class="relative right-0 z-1 mb-96 flex justify-end pl-4 text-left sm:grid-cols-2 sm:px-0"
    >
      <div class="flex flex-col gap-2 bg-white p-8 sm:col-start-2 sm:col-end-2">
        <h4 class="font-bold">Mobila arbetsplattformar</h4>
        <ul class="flex flex-col space-y-4">
          <li class="leading-normal">• Besiktningskrav enligt AFS 2023:11</li>
          <li class="leading-normal">• Besiktningsintervall: 12 månader</li>
          <li class="leading-normal">
            • Första återkommande besiktning är 12 månader efter att maskinen
            togs i bruk för första gången
          </li>
        </ul>
      </div>
    </div>

    <div
      class="relative left-0 mb-96 flex justify-start pr-4 text-left sm:grid-cols-2 sm:px-0"
    >
      <div
        class="flex flex-col gap-2 bg-white p-8 sm:col-start-1 sm:col-end-1 sm:max-w-2/3"
      >
        <h4 class="font-bold">Plocktruckar</h4>
        <ul class="flex flex-col space-y-4">
          <li class="leading-normal">• Besiktningskrav enligt AFS 2023:11</li>
          <li class="leading-normal">• Besiktningsintervall 12 månader</li>
          <li class="leading-normal">
            • Första återkommande besiktning 12 månader efter att maskinen togs
            i bruk för första gången
          </li>
          <li class="leading-normal">
            • Undantagna för besiktningskrav är plocktruckar vars lyfthöjd
            understiger 1,2 meter. Krav på periodisk kontroll av kunnig person
            kvarstår
          </li>
        </ul>
      </div>
    </div>

    <div
      class="relative right-0 z-1 mb-96 flex justify-end pl-4 text-left sm:grid-cols-2 sm:px-0"
    >
      <div
        class="flex flex-col gap-2 bg-white p-8 sm:col-start-2 sm:col-end-2 sm:max-w-2/3"
      >
        <h4 class="font-bold">Fordonslyftar</h4>
        <ul class="flex flex-col space-y-4">
          <li class="leading-normal">• Besiktningskrav enligt AFS 2023:11</li>
          <li class="leading-normal">• Besiktningsintervall 12 mån</li>
          <li class="leading-normal">
            • Vår erfarenhet är att fordonslyftar har fler allvarliga brister än
            andra typer av anordningar. Utför besiktning för att uppfylla
            lagkraven samt bidra till en säkrare arbetsplats
          </li>
          <li class="leading-normal">
            • Undantagna kravet på besiktning är fordonslyftar vilka inte är
            avsedda för arbete där arbetstagaren befinner sig under fordonet.
            Krav på periodisk kontroll av kunnig person kvarstår
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ServicesTop",

  methods: {
    handleScroll() {
      const scrolled = window.scrollY;
      const parallaxElements = document.querySelectorAll(
        ".parallax-background, .parallax-text1, .parallax-text2, .parallax-text3",
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

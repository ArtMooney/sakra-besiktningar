<template>
  <div class="relative overflow-hidden pb-32">
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
      <h2 class="text-4xl md:text-6xl">Besiktning av</h2>
    </div>

    <!--    <img-->
    <!--      src="../assets/images/skylift.png"-->
    <!--      class="relative h-full w-full min-w-[200vw] -translate-x-20 object-cover sm:min-w-0 sm:translate-x-0"-->
    <!--    />-->

    <div class="relative right-0 mb-20 flex justify-end pl-4 text-left sm:px-0">
      <div
        class="flex flex-col gap-2 bg-white p-8 sm:col-start-2 sm:col-end-2 sm:max-w-[95%]"
      >
        <h4 class="font-bold">Motordrivna portar</h4>
        <p>
          • Besiktningskrav enligt Boverkets föreskrift BFS 2011:12 med
          ändringar<br />
          • Krav på första besiktning eller att det framgår av EG-försäkran om
          överensstämmelse att installationen ingår i CE-märkningen<br />
          • Besiktningsintervall 24 månader<br />
          • Omfattar olika typer av motordrivna portar så som takskjutportar,
          vikportar samt grindar<br />
          • Undantaget krav på besiktning är portar i anslutning till
          småbostadshus
        </p>
      </div>
    </div>

    <!--    <img-->
    <!--      src="../assets/images/hookblock-rotated.png"-->
    <!--      class="relative -mt-20 h-auto w-full object-cover md:-mt-96"-->
    <!--    />-->

    <div
      class="relative left-0 mb-20 flex justify-start pr-4 text-left sm:grid-cols-2 sm:px-0"
    >
      <div
        class="flex flex-col gap-2 bg-white p-8 sm:col-start-1 sm:col-end-1 sm:max-w-2/3"
      >
        <h4 class="font-bold">Lastbryggor</h4>
        <p>
          • Besiktningskrav enligt AFS 2023:11<br />
          • Besiktningsintervall 12 månader<br />
          • Första återkommande besiktning är 24 månader efter att anordningen
          togs i bruk första gången<br />
          • Ofta högt slitage vid regelbunden användning<br />
        </p>
      </div>
    </div>

    <div
      class="relative right-0 z-1 mb-20 flex justify-end pl-4 text-left sm:grid-cols-2 sm:px-0"
    >
      <div class="flex flex-col gap-2 bg-white p-8 sm:col-start-2 sm:col-end-2">
        <h4 class="font-bold">Mobila arbetsplattformar</h4>
        <p>
          • Besiktningskrav enligt AFS 2023:11<br />
          • Besiktningsintervall: 12 månader<br />
          • Första återkommande besiktning är 12 månader efter att maskinen togs
          i bruk för första gången<br />
        </p>
      </div>
    </div>

    <div
      class="relative left-0 mb-20 flex justify-start pr-4 text-left sm:grid-cols-2 sm:px-0"
    >
      <div
        class="flex flex-col gap-2 bg-white p-8 sm:col-start-1 sm:col-end-1 sm:max-w-2/3"
      >
        <h4 class="font-bold">Plocktruckar</h4>
        <p>
          • Besiktningskrav enligt AFS 2023:11<br />
          • Besiktningsintervall 12 månader<br />
          • Första återkommande besiktning 12 månader efter att maskinen togs i
          bruk för första gången<br />
          • Undantagna för besiktningskrav är plocktruckar vars lyfthöjd
          understiger 1,2 meter. Krav på periodisk kontroll av kunnig person
          kvarstår<br />
        </p>
      </div>
    </div>

    <div
      class="relative right-0 z-1 mb-20 flex justify-end pl-4 text-left sm:grid-cols-2 sm:px-0"
    >
      <div
        class="flex flex-col gap-2 bg-white p-8 sm:col-start-2 sm:col-end-2 sm:max-w-2/3"
      >
        <h4 class="font-bold">Fordonslyftar</h4>
        <p>
          • Besiktningskrav enligt AFS 2023:11<br />
          • Besiktningsintervall 12 mån<br />
          • Vår erfarenhet är att fordonslyftar har fler allvarliga brister än
          andra typer av anordningar. Utför besiktning för att uppfylla
          lagkraven samt bidra till en säkrare arbetsplats<br />
          • Undantagna kravet på besiktning är fordonslyftar vilka inte är
          avsedda för arbete där arbetstagaren befinner sig under fordonet. Krav
          på periodisk kontroll av kunnig person kvarstår<br />
        </p>
      </div>
    </div>

    <!--    <img-->
    <!--      src="../assets/images/green-lift.png"-->
    <!--      class="absolute bottom-0 -left-30 h-auto w-[34rem] min-w-[34rem] sm:left-0"-->
    <!--    />-->
  </div>
</template>

<script>
export default {
  name: "ServicesTop",

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

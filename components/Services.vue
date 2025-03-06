<script setup>
import { ChevronDoubleDownIcon } from "@heroicons/vue/24/solid";
</script>

<template>
  <div class="relative overflow-hidden pb-32">
    <div
      class="absolute inset-0 flex flex-col items-center overflow-hidden bg-black"
    >
      <img
        src="../assets/images/futuristic-elevator-high.jpg"
        alt=""
        class="parallax-background h-[250vh] w-full object-cover md:h-[180vh]"
      />
      <img
        src="../assets/images/futuristic-elevator-high.jpg"
        alt=""
        class="parallax-background h-[250vh] w-full object-cover opacity-50 md:h-[180vh]"
      />
    </div>

    <div class="absolute inset-0 -left-52 flex items-center overflow-hidden">
      <img
        src="../assets/images/futuristic-elevator-front.png"
        alt=""
        class="parallax-elevators h-auto min-w-[130vw] object-cover"
      />
    </div>

    <div
      class="relative flex h-[50vh] flex-col items-center justify-center px-8 text-center text-white"
    >
      <h2 class="text-4xl md:text-6xl">Besiktning av</h2>
    </div>

    <div
      class="parallax-text1 relative right-0 mb-96 flex justify-end pl-4 text-left sm:px-0"
    >
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
      class="parallax-text2 relative left-0 mb-96 flex justify-start pr-4 text-left sm:grid-cols-2 sm:px-0"
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
      class="parallax-text3 relative right-0 z-1 mb-96 flex justify-end pl-4 text-left sm:grid-cols-2 sm:px-0"
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
      class="parallax-text1 relative left-0 mb-96 flex justify-start pr-4 text-left sm:grid-cols-2 sm:px-0"
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
      class="parallax-text2 relative right-0 z-1 mb-96 flex justify-end pl-4 text-left sm:grid-cols-2 sm:px-0"
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

    <div
      class="relative mb-8 grid min-h-96 w-full items-center gap-8 px-4 lg:grid-cols-2 lg:px-8"
    >
      <div class="flex flex-col bg-white p-8">
        <h4 class="font-bold">Kranar</h4>

        <ul class="flex flex-col space-y-4">
          <li class="leading-normal">• Besiktningskrav enligt AFS 2023:11</li>
          <li class="leading-normal">• Besiktningsintervall 12 mån</li>
          <li class="leading-normal">
            • Arbete med kranar innebär ofta att tung last hanteras nära
            arbetstagare. En felfunktion av kranen kan därför leda till
            allvarliga konsekvenser
          </li>
          <li class="leading-normal">
            • Kranar omfattar telfer på balk, svängkran på vägg, pelarsvängkran,
            traverssystem med mera
          </li>
          <li class="leading-normal">
            • Definition av kran: En lyftanordning där lasten med hjälp av ett
            icke styrt lastbärande organ kan lyftas och sänkas vertikalt och
            dessutom förflyttas horisontellt.
          </li>
          <li class="leading-normal">
            • Undantagna kravet på montagebesiktning är kranar som flyttas
            horisontellt med handkraft
          </li>
          <li class="leading-normal">
            • Undantagna kravet på samtliga besiktningar är kranar vars maxlast
            understiger 500 kg. Krav på periodisk kontroll av kunnig person
            kvarstår
          </li>
          <li class="leading-normal">
            • Vi utför även frivillig besiktning av kranar med maxlast
            understigande 500 kg för att ni ska uppfylla kravet på periodisk
            kontroll och bidra till en säkrare arbetsplats. (Besiktningstjänsten
            faller inte under företagets ackreditering av Swedac då besiktningen
            är frivillig.)
          </li>
        </ul>
      </div>

      <img
        src="../assets/images/green-skylifts.jpg"
        class="relative h-auto w-full"
      />
    </div>

    <div
      class="relative mb-8 grid min-h-96 w-full items-center gap-8 px-4 lg:grid-cols-2 lg:px-8"
    >
      <div class="flex flex-col bg-white p-8">
        <h4 class="font-bold">Övriga besiktningstjänster</h4>

        <ul class="flex flex-col space-y-4">
          <li class="leading-normal"><b>Lingångar och punktlyftar</b></li>
          <li class="leading-normal">• Besiktningskrav enligt AFS 2023:11</li>
          <li class="leading-normal">• Besiktningsintervall</li>
          <li class="leading-normal">--- Maskindriven: 12 månaders</li>
          <li class="leading-normal">--- Handdriven: 36 månaders</li>
          <br />
          <li class="leading-normal">
            <b>Tillfälligt personlyft med truck och arbetskorg</b>
          </li>
          <li class="leading-normal">• Besiktningskrav enligt AFS 2023:11</li>
          <li class="leading-normal">
            • Krav på första besiktning för att säkerställa att trucken och
            korgen är säkra att kombinera för tillfälligt personlyft enligt
            gällande föreskrift
          </li>
          <li class="leading-normal">
            • Inget krav på återkommande besiktning. Krav på periodisk kontroll
            av kunnig person kvarstår
          </li>
          <br />
          <li class="leading-normal"><b>Lyftbord</b></li>
          <li class="leading-normal">
            • Inget besiktningskrav men krav finns på periodisk kontroll.
            (Besiktningstjänsten faller inte under företagets ackreditering av
            Swedac då besiktningen är frivillig.)
          </li>
          <li class="leading-normal">• Lämpligt intervall 12 månader</li>
          <br />
          <li class="leading-normal">
            <b>Övriga personlyftande anordningar</b>
          </li>
          <li class="leading-normal">• Besiktningskrav enligt AFS 2023:11</li>
          <li class="leading-normal">• Intervall 12 månader</li>
          <li class="leading-normal">
            • Undantagna kravet på besiktning är övriga lyftanordningar med en
            lyfthöjd understigande 0,5 meter
          </li>
        </ul>
      </div>

      <img
        src="../assets/images/portar.jpg"
        class="relative h-full w-auto object-cover lg:order-first lg:py-44"
      />
    </div>

    <div
      class="relative mb-8 grid min-h-96 w-full items-center gap-8 px-4 lg:grid-cols-2 lg:px-8"
    >
      <div class="flex flex-col bg-white p-8">
        <h4 class="font-bold">Hissar</h4>

        <ul class="flex flex-col space-y-4">
          <li class="leading-normal">
            • Återkommande besiktning av hissar så som personhissar, varuhissar
            eller plattformshissar med mera
          </li>
        </ul>
      </div>

      <img src="../assets/images/hiss.jpg" class="relative h-auto w-full" />
    </div>

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

      const parallaxElements = document.querySelectorAll(
        ".parallax-background, .parallax-elevators, .parallax-text1, .parallax-text2",
      );

      parallaxElements.forEach(function (el, index) {
        const rate =
          index === 0
            ? 0.4
            : index === 1
              ? 0.2
              : index === 2
                ? 0.15
                : index === 3
                  ? 0.1
                  : 0.05;
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

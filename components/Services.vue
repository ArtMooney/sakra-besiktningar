<script setup>
import { ChevronDoubleDownIcon } from "@heroicons/vue/24/solid";
</script>

<template>
  <div class="relative overflow-hidden pb-32">
    <div
      class="absolute inset-0 -right-44 left-0 -mt-12 flex flex-col items-center overflow-hidden bg-black sm:right-0"
    >
      <img
        src="../assets/images/crane-blue-sky.jpg"
        alt=""
        class="parallax-background h-[230vh] w-full object-cover sm:h-[200vh] lg:h-[160vh]"
      />
    </div>

    <div class="absolute inset-0 flex items-center overflow-hidden opacity-25">
      <img
        src="../assets/images/flat_clouds.png"
        alt=""
        class="parallax-clouds h-full w-full object-cover"
      />
    </div>

    <div
      class="relative flex h-[50vh] flex-col items-center justify-center px-8 text-center text-white"
    >
      <h2 class="text-4xl md:text-6xl">Besiktning av</h2>
    </div>

    <PointBlob
      class="relative mb-96 justify-end pl-4"
      title="Motordrivna portar"
      :point-lines="[
        '• Besiktningskrav enligt Boverkets föreskrift BFS 2011:12 med ändringar',
        '• Krav på första besiktning eller att det framgår av EG-försäkran om överensstämmelse att installationen ingår i CE-märkningen',
        '• Besiktningsintervall 24 månader',
        '• Omfattar olika typer av motordrivna portar så som takskjutportar vikportar samt grindar',
        '• Undantaget krav på besiktning är portar i anslutning till småbostadshus',
      ]"
    />

    <PointBlob
      class="relative mb-96 justify-start pr-4"
      title="Lastbryggor"
      :point-lines="[
        '• Besiktningskrav enligt AFS 2023:11',
        '• Besiktningsintervall 12 månader',
        '• Första återkommande besiktning är 24 månader efter att anordningen togs i bruk första gången',
        '• Ofta högt slitage vid regelbunden användning',
      ]"
    />

    <PointBlob
      class="relative mb-96 justify-end pl-4"
      title="Mobila arbetsplattformar"
      :point-lines="[
        '• Besiktningskrav enligt AFS 2023:11',
        '• Besiktningsintervall: 12 månader',
        '• Första återkommande besiktning är 12 månader efter att maskinen togs i bruk för första gången',
      ]"
    />

    <PointBlob
      class="relative mb-96 justify-start pr-4"
      title="Plocktruckar"
      :point-lines="[
        '• Besiktningskrav enligt AFS 2023:11',
        '• Besiktningsintervall 12 månader',
        '• Första återkommande besiktning 12 månader efter att maskinen togs i bruk för första gången',
        '• Undantagna för besiktningskrav är plocktruckar vars lyfthöjd understiger 1,2 meter. Krav på periodisk kontroll av kunnig person kvarstår',
      ]"
    />

    <PointBlob
      class="relative mb-96 justify-end pl-4"
      title="Fordonslyftar"
      :point-lines="[
        '• Besiktningskrav enligt AFS 2023:11',
        '• Besiktningsintervall 12 mån',
        '• Vår erfarenhet är att fordonslyftar har fler allvarliga brister än andra typer av anordningar. Utför besiktning för att uppfylla lagkraven samt bidra till en säkrare arbetsplats',
        '• Undantagna kravet på besiktning är fordonslyftar vilka inte är avsedda för arbete där arbetstagaren befinner sig under fordonet. Krav på periodisk kontroll av kunnig person kvarstår',
      ]"
    />
  </div>

  <PointBlock
    title="Kranar"
    :point-lines="[
      '• Besiktningskrav enligt AFS 2023:11',
      '• Besiktningsintervall 12 mån',
      '• Arbete med kranar innebär ofta att tung last hanteras nära arbetstagare. En felfunktion av kranen kan därför leda till allvarliga konsekvenser',
      '• Kranar omfattar telfer på balk, svängkran på vägg, pelarsvängkran, traverssystem med mera',
      '• Definition av kran: En lyftanordning där lasten med hjälp av ett icke styrt lastbärande organ kan lyftas och sänkas vertikalt och dessutom förflyttas horisontellt.',
      '• Undantagna kravet på montagebesiktning är kranar som flyttas horisontellt med handkraft',
      '• Undantagna kravet på samtliga besiktningar är kranar vars maxlast understiger 500 kg. Krav på periodisk kontroll av kunnig person kvarstår',
      '• Vi utför även frivillig besiktning av kranar med maxlast understigande 500 kg för att ni ska uppfylla kravet på periodisk kontroll och bidra till en säkrare arbetsplats. (Besiktningstjänsten faller inte under företagets ackreditering av Swedac då besiktningen är frivillig.)',
    ]"
  />

  <PointBlock
    title="Övriga besiktningstjänster"
    :point-lines="[
      {
        accordionTitle: '<b>Lingångar och punktlyftar</b>',
        accordionLines: [
          '• Besiktningskrav enligt AFS 2023:11',
          '• Besiktningsintervall',
          '--- Maskindriven: 12 månaders',
          '--- Handdriven: 36 månaders',
        ],
      },
      '<br />',
      {
        accordionTitle:
          '<b>Tillfälligt personlyft med truck och arbetskorg</b>',
        accordionLines: [
          '• Besiktningskrav enligt AFS 2023:11',
          '• Krav på första besiktning för att säkerställa att trucken och korgen är säkra att kombinera för tillfälligt personlyft enligt gällande föreskrift',
          '• Inget krav på återkommande besiktning. Krav på periodisk kontroll av kunnig person kvarstår',
        ],
      },
      '<br />',
      {
        accordionTitle: '<b>Lyftbord</b>',
        accordionLines: [
          '• Inget besiktningskrav men krav finns på periodisk kontroll. (Besiktningstjänsten faller inte under företagets ackreditering av Swedac då besiktningen är frivillig.)',
          '• Lämpligt intervall 12 månader',
        ],
      },
      '<br />',
      {
        accordionTitle: '<b>Övriga personlyftande anordningar</b>',
        accordionLines: [
          '• Besiktningskrav enligt AFS 2023:11',
          '• Intervall 12 månader',
          '• Undantagna kravet på besiktning är övriga lyftanordningar med en lyfthöjd understigande 0,5 meter',
        ],
      },
    ]"
  />

  <PointBlock
    title="Hissar"
    :point-lines="[
      '• Återkommande besiktning av hissar så som personhissar, varuhissar eller plattformshissar med mera',
    ]"
  />

  <ChevronDoubleDownIcon
    class="fixed bottom-4 left-4 h-12 w-12 text-white transition-opacity duration-500 ease-in-out"
    :class="[fadeOutDownIcon && 'opacity-0']"
  />
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
        ".parallax-background, .parallax-clouds, .parallax-text1, .parallax-text2",
      );

      parallaxElements.forEach(function (el, index) {
        const rate =
          index === 0
            ? 0.7
            : index === 1
              ? 0.5
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

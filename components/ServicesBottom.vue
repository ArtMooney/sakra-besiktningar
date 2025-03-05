<template>
  <div class="relative mt-20 overflow-hidden">
    <div
      class="relative mb-8 grid min-h-96 w-full items-center gap-8 px-4 text-white lg:grid-cols-2 lg:px-8"
    >
      <div class="flex flex-col bg-black p-8">
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
      class="relative mb-8 grid min-h-96 w-full items-center gap-8 px-4 text-white lg:grid-cols-2 lg:px-8"
    >
      <div class="flex flex-col bg-black p-8">
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
      class="relative grid w-full items-center gap-8 px-4 text-white lg:px-8"
    >
      <div class="flex flex-col bg-black p-8">
        <h4 class="font-bold">Hissar</h4>

        <ul class="flex flex-col space-y-4">
          <li class="leading-normal">
            • Återkommande besiktning av hissar så som personhissar, varuhissar
            eller plattformshissar med mera
          </li>
        </ul>
      </div>
    </div>

    <div class="bg-white p-12">
      <img src="../assets/images/hiss.jpg" class="relative h-auto w-full" />
    </div>
  </div>
</template>

<script>
export default {
  name: "ServicesBottom",

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

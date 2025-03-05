<template>
  <div class="relative overflow-hidden pb-32">
    <div
      class="relative flex min-h-96 w-full items-center justify-start bg-black text-white"
    >
      <div class="flex flex-col gap-2 p-8">
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

    <div
      class="relative flex min-h-96 w-full items-center justify-start bg-[pink] text-white"
    >
      <div class="flex flex-col gap-2 p-8">
        <h4 class="font-bold">Övriga besiktningstjänster</h4>
        <p>
          <b>Lingångar och punktlyftar</b><br />
          • Besiktningskrav enligt AFS 2023:11<br />
          • Besiktningsintervall<br />
          --- Maskindriven: 12 månaders<br />
          --- Handdriven: 36 månaders<br /><br />
          <b>Tillfälligt personlyft med truck och arbetskorg</b><br />
          • Besiktningskrav enligt AFS 2023:11<br />
          • Krav på första besiktning för att säkerställa att trucken och korgen
          är säkra att kombinera för tillfälligt personlyft enligt gällande
          föreskrift<br />
          • Inget krav på återkommande besiktning. Krav på periodisk kontroll av
          kunnig person kvarstår<br /><br />
          <b>Lyftbord</b><br />
          • Inget besiktningskrav men krav finns på periodisk kontroll.
          (Besiktningstjänsten faller inte under företagets ackreditering av
          Swedac då besiktningen är frivillig.)<br />
          • Lämpligt intervall 12 månader<br /><br />
          <b>Övriga personlyftande anordningar</b><br />
          • Besiktningskrav enligt AFS 2023:11<br />
          • Intervall 12 månader<br />
          • Undantagna kravet på besiktning är övriga lyftanordningar med en
          lyfthöjd understigande 0,5 meter<br />
        </p>
      </div>
    </div>

    <div
      class="relative flex min-h-96 w-full items-center justify-start bg-[skyblue] text-white"
    >
      <div class="flex flex-col gap-2 p-8">
        <h4 class="font-bold">Hissar</h4>
        <p>
          • Återkommande besiktning av hissar så som personhissar, varuhissar
          eller plattformshissar med mera<br />
        </p>
      </div>
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

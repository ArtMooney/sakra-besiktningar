<script setup>
import Button from "./elements/Button.vue";
import Input from "./elements/Input.vue";
import { requiredFields } from "../utils/requiredFields.js";
import { emailValidator } from "../utils/emailValidator.js";
import { formCollector } from "../utils/formCollector.js";
</script>

<template>
  <div>
    <h2
      class="absolute right-auto left-auto z-1 mt-24 w-full px-4 text-center text-4xl text-white md:text-6xl lg:mt-20"
    >
      Kontakta oss
    </h2>

    <div class="h-[60vh] w-full">
      <img
        src="../assets/images/portar.jpg"
        alt=""
        class="relative h-full w-full object-cover"
      />
    </div>
  </div>

  <div id="contact" class="px-60 py-12">
    <form v-if="contactForm" @submit.prevent name="contact">
      <Input
        name="company"
        type="text"
        placeholder-text=""
        :required="true"
        label-text="Företagsnamn:"
      />

      <Input
        name="email"
        type="email"
        placeholder-text=""
        :required="true"
        label-text="E-post:"
      />

      <Input
        name="phone"
        type="tel"
        placeholder-text=""
        :required="true"
        label-text="Telefon:"
      />

      <div class="hidden">
        <Input
          name="clientip"
          type="text"
          placeholder-text="clientip"
          :required="false"
          label-text=""
          v-model="extraFields.clientip"
        />

        <Input
          name="pageuri"
          type="text"
          placeholder-text="pageuri"
          :required="false"
          label-text=""
          v-model="extraFields.pageuri"
        />

        <Input
          name="pagename"
          type="text"
          placeholder-text="pagename"
          :required="false"
          label-text=""
          v-model="extraFields.pagename"
        />

        <Input
          name="amex"
          type="text"
          placeholder-text="amex"
          :required="false"
          label-text=""
          v-model="extraFields.amex"
        />
      </div>

      <div class="flex items-start pt-8">
        <Button
          @click="sendForm"
          :text="buttonText"
          link=""
          hash=""
          type="submit"
          data-wait="Vänta..."
        />
      </div>
    </form>

    <div v-if="successMessage">
      <div class="mt-4 bg-[#a38373] p-4 text-black">
        {{ emailSuccessMessage }}
      </div>
    </div>

    <div v-if="errorMessage" class="mt-4 bg-[#a38373] p-4 text-black">
      <p>{{ defaultEmailMessage }}</p>
    </div>
  </div>

  <div class="h-[60vh] w-full">
    <img
      src="../assets/images/hiss.jpg"
      alt=""
      class="relative h-full w-full object-cover"
    />
  </div>
</template>

<script>
export default {
  name: "Contact",

  data() {
    const config = useRuntimeConfig();
    return {
      userName: config.public.USERNAME,
      userPass: config.public.USERPASS,
      extraFields: {
        clientip: "",
        pageuri: "",
        pagename: "",
        amex: "",
      },
      buttonText: "Skicka",
      defaultEmailMessage: "Något gick fel när formuläret skulle skickas.",
      emailSuccessMessage: `Tack för ert meddelande! Vi återkommer till er snart!`,
      emailErrorMessage:
        "En eller flera emailadresser som ni har angett tycks inte ha ett korrekt format.",
      contactForm: true,
      successMessage: false,
      errorMessage: false,
    };
  },

  async created() {
    const res = await fetch("https://api.ipify.org?format=json");
    const ip = await res.json();
    this.extraFields.clientip = ip.ip;
  },

  mounted() {
    this.extraFields.pageuri = window.location.href;
    this.extraFields.pagename = document.title;
  },

  methods: {
    async sendForm(event) {
      event.target.disabled = true;

      if (!emailValidator(event.target.form)) {
        const savedErrorMessage = this.defaultEmailMessage;
        this.defaultEmailMessage = this.emailErrorMessage;
        this.errorMessage = true;

        setTimeout(() => {
          window.addEventListener(
            "click",
            () => {
              this.errorMessage = false;
              this.defaultEmailMessage = savedErrorMessage;
            },
            { once: true },
          );
        }, 500);
      }

      if (
        requiredFields(event.target.form) &&
        emailValidator(event.target.form)
      ) {
        const res = await fetch("/contact", {
          method: "POST",
          headers: {
            Authorization: "Basic " + btoa(this.userName + ":" + this.userPass),
          },
          body: formCollector(event.target.form, this.extraFields),
        });

        const jsonResponse = await res.json();

        if (jsonResponse === "error") {
          this.errorMessage = true;
        } else if (jsonResponse === "ok") {
          const savedText = this.buttonText;
          this.buttonText = event.target.dataset.wait;

          setTimeout(() => {
            this.contactForm = false;
            this.successMessage = true;
            this.buttonText = savedText;

            this.$router.push({
              hash: "#contact",
            });
          }, 1500);
        }
      } else {
        event.target.disabled = false;
      }
    },
  },
};
</script>

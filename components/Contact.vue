<script setup>
import Button from "./elements/Button.vue";
import Input from "./elements/Input.vue";
import { requiredFields } from "../utils/requiredFields.js";
import { emailValidator } from "../utils/emailValidator.js";
import { formCollector } from "../utils/formCollector.js";
</script>

<template>
  <div>
    <div class="h-[30vh] w-full md:h-[40vh] lg:h-[60vh]">
      <img
        src="../assets/images/portar.jpg"
        alt=""
        class="relative h-full w-full object-cover"
      />
    </div>
  </div>

  <div id="contact" class="px-4 py-20 sm:px-8 md:py-32">
    <h2 class="mb-24 w-full px-4 text-center text-4xl md:text-6xl lg:mb-32">
      Kontakta oss
    </h2>

    <form
      v-if="contactForm"
      @submit.prevent
      name="contact"
      class="md:px-20 xl:px-52"
    >
      <Input
        name="company"
        type="text"
        placeholder-text=""
        :required="true"
        label-text="Företagsnamn:"
        autocomplete="company"
      />

      <Input
        name="email"
        type="email"
        placeholder-text=""
        :required="true"
        label-text="E-post:"
        autocomplete="email"
      />

      <Input
        name="phone"
        type="tel"
        placeholder-text=""
        :required="true"
        label-text="Telefon:"
        autocomplete="tel"
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

      <div class="flex justify-start pt-8">
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
      <div class="my-20 bg-blue-200 p-4 text-black">
        {{ emailSuccessMessage }}
      </div>
    </div>

    <div v-if="errorMessage" class="my-20 bg-pink-100 p-4 text-black">
      <p>{{ defaultEmailMessage }}</p>
    </div>
  </div>

  <div class="h-auto">
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
      userName: config.public.userName,
      userPass: config.public.userPass,
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
        const { data: res, error } = await useFetch("/api/contact", {
          method: "POST",
          headers: {
            Authorization: "Basic " + btoa(this.userName + ":" + this.userPass),
          },
          body: formCollector(event.target.form, this.extraFields),
        });

        if (error.value) {
          this.errorMessage = true;
        } else if (res.value && res.value.status === "ok") {
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

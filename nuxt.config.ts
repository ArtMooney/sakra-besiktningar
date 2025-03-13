import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ["/assets/css/main.css"],
  vite: {
    plugins: [tailwindcss()],
  },
  runtimeConfig: {
    mailgunApiKey: process.env.NUXT_MAILGUN_API_KEY,
    emailFrom: process.env.NUXT_EMAIL_FROM,
    emailTo: process.env.NUXT_EMAIL_TO,
    userName: process.env.NUXT_USERNAME,
    userPass: process.env.NUXT_USERPASS,

    public: {
      userName: process.env.NUXT_PUBLIC_USERNAME,
      userPass: process.env.NUXT_PUBLIC_USERPASS,
    },
  },
});

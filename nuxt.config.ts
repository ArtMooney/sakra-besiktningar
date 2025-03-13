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
    username: process.env.NUXT_USERNAME,
    userpass: process.env.NUXT_USERPASS,

    public: {
      username: process.env.NUXT_PUBLIC_USERNAME,
      userpass: process.env.NUXT_PUBLIC_USERPASS,
    },
  },
});

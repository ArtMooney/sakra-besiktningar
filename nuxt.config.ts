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
    MAILGUN_API_KEY: process.env.MAILGUN_API_KEY,

    public: {
      USERNAME: process.env.NUXT_PUBLIC_USERNAME,
      USERPASS: process.env.NUXT_PUBLIC_USERPASS,
    },
  },
});

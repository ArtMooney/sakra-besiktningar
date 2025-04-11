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
  modules: ["@nuxtjs/robots", "@nuxtjs/sitemap", "@nuxt/image"],
  image: {
    dir: "assets/images",
    format: ["webp", "jpg", "png"],
    quality: 80,
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
      "2xl": 1536,
    },
    densities: [1, 2],
    modifiers: {
      format: "webp",
      quality: 80,
      animated: false,
    },
    staticFilename: "[name]-[width]-[height]-[format].[ext]",
    provider: "ipxStatic",
  },
  robots: {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        sitemap: "https://sakrabesiktningar.se/sitemap.xml",
      },
      {
        userAgent: "*",
        disallow: "/",
        comment:
          "Disallow all robots on sakra-besiktningar.pages.dev and its subdomains",
      },
    ],
    disallowNonStandardSchemes: true,
    sitemap: "https://sakrabesiktningar.se/sitemap.xml",
  },
  sitemap: {
    hostname: "https://sakrabesiktningar.se",
    gzip: true,
  },
  app: {
    head: {
      link: [
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "/favicon-16x16.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/favicon-32x32.png",
        },
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
        { rel: "manifest", href: "/site.webmanifest" },
        { rel: "canonical", href: "https://sakrabesiktningar.se/" },
      ],
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title:
        "Säkra besiktningar - Ackrediterad besiktning av hissar, portar och lyftanordningar",
      meta: [
        {
          name: "description",
          content:
            "Vi utför ackrediterad och oberoende besiktning av hissar, portar och lyftanordningar i Kungsbacka och hela Sverige. Kontakta oss för en säker och pålitlig tjänst.",
        },
        {
          name: "keywords",
          content:
            "besiktning, hissar, portar, lyftanordningar, ackrediterad besiktning, Kungsbacka",
        },

        // Open Graph / Facebook
        { property: "og:type", content: "website" },
        { property: "og:url", content: "https://sakrabesiktningar.se/" },
        {
          property: "og:title",
          content: "Säkra besiktningar - Ackrediterad besiktning",
        },
        {
          property: "og:description",
          content:
            "Vi utför ackrediterad och oberoende besiktning av hissar, portar och lyftanordningar.",
        },
        {
          property: "og:image",
          content: "https://sakrabesiktningar.se/og-image.jpg",
        },

        // Twitter
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:url", content: "https://sakrabesiktningar.se/" },
        {
          name: "twitter:title",
          content: "Säkra besiktningar - Ackrediterad besiktning",
        },
        {
          name: "twitter:description",
          content:
            "Vi utför ackrediterad och oberoende besiktning av hissar, portar och lyftanordningar.",
        },
        {
          name: "twitter:image",
          content: "https://sakrabesiktningar.se/twitter-image.jpg",
        },
      ],
    },
  },
});

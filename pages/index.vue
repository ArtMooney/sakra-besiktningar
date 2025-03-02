<script setup>
import Navbar from "../components/Navbar.vue";
import Home from "../components/Home.vue";
</script>

<template>
  <Navbar />
  <Home />
  <Footer />
</template>

<script>
export default {
  name: "Home",
  setup() {
    definePageMeta({
      ssr: true,
    });
  },
};
</script>

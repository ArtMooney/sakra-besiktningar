<script setup>
useCmsSeo("SEO page - Index");

definePageMeta({
  ssr: true,
});
</script>

<template>
  <Home />
</template>

<script>
export default {
  name: "Index",
};
</script>

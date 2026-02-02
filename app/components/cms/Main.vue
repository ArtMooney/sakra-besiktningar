<template>
  <Teleport to="body">
    <div
      class="cms-admin fixed inset-0 z-20 w-full min-w-75 bg-[#363636] px-4 pb-24"
    >
      <CmsNavbar />
      <CmsTableList />
      <CmsAddRemoveItems />
      <CmsItems />

      <div
        v-if="cmsStore.saveFlag || cmsStore.loadingFlag"
        class="fixed top-0 right-0 bottom-0 left-0 z-1000000 block bg-transparent"
      ></div>
    </div>
  </Teleport>
</template>

<script>
import { useCmsStore } from "~/components/cms/stores/cmsStore";

export default {
  name: "Main",

  computed: {
    cmsStore() {
      return useCmsStore();
    },
  },
};
</script>

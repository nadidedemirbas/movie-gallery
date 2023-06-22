<template>
  <RouterView />
</template>

<script>
import GalleryIndex from "./components/GalleryIndex.vue";
export default {
  name: "App",
  components: {
    GalleryIndex: GalleryIndex
  }
}
</script>

<style scoped>

</style>
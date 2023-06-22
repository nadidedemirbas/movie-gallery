<template>
    <div class="index-cell">
      <router-link :to="path" >
        <div>
          <div class="index-image-wrapper">
            <img class="image-fluid" :src="image" :alt="title">
          </div>
          <div class="index-movie-title-wrapper">
            {{ title }}
          </div>
        </div>
      </router-link>
    </div>
</template>

<script>
export default {
  name: "TableCell",
  props: {
    image: String,
    title: String,
    path: { type: [String, Object], default: "" }
  },
}
</script>

<style scoped>

</style>
<template>
  <div class="index-table">
    <div v-if="movieIndex.length <= 1">Loading movies...</div>
    <TableCell v-if="movieIndex.length > 1" v-for="movie in movieIndex" :image="movie.Poster" :title="movie.Title"
                :path="{ name: 'MovieDetail', params: { id: movie.imdbID } }" />
  </div>
</template>

<script>
import TableCell from "./TableCell.vue";

export default {
  components: {
    TableCell: TableCell
  },

  data: function () {
    return {
      movieIndex: {
        Poster: '',
        Title: 'Loading...'
      }
    }
  },
  created() {
    fetch('https://fake-movie-api.onrender.com/api/movies', {
      headers: {
        AuthKey: 'RmFrZU1vdmllQVBJLWM5MzU1ZjE0LTM3ZGUtNDAzNC1hMTAzLTRkOTcxOTYwOWRmNg=='
      }
    })
        .then((res) => res.json())
        .then((res) => {
          console.log(res)
          this.movieIndex = res;
        });
  }
}
</script>

<style scoped>

</style>
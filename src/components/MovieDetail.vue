<template>
  <div class="detail-main">
    <div>
      <img class="image-fluid detail-image" :src="movie.Poster" :alt="title">
    </div>
    <div>
      <div class="detail-title">
        {{ movie.Title }}
      </div>
      <div class="detail-plot">
        Plot: {{ movie.Plot }}
      </div>
      <div class="detail-more">
        Released: {{ movie.Released }} <br/>
        Rating: {{ movie.imdbRating }} <br/>
        Genre: {{ movie.Genre }} <br/>
        Awards: {{ movie.Awards }}
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "MovieDetail",
  data() {
    return {
      movie: {}
    }
  },
  methods: {
    async getMovieDetail(id) {
      fetch('https://fake-movie-api.onrender.com/api/movies', {
        headers: {
          AuthKey: 'RmFrZU1vdmllQVBJLWM5MzU1ZjE0LTM3ZGUtNDAzNC1hMTAzLTRkOTcxOTYwOWRmNg=='
        }
      })
      .then((res) => res.json())
      .then((res) => {
        console.log(res)
        this.movie = res.find(movie => movie.imdbID === id);
      })
    }
  },
  mounted() {
    const id = this.$route.params.id;
    this.getMovieDetail(id);
  }
}
</script>

<style scoped>

</style>
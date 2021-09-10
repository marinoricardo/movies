<template>
  <div class="container">
    <v-container>
      <v-row >
        <v-col cols="12" sm="6" md="4" v-for="(result, index) in movies" 
            :key="index">
          <v-card
            class="mx-auto pa-2"
            max-width="374"
            outlined
            tile
            
          >
            <template slot="progress">
              <v-progress-linear
                color="deep-purple"
                height="10"
                indeterminate
              ></v-progress-linear>
            </template>

            <v-img
              height="250"
              :src="'https://image.tmdb.org/t/p/w500/' + result.backdrop_path"
            ></v-img>

            <v-card-title>{{ result.original_title }}</v-card-title>

            <v-card-text>
              <v-row align="center" class="mx-0">
                <v-rating
                  :value="4.5"
                  color="amber"
                  dense
                  half-increments
                  readonly
                  size="14"
                ></v-rating>

                <div class="grey--text ms-4">{{result.popularity}} | {{ result.release_date }}</div>
              </v-row>

              <v-divider class="mx-4"></v-divider>

              <div class="grey--text ms-4">
                {{ result.overview }} 
              </div>
            </v-card-text>
          </v-card>
        </v-col>

      </v-row>
    </v-container>

  
  </div>
</template>
<style scoped>
/* .container {
  padding-top: 10px;
} */
</style>
<script>
import axios from "axios";
// @ is an alias to /src

export default {
  name: "Home",
  data() {
    return {
      movies: "",
    };
  },

  mounted() {
    this.getMovies();
  },

  methods: {
    getMovies() {
      axios
        .get(
          "https://api.themoviedb.org/3/movie/popular?api_key="
        )
        .then((res) => {
          this.movies = res.data.results;
          console.log(this.movies);
        });
    },
  },
};
</script>

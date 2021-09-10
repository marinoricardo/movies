<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
      <v-btn
        text
      >
        <span class="mr-2">Consumindo APi de Filmes</span>
      </v-btn>
      </div>

      <v-spacer></v-spacer>
    </v-app-bar>
    

    <v-main>
      <router-view/>
    </v-main>
      <v-footer padless>
    <v-col
      class="text-center"
      cols="12"
    >
      {{ new Date().getFullYear() }} — <strong>Designed by Marino Ricardo</strong>
    </v-col>
  </v-footer>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>

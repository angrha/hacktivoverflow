<template>
  <div>
    <v-toolbar fixed dark color="blue-grey darken-4">
      <v-btn :to="{name: 'LandingPage'}" icon>
        <v-icon>fas fa-home</v-icon>
      </v-btn>
      <v-toolbar-title class="white--text">Hacktivoverflow</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>search</v-icon>
      </v-btn>
      <v-btn :to="{name: 'QuestionList'}" icon>
        <v-icon>apps</v-icon>
      </v-btn>
      <div v-if="isLogin">
        <v-btn @click="signout" depressed small color="blue-grey darken-2">Sign Out</v-btn>
      </div>
      <v-btn icon>
        <v-icon>more_vert</v-icon>
      </v-btn>
    </v-toolbar>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  computed: {
    ...mapState([
      'isLogin'
    ])
  },
  methods: {
    ...mapActions([
      'signout'
    ])
  }
}
</script>

<style>

</style>

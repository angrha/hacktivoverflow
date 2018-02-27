<template>
  <v-layout flex sm8>
    <v-flex xs12 sm12>
      <v-card>
        <v-toolbar dense>
          <v-toolbar-title>{{ detailQuestion.title }}</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
        <v-card-title primary-title>
          <div>
            <div>{{ detailQuestion.desc }}</div>
          </div>
        </v-card-title>
      </v-card>
      <!-- answer -->
        <v-container>
          <v-card v-for="list in detailQuestion.answers" :key="list._id">
            <v-toolbar dense>
              <v-toolbar-title>INI BUAT USERNAME ANSWER</v-toolbar-title>
              <v-spacer></v-spacer>
            </v-toolbar>
            <v-card-title primary-title>
              <div>
                <h4>{{ list.answer }}</h4>
              </div>
            </v-card-title>
          </v-card>
      </v-container>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  name: 'QuestionDetail',
  props: ['id'],
  computed: {
    ...mapState([
      'detailQuestion'
    ])
  },
  methods: {
    ...mapActions([
      'getDetailQuestion'
    ])
  },
  created () {
    this.getDetailQuestion(this.id)
  }
}
</script>

<style>

</style>

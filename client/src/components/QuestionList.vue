<template>
 <v-layout row style="margin-top: 5%;">
    <v-flex xs12 sm6 md8>
      <v-card>
        <v-list two-line>
          <template v-for="(question, index) in questions">
            <v-list-tile avatar ripple :key="index" @click="">
              <v-list-tile-content>
                <v-list-tile-title>{{ question.title }}</v-list-tile-title>
                <v-list-tile-sub-title class="text--primary">{{ question.desc }}</v-list-tile-sub-title>
              </v-list-tile-content>
              <v-list-tile-action>
                <v-list-tile-action-text>{{ question.author.username }}</v-list-tile-action-text>
                <div style="display: flex; justify-content: space-between;">
                <v-icon color="yellow lighten-2" style="margin-right: 5px;">fas fa-thumbs-up</v-icon>
                <v-icon color="yellow lighten-2" style="margin-left: 5px;">fas fa-thumbs-down</v-icon>
                </div>
              </v-list-tile-action>
            </v-list-tile>
            <v-divider v-if="index + 1 < questions.length" :key="`divider-${index}`"></v-divider>
          </template>
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  data () {
    return {
      divider: true,
      inset: true
    }
  },
  computed: {
    ...mapState([
      'questions'
    ])
  },
  methods: {
    ...mapActions([
      'getAllQuestion'
    ])
  },
  created () {
    this.getAllQuestion()
  }
}
</script>

<style>

</style>

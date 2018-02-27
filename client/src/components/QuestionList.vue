<template>
 <v-layout flex xs12 sm8>
    <v-flex xs12>
      <v-card>
        <v-list two-line>
          <template v-for="(question, index) in questions" :question="question">
            <v-list-tile avatar ripple :key="index">
              <v-list-tile-content>
                <router-link :to="{ name: 'QuestionDetail', params: { id: question._id } }">
                <v-list-tile-title>{{ question.title }}</v-list-tile-title>
                </router-link>
                <v-list-tile-sub-title class="text--primary">{{ question.desc.substr(0, 100) }}...</v-list-tile-sub-title>
              </v-list-tile-content>
              <v-list-tile-action>
                <v-list-tile-action-text>{{ question.author.username }}</v-list-tile-action-text>
                <div style="display: flex; justify-content: space-between;">
                <v-icon color="grey lighten-1">star_border</v-icon>
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
import { mapState } from 'vuex'
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
  }
}
</script>

<style>

</style>

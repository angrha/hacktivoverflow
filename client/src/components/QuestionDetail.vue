<template>
  <v-layout flex xs12 sm8>
    <v-flex xs12 sm12>
      <v-card>
        <v-toolbar dense>
          <v-toolbar-title>{{ detailQuestion.title }}</v-toolbar-title>
          <v-spacer></v-spacer>
            <v-btn icon>
              <v-icon>far fa-edit</v-icon>
            </v-btn>
            <v-btn @click="delQuestion(id)" icon>
              <v-icon>fas fa-trash</v-icon>
            </v-btn>
        </v-toolbar>
        <v-card-title primary-title>
          <div>
            <div>{{ detailQuestion.desc }}</div>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-container style="padding-top: 0px;">
            <div class="flx-thumb">
              <h3> {{ VotesUpQuestion }} </h3>
              <v-btn @click="upQuestion" icon>
                <v-icon > far fa-thumbs-up </v-icon>
              </v-btn>
              <h3> {{ VotesDownQuestion }} </h3>
              <v-btn @click="downQuestion" icon>
                <v-icon> far fa-thumbs-down </v-icon>
              </v-btn>
            </div>
          </v-container>
        </v-card-actions>    
      </v-card>
      <!-- list answer -->
      <ListAnswer :id="id"/>
      <!-- post answer -->
      <PostAnswer :id="id"/>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import ListAnswer from '@/components/ListAnswer'
import PostAnswer from '@/components/PostAnswer'
export default {
  name: 'QuestionDetail',
  props: ['id'],
  data () {
    return {
      thumbs: false
    }
  },
  components: {
    ListAnswer,
    PostAnswer
  },
  computed: {
    ...mapState([
      'detailQuestion',
      'VotesUpQuestion',
      'VotesDownQuestion'
    ])
  },
  methods: {
    ...mapActions([
      'getDetailQuestion',
      'delQuestion',
      'voteQuestion',
      'getVotesQuestion'
    ]),
    upQuestion () {
      this.thumbs = true
      let payload = {
        id: this.id,
        thumbs: this.thumbs
      }
      this.voteQuestion(payload)
    },
    downQuestion () {
      this.thumbs = false
      let payload = {
        id: this.id,
        thumbs: this.thumbs
      }
      this.voteQuestion(payload)
    }
  },
  created () {
    this.getDetailQuestion(this.id)
    this.getVotesQuestion(this.id)
  }
}
</script>

<style>

</style>

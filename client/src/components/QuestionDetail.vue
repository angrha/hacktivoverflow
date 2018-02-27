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
      </v-card>
      <!-- list answer -->
      <ListAnswer/>
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
  components: {
    ListAnswer,
    PostAnswer
  },
  computed: {
    ...mapState([
      'detailQuestion'
    ])
  },
  methods: {
    ...mapActions([
      'getDetailQuestion',
      'delQuestion'
    ])
  },
  created () {
    this.getDetailQuestion(this.id)
  },
  updated () {
    this.getDetailQuestion(this.id)
  }
}
</script>

<style>

</style>

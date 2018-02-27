<template>
  <v-layout style="margin-top: 5%;">
    <v-flex xs12 sm6 md8>
      <v-card>
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">{{ detailQuestion.title }}</h3>
            <div>{{ detailQuestion.desc }}</div>
          </div>
        </v-card-title>
        <v-divider></v-divider>
      <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">INI NTAR BUAT LIST ANSWER</h3>
            <div>Located two hours south of Sydney in the <br>Southern Highlands of New South Wales, ...</div>
          </div>
        </v-card-title>
      </v-card>
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

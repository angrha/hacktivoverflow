<template>
  <v-layout row justify-center>
    <v-dialog v-model="dialog" style="width: 100%;" persistent max-width="700px">
      <v-btn color="brown darken-4" dark slot="activator" style="width: 100%; margin-left: 0%;">Add Answer</v-btn>
      <v-card>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12>
                <v-text-field color="brown darken-4" multi-line v-model="answer" label="your answer"></v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
          <small>Thanks for contributing an answer to Hacktiv Overflow!</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="brown darken-4" flat @click.native="dialog = false">Cancel</v-btn>
          <v-btn color="brown darken-4" flat @click.native="postAnswer">Submit</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  props: ['id'],
  data () {
    return {
      answer: '',
      dialog: false
    }
  },
  methods: {
    ...mapActions([
      'addAnswer'
    ]),
    postAnswer () {
      let objAnswer = {
        id: this.id,
        answer: this.answer
      }
      this.addAnswer(objAnswer)
        .then(() => {
          this.answer = ''
          this.dialog = false
        })
        .catch(err => console.log(err))
    }
  }
}
</script>

<style>

</style>

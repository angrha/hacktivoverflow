<template>
  <v-layout row justify-center flex xs6 sm4>
    <v-dialog v-model="dialog" fullscreen transition="dialog-bottom-transition" style="width: 100%;" :overlay="false">
      <v-btn
      color="brown darken-4"
      dark
      slot="activator"
      style="width: 100%; margin-top: 0%;"
      >ADD NEW QUESTION
      </v-btn>
      <v-card>
        <v-toolbar dark color="brown darken-4">
          <v-btn icon @click.native="dialog = false" dark>
            <v-icon>close</v-icon>
          </v-btn>
          <v-toolbar-title>NEW POST</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn dark flat @click.native="postQuestion(form)">Send</v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <v-container>
          <v-layout row>
            <v-flex xs4 md2>
              <v-subheader>Title</v-subheader>
            </v-flex>
            <v-flex xs6 md10>
              <v-text-field v-model="form.title" label="your title question"></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs4 md2>
              <v-subheader>Description</v-subheader>
            </v-flex>
            <v-flex xs6 md10>
              <v-text-field v-model="form.desc" multi-line label="Please describe as detail as possible"></v-text-field>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      dialog: false,
      notifications: false,
      sound: true,
      widgets: false,
      form: {
        title: '',
        desc: ''
      }
    }
  },
  methods: {
    ...mapActions([
      'addQuestion',
      'getAllQuestion'
    ]),
    postQuestion (form) {
      this.addQuestion(form)
        .then(() => {
          this.getAllQuestion()
          this.form.title = ''
          this.form.desc = ''
          this.dialog = false
        })
        .catch(err => console.log(err))
    }
  }
}
</script>
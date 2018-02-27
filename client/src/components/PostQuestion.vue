<template>
  <v-layout row justify-center flex sm4>
    <v-dialog v-model="dialog" fullscreen transition="dialog-bottom-transition" :overlay="false">
      <v-btn
      color="blue-grey darken-4"
      dark
      slot="activator"
      >ADD NEW QUESTION
      </v-btn>
      <v-card>
        <v-toolbar dark color="blue-grey darken-4">
          <v-btn icon @click.native="dialog = false" dark>
            <v-icon>close</v-icon>
          </v-btn>
          <v-toolbar-title>NEW POST</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn dark flat @click.native="dialog = false">Save</v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <v-container>
          <v-layout row>
            <v-flex xs4 md2>
              <v-subheader>Title</v-subheader>
            </v-flex>
            <v-flex xs6 md10>
              <v-text-field label="your title question"></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs4 md2>
              <v-subheader>Description</v-subheader>
            </v-flex>
            <v-flex xs6 md10>
              <v-text-field multi-line label="Please describe as detail as possible"></v-text-field>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
  export default {
    data () {
      return {
        dialog: false,
        notifications: false,
        sound: true,
        widgets: false
      }
    }
  }
</script>
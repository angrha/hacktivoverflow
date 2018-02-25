<template>
  <div class="text-xs">
    <v-menu
      transition="slide-x-transition"
      offset-x
      :close-on-content-click="false"
      :nudge-width="120"
      v-model="menu"
    >
      <v-btn
        color="brown darken-4"
        dark
        slot="activator"
        class="btn"
      >Sign Up
      </v-btn>
      <v-card>
        <v-list>
          <v-container fluid>
          <v-form v-model="valid">
            <v-text-field
              color="brown darken-4"
              label="Username"
              v-model="formData.username"
              :rules="nameRules"
              :counter="10"
              required
            ></v-text-field>
            <v-text-field
              color="brown darken-4"
              label="E-mail"
              v-model="formData.email"
              type="email"
              :rules="emailRules"
              required
            ></v-text-field>
            <v-text-field
              color="brown darken-4"
              label="Password"
              v-model="formData.password"
              type="password"
              required
            ></v-text-field>
          </v-form>
          </v-container>
        </v-list>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn flat @click="menu = false">Cancel</v-btn>
          <v-btn color="brown darken-2" flat @click="register(formData)">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-menu>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      valid: false,
      menu: false,
      formData: {
        username: '',
        email: '',
        password: ''
      },
      nameRules: [
        v => !!v || 'Name is required',
        v => v.length <= 10 || 'Name must be less than 10 characters'
      ],
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
      ]
    }
  },
  methods: {
    ...mapActions([
      'signup'
    ]),
    register (user) {
      this.signup(user)
        .then(() => {
          this.formData.username = ''
          this.formData.email = ''
          this.formData.password = ''
          this.menu = false
        })
    }
  }
}
</script>

<style scoped>
.btn {
  margin-left: 3px;
  padding-right: 15px;
  padding-left: 15px;
}
</style>

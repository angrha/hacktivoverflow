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
        color="blue-grey darken-4"
        dark
        slot="activator"
        class="btn"
      >See More...
      </v-btn>
      <v-card>
        <v-list>
          <v-container fluid>
          <v-form v-model="valid">
            <v-text-field
              color="blue-grey darken-4"
              label="E-mail"
              v-model="formData.email"
              type="email"
              :rules="emailRules"
              required
            ></v-text-field>
            <v-text-field
              color="blue-grey darken-4"
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
          <v-btn flat @click="goHome">Go to Home</v-btn>
          <v-btn color="indigo darken-4" flat @click="setSignin(formData)">Sign In</v-btn>
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
        email: '',
        password: ''
      },
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
      ]
    }
  },
  methods: {
    ...mapActions([
      'signin'
    ]),
    setSignin (user) {
      this.signin(user)
        .then(() => {
          this.formData.email = ''
          this.formData.password = ''
          this.menu = false
        })
        .catch(err => console.log(err))
    },
    goHome () {
      this.menu = false
      this.$router.push({name: 'Home'})
    }
  }
}
</script>

<style scoped>
.btn {
  margin-left: 3px;
  padding-right: 10px;
  padding-left: 10px;
}
</style>

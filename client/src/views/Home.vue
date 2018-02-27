<template>
  <div class="bg-home">
    <Navbar/>
    <v-container fluid>
      <router-view></router-view>
    </v-container>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Navbar from '@/components/Navbar'
export default {
  components: {
    Navbar
  },
  methods: {
    ...mapActions([
      'checkLogin',
      'getAllQuestion'
    ])
  },
  created () {
    this.checkLogin()
    this.getAllQuestion()
  }
}
</script>

<style>
.bg-home {
  background-image: url('../assets/question.jpg');
  background-size: cover;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>

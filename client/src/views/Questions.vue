<template>
  <div class="bg-home">
    <Navbar/>
    <v-container fluid>
      <div class="flx-hm">
        <router-view v-show="questions.length > 0" ></router-view>
        <PostQuestion/>
      </div>
    </v-container>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import Navbar from '@/components/Navbar'
import PostQuestion from '@/components/PostQuestion'
export default {
  components: {
    Navbar,
    PostQuestion
  },
  computed: {
    ...mapState([
      'questions'
    ])
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
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.flx-hm {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 60px;
}
</style>

<template>
  <div class="bg-home">
    <Navbar/>
    <v-container fluid>
      <QuestionList/>
    </v-container>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import QuestionList from '@/components/QuestionList'
export default {
  components: {
    Navbar,
    QuestionList
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

<template>
  <div>
    <v-container class="wrap-banner">
      <v-layout align-center class="main-title">
        <v-flex sm6>
          <h3 class="display-3">Learn, Share, Build</h3>
          <span class="subheading">Over 50 million developers come to Hacktiv Overflow to learn, share their knowledge, and build their careers.</span>
          <v-divider class="my-3"></v-divider>
          <div class="title mb-3">Join to Developer Community!</div>
          <div class="flx-btn">
            <SignIn/>
            <SignUp/>
          </div>
        </v-flex>
      </v-layout>
    </v-container>
    <vue-particles
      color="#dedede"
      :particleOpacity="0.7"
      :particlesNumber="80"
      shapeType="circle"
      :particleSize="3"
      linesColor="#dedede"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="150"
      :moveSpeed="3"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
    >
    </vue-particles>
  </div>
</template>

<script>
import SignUp from '@/components/SignUp'
import SignIn from '@/components/SignIn'
export default {
  components: {
    SignIn,
    SignUp
  }
}
</script>

<style scoped>
.wrap-banner {
  margin-top: 5%;
  position: relative;
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
}

#particles-js {
  background-image: url('../assets/picsart.jpg');
  background-size: cover;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.main-title {
  color: #fff;
  z-index: 999;
}

.flx-btn {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start
}
</style>

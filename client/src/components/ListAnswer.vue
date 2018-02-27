<template>
  <v-layout style="margin-top: 20px;">
    <v-flex xs12 sm12>
      <v-card v-for="list in detailQuestion.answers" :key="list._id">
        <v-card-title primary-title>
          <div style="width: 100%;">
            <div class="flx-c">
              <h4 class="headline mb-0">{{ list.author }}</h4>
              <v-spacer></v-spacer>
              <v-btn icon>
                <v-icon>far fa-trash-alt</v-icon>
              </v-btn>
            </div>
            <v-divider></v-divider>
            <div>{{ list.answer }}</div>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-btn flat color="orange">Share</v-btn>
          <v-btn flat color="orange">Explore</v-btn>
        </v-card-actions>
        <v-divider></v-divider>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState([
      'detailQuestion'
    ])
  }
}
</script>

<style scoped>
.flx-c {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}
</style>

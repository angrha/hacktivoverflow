<template>
  <v-layout style="margin-top: 20px;">
    <v-flex xs12 sm12>
      <v-card v-for="list in detailQuestion.answers" :key="list._id">
        <v-card-title primary-title style="padding-bottom: 0px;">
          <div style="width: 100%;">
            <div class="flx-c">
              <h3>{{ list.author }}</h3>
              <v-spacer></v-spacer>
              <v-btn @click="delAnswer(list._id)" icon>
                <v-icon>far fa-trash-alt</v-icon>
              </v-btn>
            </div>
            <v-divider></v-divider>
            <div>
              <p style="margin-bottom: 0px; margin-top: 20px;"> {{ list.answer }} </p>
            </div>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-container style="padding-top: 0px;">
            <div class="flx-thumb">
              <h3>0 </h3>
              <v-btn icon>
                <v-icon> far fa-thumbs-up </v-icon>
              </v-btn>
              <h3>0 </h3>
              <v-btn icon>
                <v-icon> far fa-thumbs-down </v-icon>
              </v-btn>
            </div>
          </v-container>
        </v-card-actions>
        <v-divider></v-divider>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  props: ['id'],
  computed: {
    ...mapState([
      'detailQuestion'
    ])
  },
  methods: {
    ...mapActions([
      'delAnswer',
      'getDetailQuestion'
    ])
  }
  // watch: {
  //   detailQuestion: function () {
  //     this.getDetailQuestion(this.id)
  //   }
  // }
}
</script>

<style>
.flx-c {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}

.flx-thumb {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
</style>

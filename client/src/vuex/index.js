import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router'
import swal from 'sweetalert'

Vue.use(Vuex)

const overflow = 'auth-hacktivoverflow'
const baseUrl = 'http://localhost:3000/api'

const store = new Vuex.Store({
  state: {
    isLogin: false,
    questions: [],
    detailQuestion: {}
  },
  mutations: {
    SET_LOGIN (state, payload) {
      state.isLogin = payload
    },
    LOAD_QUESTIONS (state, payload) {
      state.questions = payload
    },
    LOAD_DETAIL_QUESTION (state, payload) {
      state.detailQuestion = payload
    },
    SEND_QUESTION (state, payload) {
      state.questions.push(payload)
    }
  },
  actions: {
    signin ({ commit }, payload) {
      axios.post(baseUrl + '/users/signin', payload)
        .then(response => {
          localStorage.setItem(overflow, response.data.token)
          commit('SET_LOGIN', true)
          router.push({name: 'QuestionList'})
        })
        .catch(err => {
          swal({
            text: `${err.response.data.message}`,
            icon: 'error',
            button: 'next'
          })
          console.log(err)
        })
    },
    checkLogin ({ commit }) {
      if (localStorage.getItem(overflow)) {
        commit('SET_LOGIN', true)
      }
    },
    signout ({ commit }) {
      localStorage.clear()
      commit('SET_LOGIN', false)
      router.push({name: 'LandingPage'})
    },
    signup ({ commit }, payload) {
      axios.post(baseUrl + '/users/signup', payload)
        .then(response => {
          swal({
            text: `${response.data.message}`,
            icon: 'success',
            button: 'next'
          })
        })
        .catch(err => {
          swal({
            text: `${err.response.data.message}`,
            icon: 'error',
            button: 'next'
          })
          console.log(err)
        })
    },
    getAllQuestion ({ commit }) {
      axios.get(baseUrl + '/questions')
        .then(response => {
          commit('LOAD_QUESTIONS', response.data.questions)
        })
        .catch(err => {
          swal({
            text: `${err}`,
            icon: 'error',
            button: 'next'
          })
          console.log(err)
        })
    },
    getDetailQuestion ({ commit }, id) {
      console.log(id, 'ini ideeee')
      axios.get(baseUrl + `/questions/${id}`)
        .then(response => {
          console.log('sadklsakdlsald', response.data.question)
          commit('LOAD_DETAIL_QUESTION', response.data.question)
        })
        .catch(err => {
          swal({
            text: `${err}`,
            icon: 'error',
            button: 'next'
          })
          console.log(err)
        })
    },
    addQuestion ({ commit }, payload) {
      axios.post(baseUrl + '/questions', payload, {
        headers: {
          token: localStorage.getItem(overflow)
        }
      })
        .then(response => {
          console.log(response.data.question, 'ini questionssndsandsadsa')
          commit('SEND_QUESTION', response.data.question)
        })
        .catch(err => {
          swal({
            text: `${err}`,
            icon: 'error',
            button: 'next'
          })
          console.log(err)
        })
    },
    addAnswer ({ commit }, payload) {
      console.log(payload.id, 'ini patlsaidjsad id')
      axios.put(baseUrl + `/questions/${payload.id}/answer`, payload.answer, {
        headers: {
          token: localStorage.getItem(overflow)
        }
      })
        .then(response => {
          console.log(response.data.answer, 'ini jawaban sodara')
        })
        .catch(err => {
          swal({
            text: `${err}`,
            icon: 'error',
            button: 'next'
          })
          console.log(err)
        })
    }
  }
})

export default store

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
    detailQuestion: {},
    quantityVotesQuestion: 0
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
    },
    PROCESS_DELETE (state, payload) {
      let index = state.questions.findIndex(x => {
        return x._id === payload
      })
      state.questions.splice(index, 1)
    },
    COUNT_QUESTION_VOTES (state, payload) {
      state.quantityVotesQuestion = payload.length
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
      axios.get(baseUrl + `/questions/${id}`)
        .then(response => {
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
          commit('SEND_QUESTION', response.data.question)
        })
        .catch(err => {
          swal({
            title: 'you need login to post new question',
            text: `${err.response.data.message}`,
            icon: 'error',
            button: 'next'
          })
          console.log(err)
        })
    },
    addAnswer ({ commit }, payload) {
      axios.put(baseUrl + `/questions/${payload.id}/answer`, {
        answer: payload.answer
      }, {
        headers: {
          token: localStorage.getItem(overflow)
        }
      })
        .then(response => {
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
    delQuestion ({ commit }, id) {
      commit('PROCESS_DELETE', id)
      axios.delete(baseUrl + `/questions/${id}`, {
        headers: {
          token: localStorage.getItem(overflow)
        }
      })
        .then(response => {
          router.push({name: 'QuestionList'})
          swal({
            text: `${response.data.message}`,
            icon: 'success',
            button: 'next'
          })
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
    delAnswer ({ commit }, id) {
      axios.delete(baseUrl + `/answers/${id}`, {
        headers: {
          token: localStorage.getItem(overflow)
        }
      })
        .then(response => {
          console.log(response.data.message)
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
    voteQuestion ({ commit }, payload) {
      axios.put(baseUrl + `/questions/${payload.id}/votes`, {}, {
        headers: {
          token: localStorage.getItem(overflow)
        }
      })
        .then(response => {
          console.log(response.data.vote.votes, 'ini votes')
          commit('COUNT_QUESTION_VOTES', response.data.vote.votes)
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

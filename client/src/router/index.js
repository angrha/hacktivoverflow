import Vue from 'vue'
import Router from 'vue-router'
import LandingPage from '@/views/LandingPage'
import Home from '@/views/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LandingPage',
      component: LandingPage
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import LandingPage from '@/views/LandingPage'
import Home from '@/views/Home'
import QuestionList from '@/components/QuestionList'
import QuestionDetail from '@/components/QuestionDetail'

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
      component: Home,
      children: [
        {
          path: '',
          name: 'QuestionList',
          component: QuestionList
        },
        {
          path: ':id',
          name: 'QuestionDetail',
          props: true,
          component: QuestionDetail
        }
      ]
    }
  ]
})

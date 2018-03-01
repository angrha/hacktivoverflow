import Vue from 'vue'
import Router from 'vue-router'
import LandingPage from '@/views/LandingPage'
import Questions from '@/views/Questions'
import QuestionList from '@/components/QuestionList'
import QuestionDetail from '@/components/QuestionDetail'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'LandingPage',
      component: LandingPage
    },
    {
      path: '/questions',
      component: Questions,
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

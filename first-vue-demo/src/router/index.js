import Vue from 'vue'
import Router from 'vue-router'
import Index from '../views/index/index'
import Manage from '../views/manage/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/manage',
      name: 'manage',
      component: Manage
    }
  ]
})

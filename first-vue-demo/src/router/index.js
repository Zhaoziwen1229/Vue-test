import Vue from 'vue'
import Router from 'vue-router'
import Index from '../views/index/index'
import Manage from '../views/manage/index'
import HI from '@/components/hi'
import HI1 from '@/components/hi1'
import HI2 from '@/components/hi2'
import HelloWorld from '@/components/HelloWorld'
import Hello1 from '@/components/Hello1'
import Hello2 from '@/components/Hello2'
import Splice from '@/components/splice'
import Params from '@/components/params'
import Error from '@/components/Error'

Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    {
      path: '/',
      name: 'helloworld',
      components: {
        default:HelloWorld,
        left:Hello1,
        right:Hello2
      }
    },
    {
      path: '/index',
      name: 'index',
      component: Index
    },
    {
      path: '/manage',
      name: 'manage',
      component: Manage
    },
    {
      path: '/hi',
      component: HI,
      alias:'/ssd',
      children:[
        {
          path:'/',name:'hello/hi',component:HI
        },
        {
          path:'hi1',name:"hi1",component:HI1
        },
        {
          path:'hi2',name:"hi2",component:HI2
        }
      ]
    },
    {
      path: '/splice',
      name: 'helloworld',
      components: {
        default:HelloWorld,
        left:Hello2,
        right:Hello1
      }
    },
    {
      path:"/params/:newsId/:newsTitle",
      name:"params",
      component:Params
     
    },
    {
      path:"/gohome",
      redirect:'/'
    },
    {
      path:'/goParams/:newsId/:newsTitle' ,
      redirect:'/params/:newsId/:newsTitle'
    },
    {
      path:'*' ,
     component:Error
    }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Login'
import Board from '@/components/Board'
import Task from '@/components/Task'
import List from '@/components/List'
import Comment from '@/components/Comment'
import User from '@/components/User'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home

    },
   {
    path: '/login',
      name: 'Login',
      component: Login
   },
   {
    path: '/board/:boardId',
      name: 'Board',
      component: Board
   },
   {
    path: '/task',
      name: 'Task',
      component: Task
   },
   {
    path: '/list/',
      name: 'List',
      component: List
   },
   { 
    path: '/comment/',
    name: 'List',
    component: Comment
    },
    {
      path: '/user/',
      name: 'User',
      component: User
    }
  ]
})

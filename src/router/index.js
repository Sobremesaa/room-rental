import Vue from 'vue'
import VueRouter from 'vue-router'

//用户界面
import login from '../components/login.vue'
import user from '../components/user.vue'
import manager from '../components/manager.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: login,
  },
  {
    path: '/user',
    name:'user',
    component: user,
  },
  {
    path: '/manager',
    name:'manager',
    component: manager,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
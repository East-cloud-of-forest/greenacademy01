import Vue from 'vue'
import VueRouter from 'vue-router'
import ListView from '../views/ListView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'list',
    component: ListView
  },
  {
    path: '/write',
    name: 'write',
    component: function () {
      return import('../views/WriteView.vue')
    }
  },
  {
    path: '/page:id',
    name: 'page',
    component: function () {
      return import('../views/PageView.vue')
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

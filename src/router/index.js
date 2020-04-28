import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/HelloWorld'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Dashboard',
    name: 'Dashboard',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/Dashboard.vue')
    }
  },
  {
    path: '/team',
    name: 'Team',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/Team.vue')
    }
  },
  {
    path: '/projects',
    name: 'Projects',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/Projects.vue')
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

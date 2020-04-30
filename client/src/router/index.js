import Vue from 'vue'
import Home from '../components/HelloWorld'
import Dashboard from '../views/Dashboard'
import Team from '../views/Team'
import Projects from '../views/Projects'
import VueRouter from 'vue-router'

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
    component: Dashboard
  },
  {
    path: '/team',
    name: 'Team',
    component: Team
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

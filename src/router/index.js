import Vue from 'vue'
import VueRouter from 'vue-router'
import Notes from '../views/Notes.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'notes',
    component: Notes
  }
]

const router = new VueRouter({
  routes
})

export default router

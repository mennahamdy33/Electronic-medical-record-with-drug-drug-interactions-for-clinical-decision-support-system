import { createRouter, createWebHistory } from '@ionic/vue-router';
import Home from '../views/Home.vue'
import BookDoctor from '../views/BookDoctor'
const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/bookDoctor',
    name:'bookDoctor',
    component: BookDoctor
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

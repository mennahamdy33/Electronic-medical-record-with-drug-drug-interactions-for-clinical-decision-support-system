import { createRouter, createWebHistory } from '@ionic/vue-router';
import Home from '../Pages/Home.vue'
import BookDoctor from '../Pages/BookDoctor'
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

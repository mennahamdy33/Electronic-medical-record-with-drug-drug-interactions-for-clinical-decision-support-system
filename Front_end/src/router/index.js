import { createRouter, createWebHistory } from '@ionic/vue-router';
import HomePage from '@/views/Home.vue';
import Prescription from '@/views/pages/Prescription.vue';

const routes = [
  {
    path: '/',
    redirect:"Home"
  },
  {
    path: '/Home',
    component:HomePage
  },
  // {
  //   path: '/Signup',
  //   component:Signup
  // },
  {
    path: '/Prescription',
    component:Prescription
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});
export default router




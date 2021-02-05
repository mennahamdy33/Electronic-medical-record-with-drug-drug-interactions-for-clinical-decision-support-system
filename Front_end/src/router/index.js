import { createRouter, createWebHistory } from '@ionic/vue-router';
// import HomePage from '@/views/Home.vue';
// import SignUp from '@/views/Signup';

import Prescription from '@/Pages/Prescription.vue';

const routes = [
  {
    path: '/',
    redirect:"Home"
  },
  // {
  //   path: '/Signup',
  //   component:SignUp
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




import { createRouter, createWebHistory } from '@ionic/vue-router';
import AddPatientPage from '../pages/AddPatientPage.vue'

const routes = [
  {
    path: '/',
    redirect: '/addpatient'
  },
    {
      path : '/addpatient',
        component: AddPatientPage
    },
    {
      path:'/patientProfile',
        component:() => import('../pages/PatientProfilePage')
    }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

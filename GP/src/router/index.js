import { createRouter, createWebHistory } from '@ionic/vue-router';
import Home from '../Pages/Home.vue'
import BookDoctor from '../Pages/BookDoctor'

import AddPatientPage from '../Pages/DSProfiles/AddPatientPage.vue'
import Signup from '../Pages/Signup/Signup.vue'

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
  },
    {path: '/Signup' , component: Signup},
    {
        path : '/addpatient',
        component: AddPatientPage
    },
    {
        path:'/patientProfile',
        component:() => import('../Pages/DSProfiles/PatientProfilePage')
    },
    {
        path:'/doctorProfile',
        component:() => import('../Pages/DSProfiles/DoctorProfilePage')
    },
]



const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router














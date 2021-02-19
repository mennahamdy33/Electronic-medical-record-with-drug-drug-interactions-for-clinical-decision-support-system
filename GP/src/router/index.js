import { createRouter, createWebHistory } from '@ionic/vue-router';
//import Home from '../Pages/Home.vue'
import BookDoctor from '../Pages/BookDoctor'
import LandingPage from '../Pages/LandingPage/LandingPage.vue'
import AddPatientPage from '../Pages/DSProfiles/AddPatientPage.vue'
import Signup from '../Pages/Signup/Signup.vue'
import Prescription from '@/Pages/Prescription.vue';
import Purchase from '../Pages/LandingPage/Purchase.vue'
const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    
    path: '/home',
    component: LandingPage,
  },
  
  {
    path: '/bookDoctor',
    name:'bookDoctor',
    component: BookDoctor
  },

  {path: '/Signup' , component: Signup},

  {path: '/Purchase' , component: Purchase},

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
  {
      path: '/Prescription',
      component:Prescription
  },
]



const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router














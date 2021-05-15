import { createRouter, createWebHistory } from '@ionic/vue-router';
//import Home from '../Pages/Home.vue'
import BookDoctor from '../Pages/BookDoctor'
import LandingPage from '../Pages/LandingPage/LandingPage.vue'
import AddPatientPage from '../Pages/DSProfiles/AddPatientPage.vue'
import MedicalHistory from '../Pages/DSProfiles/MedicalHistory.vue'
import Signup from '../Pages/Signup/Signup.vue'
import Login from '../Pages/Login/Login.vue'
import Prescription from '@/Pages/Prescription.vue';
import SignupPurchase from '../Pages/Purchase/Signup.vue'
import LoginPurchase from '../Pages/Purchase/Login.vue'
import ProfilePurchase from '../Pages/Purchase/ProfilePurchase.vue'
import MainPageDoctor from '../Pages/DoctorProfile/MainPage.vue'
import MyProfileDoctor from '../Pages/DoctorProfile/MyProfile.vue'
import MySchedules from '../Pages/DoctorProfile/Schedules.vue'

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


  {path: '/Login' , component: Login},

  {path: '/SignupPurchase' , component: SignupPurchase},
  {path: '/LoginPurchase' , component: LoginPurchase},
  {path: '/ProfilePurchase' , component:  ProfilePurchase},

  
    {
        path : '/medicalhistory',
        component: MedicalHistory
    },


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
  {
      path: '/MainPageDoctor',
      component:MainPageDoctor,
      // redirect: '/MainPageDoctor/MyProfileDoctor',
      children: 
      [
        {
          path: 'MyProfileDoctor',
          component: MyProfileDoctor,
             
          
        },
        {
          path: 'MySchedules',
          component: MySchedules,
             
          
        },

      ]
  },

]



const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router














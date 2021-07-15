import { createRouter, createWebHistory } from '@ionic/vue-router';
import LandingPage from '../Pages/LandingPage/LandingPage.vue'
// import store from '../store/index.js'
import Signup from '../Pages/Signup/Signup.vue'
import Login from '../Pages/Login/Login.vue'
// import Prescription from '@/Pages/Prescription.vue';
import SignupPurchase from '../Pages/Purchase/Signup.vue'
import LoginPurchase from '../Pages/Purchase/Login.vue'
import ProfilePurchase from '../Pages/Purchase/ProfilePurchase.vue'
import MainPageDoctor from '../Pages/DoctorProfile/MainPage.vue'
import MainPageSecretery from '../Pages/SecreteryProfile/MainPage.vue'
import MyProfileDoctor from '../Pages/DoctorProfile/MyProfile.vue'
import MyProfileSecretery from '../Pages/SecreteryProfile/MyProfile.vue'
import AddPatient from '../Pages/SecreteryProfile/AddPatient.vue'
import BookVisit from '../Pages/SecreteryProfile/BookVisit.vue'
import MySchedules from '../Pages/DoctorProfile/Schedules.vue'
import Prescription from '../Pages/DoctorProfile/Prescription.vue'
import todaySchedules from '../Pages/SecreteryProfile/Schedules.vue'
import PrescriptionPreview from '../Pages/DoctorProfile/PrescriptionPreview.vue'

//import AllPatients from '../Pages/PatientProfile/AllPatients.vue'
const routes = [
  {
    
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    component: LandingPage,
  },


  { path: '/Signup', component: Signup },


  { path: '/Login', component: Login },

  { path: '/SignupPurchase', component: SignupPurchase },

  { path: '/LoginPurchase', component: LoginPurchase },


  {
    path: '/ProfilePurchase',
    component: ProfilePurchase,
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem('tokenPurchase') === null) {

        next('/LoginPurchase');
      } else {
        next();
      }
    }
  },





  {
    path: '/MainPageDoctor',
    component: MainPageDoctor,
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem('tokendoctor') === null) {
        next('/Login');
      } else {
        next();
      }
    },
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
        {
          path: 'Prescription',
          component: Prescription,
             
          
          },
        {
                  
          path: 'PrescriptionPreview/:id',
          component: PrescriptionPreview,
             
          
        },
        {
          path: 'myPatients',
          component: () => import('../Pages/DoctorProfile/myPatients')


        },

      ]
  },
  {
    path: '/MainPageSecretery',
    component: MainPageSecretery,
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem('tokensecretary') === null) {
        next('/Login');
      } else {
        next();
      }
    },
    // redirect: '/MainPageDoctor/MyProfileDoctor',
    children:
      [
        {
          path: '/todaySchedule',
          component: todaySchedules
        }, 
        {
          path: 'MyProfileSecretery',
          component: MyProfileSecretery,


        },
        {
          path: 'AddPatient',
          component: AddPatient,


        },
        {
          path: 'BookVisit',
          component: BookVisit,


        },
        {
          path: 'AllPatients',
          component: () => import('../Pages/SecreteryProfile/AllPatients')


        },



      ]
  },

];



const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router














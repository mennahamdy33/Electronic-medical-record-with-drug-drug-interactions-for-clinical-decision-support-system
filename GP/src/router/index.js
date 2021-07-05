import { createRouter, createWebHistory } from '@ionic/vue-router';
import BookDoctor from '../Pages/BookDoctor'
import LandingPage from '../Pages/LandingPage/LandingPage.vue'
import store from '../store/index.js'
import Signup from '../Pages/Signup/Signup.vue'
import Login from '../Pages/Login/Login.vue'
// import Prescription from '@/Pages/Prescription.vue';
import SignupPurchase from '../Pages/Purchase/Signup.vue'
import LoginPurchase from '../Pages/Purchase/Login.vue'
import ProfilePurchase from '../Pages/Purchase/ProfilePurchase.vue'
//import MainPageDoctor from '../Pages/DoctorProfile/MainPage.vue'
import MainPageSecretery from '../Pages/SecreteryProfile/MainPage.vue'
import MyProfileDoctor from '../Pages/DoctorProfile/MyProfile.vue'
import MyProfileSecretery from '../Pages/SecreteryProfile/MyProfile.vue'
import AddPatient from '../Pages/SecreteryProfile/AddPatient.vue'
import BookVisit from '../Pages/SecreteryProfile/BookVisit.vue'
import MySchedules from '../Pages/DoctorProfile/Schedules.vue'
import Prescription from '../Pages/DoctorProfile/Prescription.vue'
import AllPatients from '../Pages/PatientProfile/AllPatients.vue'
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

    {path: '/AllPatients' , component: AllPatients},
    {path: '/LoginPurchase' , component: LoginPurchase},


  {path: '/ProfilePurchase' ,
   component:  ProfilePurchase ,
    beforeEnter: (to, from, next) => {
      if(store.getters['user'] === null) {
          next('/LoginPurchase');
      } else {
          next();
      }
    }
},

  


  {
      path:'/PatientProfile',
      component:() => import('../Pages/PatientProfile/PatientProfile')
  },

  // {
  //     path: '/Prescription',
  //     component:Prescription
  // },
  {
      path: '/MainPageDoctor',
      component:MainPageDoctor,
      beforeEnter: (to, from, next) => {
        if(store.getters['staffID'] === null) {
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

      ]
  },
  {
      path: '/MainPageSecretery',
      component:MainPageSecretery,
      beforeEnter: (to, from, next) => {
        if(store.getters['staffID'] === null) {
            next('/Login');
        } else {
            next();
        }
      },
      // redirect: '/MainPageDoctor/MyProfileDoctor',
      children: 
      [
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
        
        

      ]
  },

];



const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router














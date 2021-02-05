import { createRouter, createWebHistory } from '@ionic/vue-router';
import AddPatientPage from '../Pages/DSProfiles/AddPatientPage.vue'
import Signup from '../Pages/Signup/Signup.vue'

const routes = [
    {
        path: '/',
        redirect: '/home'
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

];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router














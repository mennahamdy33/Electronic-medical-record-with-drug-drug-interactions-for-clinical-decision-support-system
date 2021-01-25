import { createRouter, createWebHistory } from '@ionic/vue-router';
import Signup2 from '../Pages/Signup2.vue'
import Signup from '../Pages/Signup.vue'

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {path: '/PersonalInformation' , component: Signup},
  {path: '/MakeAccount' , component: Signup2}
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router




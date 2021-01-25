<template>
  <ion-app>
    <!-- <ion-router-outlet /> -->
    <landing-page></landing-page>    
    <router-view></router-view>
    <!-- <signup></signup>     -->
    <!-- <progress-bar></progress-bar> -->
  </ion-app>

  
</template>

<script>
import { IonApp } from '@ionic/vue';
import LandingPage from './Pages/LandingPage.vue'
// import { IonApp, IonRouterOutlet } from '@ionic/vue';
import { defineComponent } from 'vue';
// import ProgressBar from './Components/ProgressBar.vue';
// import Signup from './Pages/Signup.vue';
export default defineComponent({
  name: 'App',
  components: {
    IonApp,
    // IonRouterOutlet,
    // ProgressBar,
    // Signup,
    LandingPage
    
  }
});
</script>


<template>
  <ion-app>
    <ion-router-outlet />
    <signup></signup>    
    <!-- <progress-bar></progress-bar> -->
  </ion-app>

  
</template>

<script>
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import { defineComponent } from 'vue';
// import ProgressBar from './Components/ProgressBar.vue';
// import Signup from './Signup.vue';
export default defineComponent({
  name: 'App',
  components: {
    IonApp,
    IonRouterOutlet,
    // ProgressBar,
    // Signup
    
  }
});
</script>


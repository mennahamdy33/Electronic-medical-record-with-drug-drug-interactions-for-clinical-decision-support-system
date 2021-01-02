<template>
  <ion-app>
    <ion-router-outlet />
    <signup></signup>    
  </ion-app>

  
</template>

<script>
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import { defineComponent } from 'vue';
import Signup from './Signup.vue';
export default defineComponent({
  name: 'App',
  components: {
    IonApp,
    IonRouterOutlet,
    Signup
    
  }
});
</script>


<template>
  <ion-app>
    <ion-router-outlet />
    <Signup/>
    
  </ion-app>
</template>

<script>
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import { defineComponent } from 'vue';
import Signup from "./Signup"
export default defineComponent({
  name: 'App',
  components: {
    IonApp,
    IonRouterOutlet,
    Signup
  }
});
</script>


<template>
  <ion-page>
    <ion-content class="content">

      <ion-grid  >      

        <ion-row >
          <ion-col offset-lg="0.2" offset-xs="3.4" size-lg="1.5" size-xs="6">
            <div class="image">   
              <img src="../../../public/assets/mainlogo.png" @click="router.push('/')" >
              <!-- <img src="../../../public/assets/logo4.png"  >    -->
            </div>
          </ion-col>
          
          <ion-col offset-lg="0.9" pull-xs="0"  size-lg="6" size-xs="15" >
            <progress-bar text="signup"></progress-bar>
          </ion-col>
        </ion-row>
        <keep-alive>
          <personal-information v-if=" SignupPhase === 'PersonalInformation'" />
        </keep-alive>

        <keep-alive>
          <make-account v-if=" SignupPhase === 'MakeAccount'" />
        </keep-alive>
        
        <keep-alive>
          <clinics v-if=" SignupPhase === 'Clinics'" /> 
        </keep-alive>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script>
import { defineComponent , KeepAlive} from 'vue';
import { IonPage,IonContent,IonCol, IonGrid, IonRow } from '@ionic/vue';
import ProgressBar from '../../components/ProgressBar.vue';
import PersonalInformation from './PersonalInformation.vue';
import MakeAccount from './MakeAccount.vue';
import Clinics from './Clinics.vue'
import { mapGetters } from 'vuex';
import {useRouter} from 'vue-router';

export default defineComponent({
  name: 'Signup',
  components: {
    
    IonCol,
    IonGrid,
    IonRow,
    IonContent,
    ProgressBar,
    IonPage,
    PersonalInformation,
    MakeAccount ,
    Clinics,
    KeepAlive 
    
   
  },
  
  data(){
    return{
      
      
    }
  },
  methods: {
    
  },
  computed: {
    ...mapGetters(['SignupPhase'])
  },
    setup(){
    const router = useRouter();
    return { router };
  }
});
</script>

<style scoped>

.content {
  margin:0;
  padding:0;
  font-family: sans-serif;
  
  /* --background: linear-gradient(#02379991, #243b55); */
  --background: linear-gradient(#141e30, #243b55);
  
}

img{
  margin-top: 25%;
}
img:hover{
  cursor: pointer;
}
</style>
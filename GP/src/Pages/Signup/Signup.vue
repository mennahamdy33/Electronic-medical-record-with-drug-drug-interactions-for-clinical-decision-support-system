<template>
  <ion-page>
    <ion-content class="content">

      <ion-grid  >      

        <ion-row >
          <ion-col offset-lg="0.2" offset-xs="3.4" size-lg="1.5" size-xs="6">
            <div class="image">   
              <img src="../../../public/assets/mainlogo.png"  >
              <!-- <img src="../../../public/assets/logo4.png"  >    -->
            </div>
          </ion-col>
          
          <ion-col offset-lg="0.9" pull-xs="0"  size-lg="6" size-xs="15" >
            <progress-bar text="signup"></progress-bar>
          </ion-col>
        </ion-row>

        <personal-information v-if=" SignupPhase === 'PersonalInformation'" />
        <make-account v-if=" SignupPhase === 'MakeAccount'" />
         <clinics v-if=" SignupPhase === 'Clinics'" /> 
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script>
import { defineComponent } from 'vue';
import { IonPage,IonContent,IonCol, IonGrid, IonRow } from '@ionic/vue';
import ProgressBar from '../../components/ProgressBar.vue';
import PersonalInformation from './PersonalInformation.vue';
import MakeAccount from './MakeAccount.vue';
import Clinics from './Clinics.vue'
import { mapGetters } from 'vuex';

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
    Clinics 
    
   
  },
  
  data(){
    return{
      
      
    }
  },
  methods: {
    
  },
  computed: {
    ...mapGetters(['SignupPhase'])
  }
});
</script>

<style scoped>

.content {
  margin:0;
  padding:0;
  font-family: sans-serif;
  
  --background: linear-gradient(#141e30, #243b55);
  
}

img{
  margin-top: 25%;
}

</style>
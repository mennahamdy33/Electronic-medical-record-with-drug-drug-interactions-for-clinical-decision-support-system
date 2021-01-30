<template>

  <ion-row>
    
    <ion-col offset-lg="2" size-lg="8">
      <div class="login-box">
        <h2>Pick up you Clinics</h2>
        
      </div>
    </ion-col>

  </ion-row>

  <ion-row>
    
    <ion-col offset-lg="2" size-lg="1.2" size-xs="6" >                      
      <form-button @click="changePhase({currentPhase: 'MakeAccount'})" type="button" buttonText="Back"/>
    </ion-col>

    <ion-col offset-lg="1" size-lg="1.2" size-xs="6" >                      
      <form-button type="button" buttonText="Submit"/>
    </ion-col>

  </ion-row>

 
    


</template>

<script>
import { defineComponent } from 'vue';
import { IonCol, IonRow } from '@ionic/vue';
import FormButton from '../../Components/FormButton.vue';
// import FormField from '../../Components/FormField'
import { mapActions } from 'vuex';
export default defineComponent({
  name: 'Signup2',
  components: {
    FormButton,
    // FormField,
    IonCol,
    // IonGrid,
    IonRow,
    
    
    
    
   
  },
    
  data(){
    return{
      
      
    }
  },
   methods: {
    ...mapActions(['changePhase'])
  }
});
</script>

<style scoped>





.login-box h2 {
  margin: 0 0 30px;
  padding: 0;
  color: #ffffff;
  /* color: #05545a; */
  text-align: center;
  font-weight: bold;
}



</style>
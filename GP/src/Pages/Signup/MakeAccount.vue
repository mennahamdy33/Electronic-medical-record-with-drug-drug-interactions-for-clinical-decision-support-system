<template>

  <ion-row>
    
    <ion-col offset-lg="2" size-lg="8">
      <div class="login-box">
        <h2>Sign Up</h2>
        <form v-on:submit.prevent="">
          <ion-grid class="FormGrid">

            <ion-row class="ion-justify-content-center" >
              <ion-col size="12" size-sm size-lg="7" >
                <!-- <form-field type="text" LableText="Email"/> -->
                <div class="user-box">
                  <input  type="text"   required="">
                  
                  <label  class="Down"> Email </label>
                                
                </div>
              </ion-col>
              
            </ion-row>

            <ion-row class="ion-justify-content-center"> 
              <ion-col size="12" size-sm size-lg="7">
                <!-- <form-field type="password" LableText="Password"/> -->
                <div class="user-box">
                  <input  type="password"   required="">
                  
                  <label  class="Down"> Password </label>
                                
                </div>
              </ion-col>
              
            </ion-row>

            <ion-row class="ion-justify-content-center">
              
              <ion-col size="12" size-sm size-lg="7">
                <!-- <form-field type="password" LableText="Confirm Password"/> -->
                 <div class="user-box">
                  <input  type="password"   required="">
                  
                  <label  class="Down"> Confirm Password </label>
                                
                </div>
              </ion-col>
            </ion-row>

            

          </ion-grid>
          <ion-row class="ion-justify-content-center">
            <ion-col size-lg="2" size-xs="6" >
            <form-button @click="changePhase({currentPhase: 'Clinics'})" type="button" buttonText="Next"/>
            </ion-col>
            <ion-col size-lg="2" size-xs="6" >
            <form-button @click="changePhase({currentPhase: 'PersonalInformation'})" type="button" buttonText="Back"/>
            </ion-col>
          </ion-row>
        </form>
      </div>
    </ion-col>

  </ion-row>

 
    


</template>

<script>
import { defineComponent } from 'vue';
import { IonCol, IonGrid, IonRow } from '@ionic/vue';
import FormButton from '../../Components/FormButton.vue';
// import FormField from '../../Components/FormField'
import { mapActions } from 'vuex';

export default defineComponent({
  name: 'Signup2',
  components: {
    FormButton,
    // FormField,
    IonCol,
    IonGrid,
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

.FormGrid ion-col{
--ion-grid-column-padding: 20px;
  
}



.login-box h2 {
  margin: 0 0 30px;
  padding: 0;
  color: #ffffff;
  /* color: #05545a; */
  text-align: center;
  font-weight: bold;
}

.user-box {
  position: relative;
}




.user-box input {
  width: 100%;
  padding: 10px 0;
  font-size: 16px;
  color: #fff;
  margin-bottom: 30px;
  border: none;
  border-bottom: 1px solid #fff;
  outline: none;
  background: transparent;
}
.user-box label {
  position: absolute;
  
  left: 0;
  padding: 10px 0;
  font-size: 16px;
  color: #fff;
  pointer-events: none;
  transition: .5s;
}

.Up{
  top:-20px;
}

.Down{
  top: 0;
}



.user-box input:focus ~ .Down,
.user-box input:valid ~ .Down {
  top: -20px;
  left: 0;
  color: #03e9f4;
 
  font-size: 16px;
  font-weight: bold;
}

.user-box input:focus ~ .Up,
.user-box input:valid ~ .Up {
  top: -25px;
  left: 0;
  color: #03e9f4;
 
  font-size: 16px;
  font-weight: bold;
}


</style>
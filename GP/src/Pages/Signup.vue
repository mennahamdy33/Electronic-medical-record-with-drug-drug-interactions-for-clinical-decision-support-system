<template>
  <ion-page>
    <ion-content class="content">

      <ion-grid  >      

        <ion-row >
          <ion-col offset-lg="0" offset-xs="3.7" size-lg="2" size-xs="5">
            <div class="image">   
              <img src="../../public/assets/logo4.png"  >   
            </div>
          </ion-col>
          
          <ion-col offset-lg="1" pull-xs="0.7"  size-lg="6" size-xs="12" >
            <progress-bar></progress-bar>
          </ion-col>
        </ion-row>


        <ion-row>
          
          <ion-col offset-lg="2" size-lg="8">
            <div class="login-box">
              <h2>Sign Up</h2>
              <form v-on:submit.prevent="">
                <ion-grid class="FormGrid">
                  <ion-row>
                    <ion-col size="12" size-sm>
                      <form-field type="text" LableText="First Name"/>
                    </ion-col>
                    <ion-col size="12" size-sm>
                      <form-field type="text" LableText="Last Name"/>
                    </ion-col>
                  </ion-row>

                  <ion-row>
                  
                    <ion-col size="12" size-sm  >
                      <label style="color:white; fontSize:18px;">Gender</label>

                      <radio-form id="Male"/>

                      <radio-form id="Female"/>
                      
                    </ion-col>
                    <ion-col size="12" size-sm>
                      <form-field  type="text" LableText="National ID"/>
                    </ion-col>
                  </ion-row>

                  <ion-row>
                    <ion-col size="12" size-sm>
                      <form-field type="text" LableText="Phone Number"/>
                    </ion-col>
                    <ion-col size="12" size-sm>
                      <form-field type="date" LableText="Birth Date"/>
                    </ion-col>
                  </ion-row>

                  <ion-row>
                    <ion-col size="12" size-sm>
                      <form-field type="text" LableText="Education"/>
                    </ion-col>
                    <ion-col size="12" size-sm>
                      <form-field type="text" LableText="Speciality"/>
                    </ion-col>
                  </ion-row>

                  <ion-row>
                    <ion-col size="12" size-sm>
                      <form-field type="text" LableText="Address"/>
                    </ion-col>
                    
                  </ion-row>

                  <ion-row>
                    <ion-col size-lg="2" size-xs="6" >
                    
                    
                    <form-button router-link="/MakeAccount" type="button" buttonText="Next"/>
                    </ion-col>
                  </ion-row>
                </ion-grid>
              </form>
            </div>
          </ion-col>

            
        </ion-row>

    
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script>
import { defineComponent } from 'vue';
import { IonPage,IonContent,IonCol, IonGrid, IonRow } from '@ionic/vue';
import FormButton from '../Components/FormButton.vue';
import FormField from '../Components/FormField'
import RadioForm from '../Components/RadioForm'
import ProgressBar from '../Components/ProgressBar.vue';
export default defineComponent({
  name: 'Signup',
  components: {
    FormButton,
    FormField,
    IonCol,
    IonGrid,
    IonRow,
    IonContent,
    ProgressBar,
    RadioForm,
    IonPage
    
   
  },
    
  data(){
    return{
      
      
    }
  },
  methods: {
    
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
.FormGrid ion-col{
--ion-grid-column-padding: 20px;
  
}



.login-box h2 {
  margin: 0 0 30px;
  padding: 0;
  color: #ffffff;
  
  text-align: center;
  font-weight: bold;
}


</style>
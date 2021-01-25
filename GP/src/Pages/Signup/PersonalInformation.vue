<template>
  

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
                            
                            
                            <form-button @click="changePhase({currentPhase: 'MakeAccount'})" type="button" buttonText="Next"/>
                            </ion-col>
                        </ion-row>
                    </ion-grid>
                </form>
            </div>
        </ion-col>

        
    </ion-row>

</template>

<script>
import { defineComponent } from 'vue';
import { IonCol, IonGrid, IonRow } from '@ionic/vue';
import FormButton from '../../Components/FormButton.vue';
import FormField from '../../Components/FormField'
import RadioForm from '../../Components/RadioForm'
import { mapActions } from 'vuex';
export default defineComponent({
  name: 'Signup',
  components: {
    FormButton,
    FormField,
    IonCol,
    IonGrid,
    IonRow,
    RadioForm,
    
    
   
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
  
  text-align: center;
  font-weight: bold;
}


</style>
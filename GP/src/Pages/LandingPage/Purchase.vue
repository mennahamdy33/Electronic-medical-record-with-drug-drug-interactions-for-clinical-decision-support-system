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
                        <progress-bar></progress-bar>
                    </ion-col>
                </ion-row>


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
                                            <input  type="text"   required="" v-model="Account.email">
                                            
                                            <label  class="Down"> Email </label>
                                                            
                                            </div>
                                        </ion-col>
                        
                                    </ion-row>

                                    <ion-row class="ion-justify-content-center"> 
                                        <ion-col size="12" size-sm size-lg="7">
                                            <!-- <form-field type="password" LableText="Password"/> -->
                                            <div class="user-box">
                                            <input  type="password"   required="" v-model="Account.password">
                                            
                                            <label  class="Down"> Password </label>
                                                            
                                            </div>
                                        </ion-col>
                            
                                    </ion-row>

                                    <ion-row class="ion-justify-content-center">
                                        
                                        <ion-col size="12" size-sm size-lg="7">
                                            <!-- <form-field type="password" LableText="Confirm Password"/> -->
                                            <div class="user-box">
                                            <input  type="password"   required="" v-model="Account.confirmPassword">
                                            
                                            <label  class="Down"> Confirm Password </label>
                                                            
                                            </div>
                                        </ion-col>
                                    </ion-row>

                            

                                    <ion-row class="ion-justify-content-center">
                                        <ion-col size-lg="2" size-xs="6" >
                                            <form-button  type="button" buttonText="Next"/>
                                        </ion-col>
                                        <ion-col size-lg="2" size-xs="6" >
                                            <form-button type="button" buttonText="Back"/>
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
import ProgressBar from '../../components/ProgressBar.vue';
import FormButton from '../../components/FormButton'
// import { mapGetters } from 'vuex';

export default defineComponent({
  name: 'Purchase',
  components: {
    
    IonCol,
    IonGrid,
    IonRow,
    IonContent,
    ProgressBar,
    IonPage,
    FormButton
   
    
   
  },
  
  data(){
    return{
      Account:{
        email:'',
        password:'',
        confirmPassword:''
      },
      
    }
  },
  methods: {
    
  },
  computed: {
    // ...mapGetters(['SignupPhase'])
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
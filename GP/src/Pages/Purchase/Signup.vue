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
                    <ion-col size-lg="3" offset-lg="0.9">
                            <!-- <ion-grid class="grid"> -->
                                <!-- <ion-row> -->
                                    <!-- <ion-col  pull-xs="0"  size-lg="3" size-xs="15"  > -->
                                        
                        <ion-button   class="signup" router-link="/SignupPurchase"> Sign up</ion-button>
              
                                    <!-- </ion-col> -->
                                    <!-- <ion-col  pull-xs="0"  size-lg="3" size-xs="15"  > -->
                                        
                                        <!-- <ion-button   class="signup" router-link="/Signup"> Sign up</ion-button> -->
                                
                                    <!-- </ion-col> -->
                                <!-- </ion-row> -->
                            <!-- </ion-grid> -->
                    </ion-col>

                     <ion-col pull-lg="1.5"  pull-xs="0"  size-lg="3" size-xs="15"  >
                                        
                        <ion-button router-link="/LoginPurchase" class="login" > Log in</ion-button>
     
                    </ion-col>
                </ion-row>


                <ion-row>
        
                    <ion-col offset-lg="2" size-lg="8">
                        <div class="login-box">
                            <h2>Sign Up</h2>
                            <form v-on:submit.prevent="">
                                <ion-grid class="FormGrid">

                                    <ion-row class="ion-justify-content-center" >
                                        <ion-col size="12" size-sm  >
                                            <div class="user-box">
                                            <input  type="text"   required="" v-model="Account.email">
                                            
                                            <label  class="Down"> First Name </label>
                                                            
                                            </div>
                                        </ion-col>

                                        <ion-col size="12" size-sm  >
                                            <div class="user-box">
                                            <input  type="text"   required="" v-model="Account.email">
                                            
                                            <label  class="Down"> Last Name </label>
                                                            
                                            </div>
                                        </ion-col>
                        
                                    </ion-row>
                                    <ion-row>
                                        <ion-col size="12" size-sm  >
                                            <div class="user-box">
                                            <input  type="text"   required="" v-model="Account.email">
                                            
                                            <label  class="Down"> Phone number </label>
                                                            
                                            </div>
                                        </ion-col>
                                        <ion-col size="12" size-sm  >
                                            <label class= 'custom' >Gender</label>

                                            <!-- <radio-form id="Male" name='gender'/>

                                         <radio-form id="Female" name='gender' /> -->
                                            <div class="container">

                                            <ul>
                                            
                                            
                                                <li>
                                                <input type="radio" id="Male" name="gender"  value="male"  >
                                                <label class= 'custom' for="Male"> Male </label>
                                                    
                                                <div class="check"><div class="inside"></div></div>
                                                </li>

                                                <li>
                                                <input type="radio" id="Female" name="gender"  value="female">
                                                <label class= 'custom' for="Female"> Female </label>
                
                                                <div class="check"><div class="inside"></div></div>
                                                </li>
                                            
                                            </ul>
                                            </div>
                                
                                        </ion-col>
                                    </ion-row>
                                    <ion-row class="ion-justify-content-center" >
                                        <ion-col size="12" size-sm  >
                                            <!-- <form-field type="text" LableText="Email"/> -->
                                            <div class="user-box">
                                            <input  type="text"   required="" v-model="Account.email">
                                            
                                            <label  class="Down"> Email </label>
                                                            
                                            </div>
                                        </ion-col>
                                         <ion-col size="12" size-sm >
                                            <!-- <form-field type="password" LableText="Password"/> -->
                                            <div class="user-box">
                                            <input  type="password"   required="" v-model="Account.password">
                                            
                                            <label  class="Down"> Password </label>
                                                            
                                            </div>
                                        </ion-col>
                        
                                    
                                       
                            
                                    </ion-row>

                                    <ion-row >
                                        
                                        <ion-col size="12" size-sm size-lg="6">
                                            <!-- <form-field type="password" LableText="Confirm Password"/> -->
                                            <div class="user-box">
                                            <input  type="password"   required="" v-model="Account.confirmPassword">
                                            
                                            <label  class="Down"> Confirm Password </label>
                                                            
                                            </div>
                                        </ion-col>
                                    </ion-row>

                            

                                    <ion-row class="ion-justify-content-center">
                                        <ion-col size-lg="2" size-xs="6" >
                                            <form-button  type="button" buttonText="Submit"/>
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
import { IonPage,IonContent,IonCol, IonGrid, IonRow , IonButton } from '@ionic/vue';
// import ProgressBar from '../../components/ProgressBar.vue';
import FormButton from '../../components/FormButton'
// import { mapGetters } from 'vuex';

export default defineComponent({
  name: 'SignupPurchase',
  components: {
    
    IonCol,
    IonGrid,
    IonRow,
    IonContent,
    // ProgressBar,
    IonPage,
    FormButton,
    IonButton,
   
   
    
   
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

img , .button{
  margin-top: 25%;
}


.signup , .login{
  color: #000000;
  --background: #ffffff;
  /* --background-hover: transparent; */

  /* background: #ffffff; */
  --border-radius: 300px;
  width: 140px;
  height: 55px;

}

.signup:hover, .login:hover {

--background: transparent ;
border : 2px solid #ffffff;
border-radius: 300px;
color: #ffffff;
transition-duration: 0.4s;

}

</style>
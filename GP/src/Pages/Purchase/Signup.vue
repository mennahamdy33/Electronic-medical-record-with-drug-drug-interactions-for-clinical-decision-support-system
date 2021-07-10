<template>
    <ion-page>
        <ion-content class="content">

            <ion-grid  >      

                <ion-row >
                    <ion-col offset-lg="0.2" offset-xs="3.4" size-lg="1.5" size-xs="6">
                        <div class="image">   
                        <img src="../../../public/assets/mainlogo.png"  @click="router.push('/')">   
                        <!-- <img src="../../../public/assets/logo4.png"  >    -->
                        </div>
                    </ion-col>
                    <ion-col size-lg="3" offset-lg="0.9" size-xs="6"  >
                            
                                        
                        <ion-button   class="signup" router-link="/SignupPurchase"> Sign up</ion-button>
              
                                    
                    </ion-col>

                     <ion-col pull-lg="1.5"  pull-xs="0"  size-lg="3" size-xs="6" pull-md="3" >
                                        
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
                                            <input  type="text"   required="" v-model="Account.first_name">
                                            
                                            <label  class="Down"> First Name </label>
                                                            
                                            </div>
                                        </ion-col>

                                        <ion-col size="12" size-sm  >
                                            <div class="user-box">
                                            <input  type="text"   required="" v-model="Account.last_name">
                                            
                                            <label  class="Down"> Last Name </label>
                                                            
                                            </div>
                                        </ion-col>
                        
                                    </ion-row>
                                    <ion-row>
                                        <ion-col size="12" size-sm  >
                                            <div class="user-box">
                                            <input  type="text"   required="" v-model="Account.phone_number">
                                            
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
                                                <input type="radio" id="Male" name="gender" v-model="Account.gender" value="male"  >
                                                <label class= 'custom' for="Male"> Male </label>
                                                    
                                                <div class="check"><div class="inside"></div></div>
                                                </li>

                                                <li>
                                                <input type="radio" id="Female" name="gender"  v-model="Account.gender" value="female">
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
                                            <p class="pas">at least 8 characters with one letter, one number</p>
                                            <label  class="Down"> Password </label>
                                                            
                                            </div>
                                        </ion-col>
                        
                                    
                                       
                            
                                    </ion-row>

                                    <ion-row >
                                        
                                        <ion-col size="12" size-sm size-lg="6">
                                            <!-- <form-field type="password" LableText="Confirm Password"/> -->
                                            <div class="user-box">
                                            <input  type="password"   required="" v-model="confirmPassword">
                                            
                                            <label  class="Down"> Confirm Password </label>
                                                            
                                            </div>
                                        </ion-col>
                                    </ion-row>

                            

                                    <ion-row class="ion-justify-content-center">
                                        <ion-col size-lg="2" size-xs="6" >
                                            <form-button @click="Register" type="button" buttonText="Submit"/>
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
import { IonPage,IonContent,IonCol, IonGrid, IonRow , IonButton ,alertController} from '@ionic/vue';
// import ProgressBar from '../../components/ProgressBar.vue';
import FormButton from '../../components/FormButton'
import {useRouter} from 'vue-router';

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
        first_name:'',
        last_name: '',
        gender:'',
        phone_number:'',
        password:'',
        email:'',
        
      },
      confirmPassword:'',
      emailFormat: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ ,
      passFormat: /(?=.*\d)(?=.*[a-z]).{8,}/,

    }
  },
  methods: {

  async presentAlert(msg) {
      const alert = await alertController
        .create({
          cssClass: 'alert',
          header: 'Alert',
          // subHeader: 'Subtitle',
          message: msg,
          buttons: ['OK'],
        });
      return alert.present();
    },

     Register(){
   
      const Account = Object.entries(this.Account)
      let complete = true;
        for (const [key, value] of Account  ) {
          console.log(key , value);
          if(value === '' ){
                 
            complete = false;
            
          }
        }
        if(complete && this.confirmPassword === ''){
          complete = false;
        }
        if(complete){
          
          if(!this.Account.phone_number.match(/^\d{11}$/) ){

            // alert("invalid Phone number or National ID")
            this.presentAlert("invalid Phone number");

          }
          else if(!this.Account.password.match(this.passFormat)){
            this.presentAlert("Please enter a strong password at leat 8 characters containig one lower case letter and one number");
            }
          else if(!(this.Account.password === this.confirmPassword && this.Account.email.match(this.emailFormat))){
            this.presentAlert("Please enter a vaild email or make sure that the passwords are the same");
          }
          else{
            
           //send to database
             fetch(process.env.VUE_APP_ROOT_API+'registerPurchase', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(this.Account)
            }).then(res => {
                
            if(!res.ok){
                throw new Error(res.status)
            }else{
                // return res.json();
                console.log("success" )
                this.router.push('/LoginPurchase')
               
            }
            })
            .catch(() =>
            { 
            console.log("Unable to register")
            this.presentAlert("Register Failed")

            })
          }
        }else{
          // alert("Please fill all the fields");
          this.presentAlert("Please fill all the fields");

        }
   }
    
  },
  computed: {
    // ...mapGetters(['SignupPhase'])
  } ,
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
  
  --background: linear-gradient(#141e30, #243b55);
  
}

img , .button{
  margin-top: 25%;
}
img:hover{
  cursor: pointer;
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

/* .pas{
   margin-top: -20px; 
   color: #ccc5c57c;
} */
</style>
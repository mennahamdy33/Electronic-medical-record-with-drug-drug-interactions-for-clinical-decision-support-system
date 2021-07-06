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
            
            </ion-row>

            <ion-row class="ion-justify-content-center">
    
                <ion-col  size-lg="5.5" class="login-box">
                    <div >
                        <h2>Login</h2>
                        <form v-on:submit.prevent="">
                            <ion-grid class="FormGrid">

                                <ion-row class="ion-justify-content-center">

                                    <ion-col size="12" size-sm size-lg="9" >
                                       
                                        <div class="container">

                                            <ul>
                                                
                                                
                                                <li>
                                                    <input type="radio" id="Doctor" name="proficiency" v-model="Account.proficiency" value="doctor"  >
                                                    <label class= 'custom' for="Doctor"> Doctor </label>
                                                    
                                                    <div class="check"><div class="inside"></div></div>
                                                </li>

                                                <li>
                                                    <input type="radio" id="Secretary" name="proficiency" v-model="Account.proficiency" value="secretary">
                                                    <label class= 'custom' for="Secretary"> Secretary </label>

                                                    <div class="check"><div class="inside"></div></div>
                                                </li>
                                            
                                            </ul>
                                        </div>
                                        
                                    </ion-col>
                                </ion-row>
                                <ion-row class="ion-justify-content-center" >
                                    <ion-col size="12" size-sm size-lg="8" >
                                        <!-- <form-field type="text" LableText="Email"/> -->
                                        <div class="user-box">
                                        <input  type="text"   required="" v-model="Account.email">
                                        
                                        <label  class="Down"> Email </label>
                                                        
                                        </div>
                                    </ion-col>
                                
                                </ion-row>

                                <ion-row class="ion-justify-content-center"> 
                                    <ion-col size="12" size-sm size-lg="8">
                                        <!-- <form-field type="password" LableText="Password"/> -->
                                        <div class="user-box">
                                        <input  type="password"   required="" v-model="Account.password">
                                        
                                        <label  class="Down"> Password </label>
                                                        
                                        </div>
                                    </ion-col>
                                    
                                </ion-row>
                    

                                <ion-row class="ion-justify-content-center">
                                
                                    <ion-col size-lg="3" size-xs="6" >
                                        <form-button  @click="Login"  type="button" buttonText="Submit"/>
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
import { IonCol, IonGrid, IonRow,alertController , IonContent, IonPage } from '@ionic/vue';
import FormButton from '../../components/FormButton.vue';
import {useRouter} from 'vue-router';
// import FormField from '../../components/FormField'
// import { mapActions } from 'vuex';

export default defineComponent({
  name: 'Login',
  components: {
    FormButton,
    // FormField,
    IonCol,
    IonGrid,
    IonRow,
    IonContent,
    IonPage
    
    
    
    
   
  },
    
  data(){
    return{
      Account:{
        email:'',
        password:'',
        proficiency:''
        
      },
     
      
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
    
          Login(){
            fetch(process.env.VUE_APP_ROOT_API+'signin', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(this.Account)
            }).then(res => {
                
            if(!res.ok){
                throw new Error(res.status)
            }else{
                return res.json();
                // console.log("success" )
                // this.router.push('/LoginPurchase')
               
            }
            }).then(res =>{
              //  console.log(res)
               this.$store.dispatch('set_staffID', res);
              
               if(this.Account.proficiency === 'doctor')
               {

                 this.router.push('/MainPageDoctor')
               }else if(this.Account.proficiency === 'secretary'){
                 this.router.push('/MainPageSecretery')
               }else{
                 this.router.push('/')
               }
            })
            .catch(() =>
            { 
            console.log("Unable to Login")
            this.presentAlert("Login Failed")

            })
    }
    
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
.login-box {
   
  padding: 35px;
  background: rgba(0,0,0,.5);
  box-sizing: border-box;
  box-shadow: 0 15px 25px rgba(0,0,0,.6);
  border-radius: 50px;
  margin-bottom: 5%;
}
</style>
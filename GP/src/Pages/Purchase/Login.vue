    <template>
<ion-page>
    <ion-content class="content">

        <ion-grid  >      

            <ion-row >
                    <ion-col offset-lg="0.2" offset-xs="3.4" size-lg="1.5" size-xs="6">
                        <div class="image">   
                        <img src="../../../public/assets/mainlogo.png" @click="router.push('/')">   
                        <!-- <img src="../../../public/assets/logo4.png"  >    -->
                        </div>
                    </ion-col>
                    <ion-col size-lg="3" offset-lg="0.9" size-xs="6" offset-md="0" >

                                        
                        <ion-button   class="signup" router-link="/SignupPurchase"> Sign up</ion-button>
              
                    </ion-col>

                     <ion-col pull-lg="1.5"  pull-xs="0"  size-lg="3" size-xs="6" pull-md="3" >
                                        
                        <ion-button router-link="/LoginPurchase" class="login" > Log in</ion-button>
     
                    </ion-col>
                </ion-row>

            <ion-row class="ion-justify-content-center">
    
                <ion-col  size-lg="5.5" class="login-box">
                    <div >
                        <h2>Login</h2>
                        <form v-on:submit.prevent="">
                            <ion-grid class="FormGrid">

                            
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
                                        <form-button  @click="Login" type="button" buttonText="Submit"/>
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
import { IonCol, IonGrid, IonRow,alertController , IonContent, IonPage, IonButton } from '@ionic/vue';
import FormButton from '../../components/FormButton.vue';
// import FormField from '../../components/FormField'
// import { mapActions } from 'vuex';
import {useRouter} from 'vue-router';

export default defineComponent({
  name: 'LoginPurchase',
  components: {
    FormButton,
    // FormField,
    IonCol,
    IonGrid,
    IonRow,
    IonContent,
    IonPage,
    IonButton
    
    
    
    
   
  },
    
  data(){
    return{
      Account:{
        email:'',
        password:'',
        
      },
      // emailFormat: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ 
      
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
     
      fetch(process.env.VUE_APP_ROOT_API+'signinPurchase', {
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
               this.$store.dispatch('fill_userData', res);
                this.router.push('/ProfilePurchase')
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
.login-box {  
  padding: 35px;
  background: rgba(0,0,0,.5);
  box-sizing: border-box;
  box-shadow: 0 15px 25px rgba(0,0,0,.6);
  border-radius: 50px;
  margin-bottom: 5%;
}
</style>
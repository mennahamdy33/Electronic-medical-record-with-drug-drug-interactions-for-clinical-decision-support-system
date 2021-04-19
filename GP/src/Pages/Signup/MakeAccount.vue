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
                  <p class="pas">at least 8 characters with one letter, one number</p>              
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

            

          </ion-grid>
          <ion-row class="ion-justify-content-center">
            <ion-col size-lg="2" size-xs="6" >
            <form-button @click="changePhaseNext({currentPhase: 'Clinics'})" type="button" buttonText="Next"/>
            </ion-col>
            <ion-col size-lg="2" size-xs="6" >
            <form-button @click="changePhaseBack({currentPhase: 'PersonalInformation'})" type="button" buttonText="Back"/>
            </ion-col>
          </ion-row>
        </form>
      </div>
    </ion-col>

  </ion-row>

 
    


</template>

<script>
import { defineComponent } from 'vue';
import { IonCol, IonGrid, IonRow,alertController } from '@ionic/vue';
import FormButton from '../../components/FormButton.vue';
// import FormField from '../../components/FormField'
// import { mapActions } from 'vuex';

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
      Account:{
        email:'',
        password:'',
        confirmPassword:''
      },
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
    
      changePhaseNext(phase){
      const Account = Object.entries(this.Account)
      let complete = true;
        for (const [key, value] of Account  ) {
          console.log(key , value);
          if(value === ''){
            complete = false;
          }
        }
        if(complete){

          if(!this.Account.password.match(this.passFormat)){
            this.presentAlert("Please enter a strong password at leat 8 characters containig one lower case letter and one number");
            }
          else if(this.Account.password === this.Account.confirmPassword && this.Account.email.match(this.emailFormat)){
          // if(this.Account.password === this.Account.confirmPassword && this.emailFormat.test(this.Account.email)){

            this.$store.dispatch('FillData', {email: this.Account.email, password: this.Account.password});
            // console.log(this.$store.getters['SignUpData'])
            this.$store.dispatch('changePhase', phase);
          }else{
            // alert("Please enter a vaild email or make sure that the passwords are the same")
            this.presentAlert("Please enter a vaild email or make sure that the passwords are the same")
          }
        }else{
          // alert("Please fill all the fields");
          this.presentAlert("Please fill all the fields")

        }
   },

      changePhaseBack(phase){
     
        this.$store.dispatch('changePhase', phase);
       
   },
    // ...mapActions(['changePhase'])
  }
});
</script>

<style scoped>

.FormGrid ion-col{
--ion-grid-column-padding: 20px;
  
}



.login-box h2 {
  font-family: 'Monoton';
  margin: 0 0 30px;
  padding: 0;
  color: #ffffff;
  /* color: #05545a; */
  font-size: 45px;
  letter-spacing: 9px;
  text-align: center;
  font-weight: 100;
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
  font-size: 18px;
  letter-spacing: 1.5px;
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
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
import { IonCol, IonGrid, IonRow,alertController , IonContent, IonPage } from '@ionic/vue';
import FormButton from '../../components/FormButton.vue';
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
      emailFormat: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ 
      
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

.custom{
  /* font-family: 'Righteous'; */
  /* font-family: 'Architects Daughter'; */
  font-size: 18px;

  letter-spacing: 1.5px;
  color: #fff;
  /* font-weight: 600; */

}



.container ul{
  list-style: none;
  margin: 0;
  padding: 0;
	
}

ul li{
  
  color: #ffffff;
  /* display: block; */
  position: relative;
  float: left;
  /* width: 100%; */
  /* height: 100px; */

}

ul li input[type=radio]{
  position: absolute;
  visibility: hidden;
}

ul li label{
  display: block;
  position: relative;
  /* font-weight: 300; */
  font-size: 16px;
  padding: 25px 25px 25px 80px;
  margin: 10px auto;
  height: 10px;
  z-index: 9;
  cursor: pointer;
  /* -webkit-transition: all 0.25s linear; */
}

ul li:hover label{
	/* color: #ffdcfc; */
    font-size: 20px;
}

ul li .check{
  display: block;
  position: absolute;
  border: 5px solid #AAAAAA;
  border-radius: 100%;
  height: 27px;
  width: 27px;
  top: 30px;
  left: 20px;
	z-index: 5;
	transition: border .25s linear;
	-webkit-transition: border .25s linear;
}

ul li:hover .check {
  border: 5px solid #FFFFFF;
}

ul li .check::before {
  display: block;
  position: absolute;
  content: '';
  border-radius: 100%;
  height: 12px;
  width: 12px;
  top: 2.4px;
  left: 2.7px;
  margin: auto;
  /* transition: background 0.25s linear;
  -webkit-transition: background 0.25s linear; */
}

input[type=radio]:checked ~ .check {
  border: 5px solid #03e9f4;

 box-shadow: 0 0 0 1px #03e9f4,
                0 0 25px #03e9f4,
                0 0 50px #03e9f4,
                0 0 100px #03e9f4;

 
}

input[type=radio]:checked ~ .check::before{
  background: #03e9f4;
    
    
}

input[type=radio]:checked ~ label{
  color: #03e9f4;
}


.login-box {
  /* position: absolute; */
  /* top: 50%; */
  /* left: 50%; */
  /* width: 100px; */
  
  padding: 35px;
  /* transform: translate(-50%, -50%); */
  background: rgba(0,0,0,.5);
  box-sizing: border-box;
  box-shadow: 0 15px 25px rgba(0,0,0,.6);
  border-radius: 50px;
  margin-bottom: 5%;
}
</style>
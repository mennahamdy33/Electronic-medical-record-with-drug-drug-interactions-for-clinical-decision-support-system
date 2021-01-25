<template>
<ion-page>
<!-- <body> -->
<ion-content class="content">


  <!-- <div class="content"> -->
    <ion-grid  >  
      <!-- <progress-bar></progress-bar> -->
      

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
                    <form-field type="text" LableText="Email"/>
                  </ion-col>
                  
                </ion-row>

               

                <ion-row>
                  <ion-col size="12" size-sm>
                    <form-field type="password" LableText="Password"/>
                  </ion-col>
                  
                </ion-row>

                <ion-row>
                  
                  <ion-col size="12" size-sm>
                    <form-field type="password" LableText="Confirm Password"/>
                  </ion-col>
                </ion-row>

                

              </ion-grid>
              <ion-row>
                <ion-col size-lg="2" size-xs="6" >
                <form-button type="submit" buttonText="Submit"/>
                </ion-col>
              </ion-row>
            </form>
          </div>
        </ion-col>

         <!-- <ion-col offset-lg="1" offset-xs="4" size-lg="2" size-xs="4" class="ion-align-self-end">
          <div class="image"> 
              
            <img src="../public/assets/logo12.png"  >
            <img src="../public/assets/logo4.png"  >
              

          </div>
        </ion-col> -->
      </ion-row>

 
    </ion-grid>

  <!-- </div> -->

</ion-content>
</ion-page>
<!-- </body> -->
</template>

<script>
import { defineComponent } from 'vue';
import { IonContent,IonCol, IonGrid, IonRow , IonPage} from '@ionic/vue';
import FormButton from '../Components/FormButton.vue';
import FormField from '../Components/FormField'
import ProgressBar from '../Components/ProgressBar.vue';
export default defineComponent({
  name: 'Signup2',
  components: {
    FormButton,
    FormField,
    IonCol,
    IonGrid,
    IonRow,
    IonContent,
    ProgressBar,
    IonPage
    
    
   
  },
    
  data(){
    return{
      
      
    }
  },
  methods: {
    //  getURL(pic){
    //    return require(pic)
    //  }
  }
});
</script>

<style scoped>

.content {
  margin:0;
  padding:0;
  font-family: sans-serif;
  /* background: linear-gradient(#a6dbe2, #79aebc); */
  /* background: linear-gradient(#a4a8a8, #73a8a8); */
  /* background: linear-gradient(#141e30, #6f92b8); */
  /* background: linear-gradient(#c4c5c5a2, #8a8989); */
  /* background: linear-gradient( #54af94c0,#aaf8e1c0); */
  --background: linear-gradient(#141e30, #243b55);
  
}
.FormGrid ion-col{
--ion-grid-column-padding: 20px;
  /* --ion-grid-padding: 50px; */
}

/* .login-box { */
  
  /* position: absolute; */
  /* top: 55%; */
  /* left: 35%; */
  /* display: block;
  margin-left: auto;
  margin-right: auto; */

  /* width: 50%; */
  /* width: 500px; */
  /* padding: 40px; */
  /* transform: translate(-50%, -50%); */
  /* background: rgba(31, 29, 29, 0.281); */
  /* box-sizing: border-box; */
  /* box-shadow: 0 15px 25px rgba(0,0,0,.6); */
  /* border-radius: 10px; */
/* } */

.login-box h2 {
  margin: 0 0 30px;
  padding: 0;
  color: #ffffff;
  /* color: #05545a; */
  text-align: center;
  font-weight: bold;
}

/* .image{
  text-align: center;
  

} */


/* .image img{ */
  /* width: 20%; */
  /* display: block; */
  /* margin-left: auto; */
  /* margin-right: auto; */
  /* margin-bottom: 50px; */
  
  /* width: 40%; */
  
  
/* } */

/* form{
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  
} */


</style>
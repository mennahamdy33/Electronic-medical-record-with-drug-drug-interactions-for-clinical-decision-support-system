<template>
<ion-page>
<!-- <body> -->
  <ion-content class="content">


      <form-button router-link="/Signup" type="button" buttonText="Signup"/>
      <!-- <router-link to="/MakeAccount"><form-button type="button" buttonText="Signup"/></router-link> -->
  </ion-content>
</ion-page>
<!-- </body> -->
</template>

<script>
import { defineComponent } from 'vue';
import { IonContent , IonPage  } from '@ionic/vue';
import FormButton from '../Components/FormButton.vue';
// import FormField from '../Components/FormField'
// import ProgressBar from '../Components/ProgressBar.vue';
export default defineComponent({
  name: 'LandingPage',
  components: {
    FormButton,
    // FormField,
    // IonCol,
    // IonGrid,
    // IonRow,
    IonContent,
    IonPage 
    // ProgressBar,
    
    
   
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
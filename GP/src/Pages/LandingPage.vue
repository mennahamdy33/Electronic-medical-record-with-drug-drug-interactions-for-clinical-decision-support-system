<template>
<ion-page>
<!-- <body> -->
  <ion-content class="content">

    <ion-grid>
      <ion-row style="margin-top: 2%" class="ion-justify-content-center" >
        <ion-col size-lg="2">
          <!-- <h2> Sign up </h2> -->
          <form-button router-link="/Signup" type="button" buttonText="Signup"/>
        </ion-col>
        <ion-col size-lg="2">
          <!-- <h2> Sign up </h2> -->
          <form-button router-link="/Signup" type="button" buttonText="Log in"/>
        </ion-col>
      </ion-row>
      <!-- <ion-row style="margin-top: 2%" class="ion-justify-content-center"> -->
        <!-- <ion-col > -->
          <!-- <h2> Sign up </h2> -->
          
        <!-- </ion-col> -->
      <!-- </ion-row> -->
      <!-- <ion-row style="margin-top: 2%" class="ion-justify-content-center"> -->
        <!-- <ion-col size-lg="3" size-xs="11" > -->
          <!-- <ion-card router-link="/Signup" button=true> -->
            <!-- <img src="../../public/assets/Untitled-5.svg"  >  -->
             <!-- <ion-card-header> -->
              <!-- <ion-card-subtitle>Card Subtitle</ion-card-subtitle> -->
              <!-- <ion-card-title> As a Doctor</ion-card-title> -->
            <!-- </ion-card-header> -->

            <!-- <ion-card-content>
              Keep close to Nature's heart... and break clear away, once in awhile,
              and climb a mountain or spend a week in the woods. Wash your spirit clean.
            </ion-card-content> -->
          <!-- </ion-card> -->
        <!-- </ion-col> -->

        <!-- <ion-col offset-lg="1" size-lg="3" size-xs="11"> -->
          <!-- <ion-card> -->
            <!-- <img src="../../public/assets/Untitled-6.svg"  >  -->
             <!-- <ion-card-header> -->
              <!-- <ion-card-subtitle>Card Subtitle</ion-card-subtitle> -->
              <!-- <ion-card-title>As a Secretary</ion-card-title> -->
            <!-- </ion-card-header> -->

            <!-- <ion-card-content>
              Keep close to Nature's heart... and break clear away, once in awhile,
              and climb a mountain or spend a week in the woods. Wash your spirit clean.
            </ion-card-content> -->
          <!-- </ion-card> -->
        <!-- </ion-col> -->
      <!-- </ion-row> -->
      <!-- <router-link to="/MakeAccount"><form-button type="button" buttonText="Signup"/></router-link> -->
    </ion-grid>

    
  </ion-content>
</ion-page>
<!-- </body> -->
</template>

<script>
import { defineComponent } from 'vue';
import { IonContent , IonPage, IonGrid , IonCol, IonRow} from '@ionic/vue';
// import { IonContent , IonPage, IonGrid , IonCol, IonRow,IonCard ,IonCardTitle,IonCardHeader } from '@ionic/vue';
import FormButton from '../Components/FormButton.vue';
// import FormField from '../Components/FormField'
// import ProgressBar from '../Components/ProgressBar.vue';
export default defineComponent({
  name: 'LandingPage',
  components: {
    FormButton,
    // FormField,
    IonCol,
    IonGrid,
    IonRow,
    IonContent,
    IonPage ,
    // IonCard,
    // IonCardTitle,
    // IonCardHeader
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
  /* --background: linear-gradient( #141e30,#28425f, #294361,#141e30); */
  /* --background: linear-gradient( #336450,#398666, #3a8a69,#336450); */
  /* --background: linear-gradient( #214436,#336450, #286d50,#336450); */
  
}
.FormGrid ion-col{
--ion-grid-column-padding: 20px;
  /* --ion-grid-padding: 50px; */
}



h2 {
  margin: 0 0 30px;
  padding: 0;
  color: #ffffff;
  
  font-family: "Lucida Console", "Lucida Sans Typewriter", monaco, "Bitstream Vera Sans Mono", monospace; 
  text-align: center;
  font-weight: bold;
}

ion-card-title{
  text-align: center;
  

}


/* ion-card{
  height: 500px;
} */



</style>
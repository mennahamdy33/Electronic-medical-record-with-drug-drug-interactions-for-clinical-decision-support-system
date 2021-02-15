<template>
<ion-page>
<!-- <body> -->
  <ion-content class="content">
    <ion-header class="ion-no-border">
    <ion-toolbar>
      <ion-title>Header - No Border</ion-title>
    </ion-toolbar>
  </ion-header>

    <ion-grid>
      <ion-row style="margin-top: 2%" class="ion-justify-content-center" >
        <ion-col size-lg="2">
          <form-button router-link="/Signup" type="button" buttonText="Signup"/>
        </ion-col>
        <ion-col size-lg="2">
          <form-button router-link="/addpatient" type="button" buttonText="Log in"/>
        </ion-col>
      </ion-row>
      
    </ion-grid>

    
  </ion-content>
</ion-page>
<!-- </body> -->
</template>

<script>
import { defineComponent } from 'vue';
import { 
  IonContent ,
  IonPage,
  IonGrid ,
  IonCol, 
  IonRow,
  IonHeader,
  IonTitle,
  IonToolbar

   
} from '@ionic/vue';
// import { IonContent , IonPage, IonGrid , IonCol, IonRow,IonCard ,IonCardTitle,IonCardHeader } from '@ionic/vue';
import FormButton from '../components/FormButton.vue';
// import FormField from '../components/FormField'
// import ProgressBar from '../components/ProgressBar.vue';
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
    IonHeader,
    IonTitle,
    IonToolbar
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
  
  /* --background: linear-gradient(#022f31, #064e53); */
  --background: linear-gradient(#141e30, #243b55);
  
  
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
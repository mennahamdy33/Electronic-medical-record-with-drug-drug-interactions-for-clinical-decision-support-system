<template>
<ion-page>
<!-- <body> -->
  <ion-menu side="start" menu-id="first" content-id="main">
    <ion-header>
      <ion-toolbar color="secondary">
        <ion-title>Options</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-list>
        <!-- <img :src="img" alt="logo" /> -->

        <ion-item href="/addpatient">Home</ion-item>
        <ion-item href="/bookDoctor">About</ion-item>
        <ion-item href="/patientProfile">Features</ion-item>
        <ion-item href="/doctorProfile">Pershase</ion-item>
        <ion-item href="/Prescription">Log in</ion-item>
        <ion-item href="/Prescription">Sign up</ion-item>
      </ion-list>
      </ion-content>
  </ion-menu>
  <ion-content id="main" >
      <section class="sec1" > 

    <ion-header class="ion-no-border" >
    <!-- <ion-split-pane when="lg" content-id="main"> -->
      <ion-toolbar class="toolbar"  >
        <ion-buttons slot="start" id="menu">
          <ion-menu-button auto-hide="false"></ion-menu-button>
        </ion-buttons>
        <ion-title >
          
          <ion-grid>
            <ion-row>
              <ion-col offset-lg="2" size-lg="4" size-md="3" size-sm="12" size-xs="8" offset-xs="0">
                <img :src="img" alt="logo"  />
              </ion-col>
             </ion-row>
          </ion-grid>
        </ion-title>

        <ion-buttons slot="secondary" id="bar">
                       
          <!-- <ion-button router-link="/addpatient"> Log in</ion-button>
          <ion-button class="signup" router-link="/Signup"> Sign up</ion-button> -->

          <ion-grid>
            <ion-row >
              <ion-col pull-lg="1.4" >
                <ion-button class="normal" router-link="/addpatient">Home</ion-button>
              </ion-col>
              <ion-col pull-lg="1.4" >
                <ion-button class="normal" router-link="/addpatient">About</ion-button>
              </ion-col>
              <ion-col pull-lg="1.4" >
                <ion-button class="normal" router-link="/addpatient">Features</ion-button>
              </ion-col>
              <ion-col pull-lg="1" >
                <ion-button class="normal" router-link="/addpatient">Purchase</ion-button>
              </ion-col>
              <ion-col pull="0.1" >
                <ion-button class="login" router-link="/addpatient"> Log in</ion-button>
              </ion-col>
              <ion-col >
                <ion-button   class="signup" router-link="/Signup"> Sign up</ion-button>
              </ion-col>
            </ion-row>
          </ion-grid>
        </ion-buttons>
      </ion-toolbar>
      <!-- </ion-split-pane> -->
    </ion-header>

      <h2> Home</h2>
    </section>

    <section class ="sec2">
      <h2> About</h2>
    </section>

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
  IonToolbar,
  IonButtons,
  IonButton,
  IonMenu,
  IonItem,
  IonList,
  IonMenuButton
  // IonSplitPane,

   
} from '@ionic/vue';
// import { IonContent , IonPage, IonGrid , IonCol, IonRow,IonCard ,IonCardTitle,IonCardHeader } from '@ionic/vue';
// import FormButton from '../components/FormButton.vue';
// import FormField from '../components/FormField'
// import ProgressBar from '../components/ProgressBar.vue';
export default defineComponent({
  name: 'LandingPage',
  components: {
    // FormButton,
    // FormField,
    IonCol,
    IonGrid,
    IonRow,
    IonContent,
    IonPage ,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonButtons,
    IonButton,
    IonMenu,
    IonItem,
    IonList,
    IonMenuButton
    // IonSplitPane
    // IonCard,
    // IonCardTitle,
    // IonCardHeader
    // ProgressBar,
    
    
   
  },
    
  data(){
    return{
      img: require("../../public/logobig.png"),

      
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

@media only screen and (max-width: 992px) {
    #bar  {
        display: none;
    }
}

@media only screen and (min-width: 600px) {
    #menu  {
        display: none;
    }
}

.sec1 {
  /* margin:0;
  padding:0; */
  font-family: sans-serif;
  /* --background: linear-gradient(#141e30, #243b55); */

  background-color:  #141e30;
  height: 500px;
  
  
}
.sec1 h2{
  padding-top:50px;
}
.sec2 {
 
  background-color:  #d9e6fc;
  height: 500px;
  padding-top: 50px;
  
}

.sec2 h2{
  color: #000000;
}
/* .FormGrid ion-col{ */
/* --ion-grid-column-padding: 20px; */
  /* --ion-grid-padding: 50px; */
/* } */



h2 {
  margin: 0 0 30px;
  padding: 0;
  color: #ffffff;
    
  /* margin-top: 20px; */
  font-family: "Lucida Console", "Lucida Sans Typewriter", monaco, "Bitstream Vera Sans Mono", monospace; 
  text-align: center;
  font-weight: bold;
}

ion-card-title{
  text-align: center;
  

}


.toolbar{
  --background: transparent;
  /* --opacity: 100%; */
    /* margin-top: 1%; */

    
}



ion-buttons{
  margin-right: 13%;
}

img{
  /* width: 13%; */
  /* margin-top: 10%; */
}

ion-button{
    color: #ffffff;
    /* margin-top: 10%; */
  /* --background: #ffffff;
  --border-radius: 300px;
  --border-width: 50px; */
}

.signup , .login{
  color: #000000;
  background: #ffffff;
  border-radius: 300px;
  width: 140px;
  height: 55px;
 
  /* --padding-bottom	:40px;
  --padding-top	:40px; */
  /* height: 50px; */
  /* margin-right: 100px; */
}

.signup:hover, .login:hover {
background: transparent;
border : 2px solid #ffffff;
color: #ffffff;
transition-duration: 0.4s;
/* border-color: #ffffff;
border-width: 20px; */
}
.normal{
  margin-top: 15px;
}

.normal:hover{
  background: transparent;
  border-radius: 300px;

  border : 1px solid #ffffff;
  color: #ffffff;
  transition-duration: 0.4s;
}
</style>
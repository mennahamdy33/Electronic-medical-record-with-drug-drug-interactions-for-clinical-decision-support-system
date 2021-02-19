<template>
<ion-page>

  <ion-menu side="start" menu-id="first" content-id="main">
    <ion-header>
      <ion-toolbar color="secondary">
        <ion-title>Options</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-list>

        <ion-item href="/addpatient">Home</ion-item>
        <ion-item href="/bookDoctor">About</ion-item>
        <ion-item href="/patientProfile">Features</ion-item>
        <ion-item href="/doctorProfile">Pershase</ion-item>
        <ion-item href="/Prescription">Log in</ion-item>
        <ion-item href="/Signup">Sign up</ion-item>
      </ion-list>
    </ion-content>
  </ion-menu>

  <ion-content id="main" >
    <section class="sec1" > 

      <ion-header class="ion-no-border" >
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
      </ion-header>

      <home/>
      

    </section>

    
    <about/>
    <features/>


  </ion-content>
</ion-page>

</template>

<script>

import { defineComponent } from 'vue';
// import SliderContent from '../components/SliderContent'
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
  IonMenuButton,
  
 

   
} from '@ionic/vue';
import Features from './Features.vue';
import About from './About'
import Home from './Home.vue';
export default defineComponent({
  name: 'LandingPage',
  components: {
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
    IonMenuButton,
    Features,
    About,
    Home
    
   
    
   
  },
    
  data(){
    return{
      img: require("../../../public/logobig.png"),
    

      
    }
  },
  methods: {
 
 
  }
,

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

  font-family: sans-serif;
  background: linear-gradient(#141e30, #243b55);
}


.toolbar{
  --background: transparent;
    
}



ion-buttons{
  margin-right: 13%;
}

ion-button{
    color: #ffffff;
}

.signup , .login{
  color: #000000;
  background: #ffffff;
  border-radius: 300px;
  width: 140px;
  height: 55px;

}

.signup:hover, .login:hover {
background: transparent;
border : 2px solid #ffffff;
color: #ffffff;
transition-duration: 0.4s;

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
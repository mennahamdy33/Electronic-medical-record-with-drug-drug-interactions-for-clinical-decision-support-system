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

      
      <ion-grid class="grid1">
        <ion-row>
          <ion-col  size-lg="5" size-md="3" size-sm="12" size-xs="12" offset-xs="0">
            <h2>DruGuide</h2>
            <p> A cross platform software to manage your<br> <br>clinic while keeping your patient's safety </p>
          </ion-col>

          <ion-col  size-lg="7" size-md="3" size-sm="12" size-xs="12" offset-xs="0">
            <img src="../../public/assets/homepic.png" alt="logo"  />
          </ion-col>

        </ion-row>
      </ion-grid>

    </section>

    <section class ="sec2">
      
      <ion-grid class="grid2"> 
        <!-- <ion-row class="ion-align-items-center ion-justify-content-center" > -->
          <ion-row class="ion-align-items-center ion-justify-content-center">
            <h2 id = "About"> About DruGuide</h2>
          </ion-row>
          <ion-row>
            <ion-col  size-lg="7" offset-lg="0.8" size-xs="12">
              <ion-card class= "aboutCard" style="margin-top: 50px;">
                  <ion-card-content>
                    <p class="about1" >
                      Patients taking two or more drugs, become liable to severe harm that may reach death.<br>
                      There are some types of chemicals that are not preferable to be taken together because<br><br>
                      they interact with each other in a way that harms the patient’s health. <br>
                      In Egypt most hospitals and clinics, have no electronic information system<br><br>
                      to know the medical history and the medications the patient is taking.
                    </p>
                </ion-card-content>

              </ion-card>
            </ion-col>
            <ion-col size-lg="3" offset-lg="0.4" size-xs="12">
              <ion-card>
                <img src="../../public/assets/interaction.png" alt="logo"  />

              </ion-card>
            </ion-col>
          </ion-row>
          
          <ion-row>

            <!-- <ion-col size-lg="3" style="margin-left:25px; margin-right:25px;" > -->
            <ion-col size-lg="7" offset-lg="0.8" size-xs="12">
              <ion-card class= "aboutCard" style="margin-top: 50px;">
                <ion-card-content>
                  <p class="about1">
                    Our provided solution to this issue is DruGuide, a website and a mobile application to be used by health care professionals so that each patient has his own electronic medical profile,
                    that contains the patient's drug list and medical history. 
                  </p>
                   
                </ion-card-content>

              </ion-card>
            </ion-col>
            <ion-col size-lg="3" offset-lg="0.4" size-xs="12">
              <ion-card>
                <img src="../../public/assets/history.png" alt="logo"  />

              </ion-card>
            </ion-col>
          </ion-row>
          
          <ion-row>
            <ion-col size-lg="7" offset-lg="0.8" size-xs="12">
              <ion-card class= "aboutCard" style="margin-top: 50px;">
                <ion-card-content>
                  <p class="about1">
                    When the doctor prescribes a new drug for a patient,
                    DruGuide makes sure that there are no interactions between this drug and other drugs in his list, 
                    and in the event of an interaction, the program notifies the doctor about the type of this interaction 
                    and its severity and make the doctor choose between adding the drug or writing another one.
                  </p>
                   
                </ion-card-content>

              </ion-card>
            </ion-col>
            <ion-col size-lg="3" offset-lg="0.4" size-xs="12">
              <ion-card>
                
                <img src="../../public/assets/prescribe.png" alt="logo"  />

              </ion-card>
            </ion-col>
          </ion-row>
        
      </ion-grid>
      
    </section>
    
    <section class="sec3">
      <ion-grid>
        <ion-row class="ion-align-items-center ion-justify-content-center">
          <!-- <h2 id = "About" > DruGuide Features</h2> -->
          <h2 id = "About" style="background-color :#ffffff;"> DruGuide Features</h2>
        </ion-row>
        <ion-row class= "ion-align-items-center ion-justify-content-center">
          <!-- <ion-col > -->
          <ion-card class="features">
            <ion-card-content >
              <ion-grid>
                <ion-row>
                  <ion-col >
                    <p> 
                      1- Registering patient personal information, medical history, 
                      and medication list if existed. the data is filled by the receptionist.
                    </p>
                    <p>
                      2- Registering the staff data electronically, like doctors, nurses and receptionists.
                    </p>
                    <p>3- Receptionist can edit patient data.</p>

                    <p>4- Staff can edit their own data.</p>
                    <p>5- Receptionist can  schedule a new appointment to a doctor.</p>
                    <p> 6- Setting a physician’s visiting hours.</p>

                  </ion-col>

                  <ion-col offset-lg="0.4">
                    <p> 7- Filling an encounter form, the physician enters the results of the encounter to the patient’s chart.</p>

                    <p> 8- Doctors can see their scheduled patients on a particular day. </p>
                    <p> 9- Doctors can view patients data.</p>

                    <p> 10- Safely e-Prescribing a medication, the system checks for possible drug-drug interactions.</p>

                    <p> 11- Searching for drugs and their detailed information.</p>

                  </ion-col>
                </ion-row>
              </ion-grid>
            </ion-card-content>
          </ion-card>
          
          <!-- </ion-col> -->
        </ion-row>
      </ion-grid>
      
    </section>


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
  IonCard,
  IonCardContent,
  // IonSlides,
  // IonSlide
 
  // IonSplitPane,

   
} from '@ionic/vue';

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
    IonCard,
    IonCardContent,
    // IonSlides,
    // IonSlide
    // SliderContent
   
   
    // IonSplitPane
    // IonCard,
    // IonCardTitle,
    // IonCardHeader
   
    
   
  },
    
  data(){
    return{
      img: require("../../public/logobig.png"),
    

      
    }
  },
  methods: {
 
 
  }
,

// mounted(){
//   console.log(this.slides)
// }
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
.grid1{
  margin-top: 50px;
}
.sec1 h2 {
  font-family: 'Monoton';
  /* font-family:  'Architects Daughter'; */
  /* font-family: 'Righteous'; */
  padding-top:130px;
  font-size: 55px;
  letter-spacing: 3px;
  text-align: center;
  font-weight: 100;

}
#About{
  font-family: 'Righteous';
  font-weight: 100;
  font-size: 35px;
  color:#02153b;
  background-color: #9cbbf554;
  border-radius: 50px;
  padding: 15px;;
}
.sec1 p{
  font-family: Arial, Helvetica, sans-serif;
  font-size: 20px;
  color: #ffffff;
  text-align: center;
  margin-left: 110px;
}

@media screen and (max-width: 600px) {
  .sec1 h2{
    font-size: 45px;
  }
  .sec1 p{
    font-size: 15px;
    margin-left: 0;
  }
}
.sec2 {
 
  background-color:  #ffffff;
  padding-top: 50px;
  
}

.sec2 h2{
  color: #000000;
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

ion-card{
  --background:#ffffff;
}

.about1{
  padding: 10px  0px 10px 20px; 
  font-size: 18px;
  color: #000000;
 
}
.aboutCard{
  --background:#dedfdf41;
  border-radius: 0px;

}
.aboutCard:hover{
  --background:#ffffff;
  transition-duration: 0.4s;
  

}

.sec3{
  padding-top: 50px;
  padding-bottom: 50px;
  /* background-color: #9cbbf515; */
    /* background: linear-gradient(#9cbbf554, #ffffff); */
  background: linear-gradient(#141e30, #243b55);

}


.features p{
  font-size: 20px;
  /* color:rgb(11, 2, 63); */
  margin-bottom: 20px;
  /* font-family:   'Righteous'; */
  font-family:  Arial, Helvetica, sans-serif;
;
  /* font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif; */


  font-weight: 500;
 letter-spacing: 0.9px;
  color:#02153b;
  /* background-color: #ffffffe8; */
  background-color: #9cbbf554;
  border-radius: 50px;
  padding: 20px;;
}

.features{
  width: 90%;
  border-radius: 50px;
  /* background-color: #7a7a7a07; */
}

.features p:hover{
  background-color: #1b0d69;
  color: #ffffff;
  transition-duration: 0.4s;

}

</style>
<template>
    <section class ="sec2">
      
      <ion-grid > 
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
                <img src="../../../public/assets/interaction.png" alt="logo"  />

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
                <img src="../../../public/assets/history.png" alt="logo"  />

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
                
                <img src="../../../public/assets/prescribe.png" alt="logo"  />

              </ion-card>
            </ion-col>
          </ion-row>
        
      </ion-grid>
      
    </section>
</template>

<script>

import { defineComponent } from 'vue';

import { 
  IonGrid ,
  IonCol, 
  IonRow,
  IonCard,
  IonCardContent
 
} from '@ionic/vue';

export default defineComponent({
  name: 'About',
  components: {
    IonCol,
    IonGrid,
    IonRow,
    IonCard,
    IonCardContent
  },
    
  data(){
    return{
  
      
    }
  },
  methods: {
 
 
  }
,

});
</script>

<style scoped>

#About{
  font-family: 'Righteous';
  font-weight: 100;
  font-size: 35px;
  color:#02153b;
  background-color: #9cbbf554;
  border-radius: 50px;
  padding: 15px;;
}

.sec2 {
 
  background-color:  #ffffff;
  padding-top: 50px;
  
}
.sec2 h2{
  color: #000000;
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
</style>
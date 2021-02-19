<template>

    <section class="sec3">
      <ion-grid>
        <ion-row class="ion-align-items-center ion-justify-content-center">
          <!-- <h2 id = "About" > DruGuide Features</h2> -->
          <h2 id = "About"> DruGuide Features</h2>
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
  name: 'Features',
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
  background-color :#ffffff;
  border-radius: 50px;
  padding: 15px;;
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
<template>

  <ion-row>
    
    <ion-col offset-lg="2" size-lg="8">
      <div class="login-box">
        <h2>Pick up your Clinics</h2>
        
      </div>
    </ion-col>
  </ion-row>

  <ion-row class="ion-justify-content-center" > 
    <ion-grid >
      <ion-row class="ion-justify-content-start">
        <ion-col  size-lg="3" size-xs="11" v-for="clinic in clinics" :key="clinic.clinic_id">
          <ion-card :class="{ active : clinic.active}" button=true @click="activate(clinic)" >
            <!-- <img src="../../public/assets/Untitled-5.svg"  >  -->
            <ion-card-header>
              <!-- <ion-card-subtitle>Card Subtitle</ion-card-subtitle> -->
              <ion-card-title> {{clinic.clinic_name}}</ion-card-title>
            </ion-card-header>

            <ion-card-content>
              <p>Address</p>
              {{ clinic.address }}
            </ion-card-content>
          </ion-card>
        </ion-col>
      </ion-row>
    </ion-grid>
  </ion-row>

  <ion-row>
    
    <ion-col offset-lg="2" size-lg="1.2" size-xs="6" >                      
      <form-button @click="changePhase({currentPhase: 'MakeAccount'})" type="button" buttonText="Back"/>
    </ion-col>

    <ion-col offset-lg="1" size-lg="1.2" size-xs="6" >                      
      <form-button type="button" buttonText="Submit" @click="onSubmit"/>
    </ion-col>

  </ion-row>

 
    


</template>

<script>
import { defineComponent } from 'vue';
import { IonGrid,IonCol, IonRow , IonCard, IonCardTitle, IonCardHeader,  IonCardContent} from '@ionic/vue';
import FormButton from '../../components/FormButton.vue';
// import FormField from '../../components/FormField'
import { mapActions } from 'vuex';
export default defineComponent({
  name: 'Signup2',
  components: {
    FormButton,
    // FormField,
    IonCol,
    IonGrid,
    IonRow,
    IonCard,
    IonCardTitle,
    IonCardHeader,
    // IonCardSubtitle,
    IonCardContent,
    
    
    
    
    
   
  },
    
  data(){
    return{
      clinics: [],
      // active: false,
      
    }
  },
   methods: {
     onSubmit(){
       console.log("Hello")
       fetch('http://localhost:3000/register', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(this.$store.getters['SignUpData'])
    })
      //  fetch('http://localhost:3000/')
     },
    ...mapActions(['changePhase']),

    activate(clinic)
    {
      clinic.active = !clinic.active;
    },
    test(id){
      console.log(id)
    }
    
  },
  
  
  mounted(){
    fetch('http://localhost:3000/clinics')
    .then(response => response.json())
    .then(clinics => {
      clinics.forEach(clinic => {
        clinic = {...clinic , active: false}
        console.log(clinic)
      });
      this.clinics = clinics
      // console.log(clinics)
    } )
  }
});
</script>

<style scoped>





.login-box h2 {
  margin: 0 0 30px;
  padding: 0;
  color: #ffffff;
  /* color: #05545a; */
  text-align: center;
  font-weight: bold;
}

ion-grid{
  /* --ion-grid-columns: 12; */
  margin-left: 10%;
  margin-right: 10%;
}

.active{
  border: 5px solid #03a8b1;
  box-shadow: 0 0 5px #03e9f4,
              0 0 5px #03e9f4,
              0 0 5px #03e9f4,
              0 0 5px #03e9f4;
}
</style>
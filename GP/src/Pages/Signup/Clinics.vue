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
import { IonGrid,IonCol, IonRow , IonCard, IonCardTitle, IonCardHeader,  IonCardContent,alertController} from '@ionic/vue';
import FormButton from '../../components/FormButton.vue';
// import FormField from '../../components/FormField'
import { mapActions } from 'vuex';
// import { mapGetters } from 'vuex';
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

     async presentAlert(msg) {
      const alert = await alertController
        .create({
          cssClass: 'alert',
          header: 'Alert',
          // subHeader: 'Subtitle',
          message: msg,
          buttons: ['OK'],
        });
      return alert.present();
    },

     onSubmit(){
       
       const pickedClinics = this.clinics.filter( clinic => clinic.active === true );
       console.log(pickedClinics)
       if (pickedClinics.length === 0){
          this.presentAlert("Please pick a clinic")
       }
       else{
        let auth_id = this.$store.getters['user'].auth_id
        let data = {...this.$store.getters['SignUpData'], auth_id: auth_id , pickedClinics: pickedClinics }
        console.log(data)

        fetch('http://localhost:3000/register', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
        }).then(res => res.json()).then(res=> console.log(res))
        .catch(() => console.log("Unable to register"))
       }

      //  fetch('http://localhost:3000/')
     },
    ...mapActions(['changePhase']),
    // ...mapGetters(['user'])
    // ,

    activate(clinic)
    {
      clinic.active = !clinic.active;
    },
    test(id){
      console.log(id)
    }
    
  },
  
  
  mounted(){
    const user = this.$store.getters['user']
    console.log(user.customer_id)
    fetch(`http://localhost:3000/clinics/${user.customer_id}`)
    // fetch(`http://localhost:3000/clinics?id=${user.customer_id}`)
    .then(response => response.json())
    .then(clinics => {
      clinics.forEach(clinic => {
        // clinic = {...clinic , active: false}
        clinic.active = false
        
      });
      this.clinics = clinics
      console.log(clinics)
    } )
  }
});
</script>

<style scoped>





.login-box h2 {
  font-family: 'Monoton';
  margin: 0 0 30px;
  padding: 0;
  color: #ffffff;
  /* color: #05545a; */
  font-size: 40px;
  letter-spacing: 9px;
  text-align: center;
  font-weight: 100;
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
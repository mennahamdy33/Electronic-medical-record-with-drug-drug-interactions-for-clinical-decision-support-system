<template>

    <div class="container" v-if="text == 'signup'" >
      <ul class="progressbar">
          <li :class="{ active : SignupPhase === 'PersonalInformation'}">Personal information</li>
          <li :class="{ active : SignupPhase === 'MakeAccount'}">Make an account</li>
          <li :class="{ active : SignupPhase === 'Clinics'}">Clinics</li>
          <!-- <li>View map</li> -->
        </ul>
    </div>
    <div class="container" v-if="text == 'addPatient'" >
        <ul class="progressbar">
            <li :class="{ active : PatientPhase === 'PersonalInfo'}">Personal information</li>
            <li :class="{ active : PatientPhase === 'MedicalHistory'}">Medical History</li>

            <!-- <li>View map</li> -->
        </ul>
    </div>

</template>

<script>
import { defineComponent } from 'vue';
// import { IonContent } from '@ionic/vue';
import { mapGetters } from 'vuex';
export default defineComponent({
  name: 'ProgressBar',
    props: [ 'text','level'],
  components: {
    
    // IonContent
  },
  // data:{
    
  // },
  methods: {
     
  },
  computed: {
    ...mapGetters(['SignupPhase']),
      ...mapGetters('patient',['PatientPhase'])

  }
});
</script>

<style scoped>
.container {

      margin: 100px auto ;

      padding-bottom: 40px;


  }
  .progressbar {
      counter-reset: step;

  }
  .progressbar li {
      list-style-type: none;
      width: 25%;
      float: left;
      font-size: 13px;
      position: relative;
      text-align: center;
      text-transform: uppercase;
      color: #7d7d7d;

  }
  .progressbar li:before {
      width: 30px;
      height: 30px;
      content: counter(step);
      counter-increment: step;
      line-height: 30px;
      border: 2px solid #03e9f4;
      display: block;
      text-align: center;
      margin: 0 auto 10px auto;
      border-radius: 50%;
      background-color: white;
  }
  .progressbar li:after {
      width: 100%;
      height: 2px;
      content: '';
      position: absolute;
      background-color: #7d7d7d;
      top: 15px;
      left: -50%;
      z-index: -1;
  }
  .progressbar li:first-child:after {
      content: none;
  }
  .progressbar li.active {
      color: #03e9f4;
    font-size: 15px;

    
  }
  .progressbar li.active:before {
      border-color: #03e9f4;
       width: 34px;
      height: 34px;
     
      border-radius: 50%;
      box-shadow: 0 0 0 3px #03e9f4,
              0 0 25px #03e9f4,
              0 0 50px #03e9f4,
              0 0 100px #03e9f4;
  }
  .progressbar li.active + li:after {
      background-color: #03e9f4;
  }

@media screen and (max-width: 539px) {
  .progressbar li{
    font-size: 9.5px;
  }
  
  .progressbar li.active {

    font-size: 10.8px;

    
  }
}


</style>
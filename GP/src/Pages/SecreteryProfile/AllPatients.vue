<template>
       <ion-grid>

               <ion-row>
               <ion-col offset-lg="2" size-lg="6">
                   <div class="login-box">
                       <h2>Patients List</h2>
                       <div class="user-box">
                           <input type="text" name="patientSSN" v-model="searchQuerywithssn" required />
                           <label class="Down">Patient's SSN </label>
                       </div>
                       <div class="user-box">
                           <input type="text" v-model="searchQuerywithPhoneNumber" name="patientNumber" required />
                         `  <label class="Down">Patient's Phone Number</label>
                       </div>
                   </div>
               </ion-col>
               </ion-row>
            <ion-row>

            <patient-card
                    v-for="patient in resultsPatients"
                    :key="patient.ssn"
                    :ssn="patient.ssn"
                    :PI="patient"
            ></patient-card>
            </ion-row>
           </ion-grid>

</template>
<script>
    import { defineComponent } from 'vue';
    // import MySchedules from './Schedules.vue'
    import {

        IonCol,
        IonGrid, IonRow,

    } from "@ionic/vue";
    import {
        add,
        ellipsisHorizontal,
        ellipsisVertical,
        helpCircle,
        personCircle,
        search,
        star,
        logOut,
        closeCircle
    } from "ionicons/icons";
import PatientCard from "../../components/PatientCard";
    import axios from 'axios';
    export default defineComponent({
        name: 'MainPageSecretery',
        props: ["PI"],
        components: {



            IonCol,
            IonGrid, IonRow,
             PatientCard
        },
        data() {
            return {
                //icons start
                add,
                ellipsisHorizontal,
                ellipsisVertical,
                helpCircle,
                personCircle,
                search,
                star,
                logOut,
                closeCircle,
                img: require("../../../public/logobig.png"),
                //icons end
                searchQuerywithPhoneNumber: null,
                searchQuerywithssn:null,
                pa:[],
                 Patients: [],
                Secretary_id:null,

            };
        },
        mounted(){
                this.Secretary_id = '2';
            axios.defaults.headers.common['Authorization'] = 'Bearer '+localStorage.getItem('tokensecretary');
            axios.get(process.env.VUE_APP_ROOT_API+`allPatients/`+this.Secretary_id)
                  .then(patients => {


                    this.pa = JSON.parse(JSON.stringify(patients.data));


                      for (const med of this.pa) {

                      //    console.log(med);
                     this.Patients.push({
                         patient_id:med.patient_id  ,
                         ssn : med.ssn,
                         photo: med.photo,
                         first_name : med.first_name,
                         last_name : med.last_name,
                         phone_number : '0' + med.phone_number,
                          birth_date : med.birth_date.split('T')[0],
                          Medications : med.medications.split(','),
                         gender : med.gender,
                         address : med.address,
                          major_illnesses: med.major_illnesses,
                          previous_surgery: med.previous_surgery,
                          previous_illnesses: med.previous_illnesses,
                          diabetes: ((med.diabetes) ? 'yes' : 'no'),
                          family_diseases: med.family_diseases,
                          allergies: med.allergies,
                          tobacco: ((med.tobacco) ? 'yes' : 'no')

                      })
                  }

                    console.log(this.Patients)
                } ).catch((err) => {
                        console.log(err);

            })},

        computed:{
            resultsPatients() {
                console.log("computing");
                if ( this.searchQuerywithssn) {
                    return this.Patients.filter((item) => {

                        return this.searchQuerywithssn
                            .split(" ")
                            .every((v) => (item.ssn).toString().startsWith(v))
                    });
                }
                else if( this.searchQuerywithPhoneNumber){
                    return this.Patients.filter((item) => {

                       return this.searchQuerywithPhoneNumber.split(" ").every((v) => (item.phone_number).toString().startsWith(v))
                    });  }
                else {
                    return this.Patients;
                }
            },
        },

    });
</script>
<style scoped>
    .content {
        margin: 0;
        padding: 0;
        font-family: sans-serif;
        --background: linear-gradient(#141e30, #243b55);
    }
    

</style>
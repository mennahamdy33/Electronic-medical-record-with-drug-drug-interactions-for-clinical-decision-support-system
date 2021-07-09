<template>
       <ion-grid>

               <ion-row>
               <ion-col offset-lg="2" size-lg="6">
                   <div class="login-box">
                       <h2>Patients List</h2>
                       <div class="user-box">
                           <input type="text" name="patientSSN" v-model="searchQuerywithssn" required />
                           <label>Patient's SSN </label>
                       </div>
                       <div class="user-box">
                           <input type="text" v-model="searchQuerywithPhoneNumber" name="patientNumber" required />
                           <label>Patient's Phone Number</label>
                       </div>
                   </div>
               </ion-col>
               </ion-row>
            <ion-row>

            <patient-card
                    v-for="patient in resultsPatients"
                    :key="patient.ssn"
                    :ssn="patient.ssn"
                    :FirstName="patient.FirstName"
                    :LastName="patient.LastName"
                    :PhoneNumber="patient.phoneNumber"
                    :birthdate="patient.birthdate"
                    :Medications="patient.Medications"
                    :Gender="patient.Gender"
                    :Address="patient.Address"
                    :major_illnesses= "patient.major_illnesses"
                    :previous_surgey= "patient.previous_surgey"
                    :previous_illnessess= "patient.previous_illnessess"
                    :diabetes= "patient.diabetes"
                    :family_diseases= "patient.family_diseases"
                    :allergies= "patient.allergies"
                    :tobacco= "patient.tobacco"
                    :visits = "patient.dates"
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
        props: ["ssn", "FirstName", "LastName","phoneNumber","birthdate","Medications","Gender","Address","major_illnesses",
        "previous_surgey",
        "previous_illnessess",
        "diabetes",
        "family_diseases",
        "allergies",
        "tobacco",
            "visits"
    ],
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
                DoctorID:null,
                pa:[],
                Patients: [],
                Pvisits:[],
                all:[]
            };
        },
        mounted(){

           //     this.DoctorID = '1';
            axios.defaults.headers.common['Authorization'] = 'Bearer '+localStorage.getItem('tokenDoctor');
                axios.get(process.env.VUE_APP_ROOT_API+`allPatients`)
                  .then(patients => {


                    this.pa = JSON.parse(JSON.stringify(patients.data));


                      for (const med of this.pa.patient) {

                     this.Patients.push({
                         patient_id:med.patient_id  ,
                         ssn : med.ssn,
                          FirstName : med.first_name,
                          LastName : med.last_name,
                          phoneNumber : med.phone_number,
                          birthdate : med.birth_date,
                          Medications : med.medications.split(','),
                          Gender : med.gender,
                          Address : med.address,
                          major_illnesses: med.major_illnesses,
                          previous_surgey: med.previous_surgey,
                          previous_illnessess: med.previous_illnessess,
                          diabetes: ((med.diabetes) ? 'yes' : 'no'),
                          family_diseases: med.family_diseases,
                          allergies: med.allergies,
                          tobacco: ((med.tobacco) ? 'yes' : 'no'),


                      })

                  }
                      for (const med of this.pa.visit) {
                          if(med.visits){
                          this.Pvisits.push({
                              patient_id:med.patient_id,
                            dates:med.visits.split(','),
                          })
                          }
                      }
                      for(var i in this.Patients ){
                          if(this.Patients[i].patient_id === this.Pvisits[i].patient_id){
                        this.all.push({...this.Patients[i],
                            ...this.Pvisits[i]})}
                            else{
                              this.all.push(this.Patients[i])
                          }
                      }
                      console.log(this.all);
                } ).catch((err) => {
                        console.log(err);

            })},

        computed:{
            resultsPatients() {
                console.log("computing");
                if ( this.searchQuerywithssn) {
                    return this.all.filter((item) => {

                        return this.searchQuerywithssn
                            .split(" ")
                            .every((v) => (item.ssn).toString().startsWith(v))
                    });
                }
                else if( this.searchQuerywithPhoneNumber){
                    return this.all.filter((item) => {

                       return this.searchQuerywithPhoneNumber.split(" ").every((v) => (item.phoneNumber).toString().startsWith(v))
                    });  }
                else {
                    return this.all;
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

    .FormGrid ion-col {
        --ion-grid-column-padding: 20px;
    }
    .login-box h2 {
        margin: 0 0 30px;
        padding: 0;
        color: #ffffff;
        /* color: #05545a; */
        text-align: center;
        font-weight: bold;
    }
    img {
        display: block;
        /* margin-left: auto;
        margin-right: auto; */
        /* padding: 5px; */
        /* width:13em; */
    }
    .tool{
        --background: #141e30;
        /* --border-color: #80fbff;
        --border-width: 2px; */

    }
    ion-title{
        padding: 0;
    }

    .personal_photo{
        /* vertical-align: middle; */
        /* width: 80px; */
        /* height: 80px; */
        border-radius: 50%;
        border: 3px solid #33bbb4;
        /* border: 3px solid #42f3ea; */
    }



    .user-box input {
        width: 100%;
        padding: 10px 0;
        font-size: 16px;
        color: #fff;
        margin-bottom: 30px;
        border: none;
        border-bottom: 1px solid #fff;
        outline: none;
        background: transparent;
    }
    .user-box label {
        position: absolute;
        top: 0;
        left: 0;
        padding: 10px 0;
        font-size: 16px;
        color: #fff;
        pointer-events: none;
        transition: 0.5s;
    }

    .login-box .user-box input:focus ~ label,
    .login-box .user-box input:valid ~ label {
        top: -20px;
        left: 0;
        color: #03e9f4;

        /* color: #05545a; */
        /* color: #d1fdff; */
        font-size: 16px;
        font-weight: bold;
    }
    .personal_photo_bar{
        max-height:35px;
        max-width:35px;
        border-radius: 50%;
        border: 1px solid #42f3ea;
    }


    @media only screen and (max-width: 992px) {
        .personal_photo_bar{
            max-height:25px;
            max-width:25px;
            border-radius: 50%;

            border: 1px solid #42f3ea;
        }
    }

</style>
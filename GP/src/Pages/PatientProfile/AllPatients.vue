<template>
    <ion-page>

        <ion-menu side="start" menu-id="first" content-id="main">

            <ion-content>
                <ion-list>
                    <!-- <img :src="img" alt="logo" /> -->
                    <ion-grid  >
                        <ion-row class= "ion-align-items-center ion-justify-content-center">
                            <!-- <ion-col > -->
                            <ion-col size-lg="4" size-md="4" size-sm="4" size-xs="4">
                                <!-- <img class="personal_photo" src="../../../public/me.jpg" alt="logo"  /> -->
                                <ion-avatar>
                                    <img  class="personal_photo" src="../../../public/me.jpg" alt="logo"  />
                                </ion-avatar>

                            </ion-col>
                        </ion-row>
                        <ion-row class= "ion-align-items-center ion-justify-content-center">
                            <ion-col class="ion-text-center" size-lg="12" size-md="12" size-sm="12" size-xs="12" >
                                <h2> Noran Tharowat </h2>
                            </ion-col>
                        </ion-row>
                    </ion-grid>




                    <ion-item button router-link="/MainPageSecretery/AddPatient">Add Patient</ion-item>
                    <ion-item href="/bookDoctor">Search a Patient</ion-item>
                    <ion-item button router-link="/MainPageSecretery/BookVisit">Book Visit</ion-item>
                    <ion-item button router-link="/MainPageSecretery/MyProfileSecretery">My Profile</ion-item>
                    <!-- <ion-item href="/Prescription">Prescription</ion-item> -->
                </ion-list>
            </ion-content>
        </ion-menu>

        <ion-content id="main" class="content"    >
            <div style=" position: -webkit-sticky;position: sticky;  top: 0;">
                <ion-header   >
                    <ion-toolbar class="tool"  >
                        <!-- <ion-toolbar color="primary"> -->
                        <ion-buttons slot="start">
                            <ion-menu-button auto-hide="false"></ion-menu-button>
                        </ion-buttons>

                        <ion-buttons slot="secondary">



                            <ion-avatar class="personal_photo_bar" >
                                <img  src="../../../public/me.jpg" alt="logo"  />
                            </ion-avatar>

                            <ion-button>
                                <ion-icon slot="icon-only" :icon="search"></ion-icon>
                            </ion-button>
                        </ion-buttons>
                        <ion-buttons slot="primary">
                            <ion-button color="danger">
                                <ion-icon slot="icon-only" :icon="logOut"></ion-icon>
                            </ion-button>
                        </ion-buttons>

                        <ion-title>


                            <ion-grid>
                                <ion-row>
                                    <ion-col size-lg="1.7" size-md="3" size-sm="4" size-xs="12">
                                        <img :src="img" alt="logo" />
                                    </ion-col>
                                </ion-row>
                            </ion-grid>
                        </ion-title>
                    </ion-toolbar>
                </ion-header>
            </div>
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
            ></patient-card>
            </ion-row>
           </ion-grid>
        </ion-content>
    </ion-page>
</template>
<script>
    import { defineComponent } from 'vue';
    // import MySchedules from './Schedules.vue'
    import {
        IonPage,
        IonHeader,
        IonContent,
        IonToolbar,
        IonTitle,
        IonMenu,
        IonButton,
        IonButtons,
        // IonThumbnail,
        IonList,
        IonItem,
        IonIcon,
        IonMenuButton,
        IonCol,
        IonGrid, IonRow,
        IonAvatar
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
        "tobacco"
    ],
        components: {
            IonPage,
            IonHeader,
            IonContent,
            IonToolbar,
            IonTitle,
            IonMenu,
            IonButton,
            IonButtons,
            IonList,
            IonItem,
            IonIcon,
            IonMenuButton,
            IonCol,
            IonGrid, IonRow,
            // MySchedules,
            IonAvatar,
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
                 Patients: [
                     ],

            };
        },
        mounted(){

                axios.get(process.env.VUE_APP_ROOT_API+"allPatients")
                  .then(patients => {

                //   console.log(patients.data);
                    this.pa = JSON.parse(JSON.stringify(patients.data));
                  //                  console.log(this.pa);

                      for (const med of this.pa) {

                      //    console.log(med);
                     this.Patients.push({
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
                            .every((v) => item.ssn.startsWith(v))
                    });
                }
                else if( this.searchQuerywithPhoneNumber){
                    return this.Patients.filter((item) => {

                       return this.searchQuerywithPhoneNumber.split(" ").every((v) => item.PhoneNumber.startsWith(v))
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
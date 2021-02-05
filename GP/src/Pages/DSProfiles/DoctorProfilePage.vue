<template>
    <ion-page >
        <ion-menu side="start" menu-id="first" content-id="main"  >
            <ion-header>
                <ion-toolbar color="primary">
                    <ion-title >Start Menu</ion-title>
                </ion-toolbar>
            </ion-header>
            <ion-content >
                <ion-list >

                    <ion-item router-link="/addpatient"> Add Patient</ion-item>
                    <ion-item router-link="/">Book A Doctor</ion-item>
                    <ion-item router-link="/patientProfile">Edit Patient's Profile</ion-item>
                    <ion-item router-link="/doctorProfile">Edit My Profile</ion-item>
                    <ion-item>System settings</ion-item>
                </ion-list>
            </ion-content>
        </ion-menu>
        <ion-header >
            <ion-toolbar >
                <ion-buttons slot="start">

                    <ion-menu-button auto-hide="false" disabled="false" ></ion-menu-button>
                </ion-buttons>



                <ion-title>
                    My Profile

                </ion-title>
            </ion-toolbar>
        </ion-header>

        <ion-content class="content" id="main" color="primary">
            <ion-grid  >
                <ion-row>
                    <ion-col offset-lg="2" size-lg="8">
                        <div class="login-box" style="border-style: solid;
  border-color: #03e9f4;" >
                            <ion-grid class="FormGrid">
                                <ion-row>

                                    <h2> Name: {{doctorInfo.FistName}} {{doctorInfo.LastName}}</h2>

                                </ion-row>
                                <ion-row>
                                    <ion-col size="12" size-sm>

                                        <ion-label>
                                            Gender: {{doctorInfo.Gender}} </ion-label>
                                        <ion-icon v-if="doctorInfo.Gender === 'Female'"  :icon="female" ></ion-icon>
                                        <ion-icon v-if="doctorInfo.Gender === 'Male'"  :icon="male" ></ion-icon>
                                    </ion-col>

                                    <ion-col size="12" size-sm>
                                        <ion-label>SSN: {{doctorInfo.ssn}}</ion-label>

                                    </ion-col>
                                </ion-row>
                                <ion-row>
                                    <ion-col size="12" size-sm>
                                        <ion-label>Phone Number: {{doctorInfo.PhoneNumber}}</ion-label>

                                    </ion-col>

                                    <ion-col size="12" size-sm>
                                        <ion-label>Address: {{doctorInfo.Address}}</ion-label>

                                    </ion-col>

                                </ion-row>
                                <ion-row>
                                    <ion-col size="12" size-sm>
                                        <ion-label>Education: {{doctorInfo.Education}}</ion-label>

                                    </ion-col>

                                    <ion-col size="12" size-sm>
                                        <ion-label>Specialty: {{doctorInfo.Specialty}}</ion-label>

                                    </ion-col>

                                </ion-row>
                                <ion-row>
                                    <ion-col size="12" size-sm>
                                        <ion-label>Patients:</ion-label>
                                        <ion-list style="background-color:var(--ion-color-primary); ">
                                            <ion-item  lines="none" v-for="Patient in doctorInfo.Patients " :key="Patient"  > {{Patient}}</ion-item>
                                        </ion-list>
                                    </ion-col>
                                </ion-row>
                            </ion-grid>
                        </div>


                    </ion-col>
                </ion-row>
            </ion-grid>
        </ion-content>
    </ion-page>

</template>
<script>
    import { female,male} from "ionicons/icons";
    import {IonMenu,IonList,IonLabel,IonItem,IonGrid,IonIcon,IonButtons,IonMenuButton,IonPage,IonHeader,IonContent,IonToolbar,IonTitle,IonRow,IonCol    } from "@ionic/vue";
    export default {
        components:{
            IonMenu,IonList,IonItem,
            IonGrid,IonButtons,IonMenuButton,IonLabel,IonHeader,IonIcon,IonTitle,IonToolbar,IonContent,IonPage,IonRow,IonCol
        },

        data(){
            return {
                female,
                male,
                doctorInfo:{
                    FistName:  "Menna",
                    LastName: "Hamdy",
                    ssn:"242423435t4",
                    Gender: "Female",
                    Birthdate:"5/12/1998",
                    PhoneNumber:"01224235423",
                    Address:"hth,ggrgr,geg",
                    Education:'',
                    Specialty:'',
                    Patients:['patient1','patient2','patient3']
                },
            };
        }
    }
</script>
<style scoped>

</style>
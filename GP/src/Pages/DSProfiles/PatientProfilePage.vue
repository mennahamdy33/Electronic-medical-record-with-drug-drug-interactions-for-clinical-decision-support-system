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
                    Patient Profile

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

                                            <h2> Name: {{patientInfo.FistName}} {{patientInfo.LastName}}</h2>

                                    </ion-row>
                                    <ion-row>
                                        <ion-col size="12" size-sm>

                                            <ion-label>
                                                Gender: {{patientInfo.Gender}} </ion-label>
                                            <ion-icon v-if="patientInfo.Gender === 'Female'"  :icon="female" ></ion-icon>
                                        <ion-icon v-if="patientInfo.Gender === 'Male'"  :icon="male" ></ion-icon>
                                        </ion-col>

                                        <ion-col size="12" size-sm>
                                            <ion-label>SSN: {{patientInfo.ssn}}</ion-label>

                                        </ion-col>
                                    </ion-row>
                                    <ion-row>
                                        <ion-col size="12" size-sm>
                                            <ion-label>Phone Number: {{patientInfo.PhoneNumber}}</ion-label>

                                        </ion-col>

                                        <ion-col size="12" size-sm>
                                            <ion-label>Address: {{patientInfo.Address}}</ion-label>

                                        </ion-col>

                                    </ion-row>
                                    <ion-row>
                                        <ion-col size="12" size-sm>
                                            <ion-label>medications:</ion-label>
                                            <ion-list style="background-color:var(--ion-color-primary); ">
                                    <ion-item  lines="none" v-for="med in patientInfo.Medications " :key="med"  > {{med}}</ion-item>
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
    import {              IonMenu,IonList,IonLabel,IonItem,IonGrid,IonIcon,IonButtons,IonMenuButton,IonPage,IonHeader,IonContent,IonToolbar,IonTitle,IonRow,IonCol    } from "@ionic/vue";
        export default {
            components:{
                IonMenu,IonList,IonItem,
                IonGrid,IonButtons,IonMenuButton,
                IonLabel,IonHeader,IonIcon,
                IonTitle,IonToolbar,IonContent,
                IonPage,IonRow,IonCol
            },

        data(){
            return {
                female,
                male,
                patientInfo:{
                    FistName:  "Menna",
                    LastName: "Hamdy",
                    ssn:"242423435t4",
                        Gender: "Female",
                    Birthdate:"5/12/1998",
                    PhoneNumber:"01224235423",
                    Address:"hth,ggrgr,geg",
                    Medications:['med1','med2','med3']
                },
            };
        }
    }
</script>
<style scoped>

</style>
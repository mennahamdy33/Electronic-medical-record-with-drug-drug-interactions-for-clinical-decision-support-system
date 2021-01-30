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
                    <ion-item>Edit My Profile</ion-item>
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

<ion-col offset-lg="2" size-lg="8">
                        <div class="login-box">
                                <ion-grid class="FormGrid">
                                    <ion-row>
                                        <ion-col size="12" size-sm>
                                            {{ JSON.stringify(patientInfo.FistName,null,2)}}
                                        </ion-col>
                                        <ion-col size="12" size-sm>
                                            {{ JSON.stringify(patientInfo.FistName,null,2)}}

                                        </ion-col>
                                    </ion-row>
                                </ion-grid>
                        </div>


</ion-col>
        </ion-content>
    </ion-page>

</template>
<script>
    import {              IonMenu,IonList,IonItem,IonGrid,IonButtons,IonMenuButton,IonPage,IonHeader,IonContent,IonToolbar,IonTitle,IonRow,IonCol    } from "@ionic/vue";
        export default {
            components:{
              IonMenu,IonList,IonItem,
                IonGrid,IonButtons,IonMenuButton,IonHeader,IonTitle,IonToolbar,IonContent,IonPage,IonRow,IonCol
            },

        data(){
            return {
                patientInfo:{
                  FistName:  "Menna",
                    LastName: "Hamdy",
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

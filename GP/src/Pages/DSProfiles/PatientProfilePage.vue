<template>
    <base-template>
            <ion-grid  >
                <ion-row>
<ion-col offset-lg="2" size-lg="8">
                        <div class="login-box" style="border-style: solid;
  border-color: #03e9f4;" >
    <h2>Patient Profile</h2>
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
    </base-template>
</template>
<script>
    import { female,male} from "ionicons/icons";
    import {IonList,IonLabel,IonItem,IonGrid,IonIcon,IonRow,IonCol} from "@ionic/vue";
    import BaseTemplate from "../../components/BaseTemplate";
        export default {
            components:{
                BaseTemplate,
                IonList,IonItem,
                IonGrid,
                IonLabel,IonIcon,
                IonRow,IonCol
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
<style >

</style>
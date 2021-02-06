<template>
<base-template>
            <ion-grid  >
                <ion-row>
                    <ion-col offset-lg="2" size-lg="8">
                        <div class="login-box" style="border-style: solid;
  border-color: #03e9f4;" >
                <h2>My Profile</h2>
                            <ion-grid class="FormGrid">
                                <ion-row>

                                    <h3> Name: {{doctorInfo.FistName}} {{doctorInfo.LastName}}</h3>

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
</base-template>
</template>
<script>
    import { female,male} from "ionicons/icons";
    import {IonList,IonLabel,IonItem,IonGrid,IonIcon,IonRow,IonCol    } from "@ionic/vue";
    import BaseTemplate from "../../components/BaseTemplate";
    export default {
        components:{
            BaseTemplate,
            IonList,IonItem,
            IonGrid,IonLabel,IonIcon,IonRow,IonCol
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
ion-label,h3,ion-icon{
    color: #ffffff;
}
</style>
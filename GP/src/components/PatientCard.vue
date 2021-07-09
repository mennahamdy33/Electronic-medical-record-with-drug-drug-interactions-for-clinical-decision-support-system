<template>
    <ion-col size-md="6" size="12" >
        <ion-card @click="openModal" >
            <ion-card-header>
                <ion-card-subtitle>SSN: {{ssn}}</ion-card-subtitle>
                <ion-card-title>NAME: {{ FirstName }} {{LastName}}</ion-card-title>
            </ion-card-header>
            <ion-card-content > Phone Number : {{ PhoneNumber }} </ion-card-content>
        </ion-card>
    </ion-col>
</template>
<script>
    import PatientModal from "./patientModal.vue";
    import {
        IonCard,
        IonCardHeader,
        IonCardContent,
        IonCardSubtitle,
        IonCardTitle,
        IonCol,
        modalController
    } from "@ionic/vue";


    export default {
        components: {
            IonCard,
            IonCardHeader,
            IonCardContent,
            IonCardSubtitle,
            IonCardTitle,
            IonCol,
        },
        props: ["ssn", "FirstName","Address", "LastName","PhoneNumber","birthdate","Medications","Gender","major_illnesses",
            "previous_surgey",
            "previous_illnessess",
            "diabetes",
            "family_diseases",
            "allergies",
            "tobacco",
            "visits"],
        methods: {

            async openModal() {
                const patientModal = await modalController.create({
                    component: PatientModal,
                    cssClass: "my-custom-class",
                    // mode: 'ios',
                    showBackdrop: true,
                    backdropDismiss: true,
                    componentProps: {
                        FirstName: this.FirstName,
                        LastName: this.LastName,
                        birthdate:this.birthdate,
                        Medications:this.Medications,
                        Gender: this.Gender,
                        Address:this.Address,
                        SSN: this.ssn,
                        PhoneNumber:this.PhoneNumber,
                        major_illnesses: this.major_illnesses,
                        previous_surgey: this.previous_surgey,
                        previous_illnessess: this.previous_illnessess,
                        diabetes: this.diabetes,
                        family_diseases: this.family_diseases,
                        allergies: this.allergies,
                        tobacco: this.tobacco,
                        visits:this.visits,
                        modal: patientModal,

                    },
                });
                return patientModal.present();
            },
        },
        provide: [],


    };
</script>
<style>

</style>
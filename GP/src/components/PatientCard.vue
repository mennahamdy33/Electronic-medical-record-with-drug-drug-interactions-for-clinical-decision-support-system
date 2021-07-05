<template>
    <ion-col size-md="6" size="12">
        <ion-card @click="openModal">
            <ion-card-header>
                <ion-card-subtitle>SSN: {{ssn}}</ion-card-subtitle>
                <ion-card-title>NAME: {{ FirstName }} {{LastName}}</ion-card-title>
            </ion-card-header>
            <ion-card-content> Phone Number : {{ PhoneNumber }} </ion-card-content>
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
        props: ["ssn", "FirstName","Address", "LastName","PhoneNumber","birthdate","Medications","Gender"],
        methods: {
            async openModal() {
                const modal = await modalController.create({
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
                        PhoneNumber:"01224235423",
                        modal: modal
                    },
                });
                return modal.present();
            },
        },
        provide: [],
    };
</script>
<style scoped>
    .my-custom-class .modal-wrapper {
        background: rgb(141, 134, 134);
    }
</style>
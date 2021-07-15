<template>
    <ion-col size-md="6" size="12" >
        <ion-card @click="openModal" >
            <ion-card-header>
                <ion-card-subtitle>SSN: {{PI.ssn}}</ion-card-subtitle>
                <ion-card-title>NAME: {{ PI.first_name }} {{PI.last_name}}</ion-card-title>
            </ion-card-header>
            <ion-card-content > Phone Number : {{ PI.phone_number }} </ion-card-content>
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
        props: ["PI"],
        methods: {

            async openModal() {
                const patientModal = await modalController.create({
                    component: PatientModal,
                    cssClass: "my-custom-class",
                    // mode: 'ios',
                    showBackdrop: true,
                    backdropDismiss: true,
                    componentProps: {
                        PI:this.PI,
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
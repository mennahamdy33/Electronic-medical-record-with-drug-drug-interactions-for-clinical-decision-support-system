<template>
  <ion-col size-md="6" size="12">
    <ion-card @click="openModal">
      <ion-card-header>
        <ion-card-subtitle>{{ title }}</ion-card-subtitle>
        <ion-card-title>{{ doctorName }}</ion-card-title>
      </ion-card-header>
      <ion-card-content></ion-card-content>
    </ion-card>
  </ion-col>
</template>
<script>
import {
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  modalController 
} from "@ionic/vue";
import Modal from "./modal.vue";

export default {
  components: {
    IonCard,
    IonCardHeader,
    IonCardContent,
    IonCardSubtitle,
    IonCardTitle,
    IonCol,
  },
  props: ["title", "doctorName","ssn"],
  methods: {
    async openModal() {
      const modal = await modalController.create({
        component: Modal,
        cssClass: "my-custom-class",
        // mode: 'ios',
        showBackdrop: true,
        backdropDismiss: true,
        componentProps: {
          name: this.doctorName,
          SSN: this.ssn,
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
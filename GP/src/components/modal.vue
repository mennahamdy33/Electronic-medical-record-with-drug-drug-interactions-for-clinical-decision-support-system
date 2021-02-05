<template>
  <ion-content class="ion-padding">
    <ion-grid>
      <form @submit.prevent="submitBooking">
        <ion-row class="ion-justify-content-center">
          <ion-col size-md="8" offset="4">
            <ion-chip color="primary">
              <h2><ion-label>Doctor </ion-label>{{ name }}</h2>
            </ion-chip>
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col class="ion-padding">
            <ion-label>Patient's SSN </ion-label>{{ ssn }}
          </ion-col>
        </ion-row>
        <ion-row class="ion-padding">
          <ion-col size="2">
            <ion-label>Pick Date & Time</ion-label>
          </ion-col>
          <ion-col size="5">
            <ion-datetime
              display-format="MMM DD, YYYY HH:mm	"
              placeholder="Select Time"
              min="2021-02-05"
            ></ion-datetime>
          </ion-col>
        </ion-row>
        <ion-button class="primary">Confirm</ion-button>
      </form>
    </ion-grid>
  </ion-content>
</template>

<script>
import {
  IonContent,
  IonLabel,
  // IonRow,
  //  IonCol
} from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "Modal",
  props: ["name", "ssn"],
  components: {
    IonContent,
    IonLabel,
    // IonRow,
    // IonCol,
  },
  computed: {
    currentDate() {
      // const current = new Date();
      // current= current.toLocaleDateString();
      // var currentConvDate= current.toLocaleDateString();
      // currentConvDate =currentConvDate.replaceAll("/","-")
      // console.log( currentConvDate);
      // if (currentConvDate) {
      //   return {currentConvDate};
      // }
      // else{
      return "2021-02-05";
      // }
    },
  },
  methods: {
    submitBooking() {
      console.log("submitted");
    },
  },
});
</script>
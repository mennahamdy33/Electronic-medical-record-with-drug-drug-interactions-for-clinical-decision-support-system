<template>
  <ion-content class="ion-padding">
    <ion-grid>
      <form
        @submit.prevent="submitBooking"
        action="http://localhost:5000/submitBooking"
        method="post"
        novalidate="true"
      >
        <ion-row>
          <ion-col size-md="8" offset-md="4">
            <ion-chip color="primary">
              <h2><ion-label>Doctor </ion-label>{{ name }}</h2>
            </ion-chip>
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col class="ion-padding">
            <ion-label>Patient's SSN </ion-label>{{ SSN }}
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col class="ion-padding" size="6">
            <ion-label>Pick Date & Time</ion-label>
          </ion-col>
          <ion-col size="4">
            <ion-datetime
              display-format="MMM DD, YYYY HH:mm	"
              placeholder="Select Time"
              min="2021-02-05"
              v-model="time"
            ></ion-datetime>
          </ion-col>
        </ion-row>
        <ion-button type="submit">Confirm</ion-button>
        <ion-button @click="cancelBooking">Cancel</ion-button>
      </form>
    </ion-grid>
  </ion-content>
</template>

<script>
import {
  IonContent,
  IonLabel,
  modalController,
  IonGrid,
  IonRow,
  IonCol,
  IonButton,
  IonChip,
  IonDatetime,
} from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "Modal",
  props: ["name", "SSN"],
  components: {
    IonContent,
    IonLabel,
    IonGrid,
    IonRow,
    IonCol,
    IonButton,
    IonChip,
    IonDatetime,
  },
  data() {
    return {
      doctorName: this.name,
      patientSSN: this.SSN,
      time: "",
    };
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
      const url = process.env.VUE_APP_ROOT_API + "submitBooking";
      let data = {
        name: this.doctorName,
        patientSSN: this.patientSSN,
        day: this.time.split("T")[0],
        time: this.time.split("T")[1].split(".")[0],
      };
      console.log(localStorage.getItem(""))
      var request = new Request(url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
          "authorization": "Bearer " +localStorage.getItem('tokensecretary')
        },
      });
      // console.log(this.time.split('T')[0] , this.time.split('T')[1].split('.')[0] )
      console.log(data);
      // Handle response we get from the API
      fetch(request).then(() => {
        console.log("success");
      });
    },
    cancelBooking() {
      modalController.dismiss();
    },
  },
});
</script>
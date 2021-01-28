<template>
  <ion-header>
    <ion-toolbar color="light">
      <ion-buttons slot="start">
        <ion-menu-button></ion-menu-button>
      </ion-buttons>
      <ion-title>Prescription</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content>
    <ion-grid>
      <ion-row>
        <ion-col></ion-col>
        <ion-col>
          <ion-card>
            <ion-card-header>
              <ion-avatar>
                <img v-bind:src="patientInfo.patientPhoto" />
              </ion-avatar>
              <ion-card-subtitle>{{
                patientInfo.patientGender
              }}</ion-card-subtitle>
              <ion-card-title> {{ patientInfo.patientName }} </ion-card-title>
            </ion-card-header>
            <ion-card-content>
              <p>Age : {{ patientInfo.patientAge }}</p>
              <p>Mobile : {{ patientInfo.patientPhone }}</p>
            </ion-card-content>
          </ion-card>

          <ion-card>
            <ion-card-header>
              <ion-card-subtitle>Diagnosis</ion-card-subtitle>
            </ion-card-header>
            <ion-card-content>
              <ion-textarea
                placeholder="Enter more information here..."
              ></ion-textarea>
            </ion-card-content>
          </ion-card>

          <ion-card>
            <ion-card-header>
              <ion-card-subtitle>Drugs List</ion-card-subtitle>
            </ion-card-header>
            <ion-card-content>
              <ion-searchbar show-cancel-button="never"></ion-searchbar>

              <ion-list>
                <ion-item
                  style="d-flex justify-items-between"
                  :key="item.id"
                  v-for="item in drugsInfo"
                >
                  <ion-label> {{ item.name }}</ion-label>
                  <ion-button color="danger">Delete</ion-button>
                </ion-item>
              </ion-list>
            </ion-card-content>
          </ion-card>
        </ion-col>
        <ion-col></ion-col>
      </ion-row>
    </ion-grid>
    <ion-footer>
      <ion-item>
        <ion-label position="fixed">Doctor Signature</ion-label>
        <ion-input></ion-input>
      </ion-item>
    </ion-footer>
  </ion-content>
</template>
<script>
import { IonInput } from "@ionic/vue";
import { defineComponent } from "vue";
import axios from "axios";

export default defineComponent({
  name: "nancy",
  components: {
    IonInput,
  },
  data() {
    return { patientInfo: { patientPhoto: "" }, drugsInfo: [] };
  },
  async mounted() {
    //try to get users data
    await this.get_user();
    //try to get drugs data
    await this.get_drugs();
  },
  setup() {},
  methods: {
    async get_user() {
      axios.get("http://localhost:3000/users/1").then((response) => {
        this.patientInfo = response.data;
        //console
        console.log(response.data);
      });
    },
    async get_drugs() {
      axios.get("http://localhost:3000/drugs").then((response) => {
        this.drugsInfo = response.data;
        //console
        console.log(response.data);
      });
    },
    decrement() {
      console.log("decrement");
    },
    increment() {
      console.log("increment");
    },
  },
});
</script>
<style scoped></style>

<template>
  <base-template>

    <ion-grid>
      <ion-row class="ion-justify-content-center">
        <ion-col class="ion-padding " size-lg="6" size-sm="12" size-md="8">
          <h2>Prescription</h2>
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
          <ion-col>

            <FormButton buttonText="Check Interaction" type="button" />
          </ion-col>
          <ion-card>
            <ion-card-header>
              <ion-card-subtitle>Doctor Signature</ion-card-subtitle>
            </ion-card-header>
            <ion-card-content>
              <ion-textarea placeholder="Please sign here..."></ion-textarea>
            </ion-card-content>
          </ion-card>
         <ion-col>

              <FormButton buttonText="Exit" type="button" />
         </ion-col>
        </ion-col>
      </ion-row>
    </ion-grid>

  </base-template>
</template>
<script>
import { IonCard } from "@ionic/vue";
import { defineComponent } from "vue";
import axios from "axios";
import FormButton from "../components/FormButton"
export default defineComponent({
  name: "nancy",
  components: {
    IonCard,
      FormButton
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
  },
});
</script>
<style scoped>
  h2{
    margin: 0 0 30px;
    padding: 0;
    color: #ffffff;

    text-align: center;
    font-weight: bold;
  }
</style>

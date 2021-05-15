<template>
  <base-template>
    <ion-grid>
      <ion-row class="ion-justify-content-center">
        <ion-col class="ion-padding" size-lg="6" size-sm="12" size-md="8">
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
              <ion-searchbar
                debounce="500"
                show-cancel-button="never"
                @ionChange="
                  ($event) => {
                    drugname = $event.target.value;
                    get_drugs('reset');
                  }
                "
              ></ion-searchbar>
              <ion-list>
                <ion-button v-if="drugsInfo.length >= 10" @click="next()"
                  ><ion-text>next</ion-text></ion-button
                >
                <ion-button v-if="drugpage >= 2" @click="prev()" color="dark"
                  ><ion-text>prev</ion-text></ion-button
                >
                <ion-item
                  style="d-flex justify-items-between"
                  :key="item.id"
                  v-for="item in drugsInfo"
                >
                  <ion-card>
                    <ion-label> {{ item.name }}</ion-label>
                    <ion-text> {{ item.labeller }}</ion-text>
                  </ion-card>
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
import { IonCard ,
 IonGrid ,
 IonRow ,
 IonCol,
 IonList,
 IonItem,
 IonCardContent,
 IonTextarea,
 IonLabel,
 IonCardHeader,
 IonSearchbar,
 IonText,
 IonCardSubtitle,
 IonAvatar,
 IonCardTitle,
 IonButton
    } from "@ionic/vue";
import { defineComponent } from "vue";
import axios from "axios";
import FormButton from "../../components/FormButton";
export default defineComponent({
  name: "Prescription",
  components: {
    IonCard,
    FormButton,
    IonGrid,
    IonRow,
    IonCol,
    IonList,
    IonItem,
    IonCardContent,
    IonTextarea,
    IonLabel,
    IonCardHeader,
    IonSearchbar,
    IonText,
    IonCardSubtitle,
    IonAvatar,
    IonCardTitle,
    IonButton
  },
  data() {
    return {
      patientInfo: { patientPhoto: "" },
      drugsInfo: [],
      drugname: "",
      drugpage: 1,
    };
  },
  async mounted() {
    await this.get_drugs();
  },
  setup() {},
  methods: {
    async get_drugs(mode = "") {
      axios
        .get(
          `http://localhost:3000/drugs?name=${this.drugname}&page=${this.drugpage}`
        )
        .then((response) => {
          this.drugsInfo = response.data.data;
          mode == "reset" ? (this.drugpage = 1) : null;
        });
    },
    async prev() {
      this.drugpage--;
      this.get_drugs();
    },
    async next() {
      this.drugpage++;
      this.get_drugs();
    },
  },
});
</script>
<style scoped>
h2 {
  margin: 0 0 30px;
  padding: 0;
  color: #ffffff;

  text-align: center;
  font-weight: bold;
}
</style>

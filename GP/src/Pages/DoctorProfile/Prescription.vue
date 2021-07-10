<template>
  <ion-grid>
    <ion-row class="ion-justify-content-center">
      <ion-col size-lg="8">
        <div class="login-box">
          <h2 class="text">Prescription</h2>
        </div>
      </ion-col>
    </ion-row>
    <ion-grid>
      <ion-card v-if="patients.length >= 1 && !patientInfo">
        <ion-card-header>
          <ion-card-subtitle>Today's visits</ion-card-subtitle>
        </ion-card-header>
        <ion-card-content>
          <ion-list>
            <ion-item
              style="d-flex justify-items-between"
              :key="item.id"
              v-for="item in patients"
            >
              <ion-card @click="selectPatient(item)">
                <ion-label>
                  {{ item.first_name }} {{ item.last_name }}</ion-label
                >
                <ion-text> SSN {{ item.ssn }}</ion-text>
              </ion-card>
            </ion-item>
          </ion-list>
        </ion-card-content>
      </ion-card>
    </ion-grid>

    <ion-grid v-if="patientInfo">
      <ion-row class="ion-justify-content-center">
        <ion-col class="ion-padding" size-lg="6" size-sm="12" size-md="8">
          <ion-card>
            <ion-card-header>
              <ion-row class="ion-align-items-center">
                <ion-card-title
                  style="
                  text-transform: capitalize;
                  line-height: 10px;
                "
                >
                  {{ patientInfo.first_name }} {{ patientInfo.last_name }}
                  <p style="font-size: 12px">SSN: {{ patientInfo.ssn }}</p>
                </ion-card-title>
              </ion-row>
            </ion-card-header>

            <ion-card-content>
              <p>Gender: {{ patientInfo.gender }}</p>
              <p>Birth Date: {{ patientInfo.birth_date }}</p>
              <p>Mobile: {{ patientInfo.phone_number }}</p>
            </ion-card-content>
          </ion-card>
          <ion-grid>
            <ion-row class="ion-justify-content-center">
              <ion-col size-lg="5" size-md="7.5" size-xs="10.8">
                <form-button
                  @click="openPatientModal"
                  buttonText="Patient Medications"
                  type="button"
                />
              </ion-col>
            </ion-row>
          </ion-grid>
          <ion-modal>
            <Modal title="Patient Medications"></Modal>
          </ion-modal>

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
                  style="d-flex align-items-center"
                  :key="item.id"
                  v-for="item in drugsInfo"
                >
                  <ion-row style="width: 100%">
                    <ion-col>
                      <ion-label> {{ item.name }} </ion-label>
                      <ion-card-subtitle class="ion-align-items-center">
                        {{ item.labeller }} ({{ item.strength }})
                        <ion-icon :icon="earthOutline"></ion-icon>
                        {{ item.country }}</ion-card-subtitle
                      >
                      <ion-badge style="margin-top: 10px" color="dark">{{
                        item.parent_key
                      }}</ion-badge>
                    </ion-col>
                    <ion-button @click="drugs.push(item)" color="dark"
                      ><ion-text>Add </ion-text></ion-button
                    >
                  </ion-row>
                </ion-item>
              </ion-list>
            </ion-card-content>
          </ion-card>
          <!-- drugs list -->
          <div v-if="drugs.length >= 1">
            <ion-card>
              <ion-card-header>
                <ion-card-subtitle>Prescriptive drugs</ion-card-subtitle>
              </ion-card-header>
              <ion-card-content>
                <ion-list>
                  <ion-item
                    style="d-flex justify-items-between"
                    :key="item.id"
                    v-for="item in drugs"
                  >
                    <ion-row style="width: 100%">
                      <ion-col>
                        <ion-label> {{ item.name }} </ion-label>
                        <ion-card-subtitle class="ion-align-items-center">
                          {{ item.labeller }} ({{ item.strength }})
                          <ion-icon :icon="earthOutline"></ion-icon>
                          {{ item.country }}</ion-card-subtitle
                        >
                        <ion-badge style="margin-top: 10px" color="dark">{{
                          item.parent_key
                        }}</ion-badge>
                      </ion-col>
                    </ion-row>
                  </ion-item>
                </ion-list>
              </ion-card-content>
            </ion-card>
          </div>
          <ion-col>
            <ion-grid>
              <ion-row class="ion-justify-content-center">
                <ion-col size-lg="4.5" size-md="7" size-xs="10">
                  <form-button
                    buttonText="Check Interaction"
                    @click="post_check"
                    type="button"
                  />
                </ion-col>
              </ion-row>
            </ion-grid>
            <ion-card v-if="interactions.length >= 1">
              <ion-card-header>
                <ion-card-subtitle>Interactions</ion-card-subtitle>
              </ion-card-header>
              <ion-card-content>
                <ion-list>
                  <ion-item
                    style="d-flex justify-items-between"
                    :key="item.id"
                    v-for="(item, index) in interactions"
                  >
                    <ion-card>
                      <ion-label
                        >Drug : {{ interactions_drugs[index].name }} conflict
                        with
                        {{ interactions_medications[index].name }}</ion-label
                      >
                      <ion-label> {{ item.name }}</ion-label>
                      <ion-text> {{ item.description }}</ion-text>
                      <ion-text> {{ item.parent_key }}</ion-text>
                      <ion-text> {{ item.drugbank_id }}</ion-text>
                    </ion-card>
                  </ion-item>
                </ion-list>
              </ion-card-content>
            </ion-card>
          </ion-col>
          <ion-card>
            <ion-card-header>
              <ion-card-subtitle>Doctor Signature</ion-card-subtitle>
            </ion-card-header>
            <ion-card-content>
              <ion-textarea placeholder="Please sign here..."></ion-textarea>
            </ion-card-content>
          </ion-card>
          <ion-grid>
            <ion-row class="ion-justify-content-center">
              <ion-col size-lg="2" size-md="3" size-xs="4">
                <form-button buttonText="Exit" type="button" />
              </ion-col>
            </ion-row>
          </ion-grid>
        </ion-col>
      </ion-row>
    </ion-grid>
  </ion-grid>
</template>
<script>
import {
  IonCard,
  IonGrid,
  IonRow,
  IonCol,
  IonIcon,
  IonList,
  IonBadge,
  IonItem,
  IonCardContent,
  IonTextarea,
  IonLabel,
  IonCardHeader,
  IonSearchbar,
  IonText,
  IonCardSubtitle,
  IonCardTitle,
  IonButton,
  IonModal,
  modalController,
} from "@ionic/vue";
import { defineComponent } from "vue";
import axios from "axios";
import FormButton from "../../components/FormButton";
import Modal from "../../components/Medications_Modal";
import { earthOutline } from "ionicons/icons";

export default defineComponent({
  name: "Prescription",
  components: {
    IonCard,
    IonGrid,
    IonRow,
    IonCol,
    IonIcon,
    IonBadge,
    IonList,
    IonItem,
    IonCardContent,
    IonTextarea,
    IonLabel,
    IonCardHeader,
    IonSearchbar,
    IonText,
    IonCardSubtitle,
    IonCardTitle,
    IonButton,
    IonModal,
    FormButton,
    Modal,
  },
  data() {
    return {
      earthOutline,
      patientInfo: null,
      drugsInfo: [],
      drugname: "",
      drugpage: 1,
      medications: [],
      drugs: [],
      interactions: [],
      patients: [],
      interactions_medications: [],
      interactions_drugs: [],
    };
  },
  async mounted() {
    await this.get_patients();
    // await this.get_patient();
    await this.get_drugs();
  },
  setup() {},
  methods: {
    async selectPatient(item) {
      this.patientInfo = item;
      await this.get_medications();
    },
    async get_patients() {
      axios.defaults.headers.common["Authorization"] =
        "Bearer " + localStorage.getItem("tokendoctor");

      axios.get(process.env.VUE_APP_ROOT_API + `patients/`).then((response) => {
        this.patients = response.data;
        console.log(this.patients);
      });
    },
    async get_patient() {
      axios
        .get(
          process.env.VUE_APP_ROOT_API +
            `patients/` +
            this.patientInfo.patient_id
        )
        .then((response) => {
          this.patientInfo = response.data;
        });
    },
    async post_check() {
      axios
        .post(
          process.env.VUE_APP_ROOT_API +
            `patients/` +
            this.patientInfo.patient_id +
            `/check_interactions`,
          {
            drugs: this.drugs,
          }
        )
        .then((response) => {
          this.interactions = response.data.results;
          this.interactions_medications = response.data.medications;
          this.interactions_drugs = response.data.drugs;
        });
    },
    async get_medications() {
      console.log(localStorage.getItem("tokendoctor"));
      axios.defaults.headers.common["Authorization"] =
        "Bearer " + localStorage.getItem("tokendoctor");
      axios
        .get(
          process.env.VUE_APP_ROOT_API +
            `patients/` +
            this.patientInfo.patient_id +
            `/medications`
        )
        .then((response) => {
          this.medications = response.data;
        });
    },
    async get_drugs(mode = "") {
      axios
        .get(
          process.env.VUE_APP_ROOT_API +
            `drugs?name=${this.drugname}&page=${this.drugpage}`
        )
        .then((response) => {
          this.drugsInfo = response.data.data;
          mode == "reset" ? (this.drugpage = 1) : null;
        });
    },

    async openPatientModal() {
      const modal = await modalController.create({
        component: Modal,
        componentProps: {
          title: "Medications",
          content: this.medications,
        },
      });
      return modal.present();
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
/* h2 {
  margin: 0 0 30px;
  padding: 0;
  color: #ffffff;

  text-align: center;
  font-weight: bold;
} */

@media screen and (max-width: 600px) {
  .text {
    margin-top: 10px;
    letter-spacing: 5px;
    font-size: 24px;
  }
}
ion-text {
  color: rebeccapurple;
}
</style>

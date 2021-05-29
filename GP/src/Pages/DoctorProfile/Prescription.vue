<template>
  <ion-grid>
    <ion-row class="ion-justify-content-center">
      <ion-col class="ion-padding" size-lg="6" size-sm="12" size-md="8">
        <h2>Prescription</h2>
        <ion-card>
          <ion-card-header>
            <ion-row class="ion-align-items-center">
              <ion-avatar>
                <img
                  src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y"
                />
              </ion-avatar>
              <ion-card-title
                style="
                  margin-left: 10px;
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
        <FormButton
          @click="openPatientModal"
          buttonText="Patient Medications"
          type="button"
        />
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
          <FormButton
            buttonText="Check Interaction"
            @click="post_check"
            type="button"
          />

          <ion-card v-if="interactions.length >= 1">
            <ion-card-header>
              <ion-card-subtitle>Interactions</ion-card-subtitle>
            </ion-card-header>
            <ion-card-content>
              <ion-list>
                <ion-item
                  style="d-flex justify-items-between"
                  :key="item.id"
                  v-for="item in interactions"
                >
                  <ion-card>
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
        <ion-col>
          <FormButton buttonText="Exit" type="button" />
        </ion-col>
      </ion-col>
    </ion-row>
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
  IonAvatar,
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
    IonAvatar,
    IonCardTitle,
    IonButton,
    IonModal,
    FormButton,
  },
  data() {
    return {
      earthOutline,
      patientInfo: {},
      drugsInfo: [],
      drugname: "",
      drugpage: 1,
      medications: [],
      drugs: [],
      interactions: [],
    };
  },
  async mounted() {
    await this.get_patient();
    await this.get_medications();
    await this.get_drugs();
  },
  setup() {},
  methods: {
    async get_patient() {
      axios.get(`http://localhost:3000/patients/2`).then((response) => {
        this.patientInfo = response.data;
      });
    },
    async post_check() {
      axios
        .post(`http://localhost:3000/patients/2/check_interactions`, {
          drugs: this.drugs,
        })
        .then((response) => {
          this.interactions = response.data.data;
        });
    },
    async get_medications() {
      axios
        .get(`http://localhost:3000/patients/2/medications`)
        .then((response) => {
          this.medications = response.data;
        });
    },
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
h2 {
  margin: 0 0 30px;
  padding: 0;
  color: #ffffff;

  text-align: center;
  font-weight: bold;
}
ion-text {
  color: rebeccapurple;
}
</style>

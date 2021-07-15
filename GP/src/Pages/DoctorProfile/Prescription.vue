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
          <ion-card-title>Today's Visits</ion-card-title>
        </ion-card-header>

        <ion-card-content>
          <ion-list>
            <ion-item
              @click="selectPatient(item)"
              style="d-flex justify-items-between"
              :key="item.id"
              v-for="item in patients"
            >
              <ion-col>
                <ion-label>
                  {{ item.first_name }} {{ item.last_name }}</ion-label
                >
                <ion-text> SSN {{ item.ssn }}</ion-text>
              </ion-col>
              <ion-item>
                <ion-text> {{ item.time }}</ion-text>
              </ion-item>
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
                <ion-avatar v-if="patientInfo.photo">
                  <img :src="patientInfo.photo" />
                </ion-avatar>
                <ion-card-title
                  style="text-transform: capitalize; line-height: 10px; margin-left:10px;"
                >
                  {{ patientInfo.first_name }} {{ patientInfo.last_name }}
                  <p style="font-size: 12px">SSN: {{ patientInfo.ssn }}</p>
                </ion-card-title>
              </ion-row>
            </ion-card-header>

            <ion-card-content>
              <p>Gender: {{ patientInfo.gender }}</p>
              <p>
                Birth Date:
                {{ formatDate(patientInfo.birth_date) }}
              </p>
              <p>Mobile: {{ patientInfo.phone_number }}</p>
              <ion-grid>
                <ion-row class="ion-justify-content-center">
                  <form-button
                    @click="openPatientModal"
                    buttonText="Patient Medications"
                    type="button"
                  />
                </ion-row>
              </ion-grid>
            </ion-card-content>
          </ion-card>

          <ion-modal>
            <Modal title="Patient Medications"></Modal>
          </ion-modal>

          <ion-card>
            <ion-card-header>
              <ion-card-title>Drugs List</ion-card-title>
            </ion-card-header>
            <ion-card-content>
              <ion-searchbar
                debounce="100"
                show-cancel-button="never"
                @ionChange="
                  ($event) => {
                    drugname = $event.target.value;
                    get_drugs('reset');
                  }
                "
              ></ion-searchbar>
              <div class="ion-text-center">
                <ion-spinner name="lines" v-if="drugs_loading"></ion-spinner>
              </div>

              <ion-list>
                <div class="ion-text-center">
                  <ion-button v-if="drugpage >= 2" @click="prev()" color="dark"
                    ><ion-text class="white">prev</ion-text></ion-button
                  >

                  <ion-button v-if="drugsInfo.length >= 5" @click="next()"
                    ><ion-text class="white">next</ion-text></ion-button
                  >
                </div>

                <ion-item
                  style="d-flex align-items-center"
                  :key="item.product_id"
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
                    <ion-item>
                      <ion-datetime
                        :value="moment().toISOString()"
                        display-timezone="utc"
                        :ref="'date' + item.product_id"
                        :max="
                          moment()
                            .add(10, 'Y')
                            .toISOString()
                        "
                        :min="moment().toISOString()"
                      ></ion-datetime>
                    </ion-item>
                    <ion-item>
                      <ion-button @click="addDrug(item)" color="dark"
                        ><ion-text class="white">Add </ion-text></ion-button
                      >
                    </ion-item>
                  </ion-row>
                </ion-item>
              </ion-list>
            </ion-card-content>
          </ion-card>
          <!-- drugs list -->
          <div v-if="drugs.length >= 1">
            <ion-card>
              <ion-card-header>
                <ion-card-title>Prescribed drugs</ion-card-title>
              </ion-card-header>
              <ion-card-content>
                <ion-list>
                  <ion-item
                    style="d-flex justify-items-between"
                    :key="item.id"
                    v-for="item in drugs"
                  >
                    <ion-grid>
                      <ion-row style="width: 100%">
                        <ion-datetime
                          :value="item.to_date"
                          disabled
                          style="margin: 1px -12px"
                        >
                        </ion-datetime>
                      </ion-row>
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

                          <ion-input
                            :ref="'dose' + item.product_id"
                            placeholder="Enter dose here ... "
                          ></ion-input>
                        </ion-col>

                        <ion-button @click="removeDrug(item)" color="dark"
                          ><ion-text>Remove </ion-text></ion-button
                        >
                      </ion-row>
                    </ion-grid>
                  </ion-item>
                </ion-list>
                <ion-row class="ion-justify-content-center"> </ion-row>
                <div class="ion-text-center">
                  <ion-spinner name="lines" v-if="inter_loading"></ion-spinner>
                </div>
                <ion-card v-if="interactions.length >= 1">
                  <ion-card-content>
                    <ion-card-subtitle>Interactions</ion-card-subtitle>
                    <ion-list>
                      <ion-grid
                        style="d-flex justify-items-between"
                        v-for="(results, index) in interactions"
                        :key="index"
                      >
                        <ion-row style="width: 100%">
                          <ion-card-title style="padding: 10px 0px">
                            {{ results.drug.name }}
                          </ion-card-title>
                        </ion-row>

                        <ion-row
                          style="width: 100%"
                          v-for="(item, id) in results.results"
                          :key="id"
                        >
                          <ion-label>
                            conflict with

                            <b>
                              {{ item.name }}
                            </b>
                            <div class="ion-align-items-between">
                              <ion-badge style="" color="danger">{{
                                item.parent_key
                              }}</ion-badge>
                            </div>
                          </ion-label>
                          <ion-row style="width: 100%">
                            <ion-label color="danger">
                              <b>{{ item.interaction_name }}</b></ion-label
                            >
                          </ion-row>

                          <ion-item-divider>
                            <ion-text color="danger">
                              {{ " " + item.description }}</ion-text
                            >
                          </ion-item-divider>
                        </ion-row>
                      </ion-grid>
                    </ion-list>
                  </ion-card-content>
                </ion-card>
                <ion-text
                  color="success"
                  v-if="interactions.length == 0 && inter_once == true"
                  >There are no interactions</ion-text
                >
              </ion-card-content>
            </ion-card>
          </div>
          <ion-col>
            <ion-card>
              <ion-card-header>
                <ion-card-title>Diagnosis</ion-card-title>
              </ion-card-header>
              <ion-card-content>
                <ion-textarea
                  v-model="diagnosis"
                  placeholder="Enter more information here..."
                ></ion-textarea>
              </ion-card-content>
            </ion-card>
          </ion-col>
          <ion-grid>
            <ion-row class="ion-justify-content-center">
              <ion-col size-lg="2" size-md="3" size-xs="4">
                <form-button
                  :disabled="!(drugs.length >= 1)"
                  v-if="interactions.length >= 1"
                  @click="
                    submitAlert(
                      'There are some Drug-Drug Interactions, are you sure that you want to submit?'
                    )
                  "
                  buttonText="Submit"
                  type="button"
                />
              </ion-col>
            </ion-row>
            <ion-row class="ion-justify-content-center">
              <ion-col size-lg="2" size-md="3" size-xs="4">
                <form-button
                  :disabled="!(drugs.length >= 1)"
                  v-if="interactions.length < 1"
                  @click="post_diagnosis"
                  buttonText="Submit"
                  type="button"
                />
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
  IonCardTitle,
  IonButton,
  IonModal,
  modalController,
  IonSpinner,
  alertController,
} from "@ionic/vue";
import { defineComponent } from "vue";
import axios from "axios";
import FormButton from "../../components/FormButton";
import Modal from "../../components/Medications_Modal";
import { earthOutline } from "ionicons/icons";
import moment from "moment";
import { useRouter } from "vue-router";

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
    IonCardTitle,
    IonButton,
    IonModal,
    FormButton,
    Modal,
    IonSpinner,
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
      diagnosis: "",
      inter_loading: false,
      drugs_loading: false,
      inter_once: false,
      datetime: null,
    };
  },
  async mounted() {
    await this.get_patients();
    // await this.get_patient();
    await this.get_drugs();
  },
  setup() {
    const router = useRouter();
    return { router };
  },
  methods: {
    async submitAlert(msg) {
      const alert = await alertController.create({
        cssClass: "my-custom-class",
        header: "Alert",
        // subHeader: 'Subtitle',
        message: msg,
        buttons: [
          {
            text: "Cancel",
            role: "cancel",
            cssClass: "dark",

            handler: () => {
              console.log("Confirm Cancel");
            },
          },
          {
            text: "Submit",
            cssClass: "success",

            handler: () => {
              this.post_diagnosis();
            },
          },
        ],
      });
      return alert.present();
    },
    formatDate(date) {
      var d = new Date(date),
        month = "" + (d.getMonth() + 1),
        day = "" + d.getDate(),
        year = d.getFullYear();

      if (month.length < 2) month = "0" + month;
      if (day.length < 2) day = "0" + day;

      return [year, month, day].join("-");
    },
    moment: function() {
      return moment();
    },
    async selectPatient(item) {
      this.patientInfo = item;
      await this.get_medications();
    },
    async removeDrug(value) {
      this.inter_once = false;
      this.drugs = this.drugs.filter((item) => {
        return item.product_id != value.product_id;
      });
      this.interactions = this.interactions.filter((item) => {
        return item.drug.product_id != value.product_id;
      });
    },
    async addDrug(item) {
      let ref = "date" + item.product_id;
      this.inter_once = false;
      console.log(this.$refs[ref]);
      this.post_check({ ...item, to_date: this.$refs[ref].value });
      this.drugs.push({ ...item, to_date: this.$refs[ref].value });
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
    async post_check(value) {
      this.inter_loading = true;
      await axios
        .post(
          process.env.VUE_APP_ROOT_API +
            `patients/` +
            this.patientInfo.patient_id +
            `/check_interactions`,
          {
            drug: value,
          }
        )
        .then((response) => {
          response.data.results?.length >= 1
            ? this.interactions.push({
                drug: response.data.drug,
                results: response.data.results,
              })
            : null;
        });
      this.inter_once = true;

      this.inter_loading = false;
    },
    async post_diagnosis() {
      this.drugs = await this.drugs.map((value) => {
        let ref = "dose" + value.product_id;
        return { ...value, dose: this.$refs[ref].value };
      });

      axios
        .put(
          process.env.VUE_APP_ROOT_API +
            `visits/` +
            this.patientInfo.visit_id +
            `/prescription`,
          {
            drugs: this.drugs,
            diagnosis: this.diagnosis,
          }
        )
        .then((results) => {
          this.$router.push({
            path: "PrescriptionPreview/" + results.data,
            params: {
              patinetInfo: this.patientInfo,
              drugs: this.drugs,
              diagnosis: this.diagnosis,
            },
          });
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
      this.drugs_loading = true;
      await axios
        .get(
          process.env.VUE_APP_ROOT_API +
            `drugs?name=${this.drugname}&page=${this.drugpage}`
        )
        .then((response) => {
          this.drugsInfo = response.data.data;
          mode == "reset" ? (this.drugpage = 1) : null;
        });
      this.drugs_loading = false;
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

.white {
  color: white;
}
</style>

<template>
  <ion-grid>
    <ion-row class="ion-justify-content-center">
      <ion-col size-lg="8">
        <div class="login-box">
          <h2 class="text">Prescription Preview</h2>
        </div>
      </ion-col>
    </ion-row>
    <ion-grid>
      <ion-card v-if="patientInfo" class="MainCard">
        <img
          class="personal_photo"
          style="margin:10px"
          src="../../../public/Rx_symbol.png"
          alt="logo"
        />
        <ion-card>
          <ion-card-header>
            <ion-row class="ion-align-items-center">
              <ion-card-title
                style="text-transform: capitalize; line-height: 10px"
              >
                {{ patientInfo.first_name }} {{ patientInfo.last_name }}
                <p style="font-size: 12px">SSN: {{ patientInfo.ssn }}</p>
              </ion-card-title>
            </ion-row>
          </ion-card-header>

          <ion-card-content>
            <p>Gender: {{ patientInfo.gender }}</p>
            <p>Birth Date: {{ formatDate(patientInfo.birth_date) }}</p>
            <p>Mobile: {{ patientInfo.phone_number }}</p>
          </ion-card-content>
        </ion-card>
        <ion-card>
          <ion-card-header>
            <ion-card-title
              style="text-transform: capitalize; line-height: 10px"
              >Diagnosis</ion-card-title
            >
            <ion-card-subtitle
              >Doctor's diagnosis during the visit</ion-card-subtitle
            >
          </ion-card-header>
          <ion-card-content>
            <ion-text>{{ diagnosis }}</ion-text>
          </ion-card-content>
        </ion-card>
        <!-- drugs list -->
        <div v-if="drugs.length >= 1">
          <ion-card>
            <ion-card-header>
              <ion-card-title
                style="text-transform: capitalize; line-height: 10px"
                >Prescriptive drugs</ion-card-title
              >
              <ion-card-subtitle
                >These are prescription during this visit</ion-card-subtitle
              >
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
                        style="margin:1px -12px"
                      >
                      </ion-datetime>
                    </ion-row>
                    <ion-row style="width: 100%">
                      <ion-col>
                        <b> {{ item.name }} </b>
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
                  </ion-grid>
                </ion-item>
              </ion-list>
            </ion-card-content>
          </ion-card>
        </div>
        <ion-grid>
          <ion-row class="ion-justify-content-end">
            <div style="margin-top: 10px">
              <ion-card-title class="signature_text"
                >Doctor Signature</ion-card-title
              >
              <div class="signature"></div>
            </div>
          </ion-row>
        </ion-grid>
      </ion-card>
    </ion-grid>
  </ion-grid>
</template>
<script>
import { defineComponent } from "vue";
import axios from "axios";
import { earthOutline } from "ionicons/icons";

import moment from "moment";
export default defineComponent({
  name: "Prescription",
  components: {},
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
    };
  },
  async mounted() {
    await this.get_prescription(this.$route.params.id);
  },
  setup() {},
  methods: {
    moment: function() {
      return moment();
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

    async selectPatient(item) {
      this.patientInfo = item;
      await this.get_medications();
    },
    async removeDrug(value) {
      this.drugs = this.drugs.filter((item) => {
        console.log(item.product_id);
        return item.product_id != value.product_id;
      });
    },
    async addDrug(item, to_date) {
      this.drugs.push({ ...item, to_date: to_date });
      console.log(this.drugs);
    },

    async get_prescription(id) {
      axios.defaults.headers.common["Authorization"] =
        "Bearer " + localStorage.getItem("tokendoctor");

      axios
        .get(process.env.VUE_APP_ROOT_API + `prescriptions/` + id)
        .then((response) => {
          this.patientInfo = response.data[0].patient;
          this.drugs = response.data[0].drugs;
          this.diagnosis = response.data[0].diagnosis;
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
.personal_photo {
  height: 100px;
  width: 100px;
  margin-bottom: 30px;
  /* max-height:40px;
    max-width:40px;   */
  /* border-radius: 50%; */
  border: 3px solid rgb(3, 127, 136);
}
.MainCard {
  margin: 0 20vh;
}

.signature {
  padding: 30px;
  margin: 10px 0;
  border-radius: 15px;
  max-width: 300px;
  min-width: 200px;
}
.signature_text {
  font-family: "Great Vibes", sans-serif;
  font-size: 26px;
  text-decoration: underline;
}
</style>

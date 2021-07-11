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
      <ion-card class="MainCard">
        <img
          class="personal_photo"
          src="../../../public/Rx_symbol.png"
          alt="logo"
        />
        <ion-card>
          <ion-card-header>
            <ion-row class="ion-align-items-center">
              <ion-card-title
                style="
                  text-transform: capitalize;
                  line-height: 10px;
                "
              >
                Test Name
                <p style="font-size: 12px">SSN: 1234112</p>
              </ion-card-title>
            </ion-row>
          </ion-card-header>

          <ion-card-content>
            <p>Gender: Male</p>
          </ion-card-content>
        </ion-card>
      </ion-card>
    </ion-grid>
  </ion-grid>
</template>
<script>
import { defineComponent } from "vue";
import axios from "axios";
import moment from "moment";
export default defineComponent({
  name: "Prescription",
  components: {},
  data() {
    return {
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
    await this.get_patients();
    // await this.get_patient();
    await this.get_drugs();
  },
  setup() {},
  methods: {
    moment: function() {
      return moment();
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
    async post_diagnosis() {
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
        .then(() => {
          console.log("success");
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
</style>

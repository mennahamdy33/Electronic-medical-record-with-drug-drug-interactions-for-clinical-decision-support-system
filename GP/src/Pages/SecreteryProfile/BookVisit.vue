<template>
  <ion-grid>
    <ion-row>
      <ion-col offset-lg="2" size-lg="6">
        <div class="login-box">
          <h2>Book A Doctor</h2>
          <div class="user-box">
            <input
              type="number"
              name="patientSSN"
              v-model="patientSSN"
              required=""
            />
            <label>Patient's SSN </label>
          </div>
          <div class="user-box">
            <input v-model="searchQuery" name="doctor" required="" />
            <label>Doctor's Name</label>
          </div>
        </div>
      </ion-col>
    </ion-row>
    <ion-row>
      <doctor-card
        v-for="doctor in resultedDoctors"
        :key="doctor.id"
        :title="doctor.specialty"
        :doctorName="doctor.fullName"
        :workingHours="doctor.time"
        :ssn="patientSSN"
      ></doctor-card>
    </ion-row>
  </ion-grid>
  <!-- </base-template> -->
</template>
<script>
import DoctorCard from "../../components/DoctorCards";
// import FormField from "../components/FormField";
import { IonGrid, IonRow, IonCol } from "@ionic/vue";

export default {
  components: {
    // FormField,
    DoctorCard,
    IonGrid,
    IonRow,
    IonCol,
  },
  computed: {
    resultedDoctors() {
      console.log("computing");
      if (this.searchQuery) {
        return this.doctorsList.filter((item) => {
          return this.searchQuery
            .toLowerCase()
            .split(" ")
            .every((v) => item.fullName.toLowerCase().includes(v));
        });
      } else {
        return this.doctorsList;
      }
    },
  },
  methods: {
    retrieveDoctors() {
      fetch("http://localhost:5000")
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
        })
        .then((data) => {
          console.log(data);
          // retrieve data from nodeJS, DB
          this.doctorsList = data;
        })
        .then(() => {
          //make fullname element in doctors list
          this.doctorsList.forEach((element) => {
            element.fullName = element.first_name + " " + element.last_name;
          });
          console.log(this.doctorsList);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  data() {
    return {
      searchQuery: null,
      patientSSN: null,
      doctorsList: [
        {
          id: "u1",
          fullName: "Schwarz",
          specialty: "Surgeon",
          time: "all day",
        },
      ],
    };
  },
  beforeMount() {
    this.retrieveDoctors();
  },
};
</script>
<style scoped>
.content {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  --background: linear-gradient(#141e30, #243b55);
}
</style>
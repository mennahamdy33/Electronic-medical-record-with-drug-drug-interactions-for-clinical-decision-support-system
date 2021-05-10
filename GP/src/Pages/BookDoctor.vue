<template>
  <base-template>
    <ion-grid>
      <ion-row>
        <ion-col offset-lg="2" size-lg="6">
          <div class="login-box">
            <h2>Book A Doctor</h2>
            <div class="user-box">
              <input type="number" name="ssn" required="" />
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
          :title="doctor.role"
          :doctorName="doctor.fullName"
          :workingHours="doctor.time"
        ></doctor-card>
      </ion-row>
    </ion-grid>
  </base-template>
</template>
<script>
import DoctorCard from "../components/DoctorCards";
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
    testBack() {
      fetch("http://localhost:3000")
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
        })
        .then((data) => {
          console.log(data);
          // retrieve data from nodeJS
          this.doctorsList = data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  data() {
    return {
      searchQuery: null,
      doctorsList: [
        { id: "u1", fullName: "Schwarz", role: "Surgeon", time: "all day" },
      ],
    };
  },
  beforeMount() {
    this.testBack();
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
.FormGrid ion-col {
  --ion-grid-column-padding: 20px;
  /* --ion-grid-padding: 50px; */
}

.login-box h2 {
  margin: 0 0 30px;
  padding: 0;
  color: #ffffff;
  /* color: #05545a; */
  text-align: center;
  font-weight: bold;
}
/* form-field */
.user-box {
  position: relative;
}

.user-box input {
  width: 100%;
  padding: 10px 0;
  font-size: 16px;
  color: #fff;
  margin-bottom: 30px;
  border: none;
  border-bottom: 1px solid #fff;
  outline: none;
  background: transparent;
}
.user-box label {
  position: absolute;
  top: 0;
  left: 0;
  padding: 10px 0;
  font-size: 16px;
  color: #fff;
  pointer-events: none;
  transition: 0.5s;
}

.login-box .user-box input:focus ~ label,
.login-box .user-box input:valid ~ label {
  top: -20px;
  left: 0;
  color: #03e9f4;

  /* color: #05545a; */
  /* color: #d1fdff; */
  font-size: 16px;
  font-weight: bold;
}
</style>
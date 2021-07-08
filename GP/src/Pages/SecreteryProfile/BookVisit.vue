<template>


<ion-grid  >      



  <ion-row class="ion-justify-content-center">

    <ion-col  size-lg="5.5" class="login-box">
        <div >
          <h2>Book A Doctor</h2>
          <form v-on:submit.prevent="">
              <ion-grid class="FormGrid">

                  <ion-row class="ion-justify-content-center" >
                      <ion-col size="12" size-sm size-lg="8" >
                          <!-- <form-field type="text" LableText="Email"/> -->
                          <div class="user-box">
                          <input
                            type="number"
                            name="patientSSN"
                            v-model="patientSSN"
                            required=""
                          />
                          <label class="Down">Patient's SSN </label>
                                          
                          </div>
                      </ion-col>
                  
                  </ion-row>

                  <ion-row class="ion-justify-content-center"> 
                      <ion-col size="12" size-sm size-lg="8">
                          <!-- <form-field type="password" LableText="Password"/> -->
                          <div class="user-box">
                            <input v-model="searchQuery" name="doctor" required="" />
                            <label class="Down">Doctor's Name</label>
                                          
                          </div>
                      </ion-col>
                      
                  </ion-row>
      

                  <ion-row class="ion-justify-content-center">
                  
                      <ion-col size-lg="3" size-xs="6" >
                          <form-button  @click="Login"  type="button" buttonText="Submit"/>
                      </ion-col>
                  </ion-row>
              </ion-grid>
          </form>
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
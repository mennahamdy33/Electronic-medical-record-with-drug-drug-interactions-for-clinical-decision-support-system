<template>
  <ion-grid style="margin-top: 40px; margin-bottom: 40px">
    <ion-row class="ion-justify-content-center">
      <!-- <ion-row class= "ion-justify-content-center"> -->
      <ion-col class="left" size-lg="2.5" size-xs="12">
        <!-- <ion-col class="left"  size-lg="4" offset-lg="2" size-xs="12"> -->

        <ion-grid>
          <ion-row>
            <ion-col>
              <ion-label> {{ dayofweek.daysofweek }} </ion-label>
            </ion-col>
          </ion-row>
          <ion-row>
            <ion-col>
              <ion-label> {{ dayofweek.full }} </ion-label>
            </ion-col>
          </ion-row>
        </ion-grid>
      </ion-col>

      <ion-col class="right" size-lg="6" pull-lg="0.1" size-xs="12">
        <!-- <ion-col class="right" size-lg="6" pull-lg="2" size-xs="12"> -->
        <h2>Today's Visits</h2>
        <div class="login-box">
          <ion-grid class="FormGrid">
            <ion-row v-for="visit in visits" :key="visit.visit_id">
              <ion-col size="12" size-sm>
                <!-- <ion-col size="12" size-sm> -->
                <!-- <ion-label >Work In </ion-label> -->
                <ion-label>
                  Doctor: {{ visit.doctor_firstname }}
                  {{ visit.doctor_lastname }}, Patient: {{ visit.first_name }}
                  {{ visit.last_name }}
                  <br />
                  <br />
                  Time: {{ visit.time }}
                </ion-label>
                <!-- <p v-for="clinic in doctorInfo.clinics " :key="clinic"> {{clinic}}</p> -->
                <!-- <p :v-for="clinic in doctorInfo.clinics "> {{clinic}}</p> -->
              </ion-col>
            </ion-row>
          </ion-grid>
        </div>
      </ion-col>
    </ion-row>
  </ion-grid>
</template>
<script>
import { defineComponent } from "vue";
// import { female,male} from "ionicons/icons";
import {
  // IonList,
  IonLabel,
  // IonItem,
  IonGrid,
  // IonIcon,
  IonRow,
  IonCol,
  // IonAvatar ,
  // IonButton
} from "@ionic/vue";
// import BaseTemplate from "../../components/BaseTemplate";
export default defineComponent({
  name: "todaySchedules",
  components: {
    // BaseTemplate,
    // IonList,
    // IonItem,
    IonGrid,
    IonLabel,
    // IonIcon,
    IonRow,
    IonCol,
    // IonAvatar,
    // IonButton
  },

  data() {
    return {
      // visits:[]
      visits: [],
    };
  },

  computed: {
    dayofweek() {
      let today = new Date();
      let day = String(today.getDate()).padStart(2, "0");
      let month = String(today.getMonth() + 1).padStart(2, "0");
      let year = today.getFullYear();
      let full = year + "-" + month + "-" + day;
      let daysofweek = {
        0: "Sunday",
        1: "Monday",
        2: "Tuesday",
        3: "Wednesday",
        4: "Thrusday",
        5: "friday",
        6: "Saturday",
      };
      // console.log(daysofweek[today.getDay()])
      return { daysofweek: daysofweek[today.getDay()], full: full };
      // return daysofweek[today.getDay()],full ;
    },
  },

  mounted() {
    // const id = this.$store.getters['staffID'].doctor_id

    fetch(process.env.VUE_APP_ROOT_API + `showTodaysVisits`, {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        authorization: "Bearer " + localStorage.getItem("tokensecretary"),
      },
    })
      .then((response) => response.json())
      .then((visits) => {
        this.visits = visits;
      });
  },
});
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css?family=Josefin+Sans&display=swap");
.FormGrid ion-col {
  --ion-grid-column-padding: 20px;
}

.FormGrid ion-label {
  font-family: "Josefin Sans", sans-serif;
  color: #000000;
  letter-spacing: 0.5px;
  font-size: 20px;
  font-weight: 600;
}

.FormGrid ion-row:not(:last-child) {
  border-bottom: 0.4px solid rgb(3, 127, 136);
}
.FormGrid p {
  font-family: "Josefin Sans", sans-serif;
  /* font-weight: 600; */
  font-size: 17px;
  margin-bottom: 10px;
  color: #747575;
}
.FormGrid p:hover {
  font-size: 19px;
}

ion-label,
h3,
ion-icon {
  color: #000000;
}

.left {
  background: linear-gradient(to right, #7bfdff9c, #2ffcff);
  padding: 30px 25px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;

  color: #fff;
}
.right {
  background-color: #ffffff;
  padding: 30px 25px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;

  color: rgb(0, 0, 0);
}

.right h2 {
  margin-bottom: 15px;
  padding-bottom: 5px;
  /* font-family: 'Josefin Sans', sans-serif; */

  border-bottom: 2px solid rgb(3, 127, 136);
  color: #000000;
  text-transform: uppercase;
  letter-spacing: 5px;
}
.left ion-label {
  letter-spacing: 1px;
  color: #fff;
  font-size: 28px;
  font-weight: 700;
  font-family: "Josefin Sans", sans-serif;

  margin-left: -10px;
}
.button {
  --background: #2fcbce;
  color: #fff;
  font-size: 16px;
  font-family: "Josefin Sans", sans-serif;
  margin-top: 10px;
}
</style>
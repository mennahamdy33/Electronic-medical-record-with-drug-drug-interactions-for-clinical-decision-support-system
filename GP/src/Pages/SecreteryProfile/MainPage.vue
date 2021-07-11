<template>
  <ion-page>
    <ion-menu side="start" menu-id="first" content-id="main">
      <!-- <ion-header>
        <ion-toolbar color="secondary">
          <ion-title>Options</ion-title>
        </ion-toolbar>
      </ion-header> -->
      <ion-content>
        <ion-list>
          <!-- <img :src="img" alt="logo" /> -->
          <ion-grid>
            <ion-row class="ion-align-items-center ion-justify-content-center">
              <!-- <ion-col > -->
              <ion-col size-lg="4" size-md="4" size-sm="4" size-xs="4">
                <!-- <img class="personal_photo" src="../../../public/me.jpg" alt="logo"  /> -->
                <ion-avatar>
                  <img
                    v-if="profilePhoto === 'null'"
                    class="personal_photo"
                    src="../../../public/me.jpg"
                    alt="logo"
                  />
                  <img
                    v-else
                    class="personal_photo"
                    :src="profilePhoto"
                    alt="logo"
                  />
                </ion-avatar>
              </ion-col>
            </ion-row>
            <ion-row class="ion-align-items-center ion-justify-content-center">
              <ion-col
                class="ion-text-center"
                size-lg="12"
                size-md="12"
                size-sm="12"
                size-xs="12"
              >
                <h2>{{ first_name }} {{ last_name }}</h2>
              </ion-col>
            </ion-row>
          </ion-grid>

          <ion-item button router-link="/MainPageSecretery/AddPatient"
            >Add Patient</ion-item
          >
          <ion-item button router-link="/MainPageSecretery/BookVisit"
            >Book Visit</ion-item
          >
          <ion-item button router-link="/MainPageSecretery/MyProfileSecretery"
            >My Profile</ion-item
          >
          <ion-item button router-link="/MainPageSecretery/AllPatients"
            >All Patients</ion-item
          >
          <!-- <ion-item href="/Prescription">Prescription</ion-item> -->
        </ion-list>
      </ion-content>
    </ion-menu>


    <ion-content id="main" class="content"    >
      <div style="top: 0;">
      <!-- <div style=" position: -webkit-sticky;position: sticky;  top: 0;"> -->
        <ion-header   >
          <ion-toolbar class="tool"  >

            <!-- <ion-toolbar color="primary"> -->
            <ion-buttons slot="start">
              <ion-menu-button auto-hide="false"></ion-menu-button>
            </ion-buttons>

            <ion-buttons slot="secondary">
              <ion-avatar class="personal_photo_bar">
                <img
                  v-if="profilePhoto === 'null'"
                  src="../../../public/me.jpg"
                  alt="logo"
                />
                <img
                  v-else
                  class="personal_photo"
                  :src="profilePhoto"
                  alt="logo"
                />
              </ion-avatar>

              <ion-button>
                <ion-icon slot="icon-only" :icon="search"></ion-icon>
              </ion-button>
            </ion-buttons>
            <ion-buttons slot="primary">
              <ion-button @click="logout" color="danger">
                <ion-icon slot="icon-only" :icon="logOut"></ion-icon>
              </ion-button>
            </ion-buttons>

            <ion-title>
              <ion-grid>
                <ion-row>
                  <ion-col size-lg="1.7" size-md="3" size-sm="4" size-xs="12">
                    <img :src="img" alt="logo" />
                  </ion-col>
                </ion-row>
              </ion-grid>
            </ion-title>
          </ion-toolbar>
        </ion-header>
      </div>
      <!-- <MySchedules v-if="$route.path ==='/MainPageDoctor'"/> -->
      <router-view> </router-view>
      <!-- <router-view > <MyProfileDoctor/> </router-view> -->
    </ion-content>
  </ion-page>
</template>
<script>
import { defineComponent } from "vue";
import { useRouter } from "vue-router";

// import MySchedules from './Schedules.vue'
import {
  IonPage,
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
  IonMenu,
  IonButton,
  IonButtons,
  // IonThumbnail,
  IonList,
  IonItem,
  IonIcon,
  IonMenuButton,
  IonCol,
  IonGrid,
  IonRow,
  IonAvatar,
} from "@ionic/vue";
import {
  add,
  ellipsisHorizontal,
  ellipsisVertical,
  helpCircle,
  personCircle,
  search,
  star,
  logOut,
  closeCircle,
} from "ionicons/icons";
export default defineComponent({
  name: "MainPageSecretery",
  props: ["title"],
  components: {
    IonPage,
    IonHeader,
    IonContent,
    IonToolbar,
    IonTitle,
    IonMenu,
    IonButton,
    IonButtons,
    IonList,
    IonItem,
    IonIcon,
    IonMenuButton,
    IonCol,
    IonGrid,
    IonRow,
    // MySchedules,
    IonAvatar,
  },
  data() {
    return {
      //icons start
      add,
      ellipsisHorizontal,
      ellipsisVertical,
      helpCircle,
      personCircle,
      search,
      star,
      logOut,
      closeCircle,
      profilePhoto: "",
      first_name: "",
      last_name: "",
      img: require("../../../public/logobig.png"),
      //icons end
    };
  },

  methods: {
    logout() {
      localStorage.removeItem("tokensecretary");
      this.router.push("/");
    },
  },
  mounted() {
    fetch(process.env.VUE_APP_ROOT_API + `secretaryProfile`, {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        authorization: "Bearer " + localStorage.getItem("tokensecretary"),
      },
    })
      .then((response) => response.json())
      .then((sec) => {
        this.profilePhoto = sec.photo;
        this.first_name = sec.first_name;
        this.last_name = sec.last_name;
        // console.log(this.profilePhoto)
      });
  },
  setup() {
    const router = useRouter();
    return { router };
  },
});
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
}
.login-box h2 {
  margin: 0 0 30px;
  padding: 0;
  color: #ffffff;
  /* color: #05545a; */
  text-align: center;
  font-weight: bold;
}
img {
  display: block;
  /* margin-left: auto;
    margin-right: auto; */
  /* padding: 5px; */
  /* width:13em; */
}
.tool {
  --background: #141e30;
  /* --border-color: #80fbff;
    --border-width: 2px; */
}
ion-title {
  padding: 0;
}

.personal_photo {
  /* vertical-align: middle; */
  /* width: 80px; */
  /* height: 80px; */
  border-radius: 50%;
  border: 3px solid #33bbb4;
  /* border: 3px solid #42f3ea; */
}
.personal_photo_bar {
  max-height: 35px;
  max-width: 35px;
  border-radius: 50%;
  border: 1px solid #42f3ea;
}

@media only screen and (max-width: 992px) {
  .personal_photo_bar {
    max-height: 25px;
    max-width: 25px;
    border-radius: 50%;

    border: 1px solid #42f3ea;
  }
}
</style>
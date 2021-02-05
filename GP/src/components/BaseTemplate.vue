<template>
  <ion-page>
    <ion-menu side="start" menu-id="first" content-id="main">
      <ion-header>
        <ion-toolbar color="secondary">
          <ion-title>Options</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content>
        <ion-list>
          <!-- <img :src="img" alt="logo" /> -->

          <ion-item>Add Patient</ion-item>
          <ion-item href="/bookDoctor">Book A Doctor</ion-item>
          <ion-item>Edit Patient's Profile</ion-item>
          <ion-item>Edit My Profile</ion-item>
          <ion-item href="/Prescription">Prescription</ion-item>
        </ion-list>
      </ion-content>
    </ion-menu>

    <ion-header>
      <ion-toolbar color="primary">
        <ion-buttons slot="start">
          <ion-menu-button auto-hide="false"></ion-menu-button>
        </ion-buttons>

        <ion-buttons slot="secondary">
          <ion-button>
            <ion-icon slot="icon-only" :icon="personCircle"></ion-icon>
          </ion-button>
          <ion-button>
            <ion-icon slot="icon-only" :icon="search"></ion-icon>
          </ion-button>
        </ion-buttons>
        <ion-buttons slot="primary">
          <ion-button color="danger">
            <ion-icon slot="icon-only" :icon="logOut"></ion-icon>
          </ion-button>
        </ion-buttons>

        <ion-title>
          <img :src="img" alt="logo" width="70" height="45" />
          <!-- {{ title }} -->
        </ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content id="main" class="content">
      <slot />
    </ion-content>
  </ion-page>
</template>
<script>
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
} from "ionicons/icons";
export default {
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
      img: require("../../public/logo.png"),
      //icons end
    };
  },
};
</script>
<style>
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
  margin-left: auto;
  margin-right: auto;
  padding: 5px;
}
</style>
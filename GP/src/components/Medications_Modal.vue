<template>
  <ion-content>
    <ion-header>
      <ion-toolbar>
        <ion-title>{{ title }}</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-list v-if="content.length >= 1">
      <ion-item
        style="d-flex justify-items-between"
        :key="item.id"
        v-for="item in content"
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
          <ion-row>
            <ion-text style="padding: 0px 5px; font-size: 14px"
              ><b>Dose : </b>{{ item.dose ?? "There is no dose" }}</ion-text
            >
          </ion-row>
          <ion-row v-if="item.doctor_id">
            <ion-text style="padding: 0px 5px; font-size: 14px"
              ><b>Prescribed By: </b
              ><b>Dr. {{ item.first_name }} {{ item.last_name }}</b>
              <span style="font-size:12px">
                ({{ item.specialty }}) , 0{{ item.phone_number }}</span
              ></ion-text
            >
          </ion-row>
        </ion-grid>
      </ion-item>
    </ion-list>
  </ion-content>
</template>

<script>
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonItem,
  IonList,
} from "@ionic/vue";
import { defineComponent } from "vue";
import { earthOutline } from "ionicons/icons";

export default defineComponent({
  name: "Modal",
  props: {
    title: { type: String, default: "Super Modal" },
    content: { default: "Content" },
  },
  components: {
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonItem,
    IonList,
  },
  data() {
    return { earthOutline };
  },
});
</script>

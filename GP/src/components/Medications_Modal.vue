<template>
  <ion-grid style="width:100%">
    <ion-header>
      <ion-toolbar>
        <ion-title>{{ title }}</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding" v-if="content.length >= 1">
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
              style="margin:1px -12px"
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
            </ion-col>
          </ion-row>
        </ion-grid>
      </ion-item>
    </ion-content>
  </ion-grid>
</template>

<script>
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonLabel,
  IonItem,
} from "@ionic/vue";
import { defineComponent } from "vue";

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
    IonLabel,
    IonItem,
  },
});
</script>

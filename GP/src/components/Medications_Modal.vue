<template>
  <ion-content>
    <ion-header>
      <ion-toolbar>
        <ion-title>{{ title }}</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding" v-if="content.length >= 1">
      <ion-list>
        <ion-item
          style="d-flex justify-items-between"
          :key="item.id"
          v-for="item in content"
        >
          <ion-card>
            <ion-label> {{ item.name }}</ion-label>
            <ion-text> {{ item.labeller }}</ion-text>
            <ion-text> {{ item.parent_key }}</ion-text>
            <ion-text> {{ item.country }}</ion-text>
          </ion-card>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-content>
</template>

<script>
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonLabel,
  IonText,
  IonItem,
  IonList,
  IonCard,
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
    IonText,
    IonItem,
    IonList,
    IonCard,
  },
});
</script>

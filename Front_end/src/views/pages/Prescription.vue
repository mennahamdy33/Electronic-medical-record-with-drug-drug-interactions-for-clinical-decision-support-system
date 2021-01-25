<template>
  <ion-card>
    <ion-card-header>
      <ion-avatar>
        <img
          src="https://lh3.googleusercontent.com/proxy/btl-O2nMnVcynDfOi-sVQgcrbxbfw2UC3Jgsa2Hg5-VFT69A8XuCALolPVDhLeQI1YwvzlnSoiiA96UnNzZzH6DXoQ06CiKRgsMt5ldtXTSa-YFocM7vyEs"
        />
      </ion-avatar>
      <ion-card-subtitle>Dentist</ion-card-subtitle>
      <ion-card-title> Dr. Nancy </ion-card-title>
    </ion-card-header>

    <ion-card-content> 12 street dr.nancy,cairo,egypt </ion-card-content>
  </ion-card>

  <!-- Input fields go here -->
  <ion-card>
    <ion-grid>
      <ion-row>
        <ion-col>
          <ion-item>
            <ion-label position="floating">Name</ion-label>
            <ion-input></ion-input>
          </ion-item>
          <ion-item style="margin-top: 10px">
            <ion-label position="floating">Address</ion-label>
            <ion-input></ion-input>
          </ion-item>
        </ion-col>
        <ion-col>
          <ion-item>
            <ion-label position="floating">DOB</ion-label>
            <ion-datetime
              display-format="MM DD YY"
              placeholder="Select Date"
            ></ion-datetime>
          </ion-item>
          <ion-item style="margin-top: 10px">
            <ion-label position="floating">Date</ion-label>
            <ion-datetime
              display-format="MM DD YY"
              placeholder="Select Date"
            ></ion-datetime>
          </ion-item>
        </ion-col>
      </ion-row>
    </ion-grid>
  </ion-card>

  <!-- List of Text Items -->
  <ion-grid>
    <ion-row>
      <ion-col>
        <ion-text>
          <h2>Disp</h2>
        </ion-text>
        <ion-button
          name="remove-circle-outline"
          @click="decrement"
        ></ion-button>
        1
        <ion-button name="add-circle" @click="increment"></ion-button>
        <ion-text>
          <h2>Tabs</h2>
        </ion-text>
        <ion-text>
          <h2>Refill</h2>
        </ion-text>
        <ion-button name="remove-circle" @click="decrement"></ion-button>
        1
        <ion-button name="add-circle" @click="increment"></ion-button>
        <ion-text>
          <h2>Tabs</h2>
        </ion-text>
      </ion-col>
      <ion-col size="3">
        <ion-card>
          <ion-card-header>
            <ion-card-subtitle>Drugs List</ion-card-subtitle>
          </ion-card-header>
          <ion-card-content>
            <ion-searchbar show-cancel-button="never"></ion-searchbar>

            <ion-list>
              <ion-item style="d-flex justify-items-between">
                <ion-label>Drug 1</ion-label>
                <ion-button color="danger">Delete</ion-button>
              </ion-item>
              <ion-item>
                <ion-label>Drug 2</ion-label>
              </ion-item>
              <ion-item>
                <ion-label>Drug 3</ion-label>
              </ion-item>
            </ion-list>
          </ion-card-content>
        </ion-card>
        <ion-card>
          <ion-item>
            <ion-label text-align="center" position="floating"
              >Doctor Signature</ion-label
            >
            <ion-input></ion-input>
          </ion-item>
        </ion-card>
      </ion-col>
    </ion-row>
  </ion-grid>
</template>

<script>
import { IonInput } from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "nancy",
  components: {
    IonInput,
  },

  setup() {},
  methods: {
    decrement() {
      console.log("decrement");
    },
    increment() {
      console.log("increment");
    },
  },
});
</script>

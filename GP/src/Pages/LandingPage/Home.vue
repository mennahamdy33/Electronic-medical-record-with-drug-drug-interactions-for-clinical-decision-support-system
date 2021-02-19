<template>
    <ion-grid class="grid1">
        <ion-row>
          <ion-col  size-lg="5" size-md="3" size-sm="12" size-xs="12" offset-xs="0">
            <h2>DruGuide</h2>
            <p> A cross platform software to manage your<br> <br>clinic while keeping your patient's safety </p>
          </ion-col>

          <ion-col  size-lg="7" size-md="3" size-sm="12" size-xs="12" offset-xs="0">
            <img src="../../../public/assets/homepic.png" alt="logo"  />
          </ion-col>

        </ion-row>
      </ion-grid>
</template>

<script>

import { defineComponent } from 'vue';

import { 
  IonGrid ,
  IonCol, 
  IonRow,

 
} from '@ionic/vue';

export default defineComponent({
  name: 'Home',
  components: {
    IonCol,
    IonGrid,
    IonRow,
   
  },
    
  data(){
    return{
  
      
    }
  },
  methods: {
 
 
  }
,

});
</script>

<style scoped>
.grid1{
  margin-top: 50px;
}
.grid1 h2 {
  font-family: 'Monoton';
  /* font-family:  'Architects Daughter'; */
  /* font-family: 'Righteous'; */
  padding-top:130px;
  font-size: 55px;
  letter-spacing: 3px;
  text-align: center;
  font-weight: 100;

}
.grid1 p{
  font-family: Arial, Helvetica, sans-serif;
  font-size: 20px;
  color: #ffffff;
  text-align: center;
  margin-left: 110px;
}

@media screen and (max-width: 600px) {
   .grid1 h2{
    font-size: 45px;
  }
   .grid1 p{
    font-size: 15px;
    margin-left: 0;
  }
}


h2 {
  margin: 0 0 30px;
  padding: 0;
  color: #ffffff;
  font-family: "Lucida Console", "Lucida Sans Typewriter", monaco, "Bitstream Vera Sans Mono", monospace; 
  text-align: center;
  font-weight: bold;
}

</style>
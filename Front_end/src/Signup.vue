<template>
<ion-content>

  <div class="con">
    <ion-grid>  
      

      


      <ion-row>
        <ion-col >
          <div class="image"> 
              <!-- <img :src="memory"  > -->
              <img src="../public/assets/logo4.png"  >
              

          </div>
        </ion-col>
        
      
      </ion-row>



      <ion-row>
        
        <ion-col>
          <div class="login-box">
            <h2>Sign Up</h2>
            <form v-on:submit.prevent="">
              <ion-grid>
                <ion-row>
                  <ion-col>
                    <form-field LableText="First Name"/>
                  </ion-col>
                  <ion-col>
                    <form-field LableText="Last Name"/>
                  </ion-col>
                </ion-row>

                <ion-row>
                  <ion-col>
                    <form-field LableText="Gender"/>
                  </ion-col>
                  <ion-col>
                    <form-field LableText="National ID"/>
                  </ion-col>
                </ion-row>

                <ion-row>
                  <ion-col>
                    <form-field LableText="Phone Number"/>
                  </ion-col>
                  <ion-col>
                    <form-field LableText="Birth Date"/>
                  </ion-col>
                </ion-row>

                <ion-row>
                  <ion-col>
                    <form-field LableText="Education"/>
                  </ion-col>
                  <ion-col>
                    <form-field LableText="Speciality"/>
                  </ion-col>
                </ion-row>

                <form-field LableText="Address"/>
              </ion-grid>

              <form-button/>
            </form>
          </div>
        </ion-col>
      
      </ion-row>

      
    </ion-grid>

  </div>

</ion-content>
</template>

<script>
import { defineComponent } from 'vue';
import { IonCol, IonGrid, IonRow,IonContent } from '@ionic/vue';
import FormButton from './Components/FormButton.vue';
import FormField from './Components/FormField'
export default defineComponent({
  name: 'Signup',
  components: {
    FormButton,
    FormField,
    IonCol,
    IonGrid,
    IonRow,
    IonContent,
  },
  data(){
    return{
      
      
    }
  },
  methods: {
    //  getURL(pic){
    //    return require(pic)
    //  }
  }
});
</script>

<style scoped>

.con {
  margin:0;
  padding:0;
  font-family: sans-serif;
  /* background: linear-gradient(#141e30, #07adb9); */
  background: linear-gradient(#141e30, #6f92b8);
  /* background: linear-gradient(#141e30, #486686); */
  

}

.login-box {
  
  /* position: absolute; */
  /* top: 55%; */
  /* left: 35%; */
  display: block;
  margin-left: auto;
  margin-right: auto;

  width: 500px;
  padding: 40px;
  /* transform: translate(-50%, -50%); */
  background: rgba(31, 29, 29, 0.281);
  box-sizing: border-box;
  box-shadow: 0 15px 25px rgba(0,0,0,.6);
  border-radius: 10px;
}

.login-box h2 {
  margin: 0 0 30px;
  padding: 0;
  color: #fff;
  text-align: center;
}

/* .image{
  text-align: center;
  

} */


.image img{
  width: 13%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50px;
  
  /* width: 40%; */
  
  
}

/* form{
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  
} */


</style>
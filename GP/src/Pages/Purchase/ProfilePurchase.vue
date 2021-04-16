<template>
    <ion-page>
        <ion-content class="content">

            <ion-grid  >      

                <ion-row >
                    <ion-col offset-lg="0.2" offset-xs="3.4" size-lg="1.5" size-xs="6">
                        <div class="image">   
                        <img src="../../../public/assets/mainlogo.png"  >   
                        <!-- <img src="../../../public/assets/logo4.png"  >    -->
                        </div>
                    </ion-col>
                   
                </ion-row>


                
        
            </ion-grid>
        </ion-content>
    </ion-page>
</template>


<script>
import { defineComponent } from 'vue';
import { IonPage,IonContent,IonCol, IonGrid, IonRow  } from '@ionic/vue';
// import ProgressBar from '../../components/ProgressBar.vue';
// import FormButton from '../../components/FormButton'
// import { mapGetters } from 'vuex';

export default defineComponent({
  name: ' ProfilePurchase',
  components: {
    
    IonCol,
    IonGrid,
    IonRow,
    IonContent,
    // ProgressBar,
    IonPage,
    // FormButton,
    // IonButton,
   
   
    
   
  },
  
  data(){
    return{
      Account:{
        email:'',
        password:'',
        confirmPassword:''
      },
      
    }
  },
  methods: {
    
  },
  computed: {
    // ...mapGetters(['SignupPhase'])
  }
});
</script>

<style scoped>

.content {
  margin:0;
  padding:0;
  font-family: sans-serif;
  
  --background: linear-gradient(#141e30, #243b55);
  
}

img , .button{
  margin-top: 25%;
}

.login-box h2 {
  font-family: 'Monoton';
  margin: 0 0 30px;
  padding: 0;
  color: #ffffff;
  font-size: 45px;
  letter-spacing: 9px;

  text-align: center;
  font-weight: 100;
}


.grid ion-col{
    --ion-grid-column-padding: 5px;
   
}
</style>
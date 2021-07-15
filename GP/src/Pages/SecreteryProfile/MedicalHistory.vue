<template >
                        <form v-on:submit.prevent="">
                            <ion-grid class="FormGrid">
                                <ion-row>
                                    <ion-col size="12" size-sm>
                                        <div class="user-box">
                                            <textarea      v-model="MedicalHistory.majorillnesses"></textarea>

                                            <label  class="Up"> Major Illnesses </label>

                                        </div>
                                    </ion-col>
                                </ion-row>

                                <ion-row>
                                    <ion-col size="12" size-sm>
                                        <div class="user-box">
                                            <textarea    v-model="MedicalHistory.previoussurgery"></textarea>

                                            <label  class="Up">Previous Surgery</label>

                                        </div>
                                    </ion-col>
                                </ion-row>

                                <ion-row>
                                    <ion-col size="12" size-sm>
                                        <div class="user-box">
                                            <textarea    v-model="MedicalHistory.previousillnesses"></textarea>

                                            <label  class="Up"> Previous Illnesses </label>

                                        </div>
                                    </ion-col>
                                </ion-row>

                                    <ion-row>

                                        <ion-col size="12" size-sm>


                                            <label style="color:white; fontSize:18px;"> Diabetes </label>
                                            <div class="container">

                                                <ul>

                                                    <li>
                                                        <input type="radio" id="diabetes" name="diabetes" v-model="MedicalHistory.diabetes" value="yes"  >
                                                        <label for="diabetes"> Yes </label>

                                                        <div class="check"><div class="inside"></div></div>
                                                    </li>

                                                    <li>
                                                        <input type="radio" id="noDiabetes" name="diabetes" v-model="MedicalHistory.diabetes" value="no">
                                                        <label for="noDiabetes"> No </label>

                                                        <div class="check"><div class="inside"></div></div>
                                                    </li>

                                                </ul>
                                            </div>


                                        </ion-col>
                                    </ion-row>


                                <ion-row>
                                    <ion-col size="12" size-sm>
                                        <div class="user-box">
                                            <textarea    v-model=" MedicalHistory.familydiseases"></textarea>

                                            <label  class="Up"> Family Diseases </label>

                                        </div>
                                    </ion-col>
                                </ion-row>

                                <ion-row>
                                    <ion-col size="12" size-sm>
                                        <div class="user-box">
                                            <textarea    v-model=" MedicalHistory.allergies"></textarea>

                                            <label  class="Up"> Allergies </label>

                                        </div>
                                    </ion-col>
                                </ion-row>
                                <ion-row>

                                    <ion-col size="12" size-sm>


                                            <label style="color:white; fontSize:18px;"> Smoker </label>
                                            <div class="container">

                                                <ul>

                                                    <li>
                                                        <input type="radio" id="Yes" name="tobacco" v-model=" MedicalHistory.tobacco" value="yes"  >
                                                        <label for="Yes"> Yes </label>

                                                        <div class="check"><div class="inside"></div></div>
                                                    </li>

                                                    <li>
                                                        <input type="radio" id="No" name="tobacco" v-model=" MedicalHistory.tobacco" value="no">
                                                        <label for="No"> No </label>

                                                        <div class="check"><div class="inside"></div></div>
                                                    </li>

                                                </ul>
                                            </div>


                                    </ion-col>
                                </ion-row>
                            </ion-grid>
                            <ion-row>
                                <ion-col size-lg="2" size-xs="6" >
                                    <form-button @click="submitAll"  buttonText="Submit" type="button"/>
                                </ion-col>
                                <ion-col size-lg="2" size-xs="6" >
                                    <form-button @click="changePhaseBack({currentPhase: 'PersonalInfo'})" type="button" buttonText="Back"/>
                                </ion-col>

                            </ion-row>

                        </form>

    
</template>
<script>
    import {useRouter} from 'vue-router';
    import axios from 'axios';
    import FormButton from '../../components/FormButton';

    import {//IonMenu,

        IonGrid,IonRow,IonCol
        ,alertController

    } from "@ionic/vue";
    import { defineComponent } from 'vue';
    import { mapActions } from 'vuex';
    export default defineComponent({
        name: "MedicalHistory",
        components:{
            
            FormButton,IonGrid,IonRow,IonCol,

        },
        data(){
            return {

                 MedicalHistory:{
                    majorillnesses:  "",
                    previoussurgery: "",
                    previousillnesses:"",
                    diabetes:"",
                    familydiseases: "",
                    allergies:"",
                    tobacco:"",


                },
            };
        },
        methods:{
            async presentAlert(msg) {
                const alert = await alertController
                    .create({
                        cssClass: 'alert',
                        header: 'Alert',
                        // subHeader: 'Subtitle',
                        message: msg,
                        buttons: ['OK'],
                    });
                return alert.present();
            },
            submitAll(){
                const MedicalHistory = Object.entries(this.MedicalHistory);
                let complete = true;
                for (const value of MedicalHistory.values()  ) {
                    // console.log(key , value);
                    if(value === ''){
                        complete = false;
                    }
                }
                if(complete){

                    let data = {...this.$store.getters['patient/PatientData'], ...this.MedicalHistory  };
                    axios.post(process.env.VUE_APP_ROOT_API+"addpatient", data)
                            .then(()=> {
                                this.$store.dispatch('patient/changePhase', {currentPhase: 'PersonalInfo'});
                                // this.router.push('/MainPageSecretery')
                            })
                            .catch(error => console.log(error));

                }else{
                    // alert("Please fill all the fields");
                    this.presentAlert("Please fill all the fields")

                }
            },

            changePhaseBack(phase){

                this.$store.dispatch('patient/changePhase', phase);

            },
            ...mapActions('patient',['changePhase']),
        },
        setup(){
            const router = useRouter();
            return { router };
        }
    })
</script>
<style scoped>

    textarea{
        margin-top: 6px;
    }
</style>

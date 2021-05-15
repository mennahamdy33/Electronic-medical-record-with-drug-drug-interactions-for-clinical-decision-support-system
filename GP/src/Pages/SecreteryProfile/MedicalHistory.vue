<template >

    
        <ion-grid  >
            <ion-row>

                <ion-col offset-lg="2" size-lg="8">
                    <div class="login-box">
                        <h2>Add a new Patient</h2>

                        <ion-col style=" position: relative; left: 20%;" offset-lg="0.9" pull-xs="0"  size-lg="6" size-xs="15" >
                            <progress-bar    text="addPatient" level="MedicalHistory"></progress-bar>
                        </ion-col>
                        <form @submit.prevent="sendPatientData">
                            <ion-grid class="FormGrid">
                                <ion-row>
                                    <ion-col size="12" size-sm>
                                        <div class="user-box">
                                            <textarea      v-model=" MedicalHistory.majorillnesses"></textarea>

                                            <label  class="Down"> Major Illnesses </label>

                                        </div>
                                    </ion-col>
                                </ion-row>

                                <ion-row>
                                    <ion-col size="12" size-sm>
                                        <div class="user-box">
                                            <textarea    v-model=" MedicalHistory.previoussurgery"></textarea>

                                            <label  class="Down">Previous Surgery</label>

                                        </div>
                                    </ion-col>
                                </ion-row>

                                <ion-row>
                                    <ion-col size="12" size-sm>
                                        <div class="user-box">
                                            <textarea    v-model=" MedicalHistory.previousillnesses"></textarea>

                                            <label  class="Down"> Previous Illnesses </label>

                                        </div>
                                    </ion-col>
                                </ion-row>

                                <ion-row>

                                    <ion-col size="12" size-sm>
                                        <div class="user-box">
                                            <textarea    v-model=" MedicalHistory.diabetes"></textarea>

                                            <label  class="Down"> Diabetes </label>

                                        </div>
                                    </ion-col>
                                </ion-row>


                                <ion-row>
                                    <ion-col size="12" size-sm>
                                        <div class="user-box">
                                            <textarea    v-model=" MedicalHistory.familydiseases"></textarea>

                                            <label  class="Down"> Family Diseases </label>

                                        </div>
                                    </ion-col>
                                </ion-row>

                                <ion-row>
                                    <ion-col size="12" size-sm>
                                        <div class="user-box">
                                            <textarea    v-model=" MedicalHistory.allergies"></textarea>

                                            <label  class="Down"> Allergies </label>

                                        </div>
                                    </ion-col>
                                </ion-row>
                                <ion-row>

                                    <ion-col size="12" size-sm>


                                            <label style="color:white; fontSize:18px;"> Smoker </label>
                                            <div class="container">

                                                <ul>

cd GPcd
                                                    <li>
                                                        <input type="radio" id="Yes" name="gender" v-model=" MedicalHistory.tobacco" value="yes"  >
                                                        <label for="Yes"> Yes </label>

                                                        <div class="check"><div class="inside"></div></div>
                                                    </li>

                                                    <li>
                                                        <input type="radio" id="No" name="gender" v-model=" MedicalHistory.tobacco" value="no">
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
                                    <form-button @click="sendPatientData"  buttonText="Submit" type="button"/>
                                </ion-col>
                            </ion-row>

                        </form>
                    </div>
                </ion-col>
            </ion-row>

        </ion-grid>

    
</template>
<script>
    import axios from 'axios';
    import FormButton from '../../components/FormButton';
    import ProgressBar from '../../components/ProgressBar.vue';
    import {//IonMenu,

        IonGrid,IonRow,IonCol,

    } from "@ionic/vue";
    import { defineComponent } from 'vue';
    export default defineComponent({
        name: "MedicalHistory",
        components:{
            
            FormButton,IonGrid,IonRow,IonCol,
            ProgressBar
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

            sendPatientData(){

                axios.post('http://localhost:8000/medicalhistory',this. MedicalHistory)
                    .then(response=> console.log(response))
                    .catch(error => console.log(error));
            },

        },
        computed: {


        }
    })
</script>
<style scoped>

    .FormGrid ion-col{
        --ion-grid-column-padding: 20px;

    }
    .FormGrid ion-col{
        --ion-grid-column-padding: 20px;

    }

    .user-box textarea {
        width: 100%;
        padding: 10px 0;
        font-size: 16px;
        color: #fff;
        margin-bottom: 30px;
        border: none;
        border-bottom: 1px solid #fff;
        outline: none;
        background: transparent;
    }
   

    IonList {
        position: absolute;
        width: inherit;
        overflow-y: scroll;
        max-height: 150%;
        z-index: 999;
    }


    ion-item:hover {
        cursor: pointer;
        background: #f1f1f1
    }

</style>

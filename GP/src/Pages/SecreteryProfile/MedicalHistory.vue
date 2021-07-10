<template >
                        <form v-on:submit.prevent="">
                            <ion-grid class="FormGrid">
                                <ion-row>
                                    <ion-col size="12" size-sm>
                                        <div class="user-box">
                                            <textarea      v-model="MedicalHistory.majorillnesses"></textarea>

                                            <label  class="Down"> Major Illnesses </label>

                                        </div>
                                    </ion-col>
                                </ion-row>

                                <ion-row>
                                    <ion-col size="12" size-sm>
                                        <div class="user-box">
                                            <textarea    v-model="MedicalHistory.previoussurgery"></textarea>

                                            <label  class="Down">Previous Surgery</label>

                                        </div>
                                    </ion-col>
                                </ion-row>

                                <ion-row>
                                    <ion-col size="12" size-sm>
                                        <div class="user-box">
                                            <textarea    v-model="MedicalHistory.previousillnesses"></textarea>

                                            <label  class="Down"> Previous Illnesses </label>

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

    .FormGrid ion-col{
        --ion-grid-column-padding: 20px;

    }
    .FormGrid ion-col{
        --ion-grid-column-padding: 20px;

    }




    .user-box input {
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
    .user-box label {
        position: absolute;

        left: 0;
        padding: 10px 0;
        font-size: 16px;
        color: #fff;
        pointer-events: none;
        transition: .5s;
    }
    .user-box {
        position: relative;
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
    .user-box label {
        position: absolute;
        left: 0;
        padding: 10px 0;
        font-size: 16px;
        color: #fff;
        pointer-events: none;
        transition: .5s;
    }
    .Down{
        top: 0;
    }
    .user-box textarea:focus ~ .Down{
        top: -20px;
        left: 0;
        color: #03e9f4;
        font-size: 16px;
        font-weight: bold;
    }

    .container ul{
        list-style: none;
        margin: 0;
        padding: 0;
    }
    ul li{
        color: #ffffff;
        /* display: block; */
        position: relative;
        float: left;
        /* width: 100%; */
        /* height: 100px; */
    }
    ul li input[type=radio]{
        position: absolute;
        visibility: hidden;
    }
    ul li label{
        display: block;
        position: relative;
        /* font-weight: 300; */
        font-size: 16px;
        padding: 25px 25px 25px 80px;
        margin: 10px auto;
        height: 10px;
        z-index: 9;
        cursor: pointer;
        /* -webkit-transition: all 0.25s linear; */
    }
    ul li:hover label{
        /* color: #ffdcfc; */
        font-size: 20px;
    }
    ul li .check{
        display: block;
        position: absolute;
        border: 5px solid #AAAAAA;
        border-radius: 100%;
        height: 27px;
        width: 27px;
        top: 30px;
        left: 20px;
        z-index: 5;
        transition: border .25s linear;
        -webkit-transition: border .25s linear;
    }
    ul li:hover .check {
        border: 5px solid #FFFFFF;
    }
    ul li .check::before {
        display: block;
        position: absolute;
        content: '';
        border-radius: 100%;
        height: 12px;
        width: 12px;
        top: 2.4px;
        left: 2.7px;
        margin: auto;
        /* transition: background 0.25s linear;
        -webkit-transition: background 0.25s linear; */
    }
    input[type=radio]:checked ~ .check {
        border: 5px solid #03e9f4;
        box-shadow: 0 0 0 1px #03e9f4,
        0 0 25px #03e9f4,
        0 0 50px #03e9f4,
        0 0 100px #03e9f4;
    }
    input[type=radio]:checked ~ .check::before{
        background: #03e9f4;
    }
    input[type=radio]:checked ~ label{
        color: #03e9f4;
    }
</style>

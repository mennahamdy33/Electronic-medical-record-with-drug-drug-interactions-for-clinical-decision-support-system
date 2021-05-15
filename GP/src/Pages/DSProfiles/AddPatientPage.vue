<template >

    <base-template>
        <ion-grid  >
            <ion-row>

                <ion-col offset-lg="2" size-lg="8">
                    <div class="login-box">
                        <h2>Add a new Patient</h2>

                        <ion-col style=" position: relative; left: 20%;" offset-lg="0.9" pull-xs="0"  size-lg="6" size-xs="15" >
                            <progress-bar  level="PersonalInformation"  text="addPatient"></progress-bar>
                        </ion-col>
                        <form @submit="sendPatientData">
                            <ion-grid class="FormGrid">
                                <ion-row>
                                    <ion-col size="12" size-sm>
                                        <div class="user-box">
                                            <input  type="text"   required="" v-model="PatientInfo.firstName">

                                            <label  class="Down"> First Name </label>

                                        </div>
                                    </ion-col>
                                    <ion-col size="12" size-sm>
                                        <div class="user-box">
                                            <input  type="text"   required="" v-model="PatientInfo.lastName">

                                            <label  class="Down"> Last Name </label>

                                        </div>
                                    </ion-col>
                                </ion-row>

                                <ion-row>
                                    <ion-col size="12" size-sm>
                                        <div class="user-box">
                                            <input  type="text"   required="" v-model="PatientInfo.ssn">

                                            <label  class="Down"> National ID </label>

                                        </div>
                                    </ion-col>
                                </ion-row>

                                <ion-row>

                                    <ion-col size="12" size-sm>
                                        <div class="user-box">
                                            <input  type="date"   required="" v-model="PatientInfo.birthdate">

                                            <label  class="Up"> Birth Date </label>

                                        </div>
                                    </ion-col>
                                    <ion-col size="12" size-sm>
                                        <label style="color:white; fontSize:18px;">Gender</label>
                                        <div class="container">

                                            <ul>


                                                <li>
                                                    <input type="radio" id="Male" name="gender" v-model="PatientInfo.gender" value="male"  >
                                                    <label for="Male"> Male </label>

                                                    <div class="check"><div class="inside"></div></div>
                                                </li>

                                                <li>
                                                    <input type="radio" id="Female" name="gender" v-model="PatientInfo.gender" value="female">
                                                    <label for="Female"> Female </label>

                                                    <div class="check"><div class="inside"></div></div>
                                                </li>

                                            </ul>
                                        </div>

                                    </ion-col>
                                </ion-row>


                                <ion-row>
                                    <ion-col size="12" size-sm>
                                        <div class="user-box">
                                            <input  type="text"   required="" v-model="PatientInfo.phoneNumber">

                                            <label  class="Down"> Phone Number </label>

                                        </div>
                                    </ion-col>

                                    <ion-col size="12" size-sm>
                                        <div class="user-box">
                                            <input  type="text"   required="" v-model="PatientInfo.address">

                                            <label  class="Down"> Address </label>

                                        </div>
                                    </ion-col>
                                </ion-row>
                                <ion-row>
                                    <ion-col size="12" class="medication" size-sm>
                                        <label>Medications</label>
                                    </ion-col>
                                </ion-row>
                                <ion-row>
                                    <ion-col size="12" class="medication" size-sm>
                                        <ion-searchbar    v-model="filterTerm" @keyup="medicationsData()" />

                                        <IonList interface="sheet-action" v-show="filterTerm != ''"   >

                                            <IonItem v-show="filterTerm != ''" button="true"   @clicked="showmed(med)" v-for="med in medications" :key="med" value="{{med}}"  >{{med}}</IonItem>
                                        </IonList>

                                    </ion-col>
                                </ion-row>
                            </ion-grid>
                            <ion-row>
                                <ion-col size-lg="2" size-xs="6" >
                                    <form-button @click="sendPatientData" href='/medicalhistory'  buttonText="Submit" type="button"/>
                                </ion-col>
                            </ion-row>

                        </form>
                    </div>
                </ion-col>
            </ion-row>


        </ion-grid>

    </base-template>
</template>
<script>
    import axios from 'axios';
    import FormButton from '../../components/FormButton';
    import ProgressBar from '../../components/ProgressBar.vue';

    import {//IonMenu,
        IonSearchbar,
        IonGrid,IonRow,IonCol,
        // IonLabel,
        // IonPage,
        // IonHeader,
        // IonContent,
        IonList,IonItem,
        //IonToolbar,IonTitle ,IonButtons,IonMenuButton
    } from "@ionic/vue";
    import BaseTemplate from "../../components/BaseTemplate";
    export default {
        components: {
            BaseTemplate,
            IonSearchbar,
            FormButton, IonGrid, IonRow, IonCol,
            IonList, IonItem,
            ProgressBar
        },
        data() {
            return {
                model: null,

                PatientInfo: {
                    firstName: "",
                    lastName: "",
                    ssn: "",
                    phoneNumber: "",
                    gender: "",
                    birthdate: "",
                    address: "",
                    Medications: ["Refludan"],
                },


                medications: [],
                filterTerm: '',

            };
        },
        methods: {
            showmed(med){
                this.PatientInfo.Medications.push(med);
                console.log("aa",this.PatientInfo.Medications);},
            sendMedications() {

                console.log("bbb");
                axios.post('http://localhost:8000/addmedication', {medications: this.PatientInfo.Medications})
                    .then(response => console.log(response))
                    .catch(error => console.log(error));
            },
            sendPatientData() {

                axios.post('http://localhost:8000/addpatient', this.PatientInfo)
                    .then()
                    .catch(error => console.log(error));
            },
            sendAllData() {

                Promise.all([this.sendPatientData(), this.sendMedications()])
                    .then(axios.spread(function () {
                        // Both requests are now complete
                    }));
            },
            medicationsData() {
                if (this.timer) {
                    clearTimeout(this.timer);
                    this.timer = null;
                }
                this.timer = setTimeout(() => {
                    if (this.filterTerm) {

                        axios.post('http://localhost:8000/medications', {"x": this.filterTerm}, [headers])
                            .then(response => {
                                console.log(response);
                            });


                        const headers = {"Content-Type": "application/json"};
                        axios.get('http://localhost:8000/addpatient', {headers})
                            .then(response => {
                                let uniqueChars = [...new Set(response.data.map(a => a.name))];
                                this.medications = uniqueChars;

                            });

                    }
                }, 100);
            },
        },
    }
</script>
<style scoped>

    .FormGrid ion-col{
        --ion-grid-column-padding: 20px;

    }
    .FormGrid ion-col{
        --ion-grid-column-padding: 20px;

    }



    .login-box h2 {
        font-family: 'Monoton';
        margin: 0 0 30px;
        padding: 0;
        color: #ffffff;
        font-size: 45px;
        letter-spacing: 3px;
        text-align: center;
        font-weight: 100;
    }

    .user-box {
        position: relative;
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
    .Up{
        top:-20px;
    }
    .Down{
        top: 0;
    }
    .user-box input:focus ~ .Down,
    .user-box input:valid ~ .Down {
        top: -20px;
        left: 0;
        color: #03e9f4;

        font-size: 16px;
        font-weight: bold;
    }
    .user-box input:focus ~ .Up,
    .user-box input:valid ~ .Up {
        top: -25px;
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
    .medication{
        position: relative;
    }
    .medication input {
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

    .medication label {
        position: absolute;

        left: 0;
        padding: 10px 0;
        font-size: 16px;
        color: #fff;
        pointer-events: none;
        transition: .5s;
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

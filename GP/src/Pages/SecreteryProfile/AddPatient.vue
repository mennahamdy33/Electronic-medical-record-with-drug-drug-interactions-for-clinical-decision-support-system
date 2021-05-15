<template >

    
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

                                            <IonItem v-show="filterTerm != ''" button="true"  v-for="med in medications" :key="med" value="{{med}}"  >{{med}}</IonItem>
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
    import { defineComponent } from 'vue';
    // import BaseTemplate from "../../components/BaseTemplate";
    export default defineComponent ({
        name: "AddPatient",
        components:{
            // BaseTemplate,
            IonSearchbar,
            FormButton,IonGrid,IonRow,IonCol,
            IonList,IonItem,
            ProgressBar
        },
        data(){
            return {
                model: null,

                PatientInfo:{
                    firstName:  "",
                    lastName: "",
                    ssn:"",
                    phoneNumber:"",
                    gender: "",
                    birthdate:"",
                    address:"",
                    Medications:''

                },

              
                medications:[],
                filterTerm: '',

            };
        },
        methods:{

            sendPatientData(){

                axios.post('http://localhost:8000/addpatient',this.PatientInfo)
                    .then(response=> console.log(response))
                    .catch(error => console.log(error));
            },
            medicationsData() {
                if (this.timer) {
                    clearTimeout(this.timer);
                    this.timer = null;
                }
                this.timer = setTimeout(() => {
                    if (this.filterTerm) {

                        axios.post('http://localhost:8000/medications', {"x": this.filterTerm},[headers])
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
        // asyncComputed: {
        //     resultQuery() {
        //         if (this.filterTerm) {
        //             const headers = {"Content-Type": "application/json"};
        //             axios.get('http://localhost:8000/addpatient', {headers})
        //                 .then(response => {
        //                     let uniqueChars = [...new Set(response.data.map(a => a.name))];
        //                     this.medications = uniqueChars;
        //                     return this.medications;
        //
        //                 });
        //         }
        //         else {
        //             return this.medications;
        //         }

           // }
        })
        // resultQuery(){
        //
        //     if(this.filterTerm){
        //         return this.medications.filter((item)=>{
        //
        //                 return this.filterTerm.toLowerCase().split(' ').every(v => item.toLowerCase().includes(v))
        //         })
        //     }else{
        //         return this.medications;
        //     }
        // }

        // mounted(){
        //     this.medicationsData()
        // },
   // }
</script>
<style scoped>


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

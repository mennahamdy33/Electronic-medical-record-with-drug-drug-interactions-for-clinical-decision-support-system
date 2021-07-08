<template >

                        <form v-on:submit.prevent="">
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
                                        <ion-searchbar

                                                debounce="500"
                                                @ionChange="
                  ($event) => {
                    drugname = $event.target.value;
                    get_drugs('reset');
                  }
                "
                                        ></ion-searchbar >
                                        <ion-list v-show="drugname != '' && menuOpen">
                                            <ion-button v-if="drugsInfo.length >= 10" @click="next()"
                                            ><ion-text>next</ion-text></ion-button>
                                            <ion-button v-if="drugpage >= 2" @click="prev()" color="dark"
                                            ><ion-text>prev</ion-text></ion-button>
                                            <ion-item
                                                    @click="chooseMedication(item)"
                                                    :key="item.id"
                                                    v-for="item in drugsInfo"
                                            >
                                                <ion-card>
                                                    <ion-label> {{ item }}</ion-label>

                                                </ion-card>
                                            </ion-item>
                                        </ion-list>

                                    </ion-col>
                                </ion-row>
                                <ion-row :key="item.id"
                                         v-for="item in PatientInfo.Medications">
                                    <ion-col  size="12" class="medicationlist" size-sm>

                                    <ion-label
                                               > {{ item }}
                                        <ion-button fill="clear" @click="DeleteFromList(item)" size="small" class="ion-justify-content-center"
                                        ><ion-icon :icon="closeCircleOutline"></ion-icon></ion-button>
                                    </ion-label>

                                    </ion-col>
                                </ion-row>
                            </ion-grid>
                            <ion-row>
                                <ion-col size-lg="2" size-xs="6" >
                                    <form-button @click="changePhaseNext({currentPhase: 'MedicalHistory'})"   type="button" buttonText="Next"/>
                                </ion-col>
                            </ion-row>

                        </form>

</template>
<script>
    import { closeCircleOutline} from "ionicons/icons";

    import axios from 'axios';
    import FormButton from '../../components/FormButton';
    import {alertController} from '@ionic/vue';

    import {
        IonSearchbar,
        IonGrid,IonRow,IonCol,
        IonIcon,
        IonLabel,
        IonText,
        IonCard,
        IonList,IonItem,
        IonButton,

    } from "@ionic/vue";

    import { defineComponent } from 'vue';
    export default defineComponent({
        name: "PersonalInfo",
        components: {
            IonSearchbar,IonIcon,
            FormButton, IonGrid, IonRow, IonCol,IonButton,
            IonList, IonItem,IonText,
            IonCard,IonLabel,

        },
        data() {
            return {
                //model: null,
                closeCircleOutline,
                menuOpen: false,
                PatientInfo: {
                    firstName: "",
                    lastName: "",
                    ssn: "",
                    phoneNumber: "",
                    gender: "",
                    birthdate: "",
                    address: "",
                    Medications: [],
                },

                drugsInfo: [],
                drugname: "",
                drugpage: 1,
            };
        },
        async mounted() {
            await this.get_drugs();
        },
        methods: {

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

            chooseMedication(item){
                console.log(item);
                this.PatientInfo['Medications'].push(item);
                this.menuOpen = false;



            },
            DeleteFromList(item){
                const index = this.PatientInfo.Medications.indexOf(item);
                if (index > -1) {
                    this.PatientInfo.Medications.splice(index, 1);
                }
            },
            async get_drugs(mode = "") {
                this.menuOpen = true;
                axios
                    .get(
                        process.env.VUE_APP_ROOT_API+`drugs?name=${this.drugname}&page=${this.drugpage}`
                    )
                    .then((response) => {
                        let uniqueChars = [...new Set(response.data.data.map(a => a.name))];
                        this.drugsInfo = uniqueChars;
                        mode == "reset" ? (this.drugpage = 1) : null;
                    });
            },
            async prev() {
                this.drugpage--;
                this.get_drugs();
            },
            async next() {
                this.drugpage++;
                this.get_drugs();
            },
            changePhaseNext(phase){

                const personalInformation = Object.entries(this.PatientInfo);
                let complete = true;
                for (const  value of personalInformation.values()  ) {
                    // console.log(key , value);
                    if(value === '' ){

                            complete = false;
                        }

                }
                if(complete){

                    if(!this.PatientInfo.phoneNumber.match(/^\d{11}$/) || !this.PatientInfo.ssn.match(/^\d{14}$/) ){


                        this.presentAlert("invalid Phone number or National ID ");

                    }

                    else{

                        this.$store.dispatch('patient/FillData', this.PatientInfo);
                        this.$store.dispatch('patient/changePhase', phase);

                    }
                }else{

                    this.presentAlert("Please fill all the fields");

                }
            },


        },

    });
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
    .medicationlist ion-label{
        font-family:  Arial, Helvetica, sans-serif;


        font-weight: 500;
        letter-spacing: 0.9px;
        color:#000000;
        background-color: #ffffff;
        border-radius: 50px;
        padding: 20px;
    }
    .medicationlist ion-button{
        background-color: #ffffff;

    }
</style>

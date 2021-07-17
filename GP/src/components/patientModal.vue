<template >

        <div class="bigBox"  >
            <ion-grid class="bigGrid"  style="margin-top:40px; margin-bottom:40px;" >

                <span :class="{ active1 : (active===1)}" button=true @click="activate(1)" >Personal Info</span>
                <span :class="{ active2 : (active===2)}" button=true @click="activate(2)">Medical History</span>
                <span v-show="PI.dates" :class="{ active3 : (active===3)}" button=true @click="activate(3)">Previous Visits</span>
                <ion-row class= "ion-justify-content-center" v-show="active === 1">
                    <!-- <ion-row class= "ion-justify-content-center"> -->

                    <ion-col class="right" size-lg="10" pull-lg="0.1" size-xs="12">
                        <!-- <ion-col class="right" size-lg="6" pull-lg="2" size-xs="12"> -->
                        <h2>Patient Profile</h2>


                        <ion-row class= "ion-align-items-center ion-justify-content-center">
                            <!-- <ion-col > -->
                            <ion-col size-lg="2" size-xs="2" >
                                <!-- <img class="personal_photo" src="../../../public/me.jpg" alt="logo"  /> -->
                                <ion-avatar class="personal_photo2" >
                                    <img v-if="PatientInfo.photo != 'null'"  class="personal_photo"  :src="PatientInfo.photo" alt="logo"  />
                                    <img  v-else class="personal_photo"  src="../../public/me.jpg" alt="logo"  />
                                    <!-- </div> -->
                                </ion-avatar>

                            </ion-col>
                        </ion-row>
                        <div class="login-box" v-show="!edit" >

                            <ion-grid class="FormGrid" >


                                <ion-row>
                                    <ion-col size-lg="" size-xs="12" >
                                        <ion-label> First Name </ion-label>
                                        <p>  {{PI.first_name}} </p>
                                    </ion-col>

                                    <ion-col size-lg="" size-xs="12" >

                                        <ion-label> Last Name </ion-label>
                                        <p>  {{PI.last_name}} </p>

                                    </ion-col>

                                </ion-row>
                                <ion-row>

                                    <ion-col size-lg="" size-xs="12" >

                                        <ion-label> Birth Date </ion-label>
                                        <p>  {{PI.birth_date}} </p>
                                    </ion-col>
                                    <ion-col size="12" size-sm>

                                        <ion-label>Gender </ion-label>
                                        <ion-icon v-if="PI.gender === 'Female'"  ></ion-icon>
                                        <ion-icon v-if="PI.gender === 'Male'"   ></ion-icon>
                                        <p>  {{PI.gender}}</p>
                                    </ion-col>

                                </ion-row>
                                <ion-row>

                                    <ion-col size="12" size-sm>
                                        <ion-label>SSN </ion-label>
                                        <p> {{PI.ssn}}</p>

                                    </ion-col>
                                    <ion-col size="12" size-sm>
                                        <ion-label>Phone Number </ion-label>
                                        <p> {{PI.phone_number}}</p>
                                    </ion-col>

                                </ion-row>
                                <ion-row>

                                    <ion-col size="12" size-sm>
                                        <ion-label>Address </ion-label>
                                        <p> {{PI.address}}</p>

                                    </ion-col>

                                </ion-row>
                                <ion-row>
                                    <ion-col size="12" size-sm>
                                        <ion-label>Medication </ion-label>
                                        <p v-for="Medication in PI.Medications " :key="Medication"> {{Medication}}</p>
                                        <!-- <p :v-for="clinic in doctorInfo.clinics "> {{clinic}}</p> -->

                                    </ion-col>



                                </ion-row>

                                <ion-row  >
                                    <ion-col  size="12" size-sm>
                                        <ion-button  @click="editFn(0)" class="button">Edit</ion-button>

                                    </ion-col>
                                       <ion-col  size="12" size-sm>
                                        <ion-button  @click="cancel" class="button">Cancel</ion-button>

                                    </ion-col>



                                </ion-row>


                            </ion-grid>
                        </div>
                        <div class="login-box" v-show="edit" >

                            <ion-grid class="FormGrid" >


                                <ion-row>
                                    <ion-col size-lg="" size-xs="12" >
                                        <ion-label> First Name </ion-label>
                                        <input  type="text"  v-model="PatientInfo.first_name" >
                                    </ion-col>

                                    <ion-col size-lg="" size-xs="12" >

                                        <ion-label> Last Name </ion-label>
                                        <input  type="text"  v-model="PatientInfo.last_name" >

                                    </ion-col>

                                </ion-row>
                                <ion-row>

                                    <ion-col size-lg="" size-xs="12" >

                                        <ion-label> Birth Date </ion-label>
                                        <input  type="date"    v-model="PatientInfo.birth_date">
                                    </ion-col>
                                    <ion-col size="12" size-sm>

                                        <ion-label>Gender </ion-label>
                                        <div class="container">

                                            <ul>


                                                <li>
                                                    <input  type="radio" id="Male" name="gender"  v-model="PatientInfo.gender" value="Male"  >
                                                    <label style="color: #0d0d0d" for="Male"> Male </label>

                                                    <div class="check"><div class="inside"></div></div>
                                                </li>

                                                <li>
                                                    <input type="radio" id="Female" name="gender" v-model="PatientInfo.gender" value="Female">
                                                    <label style="color: #0d0d0d" for="Female"> Female </label>

                                                    <div class="check"><div class="inside"></div></div>
                                                </li>

                                            </ul>
                                        </div>

                                    </ion-col>

                                </ion-row>
                                <ion-row>

                                    <ion-col size="12" size-sm>
                                        <ion-label>SSN </ion-label>
                                        <input  type="text"    v-model="PatientInfo.ssn">
                                    </ion-col>
                                    <ion-col size="12" size-sm>
                                        <ion-label>Phone Number </ion-label>
                                        <input  type="text"    v-model="PatientInfo.phone_number">
                                    </ion-col>

                                </ion-row>
                                <ion-row>

                                    <ion-col size="12" size-sm>
                                        <ion-label>Address </ion-label>
                                        <input  type="text"    v-model="PatientInfo.address">

                                    </ion-col>

                                </ion-row>
                                <ion-row>
                                    <ion-col size="12" size-sm>
                                        <ion-label>Medication </ion-label>
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


                                    </ion-col>



                                </ion-row>

                                <ion-row  >
                                    <ion-col  size="12" size-sm>
                                        <ion-button @click="submitFn(0)" class="button">Submit</ion-button>

                                    </ion-col>
                                    <ion-col  size="12" size-sm>
                                        <ion-button  @click="cancel" class="button">Cancel</ion-button>

                                    </ion-col>



                                </ion-row>


                            </ion-grid>
                        </div>


                    </ion-col>
                </ion-row>


                <ion-row class= "ion-justify-content-center" v-show="active === 2">
                    <!-- <ion-row class= "ion-justify-content-center"> -->

                    <ion-col class="right" size-lg="10" pull-lg="0.1" size-xs="12">

                        <h2>Patient Profile</h2>

                        <div class="login-box" v-show="!edit2" >

                            <ion-grid class="FormGrid" >


                                <ion-row>
                                    <ion-col size-lg="" size-xs="12" >
                                        <ion-label> Major Illnesses </ion-label>
                                        <p>  {{PI.major_illnesses}} </p>
                                    </ion-col>

                                    <ion-col size-lg="" size-xs="12" >

                                        <ion-label> Previous Surgey </ion-label>
                                        <p>  {{PI.previous_surgery}} </p>

                                    </ion-col>

                                </ion-row>
                                <ion-row>

                                    <ion-col size-lg="" size-xs="12" >

                                        <ion-label> Previous Illnesses </ion-label>
                                        <p>  {{PI.previous_illnesses}} </p>
                                    </ion-col>
                                    <ion-col size="12" size-sm>

                                        <ion-label>Diabetes </ion-label>
                                        <p>  {{PI.diabetes}}</p>
                                    </ion-col>

                                </ion-row>
                                <ion-row>

                                    <ion-col size="12" size-sm>
                                        <ion-label>Smoker </ion-label>
                                        <p> {{PI.tobacco}}</p>

                                    </ion-col>
                                    <ion-col size="12" size-sm>
                                        <ion-label>Allergies </ion-label>
                                        <p> {{PI.allergies}}</p>
                                    </ion-col>

                                </ion-row>
                                <ion-row>

                                    <ion-col size="12" size-sm>
                                        <ion-label>Family Diseases </ion-label>
                                        <p> {{PI.family_diseases}}</p>

                                    </ion-col>

                                </ion-row>

                                <ion-row  >
                                    <ion-col  size="12" size-sm>
                                        <ion-button  @click="editFn(1)" class="button">Edit</ion-button>

                                    </ion-col>

                                    <ion-col  size="12" size-sm>
                                        <ion-button  @click="cancel" class="button">Cancel</ion-button>

                                    </ion-col>



                                </ion-row>


                            </ion-grid>
                        </div>
                        <div class="login-box" v-show="edit2" >

                            <ion-grid class="FormGrid" >


                                <ion-row>

                                        <ion-label> Major Illnesses  </ion-label>
                                        <textarea      v-model="MedicalHistory.major_illnesses"></textarea>

                                </ion-row>
                                <ion-row>

                                        <ion-label> Previous Surgery </ion-label>
                                        <textarea    v-model="MedicalHistory.previous_surgery"></textarea>


                                </ion-row>
                                <ion-row>

                                        <ion-label> Previous Illnesses </ion-label>
                                        <textarea    v-model="MedicalHistory.previous_illnesses"></textarea>



                                </ion-row>
                                <ion-row>

                                    <ion-label> Family Diseases </ion-label>
                                    <textarea    v-model="MedicalHistory.family_diseases"></textarea>


                                </ion-row>
                                <ion-row>

                                    <ion-label> Allergies    </ion-label>
                                    <textarea    v-model="MedicalHistory.allergies"></textarea>



                                </ion-row>

                                <ion-row>

                                    <ion-col size="12" size-sm>


                                        <ion-label> Diabetes </ion-label>
                                        <div class="container">

                                            <ul>

                                                <li>
                                                    <input type="radio" id="diabetes" name="diabetes" v-model="MedicalHistory.diabetes" value="yes"  >
                                                    <label style="color: #0d0d0d" for="diabetes"> Yes </label>

                                                    <div class="check"><div class="inside"></div></div>
                                                </li>

                                                <li>
                                                    <input type="radio" id="noDiabetes" name="diabetes" v-model="MedicalHistory.diabetes" value="no">
                                                    <label style="color: #0d0d0d" for="noDiabetes"> No </label>

                                                    <div class="check"><div class="inside"></div></div>
                                                </li>

                                            </ul>
                                        </div>


                                    </ion-col>

                                    <ion-col>
                                    <ion-label> Smoker </ion-label>
                                    <div class="container">

                                        <ul>

                                            <li>
                                                <input type="radio" id="Yes" name="tobacco" v-model=" MedicalHistory.tobacco" value="yes"  >
                                                <label style="color: #0d0d0d" for="Yes"> Yes </label>

                                                <div class="check"><div class="inside"></div></div>
                                            </li>

                                            <li>
                                                <input type="radio" id="No" name="tobacco" v-model=" MedicalHistory.tobacco" value="no">
                                                <label style="color: #0d0d0d" for="No"> No </label>

                                                <div class="check"><div class="inside"></div></div>
                                            </li>

                                        </ul>
                                    </div>

                    </ion-col>

                                </ion-row>

                                <ion-row  >
                                    <ion-col  size="12" size-sm>
                                        <ion-button @click="submitFn(1)" class="button">Submit</ion-button>

                                    </ion-col>
                                    <ion-col  size="12" size-sm>
                                        <ion-button  @click="cancel" class="button">Cancel</ion-button>

                                    </ion-col>



                                </ion-row>


                            </ion-grid>
                        </div>


                    </ion-col>
                </ion-row>

                <ion-row class= "ion-justify-content-center" v-show="active === 3">
                    <!-- <ion-row class= "ion-justify-content-center"> -->

                    <ion-col class="right" size-lg="10" pull-lg="0.1" size-xs="12">

                        <h2>Patient Profile</h2>


                        <div class="login-box"  >

                            <ion-grid class="FormGrid"  >


                                <ion-row >
                                    <ion-col size-lg="" size-xs="12" >
                                        <div v-for="(visit,index) in PI.dates " :key="visit">
                                        <h3> {{visit}}</h3>
                                        <p > {{PI.diagnosis[index]}}</p>
                                        </div> </ion-col>
                                </ion-row>

                                <ion-row  >
                                    <ion-col  size="12" size-sm>
                                        <ion-button  @click="cancel" class="button">Cancel</ion-button>

                                    </ion-col>



                                </ion-row>

                            </ion-grid>
                        </div>
                    </ion-col>
                </ion-row>
            </ion-grid>

        </div>

</template>

<script>
    import {

        IonLabel,
        modalController,
         IonRow,
          IonCol,
        IonAvatar ,
        IonGrid
    } from "@ionic/vue";
    import { defineComponent } from "vue";
    import { closeCircleOutline} from "ionicons/icons";
    import axios from 'axios';
    import {alertController} from '@ionic/vue';

    export default defineComponent({
        name: "PatientModal",
        props: ["PI"],
        components: {
            IonLabel,
             IonRow,
             IonCol,
            IonAvatar ,
            IonGrid
        },
        data(){return {
            active:1,
            edit:0,
            edit2:0,
            newInfo:{id:this.PI.patient_id},
            newMH:{id:this.PI.patient_id},
            MedicalHistory:{
                major_illnesses: this.PI.major_illnesses,
                previous_surgery:this.PI.previous_surgery,
                previous_illnesses:this.PI.previous_illnesses,
                diabetes:this.PI.diabetes,
                family_diseases:this.PI.family_diseases,
                allergies:this.PI.allergies,
                tobacco: this.PI.tobacco
            },
            PatientInfo: {
                photo: this.PI.photo,
                first_name: this.PI.first_name,
                last_name: this.PI.last_name,
                ssn: this.PI.ssn,
                phone_number: this.PI.phone_number,
                gender: this.PI.gender,
                birth_date: this.PI.birth_date,
                address: this.PI.address,
                Medications: this.PI.Medications,
            },
            closeCircleOutline,
            menuOpen: false,
            drugsInfo: [],
            drugname: "",
            drugpage: 1,
        };},
        computed: {

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
                this.id='1';
                axios.post(process.env.VUE_APP_ROOT_API + `updatePatient/` + this.id,{patient_id:this.PI.patient_id,item: item})
                    .then(() => {
                        console.log("done");
                    })
                    .catch(error => console.log(error));




            },
            DeleteFromList(item){
                const index = this.PatientInfo.Medications.indexOf(item);
                if (index > -1) {
                    this.PatientInfo.Medications.splice(index, 1);
                }
                this.id='2';
                axios.post(process.env.VUE_APP_ROOT_API + `updatePatient/` + this.id,{patient_id:this.PI.patient_id,item: item})
                    .then(() => {
                        console.log("done");
                    })
                    .catch(error => console.log(error));


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
            cancel() {
                modalController.dismiss();
            },
            activate(num)
            {
                this.active = num;
            },
            editFn(num){
                if(num ===0){
              this.edit= 1;}
              if(num===1){
                  this.edit2= 1;
              }

            },
            submitFn(num) {
                let complete = true;
                if(num ===0) {
                    for (const [key, value] of Object.entries(this.PatientInfo)) {
                        if (value === '') {

                            complete = false;
                        }
                        else if ((this.PI[key] !== this.PatientInfo[key]) && (key !== 'Medications')) {
                            this.newInfo[key] = this.PatientInfo[key];
                            console.log(this.PI[key] !== this.PatientInfo[key]);
                        }
                    }
                    console.log(this.newInfo);
                    if (complete) {

                        if(!this.PatientInfo.phone_number.match(/^\d{11}$/) || (!this.PatientInfo.ssn.match(/^\d{14}$/)) ){


                            this.presentAlert("invalid Phone number or National ID ");

                        }

                        else{

                            axios.post(process.env.VUE_APP_ROOT_API + "updatePatient", this.newInfo)
                                .then(() => {

                                    this.edit = 0;
                                    console.log(this.edit);
                                })
                                .catch(error => console.log(error));

                        }
                    }

                    else {
                        // alert("Please fill all the fields");
                        this.presentAlert("Please fill all the fields")

                    }
                }
                else if(num ===1){
                    for (const [key, value] of Object.entries(this.MedicalHistory)) {
                        if (value === '') {

                            complete = false;
                        }
                        else if (this.PI[key] !== this.MedicalHistory[key]) {
                            this.newMH[key] = this.MedicalHistory[key];

                        }
                    }
                    console.log(this.newMH);
                    if (complete) {


                        axios.post(process.env.VUE_APP_ROOT_API + "updateMedicalHistory", this.newMH)
                            .then(() => {

                                this.edit2 = 0;
                                console.log(this.edit);
                            })
                            .catch(error => console.log(error));
                    }

                    else {
                        // alert("Please fill all the fields");
                        this.presentAlert("Please fill all the fields")

                    }

                }
                }



        },
    });
</script>
<style scoped>

    .bigBox{

        position: relative;
        overflow: scroll ;
        height: 100%;
        text-align: center;
    }

    span{
        padding-right: 10px;

        background-color: white;
        color:black;
        position: relative;

        border-radius: 5px 5px 0 0;

    }
    .active1, .active2, .active3 {
        border: 5px solid #000000;
        box-shadow: 0 0 5px #000000,
        0 0 5px #03e9f4,
        0 0 5px #03e9f4,
        0 0 5px #03e9f4;
    }

    @import url('https://fonts.googleapis.com/css?family=Josefin+Sans&display=swap');
    .FormGrid ion-col {
        --ion-grid-column-padding: 10px;
    }
    .login-box h2 {
        margin: 0 0 30px;
        padding: 0;
        color: #ffffff;
        /* color: #05545a; */
        text-align: center;
        font-weight: bold;
    }

    ion-title{
        padding: 0;
    }
input{
    background-color: darkseagreen;
}


    .FormGrid ion-label{
        font-family: 'Josefin Sans', sans-serif;
        color: #000000;
        letter-spacing: 0.5px;
        font-size: 20px;
        font-weight: 600;


    }

    .FormGrid ion-row:not(:last-child){
        border-bottom: 0.4px solid rgb(3, 127, 136);
    }
    .FormGrid p{
        font-family: 'Josefin Sans', sans-serif;
        /* font-weight: 600; */
        font-size: 17px;
        margin-bottom: 10px;
        color: #747575;

    }
    .FormGrid p:hover{

        font-size: 19px;


    }

    ion-label,h3,ion-icon{
        color: #000000;
    }

    .right{
        background-color: #ffffff;
        padding: 30px 25px;
        border-radius: 10px 10px 10px 10px;

        color: rgb(0, 0, 0);
    }


    .right h2{
        margin-bottom: 15px;
        padding-bottom: 5px;
        /* font-family: 'Josefin Sans', sans-serif; */

        border-bottom: 2px solid rgb(3, 127, 136);
        color: #000000;
        text-transform: uppercase;
        letter-spacing: 5px;
    }
    input[type=radio]:checked ~ .check {
        border: 5px solid darkseagreen;
        box-shadow: 0 0 0 1px darkseagreen,
        0 0 25px darkseagreen,
        0 0 50px darkseagreen,
        0 0 100px darkseagreen;

    }
    textarea,input[type=radio]:checked ~ .check::before{
        background: darkseagreen;


    }

</style>
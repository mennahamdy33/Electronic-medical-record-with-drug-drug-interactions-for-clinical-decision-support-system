<template >
<ion-grid>
                  <ion-row class= "ion-align-items-center ion-justify-content-center">
                     <ion-col size="12" size-sm  >
                      <ion-avatar >
                          
                          <img v-if="PatientInfo.photo === 'null'"  class="personal_photo"  :src="default_photo" alt="logo"  />
                          <img  v-else class="personal_photo"  :src="PatientInfo.photo" alt="logo"  />
                          
                        </ion-avatar>
                        
                    </ion-col>
                   </ion-row>
                </ion-grid>
                 <ion-grid style="margin-top:50px;">
                  <ion-row>
                     
                    <ion-col size="12" size-sm >
                      <!-- <form-field type="text" LableText="Speciality"/> -->
                      <div class="image-input">

                          <input style="display: none;" type="file" accept="image/*" id="imageInput" @change="get_photo($event)">
                          <label for="imageInput" class="image-button"><i class="far fa-image"></i> Choose image</label>
                        <!-- 	<img src="" class="image-preview"> -->
                          <span class="change-image">Choose different image</span>
                     
                      </div>
                    </ion-col>
                  
                   </ion-row>
                </ion-grid>

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
                                                    <input type="radio" id="Male" name="gender" v-model="PatientInfo.gender" value="Male"  >
                                                    <label for="Male"> Male </label>

                                                    <div class="check"><div class="inside"></div></div>
                                                </li>

                                                <li>
                                                    <input type="radio" id="Female" name="gender" v-model="PatientInfo.gender" value="Female">
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
        IonAvatar

    } from "@ionic/vue";

    import { defineComponent } from 'vue';
    export default defineComponent({
        name: "PersonalInfo",
        components: {
            IonSearchbar,IonIcon,
            FormButton, IonGrid, IonRow, IonCol,IonButton,
            IonList, IonItem,IonText,
            IonCard,IonLabel,IonAvatar

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
                    photo: 'null',
                    birthdate: "",
                    address: "",
                    Medications: [],
                },

                drugsInfo: [],
                drugname: "",
                drugpage: 1,
                default_photo: require("../../../public/me.jpg"),
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

             async get_photo(event){
     
                const image = event.target.files[0];
                const reader = new FileReader();  
                reader.readAsDataURL(image);
                reader.onload = event =>{
                this.PatientInfo.photo = event.target.result;
                // console.log(this.PatientInfo.photo);
                    }

    
            }

        },

    });
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

    .personal_photo{
  min-height:110px;
  min-width:110px;
}

/* .image-input{ */

	/* text-align: center; */
  /* display: none; */
/* } */
	
	.image-button{

		/* display: block; */
		color: #FFF;
    width:150px;
		background: rgb(0, 173, 204)	;
		padding: .5rem .6rem;
		font-size: 115%;
    border-radius: 500px;
		cursor: pointer;
  }
		i
			{
        font-size: 125%;
			/* margin-right: .3rem; */
      }
		.image-button:hover
			{
        border: 1px solid #ffff;
			/* margin-right: .3rem; */
      }
	

	span
		{
    display: none;
		/* text-align: center; */
		cursor: pointer;}
</style>

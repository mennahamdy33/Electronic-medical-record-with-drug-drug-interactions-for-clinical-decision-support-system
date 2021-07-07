<template>

        <div class="bigBox" >
            <ion-grid class="bigGrid" style="margin-top:40px; margin-bottom:40px;" >

                <span :class="{ active1 : !active}" button=true @click="activate()" >Personal Info</span>
                <span :class="{ active2 : active}" button=true @click="activate()">Medical History</span>
                <ion-row class= "ion-justify-content-center" v-show="!active">
                    <!-- <ion-row class= "ion-justify-content-center"> -->

                    <ion-col class="right" size-lg="10" pull-lg="0.1" size-xs="12">
                        <!-- <ion-col class="right" size-lg="6" pull-lg="2" size-xs="12"> -->
                        <h2>Patient Profile</h2>


                        <div class="login-box" >

                            <ion-grid class="FormGrid" >


                                <ion-row>
                                    <ion-col size-lg="" size-xs="12" >
                                        <ion-label> First Name </ion-label>
                                        <p>  {{FirstName}} </p>
                                    </ion-col>

                                    <ion-col size-lg="" size-xs="12" >

                                        <ion-label> Last Name </ion-label>
                                        <p>  {{LastName}} </p>

                                    </ion-col>

                                </ion-row>
                                <ion-row>

                                    <ion-col size-lg="" size-xs="12" >

                                        <ion-label> Birth Date </ion-label>
                                        <p>  {{birthdate}} </p>
                                    </ion-col>
                                    <ion-col size="12" size-sm>

                                        <ion-label>Gender </ion-label>
                                        <ion-icon v-if="Gender === 'Female'"  :icon="female" ></ion-icon>
                                        <ion-icon v-if="Gender === 'Male'"  :icon="male" ></ion-icon>
                                        <p>  {{Gender}}</p>
                                    </ion-col>

                                </ion-row>
                                <ion-row>

                                    <ion-col size="12" size-sm>
                                        <ion-label>SSN </ion-label>
                                        <p> {{SSN}}</p>

                                    </ion-col>
                                    <ion-col size="12" size-sm>
                                        <ion-label>Phone Number </ion-label>
                                        <p> {{PhoneNumber}}</p>
                                    </ion-col>

                                </ion-row>
                                <ion-row>

                                    <ion-col size="12" size-sm>
                                        <ion-label>Address </ion-label>
                                        <p> {{Address}}</p>

                                    </ion-col>

                                </ion-row>
                                <ion-row>
                                    <ion-col size="12" size-sm>
                                        <ion-label>Medication </ion-label>
                                        <p v-for="Medication in Medications " :key="Medication"> {{Medication}}</p>
                                        <!-- <p :v-for="clinic in doctorInfo.clinics "> {{clinic}}</p> -->

                                    </ion-col>



                                </ion-row>

                                <ion-row  >
                                    <ion-col  size="12" size-sm>
                                        <ion-button   class="button">Edit</ion-button>

                                    </ion-col>
                                       <ion-col  size="12" size-sm>
                                        <ion-button  @click="cancel" class="button">Cancel</ion-button>

                                    </ion-col>



                                </ion-row>


                            </ion-grid>
                        </div>


                    </ion-col>
                </ion-row>


                <ion-row class= "ion-justify-content-center" v-show="active">
                    <!-- <ion-row class= "ion-justify-content-center"> -->

                    <ion-col class="right" size-lg="10" pull-lg="0.1" size-xs="12">
                        <!-- <ion-col class="right" size-lg="6" pull-lg="2" size-xs="12"> -->
                        <h2>Patient Profile</h2>


                        <div class="login-box" >

                            <ion-grid class="FormGrid" >


                                <ion-row>
                                    <ion-col size-lg="" size-xs="12" >
                                        <ion-label> major_illnesses </ion-label>
                                        <p>  {{major_illnesses}} </p>
                                    </ion-col>

                                    <ion-col size-lg="" size-xs="12" >

                                        <ion-label> previous_surgey </ion-label>
                                        <p>  {{previous_surgey}} </p>

                                    </ion-col>

                                </ion-row>
                                <ion-row>

                                    <ion-col size-lg="" size-xs="12" >

                                        <ion-label> previous_illnessess </ion-label>
                                        <p>  {{previous_illnessess}} </p>
                                    </ion-col>
                                    <ion-col size="12" size-sm>

                                        <ion-label>diabetes </ion-label>
                                        <p>  {{diabetes}}</p>
                                    </ion-col>

                                </ion-row>
                                <ion-row>

                                    <ion-col size="12" size-sm>
                                        <ion-label>tobacco </ion-label>
                                        <p> {{tobacco}}</p>

                                    </ion-col>
                                    <ion-col size="12" size-sm>
                                        <ion-label>allergies </ion-label>
                                        <p> {{allergies}}</p>
                                    </ion-col>

                                </ion-row>
                                <ion-row>

                                    <ion-col size="12" size-sm>
                                        <ion-label>family_diseases </ion-label>
                                        <p> {{family_diseases}}</p>

                                    </ion-col>

                                </ion-row>

                                <ion-row  >
                                    <ion-col  size="12" size-sm>
                                        <ion-button   class="button">Edit</ion-button>

                                    </ion-col>
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
        IonGrid
    } from "@ionic/vue";
    import { defineComponent } from "vue";

    export default defineComponent({
        name: "PatientModal",
        props: ["SSN", "FirstName","Address", "LastName","PhoneNumber","birthdate","Medications","Gender","major_illnesses",
            "previous_surgey",
            "previous_illnessess",
            "diabetes",
            "family_diseases",
            "allergies",
            "tobacco"],
        components: {
            IonLabel,
             IonRow,
             IonCol,
            IonGrid
        },
        data(){return {
            active:false
    };},
        computed: {

        },
        methods: {

            cancel() {
                modalController.dismiss();
            },
            activate()
            {
                this.active = !this.active;
            },
            test(id){
                console.log(id)
            }

        },
    });
</script>
<style scoped>
    .bigBox{

        position: relative;
        overflow: scroll ;
    }
    span{
        padding-right: 10px;

        background-color: white;
        color:black;
        position: relative;
        left: 30%;
        border-radius: 5px 5px 0 0;

    }
    .active1 {
        border: 5px solid #000000;
        box-shadow: 0 0 5px #000000,
        0 0 5px #03e9f4,
        0 0 5px #03e9f4,
        0 0 5px #03e9f4;
    }
    .active2 {
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

</style>
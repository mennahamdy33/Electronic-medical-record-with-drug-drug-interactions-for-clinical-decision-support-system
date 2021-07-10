<template >

        <div class="bigBox"  >
            <ion-grid class="bigGrid"  style="margin-top:40px; margin-bottom:40px;" >

                <span :class="{ active1 : (active===1)}" button=true @click="activate(1)" >Personal Info</span>
                <span :class="{ active2 : (active===2)}" button=true @click="activate(2)">Medical History</span>
                <span v-show="visits" :class="{ active3 : (active===3)}" button=true @click="activate(3)">Previous Visits</span>
                <ion-row class= "ion-justify-content-center" v-show="active === 1">
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


                <ion-row class= "ion-justify-content-center" v-show="active === 2">
                    <!-- <ion-row class= "ion-justify-content-center"> -->

                    <ion-col class="right" size-lg="10" pull-lg="0.1" size-xs="12">

                        <h2>Patient Profile</h2>


                        <div class="login-box" >

                            <ion-grid class="FormGrid" >


                                <ion-row>
                                    <ion-col size-lg="" size-xs="12" >
                                        <ion-label> Major Illnesses </ion-label>
                                        <p>  {{major_illnesses}} </p>
                                    </ion-col>

                                    <ion-col size-lg="" size-xs="12" >

                                        <ion-label> Previous Surgey </ion-label>
                                        <p>  {{previous_surgey}} </p>

                                    </ion-col>

                                </ion-row>
                                <ion-row>

                                    <ion-col size-lg="" size-xs="12" >

                                        <ion-label> Previous Illnessess </ion-label>
                                        <p>  {{previous_illnessess}} </p>
                                    </ion-col>
                                    <ion-col size="12" size-sm>

                                        <ion-label>Diabetes </ion-label>
                                        <p>  {{diabetes}}</p>
                                    </ion-col>

                                </ion-row>
                                <ion-row>

                                    <ion-col size="12" size-sm>
                                        <ion-label>Smoker </ion-label>
                                        <p> {{tobacco}}</p>

                                    </ion-col>
                                    <ion-col size="12" size-sm>
                                        <ion-label>Allergies </ion-label>
                                        <p> {{allergies}}</p>
                                    </ion-col>

                                </ion-row>
                                <ion-row>

                                    <ion-col size="12" size-sm>
                                        <ion-label>Family Diseases </ion-label>
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

                <ion-row class= "ion-justify-content-center" v-show="active === 3">
                    <!-- <ion-row class= "ion-justify-content-center"> -->

                    <ion-col class="right" size-lg="10" pull-lg="0.1" size-xs="12">

                        <h2>Patient Profile</h2>


                        <div class="login-box"  >

                            <ion-grid class="FormGrid"  >


                                <ion-row >
                                    <ion-col size-lg="" size-xs="12" >
                                        <ion-label>Visits Datess </ion-label>
                                        <p v-for="visit in visits " :key="visit"> {{visit}}</p>

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
            "tobacco",
            "visits"],
        components: {
            IonLabel,
             IonRow,
             IonCol,
            IonGrid
        },
        data(){return {
            active:1
    };},
        computed: {

        },
        methods: {

            cancel() {
                modalController.dismiss();
            },
            activate(num)
            {
                this.active = num;
                console.log(this.visits);
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
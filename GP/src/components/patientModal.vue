<template>

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
                        <!-- <p :v-for="clinic in clinics "> {{clinic}}</p> -->

                    </ion-col>



                </ion-row>

                <ion-row  >
                    <ion-col offset-lg="10" size="12" size-sm>
                        <ion-button  @click="cancel" class="button">Cancel</ion-button>

                    </ion-col>



                </ion-row>


            </ion-grid>
        </div>

</template>

<script>
    import {

        IonLabel,
        modalController,
        // IonRow,
        //  IonCol
    } from "@ionic/vue";
    import { defineComponent } from "vue";

    export default defineComponent({
        name: "PatientModal",
        props: ["SSN", "FirstName","Address", "LastName","PhoneNumber","birthdate","Medications","Gender"],
        components: {
            IonLabel,
            // IonRow,
            // IonCol,
        },
        computed: {
            currentDate() {
                // const current = new Date();
                // current= current.toLocaleDateString();
                // var currentConvDate= current.toLocaleDateString();
                // currentConvDate =currentConvDate.replaceAll("/","-")
                // console.log( currentConvDate);
                // if (currentConvDate) {
                //   return {currentConvDate};
                // }
                // else{
                return "2021-02-05";
                // }
            },
        },
        methods: {

            cancel() {
                modalController.dismiss();
            },
        },
    });
</script>
<style>
    .FormGrid ion-col {
        --ion-grid-column-padding: 20px;
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

    .login-box h2 {
        margin: 0 0 30px;
        padding: 0;
        color: #ffffff;
        /* color: #05545a; */
        text-align: center;
        font-weight: bold;
    }
    /* form-field */
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
        top: 0;
        left: 0;
        padding: 10px 0;
        font-size: 16px;
        color: #fff;
        pointer-events: none;
        transition: 0.5s;
    }

    .login-box .user-box input:focus ~ label,
    .login-box .user-box input:valid ~ label {
        top: -20px;
        left: 0;
        color: #03e9f4;
        font-size: 16px;
        font-weight: bold;
    }

</style>
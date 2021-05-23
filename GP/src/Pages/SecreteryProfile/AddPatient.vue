<template >

    <base-template>

        <ion-grid>
            <ion-row>

                <ion-col offset-lg="2" size-lg="8">
                    <div class="login-box">
                        <h2>Add a new Patient</h2>

                        <ion-col style=" position: relative; left: 20%;" offset-lg="0.9" pull-xs="0"  size-lg="6" size-xs="15" >
                            <progress-bar    text="addPatient"></progress-bar>
                        </ion-col>
                        <keep-alive>
                            <personal-info v-if=" PatientPhase === 'PersonalInfo'" />
                        </keep-alive>

                        <keep-alive>
                            <medical-history v-if=" PatientPhase === 'MedicalHistory'" />
                        </keep-alive>


                    </div>
                </ion-col>
            </ion-row>


        </ion-grid>

    </base-template>
</template>
<script>
    import ProgressBar from '../../components/ProgressBar.vue';

    import MedicalHistory from './MedicalHistory.vue';
    import PersonalInfo from './PersonalInfo.vue';
    import { mapGetters } from 'vuex';

    import {

        IonGrid,IonRow,IonCol,

    } from "@ionic/vue";
    import BaseTemplate from "../../components/BaseTemplate";
    import { defineComponent,KeepAlive } from 'vue';
    export default defineComponent({
        name: "AddPatient",
        components: {
            PersonalInfo,
            BaseTemplate,
            IonGrid, IonRow, IonCol,
            ProgressBar,
            MedicalHistory,
            KeepAlive

        },
        data() {
            return {

            };
        },
        computed: {
            ...mapGetters('patient',['PatientPhase'])

        }
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

</style>

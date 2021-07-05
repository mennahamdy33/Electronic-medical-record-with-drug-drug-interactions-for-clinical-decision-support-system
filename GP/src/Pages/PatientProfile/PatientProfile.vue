<template>

    <ion-menu side="start" menu-id="first" content-id="main">
        <ion-content>
            <ion-list>


                <ion-item button router-link="/MainPageDoctor/MySchedules">My Schedules</ion-item>
                <ion-item href="/bookDoctor">Search a Patient</ion-item>
                <ion-item button router-link="/MainPageDoctor/Prescription">Prescription</ion-item>
                <ion-item button router-link="/MainPageDoctor/MyProfileDoctor">My Profile</ion-item>
                <!-- <ion-item href="/Prescription">Prescription</ion-item> -->
            </ion-list>
        </ion-content>
    </ion-menu>

    <ion-content id="main" class="content"    >
        <div style=" position: -webkit-sticky;position: sticky;  top: 0;">
            <ion-header   >
                <ion-toolbar class="tool"  >
                    <!-- <ion-toolbar color="primary"> -->
                    <ion-buttons slot="start">
                        <ion-menu-button auto-hide="false"></ion-menu-button>
                    </ion-buttons>

                    <ion-buttons slot="secondary">



                        <ion-avatar class="personal_photo_bar" >
                            <img  src="../../../public/me.jpg" alt="logo"  />
                        </ion-avatar>

                        <ion-button>
                            <ion-icon slot="icon-only" :icon="search"></ion-icon>
                        </ion-button>
                    </ion-buttons>
                    <ion-buttons slot="primary">
                        <ion-button color="danger">
                            <ion-icon slot="icon-only" :icon="logOut"></ion-icon>
                        </ion-button>
                    </ion-buttons>

                    <ion-title>


                        <ion-grid>
                            <ion-row>
                                <ion-col size-lg="1.7" size-md="3" size-sm="4" size-xs="12">
                                    <img :src="img" alt="logo" />
                                </ion-col>
                            </ion-row>
                        </ion-grid>
                    </ion-title>
                </ion-toolbar>
            </ion-header>
        </div>
        <ion-grid style="margin-top:40px; margin-bottom:40px;" >
            <ion-row class= "ion-justify-content-center">
                <!-- <ion-row class= "ion-justify-content-center"> -->

                <ion-col class="right" size-lg="6" pull-lg="0.1" size-xs="12">
                    <!-- <ion-col class="right" size-lg="6" pull-lg="2" size-xs="12"> -->
                    <h2>Patient Profile</h2>
                    <div class="login-box" >

                        <ion-grid class="FormGrid" >


                            <ion-row>
                                <ion-col size-lg="" size-xs="12" >
                                    <ion-label> First Name </ion-label>
                                    <p>  {{doctorInfo.FistName}} </p>
                                </ion-col>

                                <ion-col size-lg="" size-xs="12" >

                                    <ion-label> Last Name </ion-label>
                                    <p>  {{doctorInfo.LastName}} </p>
                                </ion-col>

                            </ion-row>
                            <ion-row>

                                <ion-col size-lg="" size-xs="12" >

                                    <ion-label> Birth Date </ion-label>
                                    <p>  {{doctorInfo.birthdate}} </p>
                                </ion-col>
                                <ion-col size="12" size-sm>

                                    <ion-label>Gender </ion-label>
                                    <ion-icon v-if="doctorInfo.Gender === 'Female'"  :icon="female" ></ion-icon>
                                    <ion-icon v-if="doctorInfo.Gender === 'Male'"  :icon="male" ></ion-icon>
                                    <p>  {{doctorInfo.Gender}}</p>
                                </ion-col>

                            </ion-row>
                            <ion-row>

                                <ion-col size="12" size-sm>
                                    <ion-label>SSN </ion-label>
                                    <p> {{doctorInfo.ssn}}</p>

                                </ion-col>
                                <ion-col size="12" size-sm>
                                    <ion-label>Phone Number </ion-label>
                                    <p> {{doctorInfo.PhoneNumber}}</p>
                                </ion-col>

                            </ion-row>
                            <ion-row>

                                <ion-col size="12" size-sm>
                                    <ion-label>Address </ion-label>
                                    <p> {{doctorInfo.Address}}</p>

                                </ion-col>

                            </ion-row>
                            <ion-row>
                                <ion-col size="12" size-sm>
                                    <ion-label>Medication </ion-label>
                                    <p v-for="Medication in doctorInfo.Medications " :key="Medication"> {{Medication}}</p>
                                    <!-- <p :v-for="clinic in doctorInfo.clinics "> {{clinic}}</p> -->

                                </ion-col>



                            </ion-row>

                            <ion-row  >
                                <ion-col offset-lg="10" size="12" size-sm>
                                    <ion-button   class="button">Edit</ion-button>

                                </ion-col>



                            </ion-row>


                        </ion-grid>
                    </div>


                </ion-col>
            </ion-row>
        </ion-grid>
        <!-- <router-view > <MyProfileDoctor/> </router-view> -->
    </ion-content>

</template>
<script>
    import { defineComponent } from 'vue';
    import {
        add,
        ellipsisHorizontal,
        ellipsisVertical,
        helpCircle,
        personCircle,
        search,
        star,
        logOut,
        closeCircle
    } from "ionicons/icons";

    import {
        // IonList,
        IonLabel,
        // IonItem,
        IonGrid,
        IonIcon,
        IonRow,
        IonCol,
        IonButton   } from "@ionic/vue";
    // import BaseTemplate from "../../components/BaseTemplate";
    export default defineComponent({
        name: 'MyProfileDoctor',
        components:{
            // BaseTemplate,
            // IonList,
            // IonItem,
            IonGrid,
            IonLabel,
            IonIcon,
            IonRow,
            IonCol,
            IonButton
        },

        data(){
            return {
                //icons start
                add,
                ellipsisHorizontal,
                ellipsisVertical,
                helpCircle,
                personCircle,
                search,
                star,
                logOut,
                closeCircle,
                img: require("../../../public/logobig.png"),
                doctorInfo:{
                    FistName:  "Menna",
                    LastName: "Hamdy",
                    ssn:"242423435t4",
                    birthdate:"2021-04-14",
                    Medications:['medication1','medication2','medication3'],
                    Gender: "Female",
                    Birthdate:"5/12/1998",
                    PhoneNumber:"01224235423",
                    Address:"hth,ggrgr,geg",

                },
            };
        }
    });
</script>
<style scoped>
    @import url('https://fonts.googleapis.com/css?family=Josefin+Sans&display=swap');
    .content {
        margin: 0;
        padding: 0;
        font-family: sans-serif;
        --background: linear-gradient(#141e30, #243b55);
    }
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
    img {
        display: block;
        /* margin-left: auto;
        margin-right: auto; */
        /* padding: 5px; */
        /* width:13em; */
    }
    .tool{
        --background: #141e30;
        /* --border-color: #80fbff;
        --border-width: 2px; */

    }
    ion-title{
        padding: 0;
    }



    .FormGrid ion-col{
        --ion-grid-column-padding: 20px;

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
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;

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
    .left ion-label{
        letter-spacing: 0.4px;
        color: #fff;
        font-size: 25px;
        font-weight: 600;
        font-family: 'Josefin Sans', sans-serif;
        margin-left: -10px;



    }

</style>
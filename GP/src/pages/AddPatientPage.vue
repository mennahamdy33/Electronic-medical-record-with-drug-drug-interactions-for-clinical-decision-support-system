<template >
    <ion-page >
        <ion-menu side="start" menu-id="first" content-id="main"  >
            <ion-header>
                <ion-toolbar color="primary">
                    <ion-title >Start Menu</ion-title>
                </ion-toolbar>
            </ion-header>
            <ion-content >
                <ion-list >

                    <ion-item router-link="/addpatient"> Add Patient</ion-item>
                    <ion-item router-link="/">Book A Doctor</ion-item>
                    <ion-item router-link="/patientProfile">Edit Patient's Profile</ion-item>
                    <ion-item>Edit My Profile</ion-item>
                    <ion-item>System settings</ion-item>
                </ion-list>
            </ion-content>
        </ion-menu>        <ion-header >
            <ion-toolbar >
                <ion-buttons slot="start">
                    <ion-menu-button auto-hide="false" disabled="false"  ></ion-menu-button>
                </ion-buttons>



                <ion-title>
                    Add a Patient
                    <!--<img :src="img" alt="logo" width="70" height="45" />-->
                    <!-- {{ title }} -->
                </ion-title>
            </ion-toolbar>
        </ion-header>

        <ion-content class="content" id="main" color="primary">



                <!-- <div class="content"> -->
                <ion-grid  >
                    <ion-row>

                        <ion-col offset-lg="2" size-lg="8">
                            <div class="login-box">
                                <form v-on:submit.prevent="">
                                    <ion-grid class="FormGrid">
                                        <ion-row>
                                            <ion-col size="12" size-sm>
                                                <form-field LableText="First Name"/>
                                            </ion-col>
                                            <ion-col size="12" size-sm>
                                                <form-field LableText="Last Name"/>
                                            </ion-col>
                                        </ion-row>

                                        <ion-row>
                                            <ion-col size="12" size-sm>
                                                <form-field LableText="National ID"/>
                                            </ion-col>
                                        </ion-row>

                                        <ion-row>

                                            <ion-col size="12" size-sm>
                                                <form-field type="date" LableText="Birth Date"/>
                                            </ion-col>
                                            <ion-col size="12" size-sm>
                                                <label style="color:white; font-size:18px;">Gender</label>
                                                <radio-form id="Male"/>
                                                <radio-form id="Female"/>
                                            </ion-col>
                                        </ion-row>

                                        <ion-row>

                                        </ion-row>

                                        <ion-row>
                                            <ion-col size="12" size-sm>
                                                <form-field LableText="Phone Number"/>
                                            </ion-col>
                                        </ion-row>
                                        <ion-row>
                                            <ion-col size="12" size-sm>
                                                <form-field LableText="Address"/>
                                            </ion-col>
                                        </ion-row>
                                        <ion-row>
                                            <ion-col size="12" class="medication" size-sm>
                                                <IonLabel>Medications</IonLabel>
                                                <ion-searchbar    v-model="filterTerm" />

                                                <IonList interface="sheet-action" placeholder="search..."   >

                                                    <IonItem button="true" @click="showMed(med)" v-for="med in resultQuery" :key="med" value="{{med}}"  >{{med}}</IonItem>
                                                </IonList>

                                            </ion-col>
                                        </ion-row>
                                    </ion-grid>
                                    <ion-row>
                                        <ion-col size-lg="2" size-xs="6" >
                                            <form-button/>
                                        </ion-col>
                                    </ion-row>

                                </form>
                            </div>
                        </ion-col>

                        <!-- <ion-col offset-lg="1" offset-xs="4" size-lg="2" size-xs="4" class="ion-align-self-end">
                         <div class="image">

                           <img src="../public/assets/logo12.png"  >
                           <img src="../public/assets/logo4.png"  >

                         </div>
                       </ion-col> -->
                    </ion-row>


                </ion-grid>

            </ion-content>
    </ion-page>
</template>
<script>

import RadioForm from '../components/RadioForm';
import FormButton from '../components/FormButton';
import FormField from '../components/FormField';
    import {IonMenu,IonSearchbar,IonGrid,IonRow,IonCol,IonLabel,IonPage,IonHeader,IonContent,IonList,IonItem,IonToolbar,IonTitle ,IonButtons,IonMenuButton   } from "@ionic/vue";
    export default {
        components:{
            IonMenu,IonSearchbar,RadioForm,FormButton,FormField,IonGrid,IonRow,IonLabel,IonCol, IonButtons,IonMenuButton,IonHeader,IonTitle,IonToolbar,IonContent,IonList,IonItem,IonPage
                },
        data(){
            return {
            medications:["med1","med2","med3","med4","med5","med5","med5","med5","med5","med5","med5","med5","med5",
            ],
                filterTerm: '',
            };
        },
        methods:{
          showMed(med){
              console.log(med);
          },
        },
        computed: {
            resultQuery(){
                if(this.filterTerm){
                    return this.medications.filter((item)=>{
                        return this.filterTerm.toLowerCase().split(' ').every(v => item.toLowerCase().includes(v))
                    })
                }else{
                    return this.medications;
                }
            }
        }
    }
</script>
<style>
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
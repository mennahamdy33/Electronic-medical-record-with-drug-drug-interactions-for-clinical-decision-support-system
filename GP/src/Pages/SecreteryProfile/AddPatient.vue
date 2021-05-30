<template >

    <!-- <base-template> -->

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

    <!-- </base-template> -->
</template>
<script>
    import ProgressBar from '../../components/ProgressBar.vue';

    import MedicalHistory from './MedicalHistory.vue';
    import PersonalInfo from './PersonalInfo.vue';
    import { mapGetters } from 'vuex';

    import {

        IonGrid,IonRow,IonCol,

    } from "@ionic/vue";
    // import BaseTemplate from "../../components/BaseTemplate";
    import { defineComponent,KeepAlive } from 'vue';
    export default defineComponent({
        name: "AddPatient",
        components: {
            PersonalInfo,
            // BaseTemplate,
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

</style>

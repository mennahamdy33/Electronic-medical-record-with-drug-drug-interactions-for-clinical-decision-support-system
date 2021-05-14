<template>

            <ion-grid  >
                <ion-row class= "ion-justify-content-center">
                    <ion-col class="left" size-lg="4" offset-lg="2" size-xs="12">
                        

                        
                        <ion-grid  >
                            <ion-row >
                                <!-- <ion-col > -->
                                <ion-col size-lg="4" >
                                <!-- <img class="personal_photo" src="../../../public/me.jpg" alt="logo"  /> -->
                                <ion-avatar class="personal_photo2" >
                                <!-- <div class="personal_photo2" > -->
                                    <img   class="personal_photo"  src="../../../public/me.jpg" alt="logo"  />
                                <!-- </div> -->
                                </ion-avatar>
                                
                                </ion-col>
                            </ion-row>
                            <ion-row >
                                <ion-col  >
                                <h2> Noran Tharowat </h2>
                                </ion-col>
                            </ion-row>
                        </ion-grid>
                            
                    </ion-col>

                    <ion-col class="right" size-lg="6" pull-lg="2" size-xs="12">
                            <h2 >My Profile</h2>
                        <div class="login-box" >
                            
                            <ion-grid class="FormGrid" >
                                
                                
                                <ion-row>

                                    <h3> Name: {{doctorInfo.FistName}} {{doctorInfo.LastName}}</h3>

                                </ion-row>
                                <ion-row>
                                    <ion-col size="12" size-sm>

                                        <ion-label>
                                            Gender: {{doctorInfo.Gender}} </ion-label>
                                        <ion-icon v-if="doctorInfo.Gender === 'Female'"  :icon="female" ></ion-icon>
                                        <ion-icon v-if="doctorInfo.Gender === 'Male'"  :icon="male" ></ion-icon>
                                    </ion-col>

                                    <ion-col size="12" size-sm>
                                        <ion-label>SSN: {{doctorInfo.ssn}}</ion-label>

                                    </ion-col>
                                </ion-row>
                                <ion-row>
                                    <ion-col size="12" size-sm>
                                        <ion-label>Phone Number: {{doctorInfo.PhoneNumber}}</ion-label>

                                    </ion-col>

                                    <ion-col size="12" size-sm>
                                        <ion-label>Address: {{doctorInfo.Address}}</ion-label>

                                    </ion-col>

                                </ion-row>
                                <ion-row>
                                    <ion-col size="12" size-sm>
                                        <ion-label>Education: {{doctorInfo.Education}}</ion-label>

                                    </ion-col>

                                    <ion-col size="12" size-sm>
                                        <ion-label>Specialty: {{doctorInfo.Specialty}}</ion-label>

                                    </ion-col>

                                </ion-row>
                                <ion-row>
                                    <ion-col size="12" size-sm>
                                        <ion-label>Patients:</ion-label>
                                        <ion-list style="background-color:var(--ion-color-primary); ">
                                            <ion-item  lines="none" v-for="Patient in doctorInfo.Patients " :key="Patient"  > {{Patient}}</ion-item>
                                        </ion-list>
                                    </ion-col>
                                </ion-row>
                                
                            </ion-grid>
                        </div>


                    </ion-col>
                </ion-row>
            </ion-grid>

</template>
<script>
    import { defineComponent } from 'vue';
    import { female,male} from "ionicons/icons";
    import {
        IonList,
        IonLabel,
        IonItem,
        IonGrid,
        IonIcon,
        IonRow,
        IonCol    } from "@ionic/vue";
    // import BaseTemplate from "../../components/BaseTemplate";
    export default defineComponent({
        name: 'MyProfileDoctor',
        components:{
            // BaseTemplate,
            IonList,
            IonItem,
            IonGrid,
            IonLabel,
            IonIcon,
            IonRow,
            IonCol
        },

        data(){
            return {
                female,
                male,
                doctorInfo:{
                    FistName:  "Menna",
                    LastName: "Hamdy",
                    ssn:"242423435t4",
                    Gender: "Female",
                    Birthdate:"5/12/1998",
                    PhoneNumber:"01224235423",
                    Address:"hth,ggrgr,geg",
                    Education:'',
                    Specialty:'',
                    Patients:['patient1','patient2','patient3']
                },
            };
        }
    });
</script>
<style scoped>
    .FormGrid ion-col{
        --ion-grid-column-padding: 20px;

    }



    /* .login-box h2 {
        font-family: 'Monoton';
        margin: 0 0 30px;
        padding: 0;
        color: #ffffff;
        font-size: 45px;
        letter-spacing: 5px;

        text-align: center;
        font-weight: 100;
    } */

    ion-label,h3,ion-icon{
    color: #000000;
}

.left{
  background: linear-gradient(to right,#7bfdff9c,#2ffcff);
  padding: 30px 25px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  
  color: #fff;
}
.right{
    background-color: #ffffff;
    padding: 30px 25px;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    
    color: rgb(0, 0, 0);
}
.personal_photo{
    /* margin-top: 2px; */
    /* border-radius: 50%; */
    border: 3px solid rgb(0, 251, 255)
}
.personal_photo2{
    min-height:150px;
    min-width:150px;  
    /* max-height:40px;
    max-width:40px;   */
    /* border-radius: 50%; */
    border: 3px solid rgb(3, 127, 136)
}


@media only screen and (max-width: 600px) {
    .personal_photo2{
    min-height:90px;
    min-width:90px;  
    
   
    border: 3px solid rgb(3, 127, 136)
}

}
 .right h2{
    margin-bottom: 15px;
    padding-bottom: 5px;
    
    border-bottom: 2px solid rgb(3, 127, 136);
    color: #000000;
    text-transform: uppercase;
    letter-spacing: 5px;
}
</style>
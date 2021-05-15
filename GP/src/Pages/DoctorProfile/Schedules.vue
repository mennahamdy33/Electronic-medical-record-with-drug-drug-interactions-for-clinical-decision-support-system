<template>

            <ion-grid style="margin-top:40px; margin-bottom:40px;" >
                <ion-row class= "ion-justify-content-center">
                <!-- <ion-row class= "ion-justify-content-center"> -->
                    <ion-col class="left"  size-lg="2.5"  size-xs="12">
                    <!-- <ion-col class="left"  size-lg="4" offset-lg="2" size-xs="12"> -->
                        

                        
                        <ion-grid  >
                            
                            <ion-row >
                                <ion-col  >
                                <ion-label> {{dayofweek.daysofweek}} </ion-label>
                                </ion-col>
                            </ion-row>
                            <ion-row >
                                <ion-col  >
                                <ion-label> {{dayofweek.full}} </ion-label>
                                </ion-col>
                            </ion-row>
                        </ion-grid>
                            
                    </ion-col>

                    <ion-col class="right" size-lg="6" pull-lg="0.1" size-xs="12">
                    <!-- <ion-col class="right" size-lg="6" pull-lg="2" size-xs="12"> -->
                            <h2>Today's Visits</h2>
                        <div class="login-box" >
                            
                            <ion-grid class="FormGrid" >
                                
                                
                               
                               
                                <ion-row v-for="visit in visits " :key="visit.Time">
                                    <ion-col  size="12" size-sm>
                                    <!-- <ion-col size="12" size-sm> -->
                                        <!-- <ion-label >Work In </ion-label> -->
                                        <ion-label >Patient: {{visit.PatientName}}, Time: {{visit.Time}} </ion-label>
                                        <!-- <p v-for="clinic in doctorInfo.clinics " :key="clinic"> {{clinic}}</p> -->
                                        <!-- <p :v-for="clinic in doctorInfo.clinics "> {{clinic}}</p> -->

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
    // import { female,male} from "ionicons/icons";
    import {
        // IonList,
        IonLabel,
        // IonItem,
        IonGrid,
        // IonIcon,
        IonRow,
        IonCol,
        // IonAvatar ,
        // IonButton  
        } from "@ionic/vue";
    // import BaseTemplate from "../../components/BaseTemplate";
    export default defineComponent({
        name: 'MyProfileDoctor',
        components:{
            // BaseTemplate,
            // IonList,
            // IonItem,
            IonGrid,
            IonLabel,
            // IonIcon,
            IonRow,
            IonCol,
            // IonAvatar,
            // IonButton
        },

        data(){
            return {
                
                
                  
                // visits:[]
                visits:[{PatientName:"Noran" , Time:"03:30:00"},{PatientName:"Noran2" , Time:"03:45:00"}]
                
            };
        },

        computed:{
            dayofweek(){
                let today = new Date()
                let day = String(today.getDate()).padStart(2, '0');
                let month = String(today.getMonth()+1).padStart(2, '0');
                let year = today.getFullYear();
                let full =  year+ '-' + month + '-' + day; 
                let daysofweek= {
                    0: 'Sunday',
                    1: 'Monday',
                    2: 'Tuesday',
                    3: 'Wednesday',
                    4: 'Thrusday',
                    5: 'friday',
                    6: 'Saturday',
                };
                // console.log(daysofweek[today.getDay()])
                return {daysofweek: daysofweek[today.getDay()],full:full} ;
                // return daysofweek[today.getDay()],full ;
            }
        }
    });
</script>
<style scoped>
    @import url('https://fonts.googleapis.com/css?family=Josefin+Sans&display=swap');
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
    margin-bottom: 30px ;
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
    /* font-family: 'Josefin Sans', sans-serif; */
    
    border-bottom: 2px solid rgb(3, 127, 136);
    color: #000000;
    text-transform: uppercase;
    letter-spacing: 5px;
}
.left ion-label{
  letter-spacing: 1px;
  color: #fff;
  font-size: 28px;
    font-weight: 700;
    font-family: 'Josefin Sans', sans-serif;
    /* background-color: rgba(3, 127, 136, 0.664); */
    /* border-radius: 20px; */
    
    /* padding: 9px; */
    
  /* border : 2px solid rgba(3, 127, 136, 0.664); */
  margin-left: -10px;
  
    

}
.button{
    --background: #2fcbce; 
    color: #fff;
    font-size: 16px;
    font-family: 'Josefin Sans', sans-serif;
   margin-top: 10px;
  
  
  
    
}
</style>
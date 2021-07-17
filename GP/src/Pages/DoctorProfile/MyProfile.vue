<template>

            <ion-grid style="margin-top:40px; margin-bottom:40px;" >
                <ion-row class= "ion-justify-content-center">
                    <ion-col class="left"  size-lg="2.5"  size-xs="12">
                        

                        <ion-grid  >
                            <ion-row >
                                <ion-col size-lg="4" >
                                <ion-avatar class="personal_photo2" >
                                    <img v-if="doctorInfo.photo != 'null'"  class="personal_photo"  :src="doctorInfo.photo" alt="logo"  />
                                    <img  v-else class="personal_photo"  src="../../../public/me.jpg" alt="logo"  />
                                </ion-avatar>
                                
                                </ion-col>
                            </ion-row>
                            <ion-row >
                                <ion-col  >
                                <ion-label> {{doctorInfo.first_name}} {{doctorInfo.last_name}} </ion-label>
                                </ion-col>
                            </ion-row>
                        </ion-grid>
                            
                    </ion-col>

                    <ion-col class="right" size-lg="6" pull-lg="0.1" size-xs="12">
                            <h2>My Profile</h2>
                        <div class="login-box" >
                            
                            <ion-grid class="FormGrid" >
                                
                                <form v-on:submit.prevent="">
                                <ion-row>
                                    <ion-col size-lg="" size-xs="12" >
                                        <ion-label> First Name </ion-label>
                                        <p>  {{doctorInfo.first_name}} </p>
                                        <input v-if="edit" type="text" v-model.trim="editedInfo.first_name">  
                                    </ion-col>
                                    
                                    <ion-col size-lg="" size-xs="12" >
                                    
                                        <ion-label> Last Name </ion-label>
                                         <p>  {{doctorInfo.last_name}} </p>
                                         <input v-if="edit" type="text"  v-model.trim="editedInfo.last_name"> 
                                    </ion-col>

                                </ion-row>
                                <ion-row>
                                    <ion-col size-lg="" size-xs="12" >
                                        <ion-label> Email </ion-label>
                                        <p>  {{doctorInfo.email}} </p>
                                        <input v-if="edit" type="text" v-model.trim="editedInfo.email"> 
                                    </ion-col>
                                    
                                    <ion-col size-lg="" size-xs="12" >
                                    
                                        <ion-label> Birth Date </ion-label>
                                         <p>  {{doctorInfo.birth_date}} </p>
                                         <input v-if="edit" type="date" v-model.trim="editedInfo.birth_date"> 
                                    </ion-col>

                                </ion-row>
                                <ion-row>
                                    <ion-col size="12" size-sm>

                                        <ion-label>Gender </ion-label>
                                        <ion-icon v-if="doctorInfo.gender === 'female'"  :icon="female" ></ion-icon>
                                        <ion-icon v-if="doctorInfo.gender === 'male'"  :icon="male" ></ion-icon>
                                        <p>  {{doctorInfo.gender}}</p>



                                        <div v-if="edit" class="container">

                                            <ul>
                                            
                                            
                                                <li>
                                                <input type="radio" id="Male" name="gender" v-model="editedInfo.gender" value="male"  >
                                                <label class= 'custom' for="Male"> Male </label>
                                                    
                                                <div class="check"><div class="inside"></div></div>
                                                </li>

                                                <li>
                                                <input type="radio" id="Female" name="gender" v-model="editedInfo.gender" value="female">
                                                <label class= 'custom' for="Female"> Female </label>
                
                                                <div class="check"><div class="inside"></div></div>
                                                </li>
                                            
                                            </ul>
                                        </div>

                                    </ion-col>

                                    <ion-col size="12" size-sm>
                                        <ion-label>SSN </ion-label>
                                        <p> {{doctorInfo.ssn}}</p>
                                        <input v-if="edit" type="number"  v-model.trim="editedInfo.ssn">
                                    </ion-col>
                                </ion-row>
                                <ion-row>
                                    <ion-col size="12" size-sm>
                                        <ion-label>Phone Number </ion-label>
                                        <p> {{doctorInfo.phone_number}}</p>
                                        <input v-if="edit" type="number" v-model.trim="editedInfo.phone_number">
                                    </ion-col>

                                    <ion-col size="12" size-sm>
                                        <ion-label>Address </ion-label>
                                        <p> {{doctorInfo.address}}</p>
                                        <input v-if="edit" type="text" v-model.trim="editedInfo.address">
                                    </ion-col>

                                </ion-row>
                                <ion-row>
                                    <ion-col size="12" size-sm>
                                        <ion-label>Education </ion-label>
                                        <p> {{doctorInfo.education}}</p>
                                        <input v-if="edit" type="text" v-model.trim="editedInfo.education">

                                    </ion-col>

                                    <ion-col size="12" size-sm>
                                        <ion-label>Specialty </ion-label>
                                        <p>{{doctorInfo.specialty}}</p>
                                        <input v-if="edit" type="text" v-model.trim="editedInfo.specialty">
                                      
                                    </ion-col>

                                </ion-row>
                                
                                <ion-row>
                                    <ion-col size="12" size-sm>
                                        <ion-label>Work In </ion-label>
                                        <p v-for="clinic in clinics " :key="clinic.clinic_id"> {{clinic.clinic_name}} , address: {{clinic.address }}</p>
                                        <!-- <p :v-for="clinic in doctorInfo.clinics "> {{clinic}}</p> -->

                                    </ion-col>

                                    

                                </ion-row>
                                
                                <ion-row  >
                                    <ion-col offset-lg="10" size="12" size-sm>
                                        
                                        <ion-button v-if="!edit" @click="toggle" type="button" class="button">Edit</ion-button>
                                        <ion-button @click="submit" v-if="edit" type="button" class="button">Submit</ion-button>

                                        <ion-button v-if="edit" @click="toggle" type="button" class="button">Cancel</ion-button>
                                    </ion-col>
                                                           

                                </ion-row>
                              
                                </form>
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
        IonLabel,
        IonGrid,
        IonIcon,
        IonRow,
        IonCol,
        IonAvatar ,
        IonButton,alertController
         } from "@ionic/vue";
    export default defineComponent({
        name: 'MyProfileDoctor',
        components:{          
            IonGrid,
            IonLabel,
            IonIcon,
            IonRow,
            IonCol,
            IonAvatar,
            IonButton
        },

        data(){
            return {
                female,
                male,
                doctorInfo:{},
                editedInfo:{},
                clinics: [],
                edit: false,
                emailFormat: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ ,
            };
        },
       
        methods:{
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
            toggle(){
            this.edit = !this.edit;
            if(!this.edit){
                this.editedInfo = {...this.doctorInfo}
            }
           
            
        },
        
        submit(){
            const editedInfo = Object.entries(this.editedInfo)
            let complete = true;
            for (const [key, value] of editedInfo  ) {
            console.log(key);
            if(value === '' ){

                complete = false; 
            }
            }
         
        if(complete){
          
          if(!this.editedInfo.phone_number.match(/^\d{11}$/) || !this.editedInfo.ssn.match(/^\d{14}$/) || !String(this.editedInfo.email).match(this.emailFormat)){

            // alert("invalid Phone number or National ID")
            this.presentAlert("invalid Phone number or National ID or email");

          }
          
          else{
            
            fetch(process.env.VUE_APP_ROOT_API+'editDoctor', {
                method: 'put',
                headers: {'Content-Type': 'application/json', 'authorization': 'Bearer '+localStorage.getItem('tokendoctor')},
                body: JSON.stringify(this.editedInfo)
                }).then((res) => {
                if(!res.ok){
                    throw new Error(res.status)
                }else{
                    
                    return res.json()
                }
                }).
                then((res)=> {
                console.log(res)
                this.edit = false;
                })
                .catch(() =>
                { 
                console.log("Unable to edit")
                this.presentAlert("edit Failed")

                })
          }
        }else{
          this.presentAlert("Please fill all the fields");

        }
        }
        
        },
       

    async mounted(){

        // this.doctorInfo = this.$store.getters['staffID']
        await fetch(process.env.VUE_APP_ROOT_API+`doctorProfile`,{
            method: 'get',
            headers: {'Content-Type': 'application/json', 'authorization': 'Bearer '+localStorage.getItem('tokendoctor')},
          })
          .then(response => response.json())
          .then(doctor => {
              doctor.birth_date = doctor.birth_date.split('T')[0];
              this.doctorInfo = doctor
              this.editedInfo = {...doctor};
              this.editedInfo.phone_number = '0'+ this.editedInfo.phone_number
            // console.log(this.profilePhoto)
            
          } )

       await fetch(process.env.VUE_APP_ROOT_API+`docworksIn`,{
            method: 'get',
            headers: {'Content-Type': 'application/json', 'authorization': 'Bearer '+localStorage.getItem('tokendoctor')},
        }) .then(response => response.json())
        .then(clinics => {
    
            this.clinics = clinics    
            this.clinics = clinics
        } )
    
  }, 
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
  letter-spacing: 0.4px;
  color: #fff;
  font-size: 25px;
    font-weight: 600;
    font-family: 'Josefin Sans', sans-serif;   
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
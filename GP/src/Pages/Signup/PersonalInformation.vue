<template>
  
    <ion-row>
        
        <ion-col offset-lg="2" size-lg="8">
            <div class="login-box">
                <h2>Sign Up</h2>
               
                <ion-grid>
                  <ion-row class= "ion-align-items-center ion-justify-content-center">
                     <ion-col size="12" size-sm  >
                      <ion-avatar >
                          
                          <img v-if="personalInformation.photo === 'null'"  class="personal_photo"  :src="default_photo" alt="logo"  />
                          <img  v-else class="personal_photo"  :src="personalInformation.photo" alt="logo"  />
                          
                        </ion-avatar>
                        
                    </ion-col>
                   </ion-row>
                </ion-grid>
                <ion-grid style="margin-top:50px;">
                  <ion-row>
                     
                    <ion-col size="12" size-sm >
                      <!-- <form-field type="text" LableText="Speciality"/> -->
                      <div class="image-input">

                          <input style="display: none;" type="file" accept="image/*" id="imageInput" @change="get_photo($event)">
                          <label for="imageInput" class="image-button"><i class="far fa-image"></i> Choose image</label>
                        <!-- 	<img src="" class="image-preview"> -->
                          <span class="change-image">Choose different image</span>
                     
                      </div>
                    </ion-col>
                  
                   </ion-row>
                </ion-grid>
                <form v-on:submit.prevent="">
                    <!-- <ion-grid class="FormGrid" > -->
                    <ion-grid class="FormGrid" style="margin-top:50px;">
                        <ion-row>
                            <ion-col size="12" size-sm>
                                <!-- <form-field type="text" LableText="First Name"/> -->
                                <div class="user-box">
                                    <input  type="text"   required="" v-model.trim="personalInformation.first_name">
                                    
                                    <label  class="Down"> First Name </label>
                                
                                </div>
                            </ion-col>
                            <ion-col size="12" size-sm>
                                <!-- <form-field type="text" LableText="Last Name"/> -->
                                <div class="user-box">
                                    <input  type="text"   required="" v-model.trim="personalInformation.last_name">
                                    
                                    <label  class="Down"> Last Name </label>
                                
                                </div>
                            </ion-col>
                        </ion-row>

                        <ion-row>
                        
                          <ion-col size="12" size-sm  >
                            <label class= 'custom' >Gender</label>

                                <!-- <radio-form id="Male" name='gender'/>

                                <radio-form id="Female" name='gender' /> -->
                            <div class="container">

                              <ul>
                              
                              
                                <li>
                                  <input type="radio" id="Male" name="gender" v-model="personalInformation.gender" value="male"  >
                                  <label class= 'custom' for="Male"> Male </label>
                                    
                                  <div class="check"><div class="inside"></div></div>
                                </li>

                                <li>
                                  <input type="radio" id="Female" name="gender" v-model="personalInformation.gender" value="female">
                                  <label class= 'custom' for="Female"> Female </label>
  
                                  <div class="check"><div class="inside"></div></div>
                                </li>
                              
                              </ul>
                            </div>
                                
                          </ion-col>


                          <ion-col size="12" size-sm  >
                            <label class= 'custom' >I am</label>

                                <!-- <radio-form id="Male" name='gender'/>

                                <radio-form id="Female" name='gender' /> -->
                            <div class="container">

                              <ul>
                              
                              
                                <li>
                                  <input type="radio" id="Doctor" name="proficiency" v-model="personalInformation.proficiency" value="doctor"  >
                                  <label class= 'custom' for="Doctor"> Doctor </label>
                                    
                                  <div class="check"><div class="inside"></div></div>
                                </li>

                                <li>
                                  <input type="radio" id="Secretary" name="proficiency" v-model="personalInformation.proficiency" value="secretary">
                                  <label class= 'custom' for="Secretary"> Secretary </label>
  
                                  <div class="check"><div class="inside"></div></div>
                                </li>
                              
                              </ul>
                            </div>
                                
                          </ion-col>

                        

                          
                        </ion-row>

                        <ion-row>
                          <ion-col size="12" size-sm>
                              <!-- <form-field type="text" LableText="Phone Number"/> -->
                            <div class="user-box">
                              <input  type="number"   required="" v-model.trim="personalInformation.phone_number">
                              
                              <label  class="Down"> Phone Number </label>
                          
                          </div>
                          </ion-col>

                          <ion-col size="12" size-sm>
                            <!-- <form-field type="date" LableText="Birth Date"/> -->
                            <div class="user-box">
                              <input  type="date"   required="" v-model="personalInformation.birth_date">
                                    
                              <label  class="Up"> Birth Date </label>
                                
                            </div>
                          </ion-col>
                        
                          
                        </ion-row>

                        <ion-row>
                            

                            <ion-col size="12" size-sm>
                                <!-- <form-field type="text" LableText="Education"/> -->
                                 <div class="user-box">
                                    <input  type="text"   required="" v-model.trim="uuid">
                                    
                                    <label  class="Down"> Your Code </label>
                                
                                </div>
                            </ion-col>

                            <ion-col size="12" size-sm>
                              <!-- <form-field  type="text" LableText="National ID"/> -->
                              <div class="user-box">
                                <input  type="number"   required="" v-model.trim="personalInformation.national_id">
                                
                                <label  class="Down"> National ID </label>
                              
                              </div>
                            </ion-col>

                            
                        </ion-row>

                        <ion-row>
                          

                          <ion-col size="12" size-sm>
                                <!-- <form-field type="text" LableText="Education"/> -->
                                 <div class="user-box">
                                    <input  type="text"   required="" v-model.trim="personalInformation.education">
                                    
                                    <label  class="Down"> Education </label>
                                
                                </div>
                            </ion-col>

                          <ion-col size="12" size-sm>
                            <!-- <form-field type="text" LableText="Address"/> -->
                            <div class="user-box">
                              <input  type="text"   required="" v-model.trim="personalInformation.address">
                              
                              <label  class="Down"> Address </label>
                            
                            </div>
                          </ion-col>
                        
                        </ion-row>
                        
                        <ion-row>
                          <ion-col size="12" size-sm v-if="personalInformation.proficiency === 'doctor'">
                            <!-- <form-field type="text" LableText="Speciality"/> -->
                            <div class="user-box">
                              <input  type="text"   required="" v-model.trim="personalInformation.speciality">
                                
                              <label  class="Down"> Speciality </label>
                            
                            </div>
                          </ion-col>
                        </ion-row>

                        

                        <ion-row>
                          <ion-col size-lg="2" size-xs="6" >
                            <form-button @click="changePhaseNext({currentPhase: 'MakeAccount'})" type="button" buttonText="Next"/>
                          </ion-col>
                        </ion-row>
                    </ion-grid>
                </form>
            </div>
        </ion-col>

        
    </ion-row>

</template>

<script>
import { defineComponent } from 'vue';
import { IonCol, IonGrid, IonRow, alertController ,
// IonInput,
IonAvatar } from '@ionic/vue';
 import {
        // personCircle,
    } from "ionicons/icons";
import FormButton from '../../components/FormButton.vue';
// import FormField from '../../components/FormField'
// import RadioForm from '../../components/RadioForm'
// import { mapActions } from 'vuex';
export default defineComponent({
  name: 'Signup',
  components: {
    FormButton,
    // FormField,
    IonCol,
    IonGrid,
    IonRow,
    // IonInput,
    IonAvatar
    // IonIcon,
    
    // IonItem
    // RadioForm,
    
    
   
  },
    
  data(){
    return{
      personalInformation: {
      first_name: '',
      last_name: '',
      gender: '',
      national_id: '',
      phone_number:'',
      birth_date: '',
      education: '',
      speciality:'',
      address:'',
      photo: 'null',
      proficiency:''},
      uuid:'',
      user:'',
      result: '',
      fileInfo:'',
      // photo: null,
      default_photo: require("../../../public/me.jpg"),
      // personCircle
    }
  },
  methods: {


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

    get(){
    
     console.log(this.personalInformation);
     
   },

   async isAuthorized(){
       
    await fetch(process.env.VUE_APP_ROOT_API+'isAuthorized', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({uuid: this.uuid})
    })
    .then(response => response.json())
    .then(user => {
      
      if(user[0].auth_id){
        this.user = user;
        this.result = true;
      }else{ 
        this.result = false;
        console.log("no") 
      }
    } )
   
      
   },

   async changePhaseNext(phase){
     await this.isAuthorized();
     
      const personalInformation = Object.entries(this.personalInformation)
      let complete = true;
        for (const [key, value] of personalInformation  ) {
          // console.log(key , value);
          if(value === '' ){
            if(key === 'speciality' && this.personalInformation.proficiency ==='secretary' ){
              //do nothing
            }else{
              
              complete = false;
            }
          }
        }
        if(complete && this.uuid === ''){
          complete = false;
        }
        if(complete){
          
          if(!this.personalInformation.phone_number.match(/^\d{11}$/) || !this.personalInformation.national_id.match(/^\d{14}$/) ){

            // alert("invalid Phone number or National ID")
            this.presentAlert("invalid Phone number or National ID");

          }
          else if(!this.result){
            this.presentAlert("Not Authorized user");
          }
          else{
            
            this.$store.dispatch('FillData', this.personalInformation);
            this.$store.dispatch('changePhase', phase);

            // console.log(this.user[0])
            this.$store.dispatch('fill_userData', this.user[0]);
          }
        }else{
          // alert("Please fill all the fields");
          this.presentAlert("Please fill all the fields");

        }
   },

   async get_photo(event){
     
     const image = event.target.files[0];
     const reader = new FileReader();  
     reader.readAsDataURL(image);
     reader.onload = event =>{
       this.personalInformation.photo = event.target.result;
       console.log(this.personalInformation.photo);
     }

    
   }
    // ...mapActions(['changePhase'])

  },
  computed: {

  }
});
</script>

<style scoped>
.personal_photo{
  min-height:110px;
  min-width:110px;
}

/* .image-input{ */

	/* text-align: center; */
  /* display: none; */
/* } */
	
	.image-button{

		/* display: block; */
		color: #FFF;
    width:150px;
		background: rgb(0, 173, 204)	;
		padding: .5rem .6rem;
		font-size: 115%;
    border-radius: 500px;
		cursor: pointer;
  }
		i
			{
        font-size: 125%;
			/* margin-right: .3rem; */
      }
		.image-button:hover
			{
        border: 1px solid #ffff;
			/* margin-right: .3rem; */
      }
	

	span
		{
    display: none;
		/* text-align: center; */
		cursor: pointer;}
</style>
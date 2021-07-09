<template>
<ion-page>

  <ion-menu side="start" menu-id="first" content-id="main">
    <ion-header>
      <ion-toolbar color="secondary">
        <ion-title>Options</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-list>

        <ion-item @click="Goto('home')" button >Home</ion-item>
        <ion-item @click="Goto('about')" button>About</ion-item>
        <ion-item @click="Goto('features')" button>Features</ion-item>
        <ion-item button  @click="isloggedin">Purchase</ion-item>
        <!-- <ion-item button router-link="/SignupPurchase">Purchase</ion-item> -->
        <ion-item button @click="islogged" >Log in</ion-item>
        <ion-item button router-link="/Signup">Sign up</ion-item>
      </ion-list>
    </ion-content>
  </ion-menu>
  <ion-content id="main" ref="content"  >
  <section class="sec1"> 
      <ion-header class="ion-no-border"   >
        <ion-toolbar class="toolbar" >

          <ion-buttons slot="start" id="menu">
            <ion-menu-button auto-hide="false"></ion-menu-button>
          </ion-buttons>

          <ion-title >
            
            <ion-grid>
              <ion-row>
                <ion-col offset-lg="2" size-lg="4" size-md="3" size-sm="12" size-xs="8" offset-xs="0">
                  <img :src="img" alt="logo"  />
                </ion-col>
              </ion-row>
            </ion-grid>
          </ion-title>

          <ion-buttons slot="secondary" id="bar">
                        

            <ion-grid>
              <ion-row >
                <ion-col pull-lg="1.4" >
                  <ion-button class="normal" @click="Goto('home')">Home</ion-button>
                </ion-col>

                <ion-col pull-lg="1.4" >
                  <ion-button class="normal" @click="Goto('about')" >About</ion-button>
                </ion-col>

                <ion-col pull-lg="1.4" >
                  <ion-button class="normal" @click="Goto('features')">Features</ion-button>
                </ion-col>

                <ion-col pull-lg="1" >
                  <ion-button class="normal" @click="isloggedin" >Purchase</ion-button>
                </ion-col>

                <ion-col pull="0.1" >
                  <ion-button @click="islogged" class="login" > Log in</ion-button>
                </ion-col>

                <ion-col >
                  <ion-button   class="signup" router-link="/Signup"> Sign up</ion-button>
                </ion-col>

              </ion-row>
            </ion-grid>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>

      <home id="home"/>
      </section>
    


      

    

    
    <about id="about"/>
    <features id="features"/>

    <div class="footer">
      <ion-buttons>
       
        <ion-button style="margin-right: 20px;">
          <ion-icon slot="icon-only" :icon="logoInstagram" ></ion-icon>
        </ion-button>
      
        <ion-button style="margin-right: 20px;">
          <ion-icon slot="icon-only" :icon="logoFacebook"></ion-icon>
        </ion-button>
    
        <ion-button>

          <ion-icon slot="icon-only" :icon="logoGoogle"></ion-icon>
        </ion-button>
       
      </ion-buttons>
    </div>
    <!-- <footer-part/> -->

  </ion-content>
</ion-page>

</template>

<script>

import { defineComponent } from 'vue';
import {
  logoInstagram,
  logoFacebook,
  logoGoogle
 
} from "ionicons/icons";
import { 
  IonContent ,
  IonPage,
  IonGrid ,
  IonCol, 
  IonRow,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonButton,
  IonMenu,
  IonItem,
  IonList,
  IonMenuButton,
  IonIcon
  
  
 
  
  
 

   
} from '@ionic/vue';
import Features from './Features.vue';
import About from './About'
import Home from './Home.vue';
import {useRouter} from 'vue-router';

// import FooterPart from './FooterPart'
export default defineComponent({
  name: 'LandingPage',
  components: {
    IonCol,
    IonGrid,
    IonRow,
    IonContent,
    IonPage ,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonButtons,
    IonButton,
    IonMenu,
    IonItem,
    IonList,
    IonMenuButton,
    Features,
    About,
    Home,
    IonIcon
    // FooterPart,
    
    
  
  },
    
  data(){
    return{
      img: require("../../../public/logobig.png"),
     logoInstagram,
      logoFacebook,
      logoGoogle
      
    }
  },
  methods: {
    Goto(id){
      const el = document.getElementById(id)
      el.scrollIntoView({behavior: 'smooth' , block: 'start'});
      // el.scrollToPoint(0,1200)
      console.log(this.$refs.content)
      // this.$refs.content.scrollToPoint(null, 500)
      // this.content.scrollY(50)
      // this.content.scrollToPoint(null, 500)
    },
    isloggedin(){
      if(localStorage.getItem('tokenPurchase') === null) {

         this.router.push('/SignupPurchase')
      } else {
          this.router.push('/ProfilePurchase')
      }
      
    }
 
  ,
    islogged(){
      if(localStorage.getItem('tokendoctor') === null && localStorage.getItem('tokensecretary') === null) {

         this.router.push('/Login')
      }else if(localStorage.getItem('tokendoctor') !== null && localStorage.getItem('tokensecretary') === null){
        this.router.push('/MainPageDoctor')
      }
      else if(localStorage.getItem('tokendoctor') === null && localStorage.getItem('tokensecretary') !== null){
        this.router.push('/MainPageSecretery')
      }
      
      else {
        localStorage.removeItem('tokendoctor');
        localStorage.removeItem('tokensecretary');
        this.router.push('/Login')
      }
      
    }
 
  }
,
  setup(){
    const router = useRouter();
    return { router };
  }

});
</script>

<style scoped>

@media only screen and (max-width: 992px) {
    #bar  {
        display: none;
    }
}

@media only screen and (min-width: 600px) {
    #menu  {
        display: none;
    }
}

.sec1 {

  font-family: sans-serif;
  background: linear-gradient(#141e30, #243b55);
}


.toolbar{
  --background: transparent;
  
}


ion-buttons{
  margin-right: 13%;
}

ion-button{
    color: #ffffff;
}

.signup , .login{
  color: #000000;
  background: #ffffff;
  border-radius: 300px;
  width: 140px;
  height: 55px;

}

.signup:hover, .login:hover {
background: transparent;
border : 2px solid #ffffff;
color: #ffffff;
transition-duration: 0.4s;

}
.normal{
  margin-top: 15px;
}

.normal:hover{
  background: transparent;
  border-radius: 300px;

  border : 1px solid #ffffff;
  color: #ffffff;
  transition-duration: 0.4s;
}

.footer{
  /* background-color: transparent; */
  background-color: #000000;
  height: 70px;
  border-top: 2px solid rgba(255, 255, 255, 0.877);
  /* border-color: aqua; */
  
  
}

.footer ion-button{
  --background: transparent;
  border-radius: 50px;
  border:1px solid #ffffff;
  
}
.footer ion-buttons{
  
  margin-top: 10px;
  justify-content: center;
}
</style>
<template>



   
  <ion-button expand="full" fill="clear" type="submit"  > 
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    
    <div class="text">Submit</div>
      
  </ion-button>



</template>

<script>
import { defineComponent } from 'vue';
import { IonButton } from '@ionic/vue';
export default defineComponent({
  name: 'FormButton',
  components: {
    IonButton,
    
  },
  methods: {
      
  }
});
</script>

<style scoped>



 ion-button{
   
  /* position: relative; */
  /* display: inline-block; */
  /* padding: 0px 0px 10px 20px; */
  
  /* width: 25%; */
  color: #05545a;
  font-weight: bold;
  /* color:  #333333; */
  font-size: 16px;
  /* font-size: 100%; */
  text-decoration: none;
  text-transform: uppercase;
  overflow: hidden;
  transition: .5s;
  margin-top: 40px;
  letter-spacing: 4px;
  --padding-start: 0px ;
  --padding-end: 0px ;
  /* background: transparent; */
}

@media screen and (max-width: 600px) {
  .text{
    font-size: 15px;
  }
  
}

ion-button:hover {
  /* background:  #03e9f4; */
  background: #356c84;
  color: #fff;
  border-radius: 5px;
  /* box-shadow: 0 0 5px  #00e1ff,
              0 0 25px  #00e1ff,
              0 0 50px  #00e1ff,
              0 0 100px  #00e1ff; */
  /* box-shadow: 0 0 5px  #5c5c5c,
              0 0 25px  #5c5c5c,
              0 0 50px  #5c5c5c,
              0 0 100px  #5c5c5c; */
  box-shadow: 0 0 5px #03e9f4,
              0 0 25px #03e9f4,
              0 0 50px #03e9f4,
              0 0 100px #03e9f4;
}

ion-button span {
  position: absolute;
  display: block;
}

ion-button span:nth-child(1) {
  top: 0;
  left: -100%;
  width: 100%;
  height: 3px;
  /* background: linear-gradient(90deg, transparent, #5c5c5c); */
  background: linear-gradient(90deg, transparent, #05545a);
  animation: btn-anim1 1s linear infinite;
}

@keyframes btn-anim1 {
  0% {
    left: -100%;
  }
  50%,100% {
    left: 100%;
  }
}

ion-button span:nth-child(2) {
  top: -100%;
  right: 0;
  
  width: 3px;
  height: 100%;
  background: linear-gradient(180deg, transparent, #05545a);
  animation: btn-anim2 1s linear infinite;
  animation-delay: .25s
}

@keyframes btn-anim2 {
  0% {
    top: -100%;
  }
  50%,100% {
    top: 100%;
  }
}

ion-button span:nth-child(3) {
  bottom: 0;
  right: -100%;
  width: 100%;
  height: 3px;
  background: linear-gradient(270deg, transparent, #05545a);
  animation: btn-anim3 1s linear infinite;
  animation-delay: .5s
}

@keyframes btn-anim3 {
  0% {
    right: -100%;
  }
  50%,100% {
    right: 100%;
  }
}

ion-button span:nth-child(4) {
  bottom: -100%;
  left: 0;
  width: 3px;
  height: 100%;
  background: linear-gradient(360deg, transparent, #05545a);
  animation: btn-anim4 1s linear infinite;
  animation-delay: .75s
}

@keyframes btn-anim4 {
  0% {
    bottom: -100%;
  }
  50%,100% {
    bottom: 100%;
  }
}
</style>
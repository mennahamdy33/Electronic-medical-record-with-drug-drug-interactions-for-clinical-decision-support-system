<template>

   
        
    <!-- <ion-item > -->
    <div class="user-box">
    <!-- <ion-input :type="type" name="" required=""></ion-input> -->
    <input  :type="type" :value="value"  :name="name" required="" :id="id">
    
    <!-- <ion-label>{{ LableText }}</ion-label> -->
    <label :for="id" :class="topValue">{{ LableText }}</label>
    <!-- <label :style="[baseStyle ,topValue]">{{ LableText }}</label> -->
    <div :class="check" ></div>
    </div>
    <!-- </ion-item> -->
    
    

        
 

</template>

<script>
import { defineComponent } from 'vue';
// import {IonInput} from '@ionic/vue'
// import {IonItem} from '@ionic/vue'
// import {IonLabel} from '@ionic/vue'

export default defineComponent({
  name: 'Signup',
  props: ['LableText','type', 'value', 'id','name'],
  components: {
    // IonInput,
    // IonItem,
    // IonLabel
  },
  methods: {
   
  },
data(){
  return{
   baseStyle: {
  position: 'absolute',
  
  left: '0',
  padding: "10px 0",
  fontSize: '16px',
  color: '#fff',
  pointerEvents: 'none',
  transition: '.5s',
}
  }
},
computed:{
  topValue(){
    if(this.type ==="date" ){
      
      return "Up"
      // return {top: '0px'}
    } else{
      return "Down"
      // return {top: '-25px'}
    }
  },
  check(){
    if(this.type ==="radio"){

      return "check"
    }else{
      return ""
    }
  }
}

});
</script>

<style scoped>





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
  
  /* top:-25px; */
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

.user-box input[type=text]:focus ~ label,
.user-box input[type=password]:focus ~ label,
.user-box input[type=date]:focus ~ label,
.user-box input[type=date]:valid ~ label,
.user-box input[type=radio]:checked ~ label,
.user-box input[type=password]:valid ~ label 
.user-box input[type=text]:valid ~ label {
  /* top: -20px; */
  left: 0;
  color: #03e9f4;
  
  
  font-size: 16px;
  font-weight: bold;
} 


.user-box input[type=text]:focus ~ .Down,
.user-box input[type=password]:focus ~ .Down,
.user-box input[type=password]:valid ~ .Down 
.user-box input[type=text]:valid ~ .Down {
  top: -20px;
  
}
.user-box input:focus ~ .Up,
.user-box input:valid ~ .Up {
  top: -25px;
  
}

.user-box input[type=radio]:checked ~ .Down
{
  top: -5px;
}

.user-box input[type=radio] 
{
  /* opacity: 0;
  width: 0;
  height: 0; */
    position: absolute;
visibility: hidden;

}

.user-box .check{
  display: block;
  position: absolute;
  border: 5px solid #00f7ff;
  border-radius: 100%;
  height: 21px;
  width: 21px;
  top: 10px;
  left: 75px;
  z-index: 5;
  transition: border .25s linear;
}
.user-box .check::before{
  display: block;
  position: absolute;
  content: '';
  
  border-radius: 100%;
  height: 5px;
  width: 5px;
  top: 3px;
  left: 3px;
  margin: auto;
  
}


input[type=radio]:checked ~ .check{
  border: 5px solid #fafafa;
}
input[type=radio]:checked ~ .check::before{
  background: aliceblue;
}

</style>
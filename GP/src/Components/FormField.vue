<template>

   
        
    <!-- <ion-item > -->
    <div class="user-box">
    <!-- <ion-input :type="type" name="" required=""></ion-input> -->
    <input  :type="type" :value="value"  :name="name" required="" :id="id">
    
    <!-- <ion-label>{{ LableText }}</ion-label> -->
    <label :for="id" :class="topValue">{{ LableText }}</label>
    <!-- <label :style="[baseStyle ,topValue]">{{ LableText }}</label> -->
    <!-- <div :class="check" ></div> -->
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



.user-box input:focus ~ .Down,
.user-box input:valid ~ .Down {
  top: -20px;
  left: 0;
  color: #03e9f4;
 
  font-size: 16px;
  font-weight: bold;
}

.user-box input:focus ~ .Up,
.user-box input:valid ~ .Up {
  top: -25px;
  left: 0;
  color: #03e9f4;
 
  font-size: 16px;
  font-weight: bold;
}


</style>
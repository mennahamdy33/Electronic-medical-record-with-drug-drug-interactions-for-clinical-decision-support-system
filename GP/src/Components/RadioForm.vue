<template>


<div class="container">
	
  <ul>
 
  
  <li>
    <!-- <input type="radio" :id="id" :name="name" v-model="RadioValue" :value="id"  > -->
    <input type="radio" :id="id" :name="name" v-model="RadioValue" :value="id" v-on:change="get" >
    <label :for="id">{{ id }}</label>
    

    
    <div class="check"><div class="inside"></div></div>
  </li>
  
</ul>
</div>

</template>

<script>
import { defineComponent } from 'vue';
// import {IonInput} from '@ionic/vue'
// import {IonItem} from '@ionic/vue'
// import {IonLabel} from '@ionic/vue'

export default defineComponent({
  name: 'Signup',
  props: [ 'id' , 'name'],
  components: {
    // IonInput,
    // IonItem,
    // IonLabel
  },
  methods: {
   get(){
     
     console.log(this.RadioValue);
     
   }
  },
data(){
  return{
    RadioValue: ''
  }
  
},


});
</script>

<style  scoped>

.container ul{
  list-style: none;
  margin: 0;
  padding: 0;
	
}

ul li{
  
  color: #ffffff;
  /* display: block; */
  position: relative;
  float: left;
  /* width: 100%; */
  /* height: 100px; */

}

ul li input[type=radio]{
  position: absolute;
  visibility: hidden;
}

ul li label{
  display: block;
  position: relative;
  /* font-weight: 300; */
  font-size: 16px;
  padding: 25px 25px 25px 80px;
  margin: 10px auto;
  height: 10px;
  z-index: 9;
  cursor: pointer;
  /* -webkit-transition: all 0.25s linear; */
}

ul li:hover label{
	/* color: #ffdcfc; */
    font-size: 20px;
}

ul li .check{
  display: block;
  position: absolute;
  border: 5px solid #AAAAAA;
  border-radius: 100%;
  height: 27px;
  width: 27px;
  top: 30px;
  left: 20px;
	z-index: 5;
	transition: border .25s linear;
	-webkit-transition: border .25s linear;
}

ul li:hover .check {
  border: 5px solid #FFFFFF;
}

ul li .check::before {
  display: block;
  position: absolute;
  content: '';
  border-radius: 100%;
  height: 12px;
  width: 12px;
  top: 2.4px;
  left: 2.7px;
  margin: auto;
  /* transition: background 0.25s linear;
  -webkit-transition: background 0.25s linear; */
}

input[type=radio]:checked ~ .check {
  border: 5px solid #03e9f4;

 box-shadow: 0 0 0 1px #03e9f4,
                0 0 25px #03e9f4,
                0 0 50px #03e9f4,
                0 0 100px #03e9f4;

 
}

input[type=radio]:checked ~ .check::before{
  background: #03e9f4;
    
    
}

input[type=radio]:checked ~ label{
  color: #03e9f4;
}

</style>


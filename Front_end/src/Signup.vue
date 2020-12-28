<template>
<body>
  
    <div class="image"> 
      <img src="../public/assets/logo4.png"  >

    </div>
    <div class="login-box">
        <h2>Sign Up</h2>
        <form v-on:submit.prevent="">
           
            <form-field LableText="First Name"/>
            <form-field LableText="Last Name"/>
            <!-- <form-field LableText="Gender"/>
            <form-field LableText="National ID"/>
            <form-field LableText="Phone Number"/>
            <form-field LableText="Birth Date"/>
            <form-field LableText="Education"/>
            <form-field LableText="Speciality"/>
            <form-field LableText="Address"/> -->
            

            <form-button/>
        </form>
    </div>
  
</body>
</template>

<script>
import { defineComponent } from 'vue';

import FormButton from './Components/FormButton.vue';
import FormField from './Components/FormField'
export default defineComponent({
  name: 'Signup',
  components: {
    FormButton,
    FormField
    
  },
  methods: {
     
  }
});
</script>

<style scoped>

body {
  margin:0;
  padding:0;
  font-family: sans-serif;
  background: linear-gradient(#141e30, #486686);
}

.login-box {
  position: absolute;
  top: 55%;
  left: 50%;
  width: 400px;
  padding: 40px;
  transform: translate(-50%, -50%);
  background: rgba(31, 29, 29, 0.281);
  box-sizing: border-box;
  box-shadow: 0 15px 25px rgba(0,0,0,.6);
  border-radius: 10px;
}

.login-box h2 {
  margin: 0 0 30px;
  padding: 0;
  color: #fff;
  text-align: center;
}

.image{
  text-align: center;
  

}
.image img{
  width: 13%;
  
  /* width: 40%; */
  
  
}

</style>
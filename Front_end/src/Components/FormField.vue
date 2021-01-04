<template>

   
        
    
    <div class="user-box">
    <input type="text" name="" required="">
    <label>{{ LableText }}</label>
    </div>
    
    

        
 

</template>

<script>
import { defineComponent } from 'vue';


export default defineComponent({
  name: 'Signup',
  props: ['LableText'],
  components: {
    
    
  },
  methods: {
     
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
  top:0;
  left: 0;
  padding: 10px 0;
  font-size: 16px;
  color: #fff;
  pointer-events: none;
  transition: .5s;
}

.login-box .user-box input:focus ~ label,
.login-box .user-box input:valid ~ label {
  top: -20px;
  left: 0;
  color: #05545a;
  /* color: #d1fdff; */
  font-size: 16px;
  font-weight: bold;
}

</style>
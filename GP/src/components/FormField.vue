<template>
  <div class="user-box">
    <slot/>
    <input :type="setType" :name="setName" required="" v-model="inputdata" />
    <label>{{ LabelText }}</label>
  </div>
</template>

<script>
export default {
  props: ["LabelText", "setType","setName"],
  
  components: {},
  methods: {
  },
  watch:{
    inputdata(){
      console.log(this.inputdata);
      console.log(this.setName);
    }
  },
  data(){
    return{
      inputdata: this.setName
    }
  }
};
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
  top: 0;
  left: 0;
  padding: 10px 0;
  font-size: 16px;
  color: #fff;
  pointer-events: none;
  transition: 0.5s;
}

.login-box .user-box input:focus ~ label,
.login-box .user-box input:valid ~ label {
  top: -20px;
  left: 0;
  color: #03e9f4;

  /* color: #05545a; */
  /* color: #d1fdff; */
  font-size: 16px;
  font-weight: bold;
}
</style>
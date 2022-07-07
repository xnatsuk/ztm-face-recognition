<script setup>
import { ref } from 'vue';
import { useFormValidation } from '../modules/ValidateForm';

let input = ref('')
const { validateInputField, errors } = useFormValidation()

const validateInput = () => {
   validateInputField('password', input.value);
}
</script>

<template>
   <div class="form-control">
      <label class="label">
         <span class="label-text">Password</span>
      </label>
      <input type="password" class="input input-bordered password" 
         placeholder="Password"
         v-model="input"
         @input="$emit('update:modelValue', $event.target.value)"
         @keyup="validateInput"
         @blur="validateInput"
      />
      <div class="tooltip tooltip-error" data-tip="error">
         <span class="label-text" v-if="errors.input"> {{ errors.input }} </span>
      </div>
   </div>
</template>

<style scoped>
.password {
   background-image: url('../assets/password.png');
   background-size: 8%;
   background-repeat: no-repeat;
   background-position: 5%;
   padding-left: 15%;
}
</style>
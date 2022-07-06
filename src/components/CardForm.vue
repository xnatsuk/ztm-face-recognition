<script setup>
import { ref, computed } from 'vue';
import useFormValidation from './ValidateForm.vue'

let linkRoute = ref('');
let linkText = ref('');
let formButton = ref('');

let input = ref('');
let error = ref('');

const { validateInputField, errors } = useFormValidation();
const validateInput = () => {
   validateInputField('input', input.value);
}
</script>

<template>
   <div class="hero min-h-screen bg-base-200">
      <div class="hero-content flex-col lg:flex-row-reverse">
         <div class="card flex-shrink-0 w-full max-w-sm shadow-lg bg-base-100">
            <div class="card-body">
               <div class="form-control">
                  <label class="label">
                     <span class="label-text">Email</span>
                  </label>
                  <input type="text" placeholder="email" class="input input-bordered" v-model="input" @keyup="validateInput" />
                  <span class="label-text" v-if="errors.input"> {{ errors.input }} </span>
               </div>
               <div class="form-control">
                  <label class="label">
                     <span class="label-text">Password</span>
                  </label>
                  <input type="password" placeholder="password" class="input input-bordered" v-model="input" @keyup="validateInput" />
                  <span class="label-text" v-if="errors.input"> {{ errors.input }} </span>
                  <label class="label">
                     <a href="#" class="label-text-alt link link-hover">Forgot password?</a>
                  </label>
               </div>
               <div class="form-control mt-6">
                  <button class="btn btn-primary" ref="formButton">{{ formButton }}</button>
                  <label class="label">
                     <a href="linkRoute" class="label-text-alt link link-hover" ref="linkRoute">{{ linkText }}</a>
                  </label>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>

<style scoped>
</style>

<script setup>
import { reactive } from "vue";
import { useFormValidation } from "../modules/ValidateForm.js";
import { submitButtonState } from "../modules/ButtonState.js";

import EmailForm from "../components/EmailForm.vue";
import PasswordForm from "../components/PasswordForm.vue";

let input = reactive({
  email: "",
  password: "",
});

const registerButton = () => {
  console.log(input);
};

const { errors } = useFormValidation();
const { isRegisterButtonDisabled } = submitButtonState(input, errors);
</script>

<template>
  <div class="hero min-h-screen bg-base-200">
    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div class="card-body">
        <EmailForm v-model="input.email" />
        <PasswordForm v-model="input.password" />
        <div class="form-control mt-6">
          <button
            class="btn btn-primary"
            :disabled="isRegisterButtonDisabled"
            @click="registerButton"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>

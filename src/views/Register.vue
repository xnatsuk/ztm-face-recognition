<script setup>
import { useAuthStore } from '../stores/auth.store';
import InputField from '../components/InputField.vue';

import { Form } from 'vee-validate';
import * as Yup from 'yup';

const schema = Yup.object().shape({
  name: Yup.string().required('name is required'),
  email: Yup.string().email().required('email is required'),
  password: Yup.string().min(8).required('password is required'),
});

const onSubmit = (values) => {
  const authStore = useAuthStore();
  const { email, name, password } = values;

  return authStore.register({ email, name, password });
};
</script>

<template>
  <div class="hero min-h-screen bg-base-200">
    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div class="card-body">
        <Form @submit="onSubmit" :validation-schema="schema">
          <InputField name="name" type="text" label="Name" placeholder="Your name" />
          <InputField name="email" type="email" label="Email" placeholder="Your email address" />
          <InputField name="password" type="password" label="Password" placeholder="Your password" />
          <div class="form-control mt-6">
            <button class="btn btn-primary" type="submit">Register</button>
          </div>
        </Form>
      </div>
    </div>
  </div>
</template>

<style scoped></style>

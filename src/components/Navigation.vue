<script setup>
import { onMounted } from 'vue';
import { themeChange } from 'theme-change';
import { useAuthStore } from '@/stores/auth.store';

onMounted(() => {
  themeChange(false);
});

const authStore = useAuthStore();
const onLogout = () => {
  return authStore.logout();
};
</script>

<template>
  <div class="navbar bg-base-200 px-5">
    <div class="navbar-start">
      <label class="btn btn-ghost btn-circle avatar">
        <div class="rounded-full">
          <a>
            <router-link to="/">
              <img src="../assets/brain.png" alt="logo" />
            </router-link>
          </a>
        </div>
      </label>
    </div>
    <div class="navbar-center">
      <a class="text-2xl text-current">Smart Brain</a>
    </div>
    <div class="navbar-end">
      <label>
        <div v-if="authStore.loggedIn == true">
          <a class="link link-hover link-accent" @click="onLogout">Logout</a>
        </div>
        <div v-else>
          <router-link v-if="$route.path == '/login'" to="/register" class="link link-hover link-accent"
            >Register
          </router-link>
          <router-link v-if="$route.path != '/login'" to="/login" class="link link-hover link-accent"
            >Login
          </router-link>
        </div>
      </label>
      <label class="swap pl-5">
        <input type="checkbox" />
        <span class="swap-off" data-set-theme="dark" data-act-class="ACTIVECLASS">☀️</span>
        <span class="swap-on" data-set-theme="light" data-act-class="ACTIVECLASS">🌙</span>
      </label>
    </div>
  </div>
</template>

<style></style>

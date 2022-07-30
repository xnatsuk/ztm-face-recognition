<script setup>
import { useAuthStore } from '@/stores/auth.store';

const auth = useAuthStore();
</script>

<template>
  <div v-show="auth.loggedIn == true" class="stats shadow-lg flex flex-col sm:flex-row">
    <div class="stat place-items-center sm:justify-items-center">
      <div class="stat-figure text-secondary">
        <div class="avatar online">
          <div class="w-16 rounded-full">
            <img src="https://api.lorem.space/image/face?w=128&h=128" />
          </div>
        </div>
      </div>
      <div class="stat-value">{{ auth.user }}</div>
    </div>
    <div class="stat place-items-center">
      <div class="stat-figure text-secondary">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          class="inline-block w-8 h-8 stroke-current"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
        </svg>
      </div>
      <div class="stat-title">Total Score</div>
      <div class="stat-value text-secondary">2.6M</div>
    </div>
  </div>
</template>

<style scoped></style>

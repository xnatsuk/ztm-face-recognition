import { createRouter, createWebHistory } from 'vue-router';

import { useAuthStore } from '@/stores/auth.store';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';

const BASE_URL = import.meta.env.VITE_BASE_URL;

const router = createRouter({
  history: createWebHistory(`${BASE_URL}`),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
    },
  ],
});

router.beforeEach((to, from, next) => {
  const auth = useAuthStore();
  auth.loggedIn === true && (to.name === 'login' || to.name === 'register') 
  ? next({ name: 'home' }) 
  : next();
});

export default router;

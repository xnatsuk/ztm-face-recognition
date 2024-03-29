import { defineStore } from 'pinia';

import router from '@/router';
import AuthService from '@/services/auth.service';
import { local } from '@/services/local.service';

const user = local.value.data;
const initialState = user ? { loggedIn: true, user: user.name } : { loggedIn: false, user: null };

export const useAuthStore = defineStore('auth', {
  state: () => initialState,

  getters: {},

  actions: {
    login(user) {
      return AuthService.login(user)
        .then((response) => {
          this.loggedIn = true;
          this.user = response.name;
          router.push('/');
        })
        .catch((error) => {
          this.loggedIn = false;
          this.user = null;
          return error;
        });
    },

    register(user) {
      return AuthService.register(user)
        .then((response) => {
          router.push('/login');
          return Promise.resolve(response);
        })
        .catch((error) => {
          return error;
        });
    },

    logout() {
      AuthService.logout();
      this.loggedIn = false;
      this.user = null;
      router.push('/login');
    },
  },
});

import { defineStore } from 'pinia';
import { local } from '@/services/local.service';
import UserService from '@/services/user.service';

const user = local.value.data;
const initialState = user ? { score: user.entries } : { score: 0 };
export const useUserStore = defineStore('user', {
  state: () => initialState,

  getters: {
    getScore: (state) => (state.score = user.entries),
  },

  actions: {
    async updateScore() {
      await UserService.incrementUserEntries();
      return await UserService.getUserScore()
        .then((response) => {
          this.score = response.data;
        })
        .catch((error) => {
          return error;
        });
    },
  },
});

import axios from 'axios';
import { useLocalStorage } from '@vueuse/core';

const API_URL = import.meta.env.VITE_BASE_URL;

export const local = useLocalStorage('user', { data: null });

class AuthService {
  login(user) {
    return axios
      .post(`/api/login`, {
        email: user.email,
        password: user.password,
      })
      .then((response) => {
        if (response.data.token) {
          local.value.data = response.data;
        }
        return response.data;
      })
      .catch((error) => {
        console.log(error);
        console.log(error.message);
        return response;
      });
  }

  register(user) {
    return axios.post(`/api/register`, {
      name: user.name,
      email: user.email,
      password: user.password,
    });
  }

  logout() {
    return (local.value = { data: null });
  }
}
export default new AuthService();

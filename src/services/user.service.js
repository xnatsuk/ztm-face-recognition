import axios from 'axios';

import { local } from '@/services/auth.service';
import authHeader from './auth.header';

const API_URL = import.meta.env.VITE_API_URL;
const config = { headers: authHeader() };

class UserService {
  incrementUserEntries() {
    const email = local.value.data.email;
    return axios.put(`/api/score`, { email }, config);
  }

  getUserScore() {
    return axios.get(`/api/score`, config);
  }
}
export default new UserService();

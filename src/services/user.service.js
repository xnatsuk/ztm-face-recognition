import axios from 'axios';

import { local } from '@/services/local.service';
import authHeader from './auth.header';

const API_URL = import.meta.env.VITE_API_URL;
const id = local.value.data.id;

axios.defaults.headers.common['Authorization'] = authHeader();

class UserService {
  async incrementUserEntries() {
    return await axios.put(`${API_URL}/api/score/${id}`);
  }

  async getUserScore() {
    return await axios.get(`${API_URL}/api/score/${id}`).then((response) => {
      local.value.data.entries = response.data;
    });
  }
}
export default new UserService();

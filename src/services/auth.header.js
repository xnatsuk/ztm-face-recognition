import { local } from '@/services/auth.service';

export default function authHeader() {
  const user = local.value.data;

  if (user && user.token) {
    return { Authorization: `Bearer ${user.token}` };
  }
  return {};
}

import { local } from '@/services/local.service';

export default function authHeader() {
  const user = local.value.data;

  if (user && user.token) {
    return `Bearer ${user.token}`;
  }
  return {};
}

import { useLocalStorage } from '@vueuse/core';

export const local = useLocalStorage('user', { data: 0 });
export const theme = useLocalStorage('theme', 'dark');

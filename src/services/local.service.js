import { useLocalStorage } from '@vueuse/core';

export const local = useLocalStorage('user', { data: null });
export const theme = useLocalStorage('theme', 'dark');

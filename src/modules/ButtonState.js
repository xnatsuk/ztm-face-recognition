import { computed } from 'vue';

export function submitButtonState(input, errors) {
   const isButtonDisabled = computed(() => {
     let disabled = true;
     for (let key in input) {
       if (input[key] || errors[key]) {
         disabled = true;
       } else disabled = false;
     }
     return disabled;
   });
 
   return { isButtonDisabled };
 }
 
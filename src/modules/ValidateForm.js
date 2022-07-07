import { reactive, computed } from 'vue';
import { useValidators } from '../modules/Validators';

const errors = reactive({});

export function useFormValidation() {
  const { isEmpty, isEmail, minLength } = useValidators();
  const validateInputField = (inputName, inputValue) => {
    if ((inputName = 'email')) {
      errors[inputName] = !inputValue ? isEmpty(inputName, inputValue) : isEmail(inputName, inputValue);
    } else {
      errors[inputName] = !inputValue ? isEmpty(inputName, inputValue) : minLength(inputName, inputValue, 4);
    }
  };
  return { errors, validateInputField };
}
<script>
import { reactive } from 'vue';

const errors = reactive({});

export default function useValidators() {
   const isEmpty = (inputName, inputValue) => {
      return !inputValue ? 'The ' + inputName + ' is required' : '';
   }
   const minLength = (inputName, inputValue, min) => {
      return inputValue.length < min ? `The ${inputName} field must be atleast ${min} characters long` : '';
   }
   const isEmail = (inputName, inputValue) => {
      let re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return !re.test(inputValue) ? 'The input is not a valid ' + inputName + ' address' : '';
   }
   return { isEmpty, minLength, isEmail }
}

export default function useFormValidation() {
   const { isEmpty, minLength } = useValidators();
   const validateInputField = (inputName, inputValue) => {
      if (inputName = 'email') {
         errors[inputName] = !inputValue ? isEmpty(inputName, inputValue) : isEmail(inputName, inputValue);
      } else {
         errors[inputName] = !inputValue ? isEmpty(inputName, inputValue) : minLength(inputName, inputValue, 4);
      }
   }
   return { errors, validateInputField }
}

</script>
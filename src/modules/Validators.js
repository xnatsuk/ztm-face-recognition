export function useValidators() {
   const isEmpty = (inputName, inputValue) => {
     return !inputValue ? 'The ' + inputName + ' is required' : '';
   };
   const minLength = (inputName, inputValue, min) => {
     return inputValue.length < min ? `The ${inputName} field must be atleast ${min} characters long` : '';
   };
   const isEmail = (inputName, inputValue) => {
     let re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
     return !re.test(inputValue) ? 'The input is not a valid ' + inputName + ' address' : '';
   };
   return { isEmpty, minLength, isEmail };
 } 
import {useState} from 'react';

type ValidatorFn = (text: string) => string;

const useUserForm = (initialValue: string, validator: ValidatorFn) => {
  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState<string>('');

  const onChange = (text: string) => {
    setValue(text);
  };

  const validate = () => {
    const validationError = validator(value);
    setError(validationError);
    return validationError === '';
  };

  return {
    value,
    error,
    onChange,
    validate,
  };
};

export default useUserForm;

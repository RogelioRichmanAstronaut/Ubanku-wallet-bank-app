import React from 'react';
import {FormControl, Input, WarningOutlineIcon} from 'native-base';

interface UPhoneInputProps {
  label: string;
  phoneNumber: {
    phone_code: string;
    cellphone: string;
  };
  setPhoneNumber: (phoneNumber: {
    phone_code: string;
    cellphone: string;
  }) => void;
  error?: string;
}

const UPhoneInput: React.FC<UPhoneInputProps> = ({
  label,
  phoneNumber,
  setPhoneNumber,
  error,
}) => {
  const handlePhoneChange = (text: string) => {
    const cleaned = ('' + text).replace(/\D/g, ''); // Removes everything that is not a number
    setPhoneNumber({...phoneNumber, cellphone: cleaned});
  };

  return (
    <FormControl isInvalid={error !== ''}>
      <FormControl.Label color={'text.500'}>{label}</FormControl.Label>
      <Input
        keyboardType="phone-pad"
        placeholder="Enter your phone number"
        value={phoneNumber.cellphone}
        onChangeText={handlePhoneChange}
      />
      {error && (
        <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
          {error}
        </FormControl.ErrorMessage>
      )}
    </FormControl>
  );
};

export default UPhoneInput;

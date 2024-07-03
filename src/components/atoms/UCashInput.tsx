import React from 'react';
import {Input, InputGroup, InputLeftAddon, Text} from 'native-base';

interface CashInputProps {
  sign?: string;
  value: number;
  setValue: (value: number) => void;
}

const UCashInput: React.FC<CashInputProps> = ({sign = '', value, setValue}) => {
  const handleChange = (text: string) => {
    const cleaned = text.replace(/\D/g, ''); // Removes everything that is not a number
    const numValue = cleaned === '' ? 0 : parseInt(cleaned);
    setValue(numValue);
  };

  const formattedValue =
    value === 0 ? sign + '0' : sign + value.toLocaleString('en-US');

  return (
    <InputGroup>
      <Input
        width={'100%'}
        variant={'unstyled'}
        fontWeight={700}
        fontSize={30}
        color="ubanku.2"
        keyboardType="numeric"
        value={formattedValue}
        onChangeText={handleChange}
      />
    </InputGroup>
  );
};

export default UCashInput;

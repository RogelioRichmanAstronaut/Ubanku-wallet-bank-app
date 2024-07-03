import React from 'react';
import {View, Text, Input, Select, Button, CheckIcon} from 'native-base';
import useUserForm from '../../../../hooks/Auth/useUserForm';

type CreditDebitCardFormProps = {
  onSubmit: (data: {
    cardNumber: string;
    cardholderName: string;
    expirationDate: string;
    cvv: string;
  }) => void;
};

const UCreditDebitCardForm: React.FC<CreditDebitCardFormProps> = ({
  onSubmit,
}) => {
  const cardNumberInput = useUserForm('', value => {
    if (value.length !== 16)
      return 'El número de tarjeta debe tener 16 dígitos';
    return '';
  });
  const cardholderNameInput = useUserForm('', value => {
    if (value.length === 0) return 'El nombre del titular es obligatorio';
    return '';
  });
  const expirationDateInput = useUserForm('', value => {
    if (!/^\d{2}\/\d{2}$/.test(value))
      return 'La fecha de vencimiento debe tener el formato MM/AA';
    return '';
  });
  const cvvInput = useUserForm('', value => {
    if (value.length !== 3) return 'El CVV debe tener 3 dígitos';
    return '';
  });

  const handleSubmit = () => {
    if (
      cardNumberInput.validate() &&
      cardholderNameInput.validate() &&
      expirationDateInput.validate() &&
      cvvInput.validate()
    ) {
      onSubmit({
        cardNumber: cardNumberInput.value,
        cardholderName: cardholderNameInput.value,
        expirationDate: expirationDateInput.value,
        cvv: cvvInput.value,
      });
    }
  };

  return (
    <View>
      <Input
        placeholder="Número de tarjeta"
        keyboardType="numeric"
        value={cardNumberInput.value}
        onChangeText={cardNumberInput.onChange}
      />
      {cardNumberInput.error !== '' && <Text>{cardNumberInput.error}</Text>}
      <Input
        placeholder="Nombre del titular"
        value={cardholderNameInput.value}
        onChangeText={cardholderNameInput.onChange}
      />
      {cardholderNameInput.error !== '' && (
        <Text>{cardholderNameInput.error}</Text>
      )}
      <Input
        placeholder="Fecha de vencimiento (MM/AA)"
        value={expirationDateInput.value}
        onChangeText={expirationDateInput.onChange}
      />
      {expirationDateInput.error !== '' && (
        <Text>{expirationDateInput.error}</Text>
      )}
      <Input
        placeholder="CVV"
        keyboardType="numeric"
        value={cvvInput.value}
        onChangeText={cvvInput.onChange}
      />
      {cvvInput.error !== '' && <Text>{cvvInput.error}</Text>}
      <Button onPress={handleSubmit}>Enviar</Button>
    </View>
  );
};
export default UCreditDebitCardForm;

import React from 'react';
import {View, Text, Input, Select, Button, CheckIcon} from 'native-base';
import useUserForm from '../../../../hooks/Auth/useUserForm';

type DaviplataProps = {
  onSubmit: (data: {
    cellphone: string;
    firstName: string;
    lastName: string;
    documentType: string;
    documentNumber: string;
  }) => void;
};

const UDaviplataForm: React.FC<DaviplataProps> = ({onSubmit}) => {
  const cellphoneInput = useUserForm('', value => {
    if (value.length !== 10)
      return 'El número de celular debe tener 10 dígitos';
    return '';
  });
  const firstNameInput = useUserForm('', value => {
    if (value.length === 0) return 'El nombre es obligatorio';
    return '';
  });
  const lastNameInput = useUserForm('', value => {
    if (value.length === 0) return 'El apellido es obligatorio';
    return '';
  });
  const documentTypeInput = useUserForm('cedula', () => '');
  const documentNumberInput = useUserForm('', value => {
    if (value.length === 0) return 'El número de documento es obligatorio';
    return '';
  });

  const handleSubmit = () => {
    if (
      cellphoneInput.validate() &&
      firstNameInput.validate() &&
      lastNameInput.validate() &&
      documentNumberInput.validate()
    ) {
      onSubmit({
        cellphone: cellphoneInput.value,
        firstName: firstNameInput.value,
        lastName: lastNameInput.value,
        documentType: documentTypeInput.value,
        documentNumber: documentNumberInput.value,
      });
    }
  };

  return (
    <View>
      <Input
        placeholder="Número de celular"
        keyboardType="phone-pad"
        value={cellphoneInput.value}
        onChangeText={cellphoneInput.onChange}
      />
      {cellphoneInput.error !== '' && <Text>{cellphoneInput.error}</Text>}
      <Input
        placeholder="Nombre"
        value={firstNameInput.value}
        onChangeText={firstNameInput.onChange}
      />
      {firstNameInput.error !== '' && <Text>{firstNameInput.error}</Text>}
      <Input
        placeholder="Apellido"
        value={lastNameInput.value}
        onChangeText={lastNameInput.onChange}
      />
      {lastNameInput.error !== '' && <Text>{lastNameInput.error}</Text>}
      <Select
        selectedValue={documentTypeInput.value}
        onValueChange={itemValue => documentTypeInput.onChange(itemValue)}
        _selectedItem={{
          bg: 'cyan.600',
          endIcon: <CheckIcon size={4} />,
        }}>
        <Select.Item label="Cédula" value="cedula" />
        <Select.Item label="NIT" value="nit" />
        <Select.Item label="Cédula de Extranjería" value="cedulaExtranjeria" />
      </Select>
      <Input
        placeholder="Número de documento"
        keyboardType="numeric"
        value={documentNumberInput.value}
        onChangeText={documentNumberInput.onChange}
      />
      {documentNumberInput.error !== '' && (
        <Text>{documentNumberInput.error}</Text>
      )}
      <Button onPress={handleSubmit}>Enviar</Button>
    </View>
  );
};

export default UDaviplataForm;

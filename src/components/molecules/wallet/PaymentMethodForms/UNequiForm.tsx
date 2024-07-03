import React, {forwardRef, useImperativeHandle, useRef} from 'react';
import {
  View,
  Text,
  Input,
  Select,
  Button,
  CheckIcon,
  VStack,
  FormControl,
  WarningOutlineIcon,
  Box,
  HStack,
} from 'native-base';
import useUserForm from '../../../../hooks/Auth/useUserForm';
import UText from '../../../atoms/UText';
import {TextInput} from 'react-native/types';
import UBasicCard from '../../../atoms/UBasicCard';

type NequiFormProps = {
  onSubmit: (data: {
    cellphone: string;
    firstName: string;
    lastName: string;
    documentType: string;
    documentNumber: string;
  }) => void;
  showSubmitButton?: boolean;
};

export type NequiFormHandles = {submit: () => void};

const UNequiForm = forwardRef<NequiFormHandles, NequiFormProps>(
  ({onSubmit, showSubmitButton}, ref) => {
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

    const firstNameInputRef = useRef<TextInput>(null);
    const lastNameInputRef = useRef<TextInput>(null);
    const documentNumberInputRef = useRef<TextInput>(null);
    const documentTypeInputRef = useRef<TextInput>(null);

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

    useImperativeHandle(ref, () => ({
      submit: handleSubmit,
    }));

    return (
      <UBasicCard>
        <FormControl isInvalid={cellphoneInput.error !== ''}>
          <FormControl.Label>
            <UText size={12} weight={500} color="text.600">
              Número de celular
            </UText>
          </FormControl.Label>
          <Input
            placeholder="3132329145"
            keyboardType="phone-pad"
            value={cellphoneInput.value}
            onChangeText={cellphoneInput.onChange}
            returnKeyType="next"
            onSubmitEditing={() => firstNameInputRef.current?.focus()}
          />
          <FormControl.ErrorMessage>
            {cellphoneInput.error}
          </FormControl.ErrorMessage>
        </FormControl>
        <HStack space={2}>
          <FormControl isInvalid={firstNameInput.error !== ''} flex={0.5}>
            <FormControl.Label>
              <UText size={12} weight={500} color="text.600">
                Nombre
              </UText>
            </FormControl.Label>
            <Input
              placeholder="Juan"
              value={firstNameInput.value}
              onChangeText={firstNameInput.onChange}
              ref={firstNameInputRef}
              returnKeyType="next"
              onSubmitEditing={() => lastNameInputRef.current?.focus()}
            />
            <FormControl.ErrorMessage>
              {firstNameInput.error}
            </FormControl.ErrorMessage>
          </FormControl>
          <FormControl isInvalid={lastNameInput.error !== ''} flex={0.5}>
            <FormControl.Label>
              <UText size={12} weight={500} color="text.600">
                Apellido
              </UText>
            </FormControl.Label>
            <Input
              placeholder="García"
              value={lastNameInput.value}
              onChangeText={lastNameInput.onChange}
              ref={lastNameInputRef}
              returnKeyType="next"
              onSubmitEditing={() => documentTypeInputRef.current?.focus()}
            />
            <FormControl.ErrorMessage>
              {lastNameInput.error}
            </FormControl.ErrorMessage>
          </FormControl>
        </HStack>

        <FormControl isInvalid={documentTypeInput.error !== ''}>
          <FormControl.Label>
            <UText size={12} weight={500} color="text.600">
              Tipo de documento
            </UText>
          </FormControl.Label>

          <Select
            selectedValue={documentTypeInput.value}
            onValueChange={itemValue => documentTypeInput.onChange(itemValue)}
            _selectedItem={{
              bg: 'cyan.600',
              endIcon: <CheckIcon size={4} />,
            }}>
            <Select.Item label="Cédula" value="cedula" />
            <Select.Item label="NIT" value="nit" />
            <Select.Item
              label="Cédula de Extranjería"
              value="cedulaExtranjeria"
            />
          </Select>
          <FormControl.ErrorMessage>
            {documentTypeInput.error}
          </FormControl.ErrorMessage>
        </FormControl>

        <FormControl isInvalid={documentNumberInput.error !== ''}>
          <FormControl.Label>
            <UText size={12} weight={500} color="text.600">
              Número de documento
            </UText>
          </FormControl.Label>
          <Input
            placeholder="Número de documento"
            keyboardType="numeric"
            value={documentNumberInput.value}
            onChangeText={documentNumberInput.onChange}
            ref={documentNumberInputRef}
          />

          <FormControl.ErrorMessage>
            {documentNumberInput.error}
          </FormControl.ErrorMessage>
        </FormControl>
        {showSubmitButton && <Button onPress={handleSubmit}>Enviar</Button>}
      </UBasicCard>
    );
  },
);

export default UNequiForm;

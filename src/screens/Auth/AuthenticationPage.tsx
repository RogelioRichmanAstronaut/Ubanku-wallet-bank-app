import React, {useState} from 'react';
import {Box, Input, FormControl, WarningOutlineIcon, Text} from 'native-base';
import {useNavigation} from '@react-navigation/native';
import {useAuth} from '../../contexts/AuthContext';
import UTitleSubtitleWrapper from '../../components/molecules/UTitleSubtitleWrapper';
import iRegisterPhoneData from '../../interfaces/Auth/iRegisterPhoneData';

const AuthenticationPage = () => {
  const navigation = useNavigation();
  const [phoneNumber, setPhoneNumber] = useState<iRegisterPhoneData>({
    phone_code: '57',
    cellphone: '',
  });
  const [phoneError, setPhoneError] = useState<string>('');
  const {isRegistered} = useAuth();

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleClosePress = () => {
    navigation.navigate('HelloScreen' as never);
  };

  const handleLogin = async () => {
    if (isValidPhone(phoneNumber.cellphone)) {
      setPhoneError(''); // Clear error message

      const userInfo = await isRegistered(phoneNumber);
      let newUser: boolean = true;
      if (userInfo.exist_phone) {
        if (userInfo.trusted_device) {
          // Si el dispositivo es de confianza, navegar a EnterCustomPin
          navigation.navigate(
            'EnterCustomPin' as never,
            {phoneNumber} as never,
          );
        } else {
          // Si el usuario existe pero el dispositivo no es de confianza, navegar a VerificationMessage
          navigation.navigate(
            'VerificationMessage' as never,
            {phoneNumber, newUser: false} as never,
          );
        }
      } else if (!userInfo.exist_phone) {
        // Si el usuario no existe, navegar a VerificationMessage para registrarse
        navigation.navigate(
          'VerificationMessage' as never,
          {phoneNumber, newUser} as never,
        );
      }
    } else {
      setPhoneError('Número inválido'); // Set error message
    }
  };

  const isValidPhone = (phone: string) => {
    var re = /^[0-9]{9,}$/; // Acepta números de al menos 9 dígitos
    return re.test(phone);
  };

  const handlePhoneChange = (text: string) => {
    const cleaned = ('' + text).replace(/\D/g, ''); // Elimina todo lo que no sea un número
    setPhoneNumber({...phoneNumber, cellphone: cleaned});
  };
  return (
    <UTitleSubtitleWrapper
      onPressBackButton={handleBackPress}
      onPressCloseButton={handleClosePress}
      title="Ingresa o Regístrate"
      subtitle="Escribe tu número de celular para ingresar o registrarte a Ubanku"
      buttonTitle="Continuar"
      onPressButton={handleLogin}>
      <Box>
        <FormControl isInvalid={phoneError !== ''}>
          <FormControl.Label color={'text.500'}>
            Número de celular
          </FormControl.Label>
          <Input
            keyboardType="phone-pad"
            placeholder="Ingresa tu número de celular"
            value={phoneNumber.cellphone}
            onChangeText={handlePhoneChange}
          />
          <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
            {phoneError}
          </FormControl.ErrorMessage>
        </FormControl>
      </Box>
    </UTitleSubtitleWrapper>
  );
};

export default AuthenticationPage;
